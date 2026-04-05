import pandas as pd
import json

xl = pd.ExcelFile('Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx')
res = {}
qs = [
    'International Terrorism', 
    'War (Peer-to-Peer)', 
    'Illegal Drugs', 
    'Resource Scarcities', 
    'Domestic Terrorism', 
    'Civil Unrest'
]
labels = ['All Countries', 'North America', 'South America', 'Europe', 'Asia', 'Oceania/Pacific']

for i, sname in enumerate(['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']):
    sdf = pd.read_excel(xl, sheet_name=sname)
    for idx, row in sdf.iterrows():
        label = str(row.iloc[0])
        val = row.iloc[1]
        for r in labels:
            match_str = "Pacific" if r == "Oceania/Pacific" else r
            if match_str in label:
                if r not in res:
                    res[r] = {}
                res[r][qs[i]] = val

print(json.dumps(res, indent=2))
