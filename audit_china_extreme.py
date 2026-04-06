import pandas as pd
import re

def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')
china_extreme = df[(df['Country'] == 'China') & (df['Disaster Type'].str.contains('Extreme', case=False, na=False))].copy()
china_extreme['Personnel_Clean'] = china_extreme['Personnel'].apply(cln)

print("--- CHINA EXTREME TEMPERATURE HISTORICAL DATA ---")
print(china_extreme[['Start Year', 'Event Name', 'Personnel', 'Personnel_Clean']].to_string())
print("\nSTATISTICS FOR CHINA EXTREME TEMPERATURE:")
print(f"Mean Personnel: {china_extreme['Personnel_Clean'].mean()}")
print(f"Median Personnel: {china_extreme['Personnel_Clean'].median()}")
print(f"Max Personnel: {china_extreme['Personnel_Clean'].max()}")
print(f"Number of Events: {len(china_extreme)}")

# Check Floods and Storms for context
china_flood = df[(df['Country'] == 'China') & (df['Disaster Type'].str.contains('Flood', case=False, na=False))].copy()
china_flood['Personnel_Clean'] = china_flood['Personnel'].apply(cln)

print("\n--- CONTEXT: CHINA FLOODS ---")
print(f"Median Flood Personnel: {china_flood['Personnel_Clean'].median()}")
print(f"Mean Flood Personnel: {china_flood['Personnel_Clean'].mean()}")
print(f"Max Flood Personnel: {china_flood['Personnel_Clean'].max()}")
print(f"Number of Flood Events: {len(china_flood)}")
