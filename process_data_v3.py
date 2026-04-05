import pandas as pd
import numpy as np
import json
import re

REGIONS = ["North America", "South America", "Europe", "Asia", "Africa", "Oceania/Pacific"]
QUESTIONS = {
    "Q1": "International Terrorism",
    "Q2": "War (Peer-to-Peer)",
    "Q3": "Illegal Drugs",
    "Q4": "Resource Scarcities",
    "Q5": "Domestic Terrorism",
    "Q6": "Civil Unrest"
}

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
        return float(nums[0]) if nums else None
    except: return None

def group_hazard(h):
    h_lower = str(h).lower().strip()
    if 'flood' in h_lower: return 'Flood'
    if 'mass movement' in h_lower: return 'Mass Movement'
    return h.strip()

# 1. LOAD MILITARY TOTALS
df_mil = pd.read_excel("Military Personnel Totals.xlsx", sheet_name="Data", header=3)
df_mil = df_mil[['Country Name', 'Country Code', 2020]]
df_mil.columns = ['Country', 'ISO', 'TotalMilitary']
df_mil['TotalMilitary'] = pd.to_numeric(df_mil['TotalMilitary'], errors='coerce')
df_mil = df_mil.dropna(subset=['TotalMilitary'])

# 2. LOAD EMDAT & COMPUTE REGIONAL HAZARD AVERAGES
df_emdat = pd.read_excel("EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx")
df_emdat['Disaster Type'] = df_emdat['Disaster Type'].apply(group_hazard)
df_emdat['CleanPersonnel'] = df_emdat['Personnel'].apply(clean_personnel)
df_emdat['AppRegion'] = df_emdat.apply(lambda row: get_region(row['Region'], row['Country']), axis=1)

# Join Mil to EMDAT for percentage calculation
df_emdat = df_emdat.merge(df_mil[['ISO', 'TotalMilitary']], on='ISO', how='left')
df_emdat['Perc'] = (df_emdat['CleanPersonnel'] / df_emdat['TotalMilitary']) * 100

# Country Avgs
country_haz = df_emdat.groupby(['ISO', 'Disaster Type'])['Perc'].mean().reset_index()
# Region Avgs
region_haz = df_emdat.groupby(['AppRegion', 'Disaster Type'])['Perc'].median().reset_index()
all_haz_types = sorted(df_emdat['Disaster Type'].unique())

reg_haz_map = {}
for reg in REGIONS:
    reg_haz_map[reg] = {h: region_haz[(region_haz['AppRegion']==reg) & (region_haz['Disaster Type']==h)]['Perc'].values[0] if not region_haz[(region_haz['AppRegion']==reg) & (region_haz['Disaster Type']==h)].empty else 0.5 for h in all_haz_types}

# 3. LOAD SURVEY & COMPUTE REGIONAL SECURITY MATRIX
# We extract from the sheet names Q1-Q6 directly
xl_survey = pd.ExcelFile("Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx")
reg_sur_map = {reg: {} for reg in REGIONS}
for q_id, q_label in QUESTIONS.items():
    sdf = pd.read_excel(xl_survey, sheet_name=q_id)
    # Col 0: Labels like "Africa (6)", Col 1: Percentage
    for idx, row in sdf.iterrows():
        label = str(row.iloc[0])
        for reg in REGIONS:
            if reg in label:
                reg_sur_map[reg][q_label] = float(row.iloc[1])

# Individual country survey (if available)
df_ind_survey = pd.read_csv("responses_sample.csv")
q_map = {
    "In your opinion, how much of your country's military should be mobilized to defend against an international terrorist attack/threat?": "International Terrorism",
    "In your opinion, how much of your country's military should be mobilized to participate in a war against a peer-to-peer threat or country with similar capabilities and technology?": "War (Peer-to-Peer)",
    "In your opinion, how much of your country's military should be mobilized to defend against illegal drugs, drug trafficking, and drug distribution?": "Illegal Drugs",
    "In your opinion, how much of your country's military should be mobilized to mitigate or assist in resource scarcities (e.g. large-scale water shortage, long-term power outages, food security)?": "Resource Scarcities",
    "In your opinion, how much of your country's military should be mobilized to defend against an domestic terrorist attack/threat?": "Domestic Terrorism",
    "In your opinion, how much of your country's military should be mobilized to defend against civil unrest or domestic armed conflict?": "Civil Unrest"
}
df_ind_survey = df_ind_survey.rename(columns=q_map)
country_ind_avg = df_ind_survey.groupby('Country')[list(q_map.values())].mean().reset_index()

# 4. ASSEMBLE DATA
final_countries = []
iso_to_region = df_emdat.groupby('ISO')['AppRegion'].first().to_dict()

for _, row in df_mil.iterrows():
    iso = row['ISO']
    name = row['Country']
    total_mil = float(row['TotalMilitary'])
    region = iso_to_region.get(iso, get_region(None, name))
    
    # Hazard Data: Real Country Value or Region Imputation
    h_data = {}
    c_h = country_haz[country_haz['ISO'] == iso]
    for h in all_haz_types:
        val = c_h[c_h['Disaster Type'] == h]['Perc'].values[0] if not c_h[c_h['Disaster Type'] == h].empty else reg_haz_map[region].get(h, 0)
        h_data[h] = float(val)

    # Survey Data: Real Country Value or Region Imputation
    s_data = {}
    c_s = country_ind_avg[country_ind_avg['Country'] == name]
    if c_s.empty and name == 'United States of America': c_s = country_ind_avg[country_ind_avg['Country'] == 'USA']
    
    has_real = not c_s.empty
    for label in QUESTIONS.values():
        val = c_s[label].values[0] if has_real else reg_sur_map[region].get(label, 30.0)
        s_data[label] = float(val)

    final_countries.append({
        "country": name, "iso": iso, "region": region,
        "total_military": total_mil, "hazards": h_data, "survey": s_data, "has_real_survey": has_real
    })

# Export
out_obj = {
    "regions": REGIONS,
    "hazard_types": all_haz_types,
    "survey_questions": list(QUESTIONS.values()),
    "countries": final_countries
}

with open("data.js", "w") as f:
    f.write("const APP_DATA = " + json.dumps(out_obj, indent=4) + ";")

print("Data processing complete. High-resolution data saved to data.js.")
