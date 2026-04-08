import pandas as pd
import re

# 1. Load EMDAT
df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')

# 2. Extract Droughts
drought = df[df['Disaster Type'].str.contains('Drought', case=False, na=False)].copy()

print(f"Total Rows for Drought: {len(drought)}")

def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

drought['Num'] = drought['Personnel'].apply(cln)

# 3. Categorization
count_with_val = drought[drought['Num'] > 0.0].shape[0]
count_confirmed = drought[drought['Personnel'].str.contains('Confirmed', case=False, na=False)].shape[0]

print(f"Drought - Rows with Numbers: {count_with_val}")
print(f"Drought - Rows with 'Confirmed': {count_confirmed}")
print(f"Drought - 'Validated' (Numbers + Confirmed): {count_with_val + count_confirmed}")

# Check for the 183 number
# Let's see if 183 is the total rows for drought?
# Or maybe the sum of some other category?
