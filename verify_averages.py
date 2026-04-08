import pandas as pd
import numpy as np

# 1. Load Raw Data
df_raw = pd.read_excel('Survey of Military Mobilization - National Security and Natural Disasters.xlsx')

questions = [
    df_raw.columns[11],
    df_raw.columns[12],
    df_raw.columns[28],
    df_raw.columns[29],
    df_raw.columns[30],
    df_raw.columns[31]
]
q_short = ["Terrorism", "War", "Drugs", "Resource", "Domestic", "Civil"]

country_col = df_raw.columns[21]

def get_reg(v):
    v = str(v).lower()
    if 'africa' in v: return "Africa"
    if 'asia' in v: return "Asia"
    if 'europe' in v: return "Europe"
    if 'north' in v or 'usa' in v or 'united states' in v: return "North America"
    if 'south' in v or 'latin' in v or 'brazil' in v: return "South America"
    if 'pacific' in v or 'oceania' in v: return "Oceania/Pacific"
    return "Asia" 

df_raw['AppRegion'] = df_raw[country_col].apply(get_reg)

# Convert all question columns to numeric
for qs in questions:
    df_raw[qs] = pd.to_numeric(df_raw[qs], errors='coerce')

# Calculate Means and Medians by Region
print("--- RAW DATA ANALYSIS (INDIVIDUAL RESPONSES) ---")
for reg in ["North America", "South America", "Europe", "Asia", "Africa"]:
    reg_df = df_raw[df_raw['AppRegion'] == reg]
    if not reg_df.empty:
        print(f"\n{reg} (Count: {len(reg_df)}):")
        for qs, label in zip(questions, q_short):
            r_mean = reg_df[qs].mean()
            r_median = reg_df[qs].median()
            print(f"  - {label:10} | Mean: {r_mean:5.1f}% | Median: {r_median:5.1f}%")

# Check the Summary File
print("\n--- REPORTED AVERAGES (SUMMARY FILE) ---")
xl_rep = pd.ExcelFile('Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx')
for i in range(1, 7):
    df_qi = pd.read_excel(xl_rep, sheet_name=f'Q{i}')
    q_label = q_short[i-1]
    # Extract North America (usually row 8)
    row_na = df_qi[df_qi.iloc[:, 0].str.contains("North America", na=False)]
    if not row_na.empty:
        rep_val = float(row_na.iloc[0, 1])
        print(f"{q_label:10} Reported: {rep_val:5.1f}%")
