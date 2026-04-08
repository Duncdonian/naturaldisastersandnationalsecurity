import pandas as pd

# 1. Load EMDAT
df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')

# 2. Filter US
us = df[df['Country'].str.contains('United States', case=False, na=False)].copy()

print(f"Total Rows for US: {len(us)}")

# 3. Check for specific filters we use in the dashboard
# process_data_v4.py uses: df_emdat.groupby('ISO').agg(count_mobilizations=('Personnel', 'count'))
# This counts cases where 'Personnel' is NOT NULL.

us_with_p_entry = us['Personnel'].count()
print(f"Rows with non-null Personnel entries: {us_with_p_entry}")

# Check unique Disaster Numbers
unique_disno = us['DisNo.'].nunique()
print(f"Unique Disaster Numbers (DisNo.): {unique_disno}")

# 4. Check 'CleanPersonnel' (where we can extract a number)
import re
def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

us['Clean'] = us['Personnel'].apply(cln)
us_with_positive_p = us[us['Clean'] > 0.0].shape[0]
print(f"Rows with positive Personnel (>0): {us_with_positive_p}")

# 5. Check "Confirmed" without values
us_confirmed_only = us[(us['Personnel'].str.contains('Confirmed', case=False, na=False)) & (us['Clean'] == 0.0)].shape[0]
print(f"Rows with 'Confirmed' but 0 personnel: {us_confirmed_only}")
