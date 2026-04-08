import pandas as pd
import numpy as np

def get_region(row):
    r = str(row['Region']).lower()
    c = str(row['Country']).lower()
    
    # Standard 6-region framework
    if 'africa' in r or 'egypt' in c or 'ghana' in c or 'kenya' in c or 'nigeria' in c or 'south africa' in c or "ivory" in c or "togo" in c or "mali" in c or "ethiopia" in c or "uganda" in c: return "Africa"
    if 'asia' in r or 'china' in c or 'india' in c or 'japan' in c or 'korea' in c or 'vietnam' in c or 'thailand' in c or 'indonesia' in c or 'israel' in c or 'philippines' in c or "jordan" in c or "lebanon" in c or "iran" in c or "iraq" in c: return "Asia"
    if 'europe' in r or 'france' in c or 'germany' in c or 'italy' in c or 'spain' in c or 'uk' in c or 'united kingdom' in c or 'poland' in c or 'belgium' in c or 'sweden' in c or 'norway' in c or 'denmark' in c or "netherland" in c or "turkey" in c: return "Europe"
    if 'north america' in r or 'northern america' in r or 'usa' in c or 'united states' in c or 'canada' in c or 'mexico' in c or 'costa rica' in c: return "North America"
    if 'south america' in r or 'latin america' in r or 'caribbean' in r or 'brazil' in c or 'argentina' in c or 'chile' in c or 'colombia' in c or 'venezuela' in c or 'peru' in c or 'ecuador' in c or 'trinidad' in c or 'dominican' in c: return "South America"
    if 'oceania' in r or 'pacific' in r or 'australia' in c or 'new zealand' in c or 'fiji' in c: return "Oceania/Pacific"
    return "Asia"

def group_hazard(h):
    h = str(h).lower()
    if 'flood' in h: return 'Flood'
    if 'storm' in h: return 'Storm'
    if 'earthquake' in h: return 'Earthquake'
    if 'drought' in h: return 'Drought'
    if 'temperature' in h: return 'Extreme Temp'
    if 'wildfire' in h: return 'Wildfire'
    if 'landslide' in h: return 'Landslide'
    return h.capitalize()

def clean_p(v):
    try:
        if pd.isna(v): return 0.0
        s = str(v).replace(',', '').strip()
        import re
        nums = re.findall(r'\d+', s)
        return float(nums[0]) if nums else 0.0
    except: return 0.0

# LOAD DATA
df_emdat = pd.read_excel("temp_emdat.xlsx")
df_mil = pd.read_excel("temp_mil.xlsx", sheet_name="Data", header=3)
col_2020 = [c for c in df_mil.columns if "2020" in str(c)][0]
df_mil = df_mil[['Country Code', col_2020]].dropna()
df_mil.columns = ['ISO', 'TotalMilitary']

df = df_emdat.merge(df_mil, on='ISO', how='left')
df['Hazard'] = df['Disaster Type'].apply(group_hazard)
df['AppRegion'] = df.apply(get_region, axis=1)
df['CleanP'] = df['Personnel'].apply(clean_p)
df['IsMob'] = (df['CleanP'] > 0.0) | (df['Personnel'].astype(str).str.contains('Confirmed', case=False, na=False))

# Filter for active mobilizations where headcount > 0
df_active = df[(df['IsMob']) & (df['CleanP'] > 0) & (df['TotalMilitary'] > 0)].copy()
df_active['Perc'] = (df_active['CleanP'] / df_active['TotalMilitary']) * 100

# Group for medians
# Pivot Table: Hazards as rows, Regions as columns
medians = df_active.groupby(['Hazard', 'AppRegion'])['Perc'].median().unstack()

# Fill NaNs with 0
medians = medians.fillna(0)

print("--- REGIONAL MEDIAN % OF MILITARY MOBILIZED BY DISASTER ---")
print(medians.round(4).to_string())
