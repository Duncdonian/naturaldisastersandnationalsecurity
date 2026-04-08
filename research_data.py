import pandas as pd
import json
import os
from datetime import datetime

class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (datetime, pd.Timestamp)):
            return obj.isoformat()
        return super().default(obj)

files = [
    "EMDAT Data for All Countries with Military Defense_WITHOUT UNCONFIRMED_Final Pass_3APR.xlsx",
    "Depiction of All Countries_Military Mobilization - National Security and Natural Disastersv2.xlsx",
    "Military Personnel Totals.xlsx",
    "responses_sample.csv"
]

report = {}

for file in files:
    if not os.path.exists(file):
        report[file] = "NOT FOUND"
        continue
    
    try:
        if file.endswith('.xlsx'):
            xl = pd.ExcelFile(file)
            report[file] = {}
            for sheet in xl.sheet_names:
                df = pd.read_excel(xl, sheet_name=sheet, nrows=5)
                report[file][sheet] = {
                    "columns": list(df.columns),
                    "sample": df.to_dict(orient='records')
                }
        else:
            df = pd.read_csv(file, nrows=5)
            report[file] = {
                "columns": list(df.columns),
                "sample": df.to_dict(orient='records')
            }
    except Exception as e:
        report[file] = f"ERROR: {str(e)}"

with open('data_research_report.json', 'w') as f:
    json.dump(report, f, indent=4, cls=DateTimeEncoder)
