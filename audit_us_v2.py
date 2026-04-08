import pandas as pd

df = pd.read_excel('EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx')
usa = df[df['ISO'] == 'USA'].copy()

print(f"Total rows for ISO 'USA': {len(usa)}")

import re
def cln(v):
    if pd.isna(v): return 0.0
    s = str(v).replace(',','').strip()
    nums = re.findall(r'\d+', s)
    return float(nums[0]) if nums else 0.0

usa['Num'] = usa['Personnel'].apply(cln)

# Count Categorization
count_with_val = usa[usa['Num'] > 0.0].shape[0]
count_confirmed = usa[usa['Personnel'].str.contains('Confirmed', case=False, na=False)].shape[0]

print(f"Total with Numbers: {count_with_val}")
print(f"Total with 'Confirmed': {count_confirmed}")

# Check any others
others = usa[~(usa['Num'] > 0.0) & ~(usa['Personnel'].str.contains('Confirmed', case=False, na=False))]
print(f"Others (neither numbers nor 'Confirmed'): {len(others)}")
if len(others) > 0:
    print(others['Personnel'].value_counts())
