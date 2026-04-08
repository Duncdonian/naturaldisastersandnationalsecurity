import pandas as pd
import numpy as np

# 1. Load Cleaned EMDAT
# Note: This is the file we deduplicated for China 2008 in v10.87
df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')

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
    return h.strip().title()

df['Hazard'] = df['Disaster Type'].apply(group_hazard)

# Clean Personnel
import re
def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

df['CleanPersonnel'] = df['Personnel'].apply(cln)

# Deduplicate China 2008 as we did in V10.87
mask_2008 = (df['Country'] == 'China') & (df['Start Year'] == 2008) & (df['CleanPersonnel'] == 729000.0)
df_2008 = df[mask_2008].copy()
df_rest = df[~mask_2008].copy()
if not df_2008.empty:
    df = pd.concat([df_rest, df_2008.iloc[[0]]], ignore_index=True)

# 2. ANALYSIS
print("--- EMDAT NATURAL DISASTER ANALYSIS (1926-2025) ---")

# A. Volume vs. Frequency
haz_personnel = df.groupby('Hazard')['CleanPersonnel'].sum().sort_values(ascending=False)
haz_freq = df[df['CleanPersonnel'] > 0.0].groupby('Hazard').size().sort_values(ascending=False)

print("\nTOP DISASTERS BY TOTAL MILITARY PERSONNEL:")
print(haz_personnel.head(10))

print("\nTOP DISASTERS BY FREQUENCY (TOTAL MOBILIZATIONS):")
print(haz_freq.head(10))

# B. Human Cost
haz_deaths = df.groupby('Hazard')['Total Deaths'].sum().sort_values(ascending=False)
print("\nTOP DISASTERS BY TOTAL DEATHS:")
print(haz_deaths.head(10))

# C. Efficiency Index (Personnel per Mobilization)
eff = (haz_personnel / haz_freq).sort_values(ascending=False)
print("\nINTENSITY INDEX (AVERAGE PERSONNEL PER MOBILIZATION):")
print(eff.head(10))

# D. Mortality Correlation (Personnel per Death)
mort_eff = (haz_personnel / haz_deaths).sort_values(ascending=False)
# Filtering out divisions by 0 or very small death tolls (inf)
# We only care about high values where the military 'over-mobilizes' relative to the death toll
print("\nOVER-PROTECTION INDEX (PERSONNEL PER RECORDED DEATH):")
print(mort_eff.replace([np.inf, -np.inf], np.nan).dropna().sort_values(ascending=False).head(10))
