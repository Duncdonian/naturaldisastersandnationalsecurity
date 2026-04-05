import pandas as pd
import json

xl_path = 'EMDAT Data for All Countries with Military Defense_Excluded Confirmed_Completed_28MAR_without 1574 Bio_ExtandH.xlsx'
xl = pd.ExcelFile(xl_path)

schema = {}
for sheet in xl.sheet_names:
    df = pd.read_excel(xl, sheet, nrows=5)
    schema[sheet] = list(df.columns)

with open('excel_schema.json', 'w') as f:
    json.dump(schema, f, indent=4)

# Also get some sample values for key columns if possible
# Sheet 1: title personnel
# Sheet 2: army size
# Sheet 3: national security percent
