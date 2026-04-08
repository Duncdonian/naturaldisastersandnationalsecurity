import pandas as pd

df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')
total = df['Total Deaths'].sum()

haz_deaths = df.groupby('Disaster Type')['Total Deaths'].sum().sort_values(ascending=False)

print(f"{'Hazard Type':<25} | {'Total Deaths':<15} | {'% of Total':<10}")
print("-" * 55)
for h, d in haz_deaths.items():
    perc = (d / total) * 100
    print(f"{h:<25} | {d:15,.0f} | {perc:9.2f}%")

print(f"\n{'GLOBAL TOTAL':<25} | {total:15,.0f} | 100.00%")
