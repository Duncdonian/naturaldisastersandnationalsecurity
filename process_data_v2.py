import pandas as pd
import numpy as np
import json
import os
import re

# Define the 6 regions
REGIONS = ["North America", "South America", "Europe", "Asia", "Africa", "Oceania/Pacific"]

def get_region(original_region, country_name=None):
    r = str(original_region).lower()
    if 'africa' in r: return "Africa"
    if 'asia' in r: return "Asia"
    if 'europe' in r: return "Europe"
    if 'north america' in r or 'northern america' in r: return "North America"
    if 'south america' in r or 'latin america' in r or 'caribbean' in r:
        if str(country_name).lower() == 'mexico': return "North America"
        return "South America"
    if 'pacific' in r or 'oceania' in r: return "Oceania/Pacific"
    
    c = str(country_name).lower()
    if 'usa' in c or 'united states' in c or 'canada' in c: return "North America"
    if 'brazil' in c or 'argentina' in c or 'chile' in c: return "South America"
    if 'australia' in c or 'new zealand' in c: return "Oceania/Pacific"
    return "Asia"

def clean_personnel(val):
    try:
        if pd.isna(val) or val is None: return None
        if isinstance(val, (int, float)): return float(val)
        s = str(val).replace(',', '').strip()
        nums = re.findall(r'\d+', s)
        if nums:
            return float(nums[0])
        return None
    except:
        return None

def group_hazard(h):
    h_lower = str(h).lower().strip()
    if 'flood' in h_lower: return 'Flood'
    if 'mass movement' in h_lower: return 'Mass Movement'
    return h

# Helper for JSON serialization
def convert_types(obj):
    if isinstance(obj, np.integer):
        return int(obj)
    if isinstance(obj, np.floating):
        if np.isnan(obj): return None
        return float(obj)
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    if isinstance(obj, dict):
        return {k: convert_types(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_types(i) for i in obj]
    return obj

# 1. Load Military Personnel Totals
print("Loading Military Totals...")
mil_totals_path = "Military Personnel Totals.xlsx"
df_check = pd.read_excel(mil_totals_path, sheet_name="Data", header=None, nrows=10)
header_row_idx = None
for idx, row in df_check.iterrows():
    if "Country Name" in row.values:
        header_row_idx = idx
        break

if header_row_idx is not None:
    df_mil = pd.read_excel(mil_totals_path, sheet_name="Data", header=header_row_idx)
    col_country = [c for c in df_mil.columns if "Country Name" in str(c)][0]
    col_iso = [c for c in df_mil.columns if "Country Code" in str(c)][0]
    col_2020 = [c for c in df_mil.columns if "2020" in str(c)][0]
    df_mil = df_mil[[col_country, col_iso, col_2020]]
    df_mil.columns = ['Country', 'ISO', 'TotalMilitary']
    df_mil['TotalMilitary'] = pd.to_numeric(df_mil['TotalMilitary'], errors='coerce')
    df_mil = df_mil.dropna(subset=['TotalMilitary'])
else:
    print("Could not find header row in Military Totals.")
    exit(1)

# 2. Load EMDAT Data
print("Loading EMDAT Data...")
emdat_path = "EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx"
df_emdat = pd.read_excel(emdat_path, sheet_name="Sheet1")
df_emdat['Disaster Type'] = df_emdat['Disaster Type'].apply(group_hazard)
df_emdat['CleanPersonnel'] = df_emdat['Personnel'].apply(clean_personnel)
df_emdat['AppRegion'] = df_emdat.apply(lambda row: get_region(row['Region'], row['Country']), axis=1)

country_all_stats = df_emdat.groupby('ISO').agg(
    sum_personnel=('CleanPersonnel', 'sum'),
    count_mobilizations=('Personnel', 'count')
).reset_index()

country_disaster_avgs = df_emdat.groupby(['ISO', 'Disaster Type'])['CleanPersonnel'].mean().reset_index()
regional_disaster_medians = df_emdat.groupby(['AppRegion', 'Disaster Type'])['CleanPersonnel'].median().reset_index()

# 3. Load Survey Data
print("Loading Survey Data...")
regional_security_avgs = {
    "Africa": 41.83,
    "Asia": 31.64,
    "Europe": 23.8,
    "North America": 38.36,
    "South America": 83.0,
    "Oceania/Pacific": 30.0
}
QUESTIONS = {
    "Q1": "International Terrorism",
    "Q2": "War (Peer-to-Peer)",
    "Q3": "Illegal Drugs",
    "Q4": "Resource Scarcities",
    "Q5": "Domestic Terrorism",
    "Q6": "Civil Unrest"
}

# 4. Load Per-Country Survey Sample
df_survey = pd.read_csv("responses_sample.csv")
q_map = {
    "In your opinion, how much of your country's military should be mobilized to defend against an international terrorist attack/threat?": "Q1",
    "In your opinion, how much of your country's military should be mobilized to participate in a war against a peer-to-peer threat or country with similar capabilities and technology?": "Q2",
    "In your opinion, how much of your country's military should be mobilized to defend against illegal drugs, drug trafficking, and drug distribution?": "Q3",
    "In your opinion, how much of your country's military should be mobilized to mitigate or assist in resource scarcities (e.g. large-scale water shortage, long-term power outages, food security)?": "Q4",
    "In your opinion, how much of your country's military should be mobilized to defend against an domestic terrorist attack/threat?": "Q5",
    "In your opinion, how much of your country's military should be mobilized to defend against civil unrest or domestic armed conflict?": "Q6"
}
df_survey = df_survey.rename(columns=q_map)
for q in ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']:
    df_survey[q] = pd.to_numeric(df_survey[q], errors='coerce')

country_survey = df_survey.groupby('Country')[['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']].mean().reset_index()

# 5. Assemble Final Data
print("Assembling Final JSON...")
final_countries = []
iso_to_region = df_emdat.groupby('ISO')['AppRegion'].first().to_dict()

for idx, row in df_mil.iterrows():
    iso = row['ISO']
    name = row['Country']
    total_mil = float(row['TotalMilitary'])
    region = iso_to_region.get(iso, get_region(None, name))
    
    c_all_stats = country_all_stats[country_all_stats['ISO'] == iso]
    sum_p = float(c_all_stats['sum_personnel'].iloc[0]) if not c_all_stats.empty else 0.0
    count_m = int(c_all_stats['count_mobilizations'].iloc[0]) if not c_all_stats.empty else 0
    
    c_hazards = country_disaster_avgs[country_disaster_avgs['ISO'] == iso]
    hazards_data = {}
    for h_idx, h_row in c_hazards.iterrows():
        hazards_data[h_row['Disaster Type']] = (float(h_row['CleanPersonnel']) / total_mil) * 100 if total_mil > 0 else 0
    
    c_survey = country_survey[country_survey['Country'] == name]
    if c_survey.empty:
        if name == 'United States of America' or name == 'United States': c_survey = country_survey[country_survey['Country'] == 'USA']
        elif name == 'USA': c_survey = country_survey[country_survey['Country'].isin(['United States of America', 'United States'])]

    survey_data = {}
    if not c_survey.empty:
        for q_id, q_label in QUESTIONS.items():
            val = c_survey.iloc[0][q_id]
            survey_data[q_label] = float(val) if not pd.isna(val) else regional_security_avgs.get(region, 30.0)
        has_real_survey = True
    else:
        for q_id, q_label in QUESTIONS.items():
            survey_data[q_label] = regional_security_avgs.get(region, 30.0)
        has_real_survey = False

    final_countries.append({
        "country": name,
        "iso": iso,
        "region": region,
        "total_military": total_mil,
        "sum_personnel": sum_p,
        "count_mobilizations": count_m,
        "hazards": hazards_data,
        "survey": survey_data,
        "has_real_survey": has_real_survey
    })

regional_hazards = {}
for reg in REGIONS:
    reg_isos = [iso for iso, r in iso_to_region.items() if r == reg]
    reg_med_mil = float(df_mil[df_mil['ISO'].isin(reg_isos)]['TotalMilitary'].median())
    reg_disasters = regional_disaster_medians[regional_disaster_medians['AppRegion'] == reg]
    h_meds = {}
    for r_idx, r_row in reg_disasters.iterrows():
        h_meds[r_row['Disaster Type']] = (float(r_row['CleanPersonnel']) / reg_med_mil) * 100 if reg_med_mil > 0 else 0
    regional_hazards[reg] = h_meds

# 6. Global Hazard Statistics
print("Calculating Global Hazard Stats...")
hazard_counts = df_emdat.groupby('Disaster Type').size().to_dict()

app_data = {
    "countries": final_countries,
    "regions": REGIONS,
    "hazard_types": sorted(df_emdat['Disaster Type'].unique().tolist()),
    "hazard_counts": hazard_counts,
    "survey_questions": list(QUESTIONS.values()),
    "regional_defaults": regional_security_avgs,
    "regional_hazards": regional_hazards
}

# Final conversion to ensure no numpy types remain
app_data = convert_types(app_data)

with open('data.js', 'w') as f:
    f.write("const APP_DATA = " + json.dumps(app_data, indent=4) + ";")

print("Done! data.js generated successfully.")
