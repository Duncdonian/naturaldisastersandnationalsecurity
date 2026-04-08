import pandas as pd
import numpy as np

def get_region(row):
    r = str(row['Region']).lower()
    c = str(row['Country']).lower()
    
    # Using the standardized 6-region framework from our dashboard
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
    return h.capitalize()

file_path = r"c:\Users\Dunca\OneDrive\Documents\UH\THESIS\Antigravity\APP Making\Final App Making\EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx"
df = pd.read_excel(file_path)

df['Hazard'] = df['Disaster Type'].apply(group_hazard)
df['AppRegion'] = df.apply(get_region, axis=1)

# Filter for 1970-1989 (1970s and 1980s)
df_target = df[(df['Start Year'] >= 1970) & (df['Start Year'] <= 1989)].copy()
df_sf = df_target[df_target['Hazard'].isin(['Storm', 'Flood'])]

# Group by Region
summary = df_sf.groupby('AppRegion').size().reset_index(name='Count')
summary = summary.sort_values(by='Count', ascending=False)

asia_val = summary[summary['AppRegion'] == 'Asia']['Count'].sum()
other_val = summary[summary['AppRegion'] != 'Asia']['Count'].sum()

print("--- STORMS & FLOODS FREQUENCY (1970-1989) ---")
print(summary.to_string(index=False))
print(f"\nAsia Total: {asia_val}")
print(f"Rest of World Total: {other_val}")
print(f"Asia Frequency Lead: {asia_val - other_val} more events than the rest of the world combined.")
