import pandas as pd
import re

# 1. Load EMDAT
df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')

def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

df['CleanPersonnel'] = df['Personnel'].apply(cln)

# 2. Apply v10.87 Deduplication for China 2008
# (Consolidating the quadruple-counted 729,000 for that season)
mask_2008 = (df['Country'] == 'China') & (df['Start Year'] == 2008) & (df['CleanPersonnel'] == 729000.0)
df_2008 = df[mask_2008].copy()
df_rest = df[~mask_2008].copy()
if not df_2008.empty:
    df = pd.concat([df_rest, df_2008.iloc[[0]]], ignore_index=True)

# 3. Analyze Storms and Floods
hazards = ['Flood', 'Storm']

print("--- CHINA'S IMPACT ON GLOBAL DISASTER RELIEF DATA (1926-2025) ---")

for h in hazards:
    # Filter by hazard (handle variants)
    mask_h = df['Disaster Type'].str.contains(h, case=False, na=False)
    df_h = df[mask_h].copy()
    
    total_with = df_h['CleanPersonnel'].sum()
    
    # China's portion
    df_china_h = df_h[df_h['Country'] == 'China']
    china_total = df_china_h['CleanPersonnel'].sum()
    
    total_without = total_with - china_total
    china_perc = (china_total / total_with) * 100 if total_with > 0 else 0
    
    print(f"\n{h.upper()}:")
    print(f"  - Total Global Personnel (incl. China): {total_with:15,.0f}")
    print(f"  - China's Total Contribution:         {china_total:15,.0f}")
    print(f"  - Total (EXCLUDING China):            {total_without:15,.0f}")
    print(f"  - China's % of Global Total:          {china_perc:14.2f}%")
    print(f"  - China's average personnel per mobilization for {h}: {df_china_h['CleanPersonnel'].mean():10,.0f}")
    print(f"  - Rest of World's average per mobilization for {h}:   {df_h[df_h['Country'] != 'China']['CleanPersonnel'].mean():10,.0f}")
