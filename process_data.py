import pandas as pd
import numpy as np
import json

def process_data():
    xl_path = 'EMDAT Data for All Countries with Military Defense_Excluded Confirmed_Completed_28MAR_without 1574 Bio_ExtandH.xlsx'
    xl = pd.ExcelFile(xl_path)

    # 1. Load EM-DAT Data
    df_emdat = pd.read_excel(xl, 'EM-DAT Data')
    
    # Clean Personnel column: convert to numeric, errors='coerce' to handle strings
    df_emdat['Personnel_Numeric'] = pd.to_numeric(df_emdat['Personnel'], errors='coerce')
    # Filter only numeric entries
    df_emdat_clean = df_emdat.dropna(subset=['Personnel_Numeric']).copy()

    # 2. Load Armies Data
    df_armies = pd.read_excel(xl, 'Armies')
    # Army size is in column '2020'
    army_size_map = df_armies.set_index('Country Name')['2020'].to_dict()

    # 3. Join EM-DAT and Armies to calculate % deployment
    def get_army_size(country):
        return army_size_map.get(country, np.nan)

    df_emdat_clean['Army_Size'] = df_emdat_clean['Country'].apply(get_army_size)
    df_emdat_clean['Deployment_Percent'] = (df_emdat_clean['Personnel_Numeric'] / df_emdat_clean['Army_Size']) * 100
    df_emdat_clean = df_emdat_clean.dropna(subset=['Deployment_Percent'])

    # 4. Load Responses Data
    df_responses = pd.read_excel(xl, 'Responses')
    
    # Identify the 6 survey questions
    # (Based on schema research, these are the ones starting with "In your opinion...")
    survey_questions = [
        "In your opinion, how much of your country's military should be mobilized to defend against an international terrorist attack/threat?",
        "In your opinion, how much of your country's military should be mobilized to participate in a war against a peer-to-peer threat or country with similar capabilities and technology?",
        "In your opinion, how much of your country's military should be mobilized to defend against illegal drugs, drug trafficking, and drug distribution?",
        "In your opinion, how much of your country's military should be mobilized to mitigate or assist in resource scarcities (e.g. large-scale water shortage, long-term power outages, food security)?",
        "In your opinion, how much of your country's military should be mobilized to defend against an domestic terrorist attack/threat?",
        "In your opinion, how much of your country's military should be mobilized to defend against civil unrest or domestic armed conflict?"
    ]

    # Calculate global means for each question
    global_means = {}
    for q in survey_questions:
        global_means[q] = df_responses[q].mean()

    # Group responses by country
    country_responses = df_responses.groupby('Country')[survey_questions].mean().reset_index()
    country_responses_dict = country_responses.set_index('Country').to_dict(orient='index')

    # 5. Aggregate EM-DAT by Country and Hazard Type
    # Hazards are in 'Disaster Type'
    hazard_types = df_emdat_clean['Disaster Type'].unique().tolist()
    
    # We want a structure: { country: { region: str, hazards: { type: [values] }, survey: { q: value } } }
    final_data = {}
    
    for _, row in df_emdat_clean.iterrows():
        country = row['Country']
        region = row['Region']
        h_type = row['Disaster Type']
        val = row['Deployment_Percent']
        
        if country not in final_data:
            final_data[country] = {
                'country': country,
                'region': region,
                'hazards': {},
                'survey': country_responses_dict.get(country, None) # Use None if missing
            }
        
        if h_type not in final_data[country]['hazards']:
            final_data[country]['hazards'][h_type] = []
        
        final_data[country]['hazards'][h_type].append(val)

    # 6. Convert to list and handle survey gaps
    data_list = []
    for country, details in final_data.items():
        data_list.append(details)

    output = {
        'countries': data_list,
        'global_means': global_means,
        'hazard_types': hazard_types,
        'survey_questions': survey_questions
    }

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write("const APP_DATA = " + json.dumps(output, indent=4) + ";")

if __name__ == "__main__":
    process_data()
