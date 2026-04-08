import pandas as pd

questions = ["International Terrorism", "War (Peer-to-Peer)", "Illegal Drugs", "Resource Scarcities", "Domestic Terrorism", "Civil Unrest"]
regions = ["Africa", "Asia", "Europe", "Pacific", "South America", "North America"]

xl = pd.ExcelFile('Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx')
data = {r: {} for r in regions}

for i in range(1, 7):
    df = pd.read_excel(xl, sheet_name=f'Q{i}')
    q_label = questions[i-1]
    
    # Rows 3-8 (0-indexed) are Africa, Asia, Europe, Pacific, South America, North America
    for target_idx in range(3, 9):
        # We need to map the row to the correct region
        row_name = str(df.iloc[target_idx, 0])
        val = float(df.iloc[target_idx, 1])
        
        for r in regions:
            if r in row_name:
                data[r][q_label] = val

report = pd.DataFrame(data).T
report['Regional Std. Deviation'] = report.std(axis=1)

print("--- INDIVIDUAL REGIONAL MEANS (%) ---")
print(report.to_string())
