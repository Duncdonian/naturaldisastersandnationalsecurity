import pandas as pd
import numpy as np

def get_region(row):
    r = str(row['Region']).lower()
    c = str(row['Country']).lower()
    if 'africa' in r or 'egypt' in c or 'ghana' in c or 'kenya' in c or 'nigeria' in c or 'south africa' in c or "ivory" in c or "togo" in c or "mali" in c or "ethiopia" in c or "uganda" in c: return "Africa"
    if 'asia' in r or 'china' in c or 'india' in c or 'japan' in c or 'korea' in c or 'vietnam' in c or 'thailand' in c or 'indonesia' in c or 'israel' in c or 'philippines' in c or "jordan" in c or "lebanon" in c or "iran" in c or "iraq" in c: return "Asia"
    if 'europe' in r or 'france' in c or 'germany' in c or 'italy' in c or 'spain' in c or 'uk' in c or 'united kingdom' in c or 'poland' in c or 'belgium' in c or 'sweden' in c or 'norway' in c or 'denmark' in c or "netherland" in c or "turkey" in c: return "Europe"
    if 'north america' in r or 'northern america' in r or 'usa' in c or 'united states' in c or 'canada' in c or 'mexico' in c or 'costa rica' in c: return "North America"
    if 'south america' in r or 'latin america' in r or 'caribbean' in r or 'brazil' in c or 'argentina' in c or 'chile' in c or 'colombia' in c or 'venezuela' in c or 'peru' in c or 'ecuador' in c or 'trinidad' in c or 'dominican' in c: return "South America"
    if 'oceania' in r or 'pacific' in r or 'australia' in c or 'new zealand' in c or 'fiji' in c: return "Oceania/Pacific"
    return "Asia"

def clean_personnel(val):
    try:
        if pd.isna(val) or val is None: return 0.0
        if isinstance(val, (int, float)): return float(val)
        import re
        s = str(val).replace(',', '').strip()
        nums = re.findall(r'\d+', s)
        return float(nums[0]) if nums else 0.0
    except: return 0.0

file_path = r"c:\Users\Dunca\OneDrive\Documents\UH\THESIS\Antigravity\APP Making\Final App Making\EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx"
df = pd.read_excel(file_path)

df['AppRegion'] = df.apply(get_region, axis=1)
df['CleanP'] = df['Personnel'].apply(clean_personnel)
df['CleanD'] = pd.to_numeric(df['Total Deaths'], errors='coerce').fillna(0)

regions = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania/Pacific"]
results = []

for reg in regions:
    rdf = df[df['AppRegion'] == reg].copy()
    
    p = rdf['CleanP'].sum()
    d = rdf['CleanD'].sum()
    ratio = p / d if d > 0 else 0
    
    results.append({
        "Region": reg,
        "Subgroup": "Total",
        "Personnel": int(p),
        "Deaths": int(d),
        "Ratio (P:D)": round(ratio, 2)
    })
    
    if reg == "Asia":
        rdf_xc = rdf[rdf['Country'] != 'China']
        p_xc = rdf_xc['CleanP'].sum()
        d_xc = rdf_xc['CleanD'].sum()
        results.append({
            "Region": "Asia",
            "Subgroup": "Ex-China",
            "Personnel": int(p_xc),
            "Deaths": int(d_xc),
            "Ratio (P:D)": round(p_xc/d_xc, 2) if d_xc > 0 else 0
        })

print(pd.DataFrame(results).to_string(index=False))
