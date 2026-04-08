import pandas as pd
import numpy as np
import json
import re

REGIONS = ["Global", "North America", "South America", "Europe", "Asia", "Africa", "Oceania/Pacific"]
QUESTIONS_LMAP = {
    "In your opinion, how much of your country's military should be mobilized to defend against an international terrorist attack/threat?": "International Terrorism",
    "In your opinion, how much of your country's military should be mobilized to participate in a war against a peer-to-peer threat or country with similar capabilities and technology?": "War (Peer-to-Peer)",
    "In your opinion, how much of your country's military should be mobilized to defend against illegal drugs, drug trafficking, and drug distribution?": "Illegal Drugs",
    "In your opinion, how much of your country's military should be mobilized to mitigate or assist in resource scarcities (e.g. large-scale water shortage, long-term power outages, food security)?": "Resource Scarcities",
    "In your opinion, how much of your country's military should be mobilized to defend against an domestic terrorist attack/threat?": "Domestic Terrorism",
    "In your opinion, how much of your country's military should be mobilized to defend against civil unrest or domestic armed conflict?": "Civil Unrest"
}

def get_region(original_region, country_name=None):
    r = str(original_region).lower()
    c = str(country_name).lower() if country_name else ""
    
    if 'africa' in r or 'egypt' in c or 'ghana' in c or 'kenya' in c or 'nigeria' in c or 'south africa' in c or "ivory" in c or "togo" in c or "mali" in c or "ethiopia" in c or "uganda" in c: return "Africa"
    if 'asia' in r or 'china' in c or 'india' in c or 'japan' in c or 'korea' in c or 'vietnam' in c or 'thailand' in c or 'indonesia' in c or 'israel' in c or 'philippines' in c or "jordan" in c or "lebanon" in c or "iran" in c or "iraq" in c: return "Asia"
    if 'europe' in r or 'france' in c or 'germany' in c or 'italy' in c or 'spain' in c or 'uk' in c or 'united kingdom' in c or 'poland' in c or 'belgium' in c or 'sweden' in c or 'norway' in c or 'denmark' in c or "netherland" in c or "turkey" in c: return "Europe"
    if 'north america' in r or 'northern america' in r or 'usa' in c or 'united states' in c or 'canada' in c or 'mexico' in c or 'costa rica' in c: return "North America"
    if 'south america' in r or 'latin america' in r or 'caribbean' in r or 'brazil' in c or 'argentina' in c or 'chile' in c or 'colombia' in c or 'venezuela' in c or 'peru' in c or 'ecuador' in c or 'trinidad' in c or 'dominican' in c: return "South America"
    if 'oceania' in r or 'pacific' in r or 'australia' in c or 'new zealand' in c or 'fiji' in c: return "Oceania/Pacific"
    
    return "Asia" # Final fallback

def clean_personnel(val):
    try:
        if pd.isna(val) or val is None: return None
        if isinstance(val, (int, float)): return float(val)
        s = str(val).replace(',', '').strip()
        nums = re.findall(r'\d+', s)
        return float(nums[0]) if nums else None
    except: return None

def group_hazard(h):
    h = str(h).lower()
    if 'drought' in h: return 'Drought'
    if 'earthquake' in h: return 'Earthquake'
    if 'extreme temperature' in h: return 'Extreme Temperature'
    if 'flood' in h: return 'Flood'
    if 'mass movement' in h: return 'Mass Movement'
    if 'storm' in h: return 'Storm'
    if 'volcanic activity' in h: return 'Volcanic Activity'
    if 'wildfire' in h or 'fire' in h: return 'Wildfire'
    return h.strip()

def convert_types(obj):
    if isinstance(obj, np.integer): return int(obj)
    if isinstance(obj, np.floating): return None if np.isnan(obj) else float(obj)
    if isinstance(obj, np.ndarray): return obj.tolist()
    if isinstance(obj, dict): return {k: convert_types(v) for k, v in obj.items()}
    if isinstance(obj, list): return [convert_types(i) for i in obj]
    return obj

# 1. LOAD MILITARY TOTALS
df_mil = pd.read_excel("Military Personnel Totals.xlsx", sheet_name="Data", header=3)
col_2020 = [c for c in df_mil.columns if "2020" in str(c)][0]
df_mil = df_mil[['Country Name', 'Country Code', col_2020]]
df_mil.columns = ['Country', 'ISO', 'TotalMilitary']
df_mil['TotalMilitary'] = pd.to_numeric(df_mil['TotalMilitary'], errors='coerce')
df_mil = df_mil.dropna(subset=['TotalMilitary'])
df_mil = df_mil[df_mil['ISO'] != 'CRI'] # Filter Costa Rica

# 2. LOAD EMDAT
df_emdat = pd.read_excel("EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx")
df_emdat = df_emdat[df_emdat['ISO'] != 'CRI'] # Filter Costa Rica
df_emdat['Disaster Type'] = df_emdat['Disaster Type'].apply(group_hazard)
df_emdat['CleanPersonnel'] = df_emdat['Personnel'].apply(clean_personnel)
df_emdat['AppRegion'] = df_emdat.apply(lambda row: get_region(row['Region'], row['Country']), axis=1)

# Deduplicate 2008-CHN Winter Outliers (Quadruple counting in raw EMDAT season reports)
# We isolate the 729,000 entries for China 2008 across all hazards and keep only one.
mask_2008 = (df_emdat['Country'] == 'China') & (df_emdat['Start Year'] == 2008) & (df_emdat['CleanPersonnel'] == 729000.0)
df_2008 = df_emdat[mask_2008].copy()
df_rest = df_emdat[~mask_2008].copy()
if not df_2008.empty:
    df_emdat = pd.concat([df_rest, df_2008.iloc[[0]]], ignore_index=True)

# Define what constitutes a "Valid Mobilization" (Personnel count > 0 OR Status is "Confirmed")
df_emdat['IsMob'] = (df_emdat['CleanPersonnel'] > 0.0) | (df_emdat['Personnel'].astype(str).str.contains('Confirmed', case=False, na=False))

# Base stats missing from previous iteration
country_all_stats = df_emdat.groupby('ISO').agg(
    sum_personnel=('CleanPersonnel', 'sum'),
    count_mobilizations=('IsMob', 'sum')
).reset_index()

hazard_counts = df_emdat[df_emdat['IsMob']].groupby('Disaster Type').size().to_dict()

# Merge for pers
df_emdat = df_emdat.merge(df_mil[['ISO', 'TotalMilitary']], on='ISO', how='left')
df_emdat['Perc'] = (df_emdat['CleanPersonnel'] / df_emdat['TotalMilitary']) * 100

country_haz = df_emdat.groupby(['ISO', 'Disaster Type'])['Perc'].mean().reset_index()
region_haz = df_emdat.groupby(['AppRegion', 'Disaster Type'])['Perc'].median().reset_index()
all_haz_types = sorted(df_emdat['Disaster Type'].unique())

reg_haz_map = {}
for reg in REGIONS:
    reg_haz_map[reg] = {h: region_haz[(region_haz['AppRegion']==reg) & (region_haz['Disaster Type']==h)]['Perc'].values[0] if not region_haz[(region_haz['AppRegion']==reg) & (region_haz['Disaster Type']==h)].empty else 0.5 for h in all_haz_types}

# 3. LOAD REGIONAL SECURITY CONSTANTS
xl_dep = pd.ExcelFile("Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx")
reg_sur_benchmark = {reg: {} for reg in REGIONS}
for i in range(1, 7):
    sname = f"Q{i}"
    sdf = pd.read_excel(xl_dep, sheet_name=sname)
    label = QUESTIONS_LMAP[list(QUESTIONS_LMAP.keys())[i-1]]
    for idx, row in sdf.iterrows():
        l_str = str(row.iloc[0])
        if "All Countries" in l_str:
            reg_sur_benchmark["Global"][label] = float(row.iloc[1])
        for reg in REGIONS:
            if reg == "Global": continue
            match_str = "Pacific" if reg == "Oceania/Pacific" else reg
            if match_str in l_str:
                reg_sur_benchmark[reg][label] = float(row.iloc[1])

# 4. LOAD INDIVIDUAL SURVEY
df_survey = pd.read_excel("Survey of Military Mobilization - National Security and Natural Disasters.xlsx")
if "Respondent ID" in df_survey.columns:
    df_survey = df_survey.dropna(subset=["Respondent ID"])
df_survey = df_survey.rename(columns=QUESTIONS_LMAP)
target_country_col = "What country were you considering or representing while taking this survey?"
col_c = target_country_col if target_country_col in df_survey.columns else df_survey.columns[21]
df_survey['CountryFixed'] = df_survey[col_c].fillna("Unknown")
df_survey['AppRegion'] = df_survey['CountryFixed'].apply(lambda x: get_region("None", x))

for q in QUESTIONS_LMAP.values():
    df_survey[q] = pd.to_numeric(df_survey[q], errors='coerce')
country_sur_actual = df_survey.groupby('CountryFixed')[list(QUESTIONS_LMAP.values())].mean().reset_index()

# 5. ASSEMBLE DATA
final_countries = []
iso_to_region = df_emdat.groupby('ISO')['AppRegion'].first().to_dict()

for _, row in df_mil.iterrows():
    iso = row['ISO']
    name = row['Country']
    total_mil = float(row['TotalMilitary'])
    region = iso_to_region.get(iso, get_region(None, name))
    
    c_all_stats = country_all_stats[country_all_stats['ISO'] == iso]
    sum_p = float(c_all_stats['sum_personnel'].iloc[0]) if not c_all_stats.empty else 0.0
    count_m = int(c_all_stats['count_mobilizations'].iloc[0]) if not c_all_stats.empty else 0
    
    h_data = {}
    c_h = country_haz[country_haz['ISO'] == iso]
    for h in all_haz_types:
        if not c_h[c_h['Disaster Type'] == h].empty:
            val = c_h[c_h['Disaster Type'] == h]['Perc'].values[0]
            if not np.isnan(val) and float(val) > 0.0:
                h_data[h] = float(val)

    s_data = {}
    c_s = country_sur_actual[country_sur_actual['CountryFixed'] == name]
    if c_s.empty:
        if name == 'United States of America' or name == 'United States': c_s = country_sur_actual[country_sur_actual['CountryFixed'] == 'USA']
    has_real = not c_s.empty
    for q_label in QUESTIONS_LMAP.values():
        val = c_s[q_label].values[0] if has_real else reg_sur_benchmark[region].get(q_label, 30.0)
        s_data[q_label] = float(val) if not pd.isna(val) else reg_sur_benchmark[region].get(q_label, 30.0)

    final_countries.append({
        "country": name, "iso": iso, "region": region,
        "total_military": total_mil, "sum_personnel": sum_p, "count_mobilizations": count_m,
        "hazards": h_data, "survey": s_data, "has_real_survey": has_real
    })

REG_MIL_MEDIAN = {
    "Africa": 19000.0,
    "Asia": 122500.0,
    "Europe": 25000.0,
    "North America": 23000.0,
    "South America": 87000.0,
    "Oceania/Pacific": 7000.0
}
reg_clean_pers = df_emdat[df_emdat['CleanPersonnel'] > 0.0].groupby(['AppRegion', 'Disaster Type'])['CleanPersonnel'].median().reset_index()
global_clean_pers = df_emdat[df_emdat['CleanPersonnel'] > 0.0].groupby('Disaster Type')['CleanPersonnel'].median().reset_index()
global_avg_clean_pers = df_emdat[df_emdat['CleanPersonnel'] > 0.0].groupby('Disaster Type')['CleanPersonnel'].mean().reset_index()

# Pre-calculate ranges by region
reg_haz_bounds = df_emdat[df_emdat['CleanPersonnel'] > 0.0].groupby(['AppRegion', 'Disaster Type'])['Perc'].agg(['min', 'max']).reset_index()
reg_sur_bounds = df_survey.groupby(['AppRegion'])[list(QUESTIONS_LMAP.values())].agg(['min', 'max']).transpose().reset_index()

for reg in REGIONS:
    h_data, h_min, h_max = {}, {}, {}
    s_data, s_min, s_max = {}, {}, {}
    if reg == "Global":
        for h in all_haz_types:
            val_df = global_clean_pers[global_clean_pers['Disaster Type'] == h]
            if not val_df.empty:
                h_val = float(val_df['CleanPersonnel'].values[0])
                if not np.isnan(h_val) and h_val > 0.0:
                    h_data[h] = (h_val / 37000.0) * 100.0
                    h_min[h] = float(df_emdat[(df_emdat['CleanPersonnel'] > 0.0) & (df_emdat['Disaster Type'] == h)]['Perc'].min())
                    h_max[h] = float(df_emdat[(df_emdat['CleanPersonnel'] > 0.0) & (df_emdat['Disaster Type'] == h)]['Perc'].max())
    else:
        for h in all_haz_types:
            val_df = reg_clean_pers[(reg_clean_pers['AppRegion'] == reg) & (reg_clean_pers['Disaster Type'] == h)]
            if not val_df.empty:
                h_val = float(val_df['CleanPersonnel'].values[0])
                if not np.isnan(h_val): h_data[h] = (h_val / REG_MIL_MEDIAN.get(reg, 37000.0)) * 100.0
            
            if h not in h_data: h_data[h] = 0.5 # Default benchmark if no median
                    
            b_df = reg_haz_bounds[(reg_haz_bounds['AppRegion'] == reg) & (reg_haz_bounds['Disaster Type'] == h)]
            if not b_df.empty:
                h_min[h] = float(b_df['min'].values[0])
                h_max[h] = float(b_df['max'].values[0])
            else:
                h_min[h] = h_data[h] * 0.5
                h_max[h] = h_data[h] * 1.5
                
    for q_label in QUESTIONS_LMAP.values():
        s_data[q_label] = float(reg_sur_benchmark[reg].get(q_label, 30.0))
        # Survey min/max from actual countries in this region
        if reg != "Global":
            try:
                s_min[q_label] = float(df_survey[df_survey['AppRegion'] == reg][q_label].min())
                s_max[q_label] = float(df_survey[df_survey['AppRegion'] == reg][q_label].max())
            except: pass
        else:
            try:
                s_min[q_label] = float(df_survey[q_label].min())
                s_max[q_label] = float(df_survey[q_label].max())
            except: pass
        
    # Calculate actual totals for the region for the Explorer
    reg_sum_pers = float(df_emdat[(df_emdat['AppRegion'] == reg) & (df_emdat['CleanPersonnel'] > 0.0)]['CleanPersonnel'].sum())
    reg_count_mob = int(df_emdat[(df_emdat['AppRegion'] == reg) & (df_emdat['CleanPersonnel'] > 0.0)].shape[0])

    final_countries.append({
        "country": "Global (Based on Median)" if reg == "Global" else reg,
        "iso": f"REG_{reg.replace('/', '')}",
        "region": reg,
        "total_military": 37000.0 if reg == "Global" else REG_MIL_MEDIAN.get(reg, 37000.0),
        "sum_personnel": reg_sum_pers if reg != "Global" else float(df_emdat[df_emdat['CleanPersonnel'] > 0.0]['CleanPersonnel'].sum()), 
        "count_mobilizations": reg_count_mob if reg != "Global" else int(df_emdat[df_emdat['CleanPersonnel'] > 0.0].shape[0]),
        "hazards": h_data,
        "survey": s_data,
        "hazards_min": h_min, "hazards_max": h_max,
        "survey_min": s_min, "survey_max": s_max,
        "has_real_survey": True,
        "is_region_benchmark": True
    })

# Manually add Global 2 (Average Mean) 
h_data_g2, h_min_g2, h_max_g2 = {}, {}, {}
for h in all_haz_types:
    val_df = global_avg_clean_pers[global_avg_clean_pers['Disaster Type'] == h]
    if not val_df.empty:
        h_val = float(val_df['CleanPersonnel'].values[0])
        if not np.isnan(h_val) and h_val > 0.0:
            h_data_g2[h] = (h_val / 165000.0) * 100.0
            h_min_g2[h] = float(df_emdat[(df_emdat['CleanPersonnel'] > 0.0) & (df_emdat['Disaster Type'] == h)]['Perc'].min())
            h_max_g2[h] = float(df_emdat[(df_emdat['CleanPersonnel'] > 0.0) & (df_emdat['Disaster Type'] == h)]['Perc'].max())

final_countries.append({
    "country": "Global (Based on Averages)",
    "iso": "REG_Global2",
    "region": "Global",
    "total_military": 165000.0,
    "sum_personnel": float(df_emdat[df_emdat['CleanPersonnel'] > 0.0]['CleanPersonnel'].sum()),
    "count_mobilizations": int(df_emdat[df_emdat['CleanPersonnel'] > 0.0].shape[0]),
    "hazards": h_data_g2,
    "survey": reg_sur_benchmark["Global"],
    "hazards_min": h_min_g2, "hazards_max": h_max_g2,
    "survey_min": s_min, "survey_max": s_max,
    "has_real_survey": True,
    "is_region_benchmark": True
})

# Global Hazard Totals for Summary Charts
haz_totals = df_emdat[df_emdat['IsMob']].groupby('Disaster Type')['CleanPersonnel'].sum().to_dict()
haz_totals_no_china = df_emdat[df_emdat['IsMob'] & (df_emdat['Country'] != 'China')].groupby('Disaster Type')['CleanPersonnel'].sum().to_dict()
haz_deaths = df_emdat.groupby('Disaster Type')['Total Deaths'].sum().fillna(0).to_dict()

out_obj = {
    "regions": REGIONS,
    "hazard_types": all_haz_types,
    "hazard_counts": convert_types(hazard_counts),
    "survey_questions": list(QUESTIONS_LMAP.values()),
    "countries": final_countries,
    "hazard_totals": haz_totals,
    "hazard_totals_no_china": haz_totals_no_china,
    "hazard_deaths": haz_deaths
}
out_obj = convert_types(out_obj)

with open("data.js", "w") as f:
    f.write("const APP_DATA = " + json.dumps(out_obj, indent=4) + ";")
print("Data processing version 10.14 COMPLETE. Restored missing JS UI baseline variables.")
