import pandas as pd
import numpy as np

# 1. LOAD SURVEY DATA (Perceived Security Threats)
questions = ["International Terrorism", "War (Peer-to-Peer)", "Illegal Drugs", "Resource Scarcities", "Domestic Terrorism", "Civil Unrest"]
regions = ["Africa", "Asia", "Europe", "Pacific", "South America", "North America"]

xl_survey = pd.ExcelFile('Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx')
survey_data = {r: [] for r in regions}

for i in range(1, 7):
    # Sheet Q1-Q6 corresponds to 6 questions
    df_q = pd.read_excel(xl_survey, sheet_name=f'Q{i}')
    # Row indices for regions in your depiction file
    for idx in range(3, 9):
        name = str(df_q.iloc[idx, 0])
        val = float(df_q.iloc[idx, 1])
        for r in regions:
            if r in name:
                survey_data[r].append(val)

# Regional Survey Average (%)
survey_means = {r: np.mean(v) for r, v in survey_data.items()}

# 2. LOAD HISTORICAL DATA (Actual Mobilization Intensity)
file_emdat = r"EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx"
df_emdat = pd.read_excel(file_emdat)

# Add Military Totals for % calculation
df_mil = pd.read_excel("Military Personnel Totals.xlsx", sheet_name="Data", header=3)
col_2020 = [c for c in df_mil.columns if "2020" in str(c)][0]
df_mil = df_mil[['Country Code', col_2020]].dropna().copy()
df_mil.columns = ['ISO', 'TotalMilitary']

df = df_emdat.merge(df_mil, on='ISO', how='left')

def get_region(row):
    r = str(row['Region']).lower()
    c = str(row['Country']).lower()
    if 'africa' in r: return "Africa"
    if 'asia' in r: return "Asia"
    if 'europe' in r: return "Europe"
    if 'northern america' in r or 'north america' in r: return "North America"
    if 'latin america' in r or 'south america' in r or 'caribbean' in r: return "South America"
    if 'oceania' in r or 'pacific' in r: return "Pacific"
    return "Asia"

df['AppRegion'] = df.apply(get_region, axis=1)

def clean_p(v):
    try:
        if pd.isna(v): return 0.0
        s = str(v).replace(',', '').strip()
        import re
        nums = re.findall(r'\d+', s)
        return float(nums[0]) if nums else 0.0
    except: return 0.0

df['CleanP'] = df['Personnel'].apply(clean_p)
df['IsMob'] = (df['CleanP'] > 0.0) | (df['Personnel'].astype(str).str.contains('Confirmed', case=False, na=False))

# Calculate Mobilization Intensity (%)
df_mob = df[(df['IsMob']) & (df['CleanP'] > 0)].copy()
df_mob = df_mob[df_mob['TotalMilitary'] > 0]
df_mob['Perc'] = (df_mob['CleanP'] / df_mob['TotalMilitary']) * 100

historical_means = df_mob.groupby('AppRegion')['Perc'].mean().to_dict()

# 3. SYNTHESIS
results = []
for r in regions:
    p_threat = survey_means[r]
    h_intensity = historical_means.get(r, 0)
    results.append({
        "Region": r,
        "Perceived Threat Score (%)": round(p_threat, 2),
        "Historical Mob. Intensity (%)": round(h_intensity, 2)
    })

comp_df = pd.DataFrame(results)

# Correlation using numpy
corr_matrix = np.corrcoef(comp_df['Perceived Threat Score (%)'], comp_df['Historical Mob. Intensity (%)'])
corr_val = corr_matrix[0, 1]

print("--- REGIONAL SYNTHESIS: SURVEY VS HISTORICAL DATA ---")
print(comp_df.to_string(index=False))
print(f"\nPearson Correlation (R): {corr_val:.4f}")
