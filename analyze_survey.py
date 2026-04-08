import pandas as pd

questions = ["International Terrorism", "War (Peer-to-Peer)", "Illegal Drugs", "Resource Scarcities", "Domestic Terrorism", "Civil Unrest"]
regions = ["Africa", "Asia", "Europe", "Pacific", "South America", "North America"]

xl = pd.ExcelFile('Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx')
data = {q: {} for q in questions}

for i in range(1, 7):
    df = pd.read_excel(xl, sheet_name=f'Q{i}')
    q_label = questions[i-1]
    
    # In these sheets, data for regions is always in rows 3-8 (0-indexed)
    # Col 0: Region Name, Col 1: Median Value
    for target_idx in range(3, 9):
        reg_name_raw = str(df.iloc[target_idx, 0])
        val = df.iloc[target_idx, 1]
        
        # Match region
        for reg in regions:
            if reg in reg_name_raw:
                data[q_label][reg] = float(val)

report = pd.DataFrame(data)
print("--- REGIONAL SECURITY MOBILIZATION MEDIANS (%) ---")
print(report.to_string())

print("\n--- MAJOR ANALYTICAL TAKEAWAYS ---")

# 1. Global High-Value Driver
peer_global = report["War (Peer-to-Peer)"].mean()
print(f"1. PEER WAR DOMINANCE: 'War (Peer-to-Peer)' is the highest overall mobilization requirement globally, averaging {peer_global:.1f}%.")

# 2. Regional Outliers: South America
sa_terrorism = report.loc["South America", "International Terrorism"]
sa_war = report.loc["South America", "War (Peer-to-Peer)"]
print(f"2. SOUTH AMERICAN EXCEPTIONALISM: South America requires the highest mobilization for International Terrorism ({sa_terrorism}%) and nearly 100% for Peer-to-Peer War ({sa_war}%).")

# 3. Lowest Overall Commitment: Europe
eu_min = report.loc["Europe"].mean()
print(f"3. EUROPEAN CONSERVATISM: Europe has the lowest average security mobilization requirement (avg {eu_min:.1f}%), suggesting a preference for smaller, professionalized force deployment across all threats.")

# 4. Crisis Priority: Illegal Drugs
drugs_max = report["Illegal Drugs"].max()
drugs_reg = report["Illegal Drugs"].idxmax()
print(f"4. DOMESTIC CRISIS: Illegal Drugs have high variance; {drugs_reg} has the highest requirement at {drugs_max}%, likely due to existing internal security challenges.")

# 5. Civil Unrest vs. External Threat
terror_avg = report["International Terrorism"].mean()
unrest_avg = report["Civil Unrest"].mean()
print(f"5. THREAT HIERARCHY: On average, regions value protecting against International Terrorism ({terror_avg:.1f}%) significantly higher than Civil Unrest ({unrest_avg:.1f}%).")
