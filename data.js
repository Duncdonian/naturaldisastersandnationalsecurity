const APP_DATA = {
    "regions": [
        "Global",
        "North America",
        "South America",
        "Europe",
        "Asia",
        "Africa",
        "Oceania/Pacific"
    ],
    "hazard_types": [
        "Drought",
        "Earthquake",
        "Extreme Temperature",
        "Flood",
        "Mass Movement",
        "Storm",
        "Volcanic Activity",
        "Wildfire"
    ],
    "hazard_counts": {
        "Drought": 293,
        "Earthquake": 874,
        "Extreme Temperature": 233,
        "Flood": 3947,
        "Mass Movement": 605,
        "Storm": 2853,
        "Volcanic Activity": 155,
        "Wildfire": 352
    },
    "survey_questions": [
        "International Terrorism",
        "War (Peer-to-Peer)",
        "Illegal Drugs",
        "Resource Scarcities",
        "Domestic Terrorism",
        "Civil Unrest"
    ],
    "countries": [
        {
            "country": "Afghanistan",
            "iso": "AFG",
            "region": "Asia",
            "total_military": 165000.0,
            "sum_personnel": 3090.0,
            "count_mobilizations": 136,
            "hazards": {
                "Flood": 0.024242424242424242,
                "Mass Movement": 0.1676767676767677,
                "Storm": 0.012121212121212121
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Angola",
            "iso": "AGO",
            "region": "Africa",
            "total_military": 117000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 36,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Albania",
            "iso": "ALB",
            "region": "Europe",
            "total_military": 8000.0,
            "sum_personnel": 6791.0,
            "count_mobilizations": 31,
            "hazards": {
                "Earthquake": 3.4375,
                "Extreme Temperature": 2.0125,
                "Flood": 12.833333333333334,
                "Storm": 30.625000000000004
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "United Arab Emirates",
            "iso": "ARE",
            "region": "Asia",
            "total_military": 63000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 6.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 30.0,
                "Domestic Terrorism": 20.0,
                "Civil Unrest": 0.0
            },
            "has_real_survey": true
        },
        {
            "country": "Argentina",
            "iso": "ARG",
            "region": "South America",
            "total_military": 103000.0,
            "sum_personnel": 36096.0,
            "count_mobilizations": 82,
            "hazards": {
                "Flood": 0.2703559870550162,
                "Storm": 6.178446601941747,
                "Wildfire": 0.0970873786407767
            },
            "survey": {
                "International Terrorism": 75.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 50.0,
                "Resource Scarcities": 75.0,
                "Domestic Terrorism": 25.0,
                "Civil Unrest": 0.0
            },
            "has_real_survey": true
        },
        {
            "country": "Armenia",
            "iso": "ARM",
            "region": "Asia",
            "total_military": 47000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Australia",
            "iso": "AUS",
            "region": "Oceania/Pacific",
            "total_military": 60000.0,
            "sum_personnel": 50261.0,
            "count_mobilizations": 122,
            "hazards": {
                "Earthquake": 0.6166666666666667,
                "Extreme Temperature": 1.2708333333333333,
                "Flood": 1.9699382716049383,
                "Storm": 1.1211111111111112,
                "Wildfire": 0.47000000000000003
            },
            "survey": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 90.0,
                "Illegal Drugs": 5.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 5.0
            },
            "has_real_survey": true
        },
        {
            "country": "Austria",
            "iso": "AUT",
            "region": "Europe",
            "total_military": 23000.0,
            "sum_personnel": 12502.0,
            "count_mobilizations": 18,
            "hazards": {
                "Extreme Temperature": 3.536231884057971,
                "Flood": 5.358260869565218,
                "Storm": 5.652173913043478
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Azerbaijan",
            "iso": "AZE",
            "region": "Asia",
            "total_military": 82000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 4,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Burundi",
            "iso": "BDI",
            "region": "Africa",
            "total_military": 31000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 12,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Belgium",
            "iso": "BEL",
            "region": "Europe",
            "total_military": 24000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 11,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Benin",
            "iso": "BEN",
            "region": "Africa",
            "total_military": 12000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Burkina Faso",
            "iso": "BFA",
            "region": "Africa",
            "total_military": 11000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 16,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Bangladesh",
            "iso": "BGD",
            "region": "Asia",
            "total_military": 227000.0,
            "sum_personnel": 15000.0,
            "count_mobilizations": 193,
            "hazards": {
                "Storm": 3.303964757709251
            },
            "survey": {
                "International Terrorism": 75.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 65.0,
                "Resource Scarcities": 35.0,
                "Domestic Terrorism": 85.0,
                "Civil Unrest": 46.0
            },
            "has_real_survey": true
        },
        {
            "country": "Bulgaria",
            "iso": "BGR",
            "region": "Europe",
            "total_military": 37000.0,
            "sum_personnel": 10622.0,
            "count_mobilizations": 36,
            "hazards": {
                "Extreme Temperature": 7.027027027027027,
                "Flood": 2.406081081081081,
                "Storm": 2.4324324324324325
            },
            "survey": {
                "International Terrorism": 10.0,
                "War (Peer-to-Peer)": 30.0,
                "Illegal Drugs": 4.0,
                "Resource Scarcities": 32.0,
                "Domestic Terrorism": 50.0,
                "Civil Unrest": 50.0
            },
            "has_real_survey": true
        },
        {
            "country": "Bahrain",
            "iso": "BHR",
            "region": "Asia",
            "total_military": 19000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Bahamas, The",
            "iso": "BHS",
            "region": "North America",
            "total_military": 2000.0,
            "sum_personnel": 850.0,
            "count_mobilizations": 17,
            "hazards": {
                "Storm": 14.166666666666666
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Bosnia and Herzegovina",
            "iso": "BIH",
            "region": "Europe",
            "total_military": 11000.0,
            "sum_personnel": 2400.0,
            "count_mobilizations": 12,
            "hazards": {
                "Flood": 7.2727272727272725
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Belarus",
            "iso": "BLR",
            "region": "Europe",
            "total_military": 158000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Belize",
            "iso": "BLZ",
            "region": "North America",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 19,
            "hazards": {},
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Bolivia",
            "iso": "BOL",
            "region": "South America",
            "total_military": 71000.0,
            "sum_personnel": 34765.0,
            "count_mobilizations": 63,
            "hazards": {
                "Earthquake": 0.14084507042253522,
                "Flood": 3.131113956466069,
                "Mass Movement": 0.14084507042253522,
                "Storm": 4.381690140845071,
                "Wildfire": 9.859154929577464
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Brazil",
            "iso": "BRA",
            "region": "South America",
            "total_military": 762000.0,
            "sum_personnel": 115378.0,
            "count_mobilizations": 170,
            "hazards": {
                "Drought": 0.05503062117235346,
                "Flood": 0.16424013174823737,
                "Mass Movement": 0.029308836395450566,
                "Storm": 0.08567913385826771,
                "Wildfire": 1.9422572178477688
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Barbados",
            "iso": "BRB",
            "region": "North America",
            "total_military": 1000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 8,
            "hazards": {},
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Brunei Darussalam",
            "iso": "BRN",
            "region": "Asia",
            "total_military": 8000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Botswana",
            "iso": "BWA",
            "region": "Africa",
            "total_military": 9000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 13,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Central African Republic",
            "iso": "CAF",
            "region": "Africa",
            "total_military": 10000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 7,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Canada",
            "iso": "CAN",
            "region": "North America",
            "total_military": 72000.0,
            "sum_personnel": 115617.0,
            "count_mobilizations": 81,
            "hazards": {
                "Extreme Temperature": 1.1180555555555556,
                "Flood": 3.4668724279835392,
                "Storm": 3.226797385620915,
                "Wildfire": 0.6950757575757576
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Switzerland",
            "iso": "CHE",
            "region": "Europe",
            "total_military": 20000.0,
            "sum_personnel": 4209.0,
            "count_mobilizations": 19,
            "hazards": {
                "Extreme Temperature": 0.015,
                "Flood": 5.0,
                "Mass Movement": 6.0,
                "Storm": 2.5
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Chile",
            "iso": "CHL",
            "region": "South America",
            "total_military": 114000.0,
            "sum_personnel": 39075.0,
            "count_mobilizations": 76,
            "hazards": {
                "Earthquake": 5.87719298245614,
                "Flood": 0.0043859649122807015,
                "Storm": 0.6140350877192982,
                "Volcanic Activity": 0.6144736842105263,
                "Wildfire": 2.026190476190476
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "China",
            "iso": "CHN",
            "region": "Asia",
            "total_military": 2535000.0,
            "sum_personnel": 29501875.0,
            "count_mobilizations": 767,
            "hazards": {
                "Drought": 2.2682445759368837,
                "Earthquake": 0.7444444444444444,
                "Extreme Temperature": 14.674556213017752,
                "Flood": 4.363054776981903,
                "Mass Movement": 1.8622399914707608,
                "Storm": 5.1563695886455605,
                "Wildfire": 0.4171597633136095
            },
            "survey": {
                "International Terrorism": 60.0,
                "War (Peer-to-Peer)": 77.5,
                "Illegal Drugs": 17.5,
                "Resource Scarcities": 22.5,
                "Domestic Terrorism": 55.0,
                "Civil Unrest": 27.5
            },
            "has_real_survey": true
        },
        {
            "country": "Cote d'Ivoire",
            "iso": "CIV",
            "region": "Africa",
            "total_military": 27000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 8,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Cameroon",
            "iso": "CMR",
            "region": "Africa",
            "total_military": 34000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 7,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Congo, Dem. Rep.",
            "iso": "COD",
            "region": "Africa",
            "total_military": 134000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 20,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Congo, Rep.",
            "iso": "COG",
            "region": "Africa",
            "total_military": 12000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 6,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Colombia",
            "iso": "COL",
            "region": "South America",
            "total_military": 428000.0,
            "sum_personnel": 31112.0,
            "count_mobilizations": 152,
            "hazards": {
                "Earthquake": 0.40887850467289716,
                "Flood": 0.2596513299784328,
                "Mass Movement": 0.2538551401869159,
                "Storm": 0.1791277258566978
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Cabo Verde",
            "iso": "CPV",
            "region": "Africa",
            "total_military": 1000.0,
            "sum_personnel": 110.0,
            "count_mobilizations": 5,
            "hazards": {
                "Volcanic Activity": 5.5
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Costa Rica",
            "iso": "CRI",
            "region": "North America",
            "total_military": 10000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Cuba",
            "iso": "CUB",
            "region": "North America",
            "total_military": 76000.0,
            "sum_personnel": 59112.0,
            "count_mobilizations": 81,
            "hazards": {
                "Flood": 14.915789473684212,
                "Storm": 23.973684210526315
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Cyprus",
            "iso": "CYP",
            "region": "Asia",
            "total_military": 13000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 9,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Czechia",
            "iso": "CZE",
            "region": "Europe",
            "total_military": 27000.0,
            "sum_personnel": 21800.0,
            "count_mobilizations": 14,
            "hazards": {
                "Flood": 7.12962962962963,
                "Storm": 11.851851851851851
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Germany",
            "iso": "DEU",
            "region": "Europe",
            "total_military": 183000.0,
            "sum_personnel": 178004.0,
            "count_mobilizations": 28,
            "hazards": {
                "Flood": 11.617486338797814,
                "Storm": 5.597501951600313
            },
            "survey": {
                "International Terrorism": 35.0,
                "War (Peer-to-Peer)": 85.0,
                "Illegal Drugs": 5.0,
                "Resource Scarcities": 19.5,
                "Domestic Terrorism": 20.0,
                "Civil Unrest": 50.0
            },
            "has_real_survey": true
        },
        {
            "country": "Djibouti",
            "iso": "DJI",
            "region": "Africa",
            "total_military": 13000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 10,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Denmark",
            "iso": "DNK",
            "region": "Europe",
            "total_military": 15000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Dominican Republic",
            "iso": "DOM",
            "region": "North America",
            "total_military": 71000.0,
            "sum_personnel": 1510.0,
            "count_mobilizations": 56,
            "hazards": {
                "Flood": 0.3685446009389672,
                "Storm": 0.5105633802816901
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Algeria",
            "iso": "DZA",
            "region": "Africa",
            "total_military": 326000.0,
            "sum_personnel": 22000.0,
            "count_mobilizations": 29,
            "hazards": {
                "Earthquake": 3.067484662576687,
                "Flood": 0.6134969325153374
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Ecuador",
            "iso": "ECU",
            "region": "South America",
            "total_military": 42000.0,
            "sum_personnel": 29101.0,
            "count_mobilizations": 66,
            "hazards": {
                "Earthquake": 19.365079365079364,
                "Flood": 5.5964285714285715
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Egypt, Arab Rep.",
            "iso": "EGY",
            "region": "Africa",
            "total_military": 836000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 15,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Eritrea",
            "iso": "ERI",
            "region": "Africa",
            "total_military": 202000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 4,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Spain",
            "iso": "ESP",
            "region": "Europe",
            "total_military": 199000.0,
            "sum_personnel": 57117.0,
            "count_mobilizations": 56,
            "hazards": {
                "Earthquake": 0.5527638190954774,
                "Extreme Temperature": 1.2211055276381908,
                "Flood": 1.1662060301507537,
                "Storm": 1.8283919597989948,
                "Wildfire": 0.7412060301507537
            },
            "survey": {
                "International Terrorism": 16.666666666666668,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 5.0,
                "Resource Scarcities": 13.333333333333334,
                "Domestic Terrorism": 3.3333333333333335,
                "Civil Unrest": 6.666666666666667
            },
            "has_real_survey": true
        },
        {
            "country": "Estonia",
            "iso": "EST",
            "region": "Europe",
            "total_military": 7000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 2,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Ethiopia",
            "iso": "ETH",
            "region": "Africa",
            "total_military": 138000.0,
            "sum_personnel": 3900.0,
            "count_mobilizations": 45,
            "hazards": {
                "Flood": 0.25691699604743085
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Finland",
            "iso": "FIN",
            "region": "Europe",
            "total_military": 22000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Fiji",
            "iso": "FJI",
            "region": "Oceania/Pacific",
            "total_military": 4000.0,
            "sum_personnel": 689.0,
            "count_mobilizations": 34,
            "hazards": {
                "Storm": 2.8708333333333336
            },
            "survey": {
                "International Terrorism": 30.0,
                "War (Peer-to-Peer)": 42.67,
                "Illegal Drugs": 50.0,
                "Resource Scarcities": 51.67,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 6.67
            },
            "has_real_survey": false
        },
        {
            "country": "France",
            "iso": "FRA",
            "region": "Europe",
            "total_military": 304000.0,
            "sum_personnel": 84788.0,
            "count_mobilizations": 123,
            "hazards": {
                "Drought": 0.46315789473684216,
                "Earthquake": 0.049342105263157895,
                "Extreme Temperature": 1.0754385964912279,
                "Flood": 0.5518483709273182,
                "Mass Movement": 2.7960526315789473,
                "Storm": 0.46009868421052624,
                "Wildfire": 0.09418859649122806
            },
            "survey": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 78.66666666666667,
                "Illegal Drugs": 10.0,
                "Resource Scarcities": 14.5,
                "Domestic Terrorism": 15.0,
                "Civil Unrest": 52.5
            },
            "has_real_survey": true
        },
        {
            "country": "Gabon",
            "iso": "GAB",
            "region": "Africa",
            "total_military": 7000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 2,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "United Kingdom",
            "iso": "GBR",
            "region": "Europe",
            "total_military": 153000.0,
            "sum_personnel": 14000.0,
            "count_mobilizations": 47,
            "hazards": {
                "Extreme Temperature": 0.065359477124183,
                "Flood": 1.3616557734204793,
                "Mass Movement": 0.09803921568627451,
                "Storm": 0.09395424836601307
            },
            "survey": {
                "International Terrorism": 21.0,
                "War (Peer-to-Peer)": 82.0,
                "Illegal Drugs": 4.0,
                "Resource Scarcities": 10.0,
                "Domestic Terrorism": 20.0,
                "Civil Unrest": 21.0
            },
            "has_real_survey": true
        },
        {
            "country": "Georgia",
            "iso": "GEO",
            "region": "Asia",
            "total_military": 26000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 9,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Ghana",
            "iso": "GHA",
            "region": "Africa",
            "total_military": 16000.0,
            "sum_personnel": 85.0,
            "count_mobilizations": 24,
            "hazards": {
                "Flood": 0.53125
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Guinea",
            "iso": "GIN",
            "region": "Africa",
            "total_military": 13000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 4,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Gambia",
            "iso": "GMB",
            "region": "Africa",
            "total_military": 4000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 6,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Guinea-Bissau",
            "iso": "GNB",
            "region": "Asia",
            "total_military": 4000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Equatorial Guinea",
            "iso": "GNQ",
            "region": "Asia",
            "total_military": 1000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Greece",
            "iso": "GRC",
            "region": "Europe",
            "total_military": 147000.0,
            "sum_personnel": 11044.0,
            "count_mobilizations": 65,
            "hazards": {
                "Earthquake": 0.09750566893424036,
                "Extreme Temperature": 1.5816326530612246,
                "Flood": 0.06802721088435373,
                "Wildfire": 0.6535147392290249
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Guatemala",
            "iso": "GTM",
            "region": "North America",
            "total_military": 43000.0,
            "sum_personnel": 3941.0,
            "count_mobilizations": 84,
            "hazards": {
                "Earthquake": 1.6558139534883722,
                "Flood": 0.5337209302325581,
                "Storm": 2.202325581395349,
                "Volcanic Activity": 0.23197674418604652
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Guyana",
            "iso": "GUY",
            "region": "South America",
            "total_military": 3000.0,
            "sum_personnel": 2.0,
            "count_mobilizations": 7,
            "hazards": {
                "Flood": 0.06666666666666667
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Honduras",
            "iso": "HND",
            "region": "North America",
            "total_military": 23000.0,
            "sum_personnel": 8800.0,
            "count_mobilizations": 55,
            "hazards": {
                "Drought": 7.608695652173914,
                "Flood": 7.82608695652174
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Croatia",
            "iso": "HRV",
            "region": "Europe",
            "total_military": 20000.0,
            "sum_personnel": 16568.0,
            "count_mobilizations": 18,
            "hazards": {
                "Earthquake": 30.000000000000004,
                "Extreme Temperature": 0.2,
                "Flood": 4.003,
                "Storm": 1.5,
                "Wildfire": 0.5625
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Haiti",
            "iso": "HTI",
            "region": "North America",
            "total_military": 1000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 43,
            "hazards": {},
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Hungary",
            "iso": "HUN",
            "region": "Europe",
            "total_military": 46000.0,
            "sum_personnel": 57050.0,
            "count_mobilizations": 22,
            "hazards": {
                "Flood": 10.422554347826086,
                "Storm": 20.320652173913043
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Indonesia",
            "iso": "IDN",
            "region": "Asia",
            "total_military": 676000.0,
            "sum_personnel": 1390679.0,
            "count_mobilizations": 458,
            "hazards": {
                "Earthquake": 1.584008875739645,
                "Flood": 1.4917208264623145,
                "Mass Movement": 2.1532999544833866,
                "Storm": 6.307199211045365,
                "Volcanic Activity": 0.04427303465765004,
                "Wildfire": 1.3806706114398422
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "India",
            "iso": "IND",
            "region": "Asia",
            "total_military": 3068000.0,
            "sum_personnel": 643388.0,
            "count_mobilizations": 527,
            "hazards": {
                "Earthquake": 0.8148631029986962,
                "Extreme Temperature": 0.01955671447196871,
                "Flood": 0.1393012855560696,
                "Mass Movement": 0.10170034767492395,
                "Storm": 0.06576892756435523
            },
            "survey": {
                "International Terrorism": 20.5,
                "War (Peer-to-Peer)": 55.0,
                "Illegal Drugs": 4.0,
                "Resource Scarcities": 15.0,
                "Domestic Terrorism": 15.0,
                "Civil Unrest": 12.0
            },
            "has_real_survey": true
        },
        {
            "country": "Ireland",
            "iso": "IRL",
            "region": "Europe",
            "total_military": 9000.0,
            "sum_personnel": 764.0,
            "count_mobilizations": 15,
            "hazards": {
                "Flood": 2.1222222222222222
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Iran, Islamic Rep.",
            "iso": "IRN",
            "region": "Asia",
            "total_military": 650000.0,
            "sum_personnel": 1400.0,
            "count_mobilizations": 125,
            "hazards": {
                "Earthquake": 0.10769230769230768
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Iraq",
            "iso": "IRQ",
            "region": "Asia",
            "total_military": 459000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 18,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Israel",
            "iso": "ISR",
            "region": "Asia",
            "total_military": 178000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 13,
            "hazards": {},
            "survey": {
                "International Terrorism": 29.5,
                "War (Peer-to-Peer)": 92.5,
                "Illegal Drugs": 10.0,
                "Resource Scarcities": 14.5,
                "Domestic Terrorism": 40.5,
                "Civil Unrest": 5.5
            },
            "has_real_survey": true
        },
        {
            "country": "Italy",
            "iso": "ITA",
            "region": "Europe",
            "total_military": 338000.0,
            "sum_personnel": 54074.0,
            "count_mobilizations": 100,
            "hazards": {
                "Earthquake": 0.9717666948436179,
                "Flood": 0.5770956607495069,
                "Mass Movement": 2.019230769230769,
                "Storm": 0.2514792899408284
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Jamaica",
            "iso": "JAM",
            "region": "North America",
            "total_military": 6000.0,
            "sum_personnel": 2000.0,
            "count_mobilizations": 30,
            "hazards": {
                "Storm": 33.33333333333333
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Jordan",
            "iso": "JOR",
            "region": "Asia",
            "total_military": 116000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 4,
            "hazards": {},
            "survey": {
                "International Terrorism": 30.5,
                "War (Peer-to-Peer)": 44.5,
                "Illegal Drugs": 17.5,
                "Resource Scarcities": 12.5,
                "Domestic Terrorism": 17.5,
                "Civil Unrest": 22.5
            },
            "has_real_survey": true
        },
        {
            "country": "Japan",
            "iso": "JPN",
            "region": "Asia",
            "total_military": 261000.0,
            "sum_personnel": 2372960.0,
            "count_mobilizations": 211,
            "hazards": {
                "Earthquake": 8.147837985769021,
                "Extreme Temperature": 10.344827586206897,
                "Flood": 25.781353767560667,
                "Mass Movement": 8.573508483853312,
                "Storm": 5.768582375478927,
                "Volcanic Activity": 0.1053639846743295
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Kazakhstan",
            "iso": "KAZ",
            "region": "Asia",
            "total_military": 71000.0,
            "sum_personnel": 7738.0,
            "count_mobilizations": 11,
            "hazards": {
                "Flood": 5.026760563380281,
                "Wildfire": 0.8450704225352111
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Kenya",
            "iso": "KEN",
            "region": "Africa",
            "total_military": 24000.0,
            "sum_personnel": 151.0,
            "count_mobilizations": 59,
            "hazards": {
                "Flood": 0.6291666666666667
            },
            "survey": {
                "International Terrorism": 75.0,
                "War (Peer-to-Peer)": 75.0,
                "Illegal Drugs": 76.0,
                "Resource Scarcities": 96.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 100.0
            },
            "has_real_survey": true
        },
        {
            "country": "Kyrgyz Republic",
            "iso": "KGZ",
            "region": "Asia",
            "total_military": 21000.0,
            "sum_personnel": 240.0,
            "count_mobilizations": 19,
            "hazards": {
                "Flood": 0.2380952380952381,
                "Mass Movement": 0.2261904761904762
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Cambodia",
            "iso": "KHM",
            "region": "Asia",
            "total_military": 191000.0,
            "sum_personnel": 1700.0,
            "count_mobilizations": 35,
            "hazards": {
                "Flood": 0.4450261780104712
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Korea, Rep.",
            "iso": "KOR",
            "region": "Asia",
            "total_military": 569000.0,
            "sum_personnel": 337500.0,
            "count_mobilizations": 60,
            "hazards": {
                "Drought": 22.847100175746924,
                "Flood": 1.5483304042179262,
                "Storm": 3.314586994727592,
                "Wildfire": 1.470415934387815
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Kuwait",
            "iso": "KWT",
            "region": "Asia",
            "total_military": 25000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Lao PDR",
            "iso": "LAO",
            "region": "Asia",
            "total_military": 129000.0,
            "sum_personnel": 100.0,
            "count_mobilizations": 26,
            "hazards": {
                "Flood": 0.07751937984496124
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Lebanon",
            "iso": "LBN",
            "region": "Asia",
            "total_military": 80000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 12,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Liberia",
            "iso": "LBR",
            "region": "Africa",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 6,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Libya",
            "iso": "LBY",
            "region": "Africa",
            "total_military": 0.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 3,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Sri Lanka",
            "iso": "LKA",
            "region": "Asia",
            "total_military": 317000.0,
            "sum_personnel": 96961.0,
            "count_mobilizations": 83,
            "hazards": {
                "Drought": 0.0005520504731861198,
                "Flood": 0.6253717890941866,
                "Mass Movement": 6.230283911671924,
                "Storm": 1.8738170347003156
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Lesotho",
            "iso": "LSO",
            "region": "Africa",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Lithuania",
            "iso": "LTU",
            "region": "Europe",
            "total_military": 37000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 5.0,
                "War (Peer-to-Peer)": 95.0,
                "Illegal Drugs": 10.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 5.0,
                "Civil Unrest": 5.0
            },
            "has_real_survey": true
        },
        {
            "country": "Luxembourg",
            "iso": "LUX",
            "region": "Europe",
            "total_military": 1000.0,
            "sum_personnel": 290.0,
            "count_mobilizations": 5,
            "hazards": {
                "Flood": 27.0,
                "Storm": 2.0
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Latvia",
            "iso": "LVA",
            "region": "Europe",
            "total_military": 9000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 2,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Morocco",
            "iso": "MAR",
            "region": "Africa",
            "total_military": 246000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 28,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Moldova",
            "iso": "MDA",
            "region": "Europe",
            "total_military": 6000.0,
            "sum_personnel": 2019.0,
            "count_mobilizations": 7,
            "hazards": {
                "Extreme Temperature": 1.0,
                "Flood": 10.883333333333333
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Madagascar",
            "iso": "MDG",
            "region": "Africa",
            "total_military": 22000.0,
            "sum_personnel": 300.0,
            "count_mobilizations": 41,
            "hazards": {
                "Drought": 0.22727272727272727,
                "Flood": 0.45454545454545453
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Maldives",
            "iso": "MDV",
            "region": "Asia",
            "total_military": 5000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 6,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Mexico",
            "iso": "MEX",
            "region": "North America",
            "total_military": 341000.0,
            "sum_personnel": 388026.0,
            "count_mobilizations": 221,
            "hazards": {
                "Earthquake": 0.9501466275659824,
                "Extreme Temperature": 0.9337243401759531,
                "Flood": 2.3316436251920125,
                "Mass Movement": 1.9090909090909092,
                "Storm": 1.971565982404692,
                "Volcanic Activity": 0.6451612903225806,
                "Wildfire": 0.5320625610948192
            },
            "survey": {
                "International Terrorism": 90.0,
                "War (Peer-to-Peer)": 50.0,
                "Illegal Drugs": 100.0,
                "Resource Scarcities": 100.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 25.0
            },
            "has_real_survey": true
        },
        {
            "country": "North Macedonia",
            "iso": "MKD",
            "region": "Europe",
            "total_military": 16000.0,
            "sum_personnel": 1320.0,
            "count_mobilizations": 10,
            "hazards": {
                "Flood": 3.4375,
                "Wildfire": 0.6875
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Mali",
            "iso": "MLI",
            "region": "Africa",
            "total_military": 41000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 13,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Malta",
            "iso": "MLT",
            "region": "Europe",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 2,
            "hazards": {},
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Myanmar",
            "iso": "MMR",
            "region": "Asia",
            "total_military": 463000.0,
            "sum_personnel": 818.0,
            "count_mobilizations": 60,
            "hazards": {
                "Earthquake": 0.08639308855291578,
                "Storm": 0.0038876889848812094
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Montenegro",
            "iso": "MNE",
            "region": "Europe",
            "total_military": 12000.0,
            "sum_personnel": 80.0,
            "count_mobilizations": 6,
            "hazards": {
                "Extreme Temperature": 0.33333333333333337
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Mongolia",
            "iso": "MNG",
            "region": "Asia",
            "total_military": 18000.0,
            "sum_personnel": 150.0,
            "count_mobilizations": 33,
            "hazards": {
                "Wildfire": 0.8333333333333334
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Mozambique",
            "iso": "MOZ",
            "region": "Africa",
            "total_military": 11000.0,
            "sum_personnel": 50730.0,
            "count_mobilizations": 60,
            "hazards": {
                "Drought": 65.20779220779221,
                "Flood": 0.9545454545454546,
                "Storm": 0.18181818181818182
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Mauritania",
            "iso": "MRT",
            "region": "Africa",
            "total_military": 21000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Mauritius",
            "iso": "MUS",
            "region": "Africa",
            "total_military": 3000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Malawi",
            "iso": "MWI",
            "region": "Africa",
            "total_military": 15000.0,
            "sum_personnel": 300.0,
            "count_mobilizations": 39,
            "hazards": {
                "Flood": 0.2666666666666667,
                "Mass Movement": 0.6666666666666667
            },
            "survey": {
                "International Terrorism": 72.0,
                "War (Peer-to-Peer)": 30.0,
                "Illegal Drugs": 84.0,
                "Resource Scarcities": 95.0,
                "Domestic Terrorism": 95.0,
                "Civil Unrest": 72.0
            },
            "has_real_survey": true
        },
        {
            "country": "Malaysia",
            "iso": "MYS",
            "region": "Asia",
            "total_military": 136000.0,
            "sum_personnel": 206650.0,
            "count_mobilizations": 84,
            "hazards": {
                "Flood": 5.81798406862745,
                "Mass Movement": 6.118382352941176,
                "Storm": 0.0400735294117647
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Namibia",
            "iso": "NAM",
            "region": "Africa",
            "total_military": 16000.0,
            "sum_personnel": 979.0,
            "count_mobilizations": 23,
            "hazards": {
                "Drought": 0.325,
                "Flood": 1.4484375
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "New Caledonia",
            "iso": "NCL",
            "region": "Asia",
            "total_military": 1650.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Niger",
            "iso": "NER",
            "region": "Africa",
            "total_military": 10000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 14,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Nigeria",
            "iso": "NGA",
            "region": "Africa",
            "total_military": 223000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 38,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Nicaragua",
            "iso": "NIC",
            "region": "North America",
            "total_military": 12000.0,
            "sum_personnel": 41317.0,
            "count_mobilizations": 54,
            "hazards": {
                "Flood": 17.595833333333335,
                "Mass Movement": 40.2,
                "Storm": 27.17142857142857,
                "Wildfire": 8.333333333333332
            },
            "survey": {
                "International Terrorism": 15.0,
                "War (Peer-to-Peer)": 40.0,
                "Illegal Drugs": 10.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 15.0,
                "Civil Unrest": 11.0
            },
            "has_real_survey": true
        },
        {
            "country": "Netherlands",
            "iso": "NLD",
            "region": "Europe",
            "total_military": 41000.0,
            "sum_personnel": 300.0,
            "count_mobilizations": 12,
            "hazards": {
                "Flood": 0.7317073170731708
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Norway",
            "iso": "NOR",
            "region": "Europe",
            "total_military": 25000.0,
            "sum_personnel": 550.0,
            "count_mobilizations": 6,
            "hazards": {
                "Mass Movement": 2.1999999999999997
            },
            "survey": {
                "International Terrorism": 46.0,
                "War (Peer-to-Peer)": 52.0,
                "Illegal Drugs": 18.0,
                "Resource Scarcities": 71.0,
                "Domestic Terrorism": 39.0,
                "Civil Unrest": 66.0
            },
            "has_real_survey": true
        },
        {
            "country": "Nepal",
            "iso": "NPL",
            "region": "Asia",
            "total_military": 112000.0,
            "sum_personnel": 445625.0,
            "count_mobilizations": 109,
            "hazards": {
                "Drought": 9.684821428571428,
                "Earthquake": 29.71919642857143,
                "Flood": 7.627232142857142,
                "Mass Movement": 23.612117346938778,
                "Storm": 4.16875
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "New Zealand",
            "iso": "NZL",
            "region": "Oceania/Pacific",
            "total_military": 10000.0,
            "sum_personnel": 7699.0,
            "count_mobilizations": 51,
            "hazards": {
                "Earthquake": 13.64,
                "Flood": 1.4212500000000001,
                "Storm": 2.261,
                "Volcanic Activity": 0.09,
                "Wildfire": 2.0
            },
            "survey": {
                "International Terrorism": 50.0,
                "War (Peer-to-Peer)": 18.0,
                "Illegal Drugs": 75.0,
                "Resource Scarcities": 80.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "has_real_survey": true
        },
        {
            "country": "Oman",
            "iso": "OMN",
            "region": "Asia",
            "total_military": 47000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 11,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Pakistan",
            "iso": "PAK",
            "region": "Asia",
            "total_military": 943000.0,
            "sum_personnel": 546552.0,
            "count_mobilizations": 191,
            "hazards": {
                "Earthquake": 1.172640509013786,
                "Extreme Temperature": 0.017674089784376106,
                "Flood": 2.4171261930010606,
                "Mass Movement": 2.5406813361611875,
                "Storm": 0.5130081300813009
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Panama",
            "iso": "PAN",
            "region": "North America",
            "total_military": 28000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 2,
            "hazards": {},
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Peru",
            "iso": "PER",
            "region": "South America",
            "total_military": 158000.0,
            "sum_personnel": 63214.0,
            "count_mobilizations": 151,
            "hazards": {
                "Earthquake": 0.14303797468354432,
                "Flood": 0.6469505178365937,
                "Mass Movement": 2.509142053445851,
                "Storm": 3.1898734177215187,
                "Wildfire": 0.025316455696202535
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Philippines",
            "iso": "PHL",
            "region": "Asia",
            "total_military": 157000.0,
            "sum_personnel": 965366.0,
            "count_mobilizations": 566,
            "hazards": {
                "Earthquake": 0.22462845010615715,
                "Flood": 5.672601023284954,
                "Mass Movement": 3.878865083960626,
                "Storm": 6.207837933474877,
                "Volcanic Activity": 0.4280254777070064,
                "Wildfire": 0.3184713375796179
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Papua New Guinea",
            "iso": "PNG",
            "region": "Oceania/Pacific",
            "total_military": 4000.0,
            "sum_personnel": 805.0,
            "count_mobilizations": 43,
            "hazards": {
                "Earthquake": 2.5,
                "Flood": 1.5,
                "Mass Movement": 0.96,
                "Storm": 2.0,
                "Volcanic Activity": 1.0541666666666667
            },
            "survey": {
                "International Terrorism": 30.0,
                "War (Peer-to-Peer)": 42.67,
                "Illegal Drugs": 50.0,
                "Resource Scarcities": 51.67,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 6.67
            },
            "has_real_survey": false
        },
        {
            "country": "Poland",
            "iso": "POL",
            "region": "Europe",
            "total_military": 189000.0,
            "sum_personnel": 75653.0,
            "count_mobilizations": 24,
            "hazards": {
                "Extreme Temperature": 0.1992063492063492,
                "Flood": 7.261904761904762,
                "Storm": 2.1164021164021163
            },
            "survey": {
                "International Terrorism": 25.0,
                "War (Peer-to-Peer)": 50.0,
                "Illegal Drugs": 20.0,
                "Resource Scarcities": 20.0,
                "Domestic Terrorism": 25.0,
                "Civil Unrest": 0.0
            },
            "has_real_survey": true
        },
        {
            "country": "Korea, Dem. People's Rep.",
            "iso": "PRK",
            "region": "Asia",
            "total_military": 1469000.0,
            "sum_personnel": 140000.0,
            "count_mobilizations": 30,
            "hazards": {
                "Flood": 3.1767642387111414
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Portugal",
            "iso": "PRT",
            "region": "Europe",
            "total_military": 52000.0,
            "sum_personnel": 15827.0,
            "count_mobilizations": 36,
            "hazards": {
                "Drought": 1.3461538461538463,
                "Extreme Temperature": 1.6765384615384615,
                "Flood": 0.8653846153846154,
                "Storm": 3.8461538461538463,
                "Wildfire": 1.7773504273504273
            },
            "survey": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 70.0,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": true
        },
        {
            "country": "Paraguay",
            "iso": "PRY",
            "region": "South America",
            "total_military": 29000.0,
            "sum_personnel": 920.0,
            "count_mobilizations": 33,
            "hazards": {
                "Flood": 0.41379310344827586,
                "Storm": 0.5172413793103449,
                "Wildfire": 1.7241379310344827
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Qatar",
            "iso": "QAT",
            "region": "Asia",
            "total_military": 22000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Romania",
            "iso": "ROU",
            "region": "Europe",
            "total_military": 128000.0,
            "sum_personnel": 56391.0,
            "count_mobilizations": 63,
            "hazards": {
                "Extreme Temperature": 3.125,
                "Flood": 1.8990513392857142,
                "Storm": 0.99375
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Russian Federation",
            "iso": "RUS",
            "region": "Europe",
            "total_military": 1454000.0,
            "sum_personnel": 540805.0,
            "count_mobilizations": 94,
            "hazards": {
                "Drought": 8.872077028885831,
                "Earthquake": 0.08438789546079781,
                "Extreme Temperature": 3.6672397982576803,
                "Flood": 0.3541036221916552,
                "Mass Movement": 0.11737734983952315,
                "Storm": 0.05228679504814305,
                "Wildfire": 0.03464580467675378
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Rwanda",
            "iso": "RWA",
            "region": "Africa",
            "total_military": 35000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 26,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Saudi Arabia",
            "iso": "SAU",
            "region": "Asia",
            "total_military": 282000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 8,
            "hazards": {},
            "survey": {
                "International Terrorism": 15.0,
                "War (Peer-to-Peer)": 40.0,
                "Illegal Drugs": 10.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 15.0,
                "Civil Unrest": 11.0
            },
            "has_real_survey": true
        },
        {
            "country": "Sudan",
            "iso": "SDN",
            "region": "Africa",
            "total_military": 144000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 31,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Senegal",
            "iso": "SEN",
            "region": "Africa",
            "total_military": 19000.0,
            "sum_personnel": 540.0,
            "count_mobilizations": 15,
            "hazards": {
                "Storm": 2.8421052631578947
            },
            "survey": {
                "International Terrorism": 49.0,
                "War (Peer-to-Peer)": 75.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 30.0,
                "Domestic Terrorism": 25.0,
                "Civil Unrest": 15.0
            },
            "has_real_survey": true
        },
        {
            "country": "Singapore",
            "iso": "SGP",
            "region": "Asia",
            "total_military": 59000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Sierra Leone",
            "iso": "SLE",
            "region": "Africa",
            "total_military": 9000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 12,
            "hazards": {},
            "survey": {
                "International Terrorism": 25.0,
                "War (Peer-to-Peer)": 50.0,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": true
        },
        {
            "country": "El Salvador",
            "iso": "SLV",
            "region": "North America",
            "total_military": 42000.0,
            "sum_personnel": 41378.0,
            "count_mobilizations": 49,
            "hazards": {
                "Earthquake": 0.10714285714285715,
                "Flood": 35.714285714285715,
                "Mass Movement": 0.20714285714285713,
                "Storm": 5.292380952380952
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "has_real_survey": false
        },
        {
            "country": "Somalia, Fed. Rep.",
            "iso": "SOM",
            "region": "Africa",
            "total_military": 14000.0,
            "sum_personnel": 300.0,
            "count_mobilizations": 40,
            "hazards": {
                "Storm": 2.142857142857143
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Serbia",
            "iso": "SRB",
            "region": "Europe",
            "total_military": 32000.0,
            "sum_personnel": 48075.0,
            "count_mobilizations": 22,
            "hazards": {
                "Extreme Temperature": 35.15625,
                "Flood": 1.921875
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "South Sudan",
            "iso": "SSD",
            "region": "Africa",
            "total_military": 53000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 10,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Suriname",
            "iso": "SUR",
            "region": "South America",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 4,
            "hazards": {},
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Slovak Republic",
            "iso": "SVK",
            "region": "Europe",
            "total_military": 18000.0,
            "sum_personnel": 1059.0,
            "count_mobilizations": 6,
            "hazards": {
                "Flood": 4.772222222222222,
                "Storm": 1.1111111111111112
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Slovenia",
            "iso": "SVN",
            "region": "Europe",
            "total_military": 7000.0,
            "sum_personnel": 2502.0,
            "count_mobilizations": 10,
            "hazards": {
                "Extreme Temperature": 4.285714285714286,
                "Flood": 20.02857142857143,
                "Storm": 7.142857142857142
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Sweden",
            "iso": "SWE",
            "region": "Europe",
            "total_military": 15000.0,
            "sum_personnel": 4300.0,
            "count_mobilizations": 6,
            "hazards": {
                "Extreme Temperature": 5.333333333333334,
                "Storm": 20.0,
                "Wildfire": 3.3333333333333335
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Syrian Arab Republic",
            "iso": "SYR",
            "region": "Asia",
            "total_military": 269000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 10,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Turks and Caicos Islands",
            "iso": "TCA",
            "region": "Asia",
            "total_military": 50.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 0,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Chad",
            "iso": "TCD",
            "region": "Africa",
            "total_military": 45000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 21,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Togo",
            "iso": "TGO",
            "region": "Africa",
            "total_military": 10000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 5,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Thailand",
            "iso": "THA",
            "region": "Asia",
            "total_military": 455000.0,
            "sum_personnel": 135470.0,
            "count_mobilizations": 140,
            "hazards": {
                "Earthquake": 0.6043956043956045,
                "Flood": 3.150427350427351,
                "Mass Movement": 0.16703296703296705,
                "Storm": 0.021978021978021976
            },
            "survey": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 72.0,
                "Illegal Drugs": 54.0,
                "Resource Scarcities": 54.0,
                "Domestic Terrorism": 52.0,
                "Civil Unrest": 51.0
            },
            "has_real_survey": true
        },
        {
            "country": "Tajikistan",
            "iso": "TJK",
            "region": "Asia",
            "total_military": 17000.0,
            "sum_personnel": 8306.0,
            "count_mobilizations": 33,
            "hazards": {
                "Earthquake": 1.7999999999999998,
                "Mass Movement": 15.686274509803921
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Turkmenistan",
            "iso": "TKM",
            "region": "Asia",
            "total_military": 57000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 1,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Timor-Leste",
            "iso": "TLS",
            "region": "Asia",
            "total_military": 2000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 3,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Trinidad and Tobago",
            "iso": "TTO",
            "region": "South America",
            "total_military": 5000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 6,
            "hazards": {},
            "survey": {
                "International Terrorism": 91.0,
                "War (Peer-to-Peer)": 97.0,
                "Illegal Drugs": 77.0,
                "Resource Scarcities": 57.0,
                "Domestic Terrorism": 60.0,
                "Civil Unrest": 42.0
            },
            "has_real_survey": true
        },
        {
            "country": "Tunisia",
            "iso": "TUN",
            "region": "Africa",
            "total_military": 48000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 11,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Turkiye",
            "iso": "TUR",
            "region": "Asia",
            "total_military": 512000.0,
            "sum_personnel": 640411.0,
            "count_mobilizations": 109,
            "hazards": {
                "Earthquake": 3.672062174479167,
                "Flood": 0.4486328125,
                "Storm": 35.15625
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Tanzania",
            "iso": "TZA",
            "region": "Africa",
            "total_military": 28000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 47,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Uganda",
            "iso": "UGA",
            "region": "Africa",
            "total_military": 46000.0,
            "sum_personnel": 4550.0,
            "count_mobilizations": 41,
            "hazards": {
                "Flood": 2.3369565217391304,
                "Mass Movement": 0.5434782608695652
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Ukraine",
            "iso": "UKR",
            "region": "Europe",
            "total_military": 298000.0,
            "sum_personnel": 15687.0,
            "count_mobilizations": 18,
            "hazards": {
                "Extreme Temperature": 1.2080536912751678,
                "Flood": 0.6759507829977628,
                "Storm": 0.2237136465324385,
                "Wildfire": 0.148993288590604
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "has_real_survey": false
        },
        {
            "country": "Uruguay",
            "iso": "URY",
            "region": "South America",
            "total_military": 22000.0,
            "sum_personnel": 3623.0,
            "count_mobilizations": 29,
            "hazards": {
                "Flood": 2.7446969696969696
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "United States",
            "iso": "USA",
            "region": "North America",
            "total_military": 1395000.0,
            "sum_personnel": 4169052.0,
            "count_mobilizations": 827,
            "hazards": {
                "Earthquake": 0.315826363998407,
                "Flood": 0.47727715126613635,
                "Storm": 0.5997725677123749,
                "Volcanic Activity": 0.1032258064516129,
                "Wildfire": 0.0914799880525687
            },
            "survey": {
                "International Terrorism": 39.516129032258064,
                "War (Peer-to-Peer)": 75.96774193548387,
                "Illegal Drugs": 11.935483870967742,
                "Resource Scarcities": 22.225806451612904,
                "Domestic Terrorism": 18.35483870967742,
                "Civil Unrest": 10.419354838709678
            },
            "has_real_survey": true
        },
        {
            "country": "Uzbekistan",
            "iso": "UZB",
            "region": "Asia",
            "total_military": 68000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 3,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Venezuela, RB",
            "iso": "VEN",
            "region": "South America",
            "total_military": 343000.0,
            "sum_personnel": 76200.0,
            "count_mobilizations": 33,
            "hazards": {
                "Flood": 3.1236984589754266,
                "Mass Movement": 0.3498542274052478
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "has_real_survey": false
        },
        {
            "country": "Viet Nam",
            "iso": "VNM",
            "region": "Asia",
            "total_military": 522000.0,
            "sum_personnel": 13027682.0,
            "count_mobilizations": 225,
            "hazards": {
                "Extreme Temperature": 88.12260536398468,
                "Flood": 27.82260536398467,
                "Mass Movement": 10.450191570881227,
                "Storm": 39.573935413245756
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "Yemen, Rep.",
            "iso": "YEM",
            "region": "Asia",
            "total_military": 40000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 20,
            "hazards": {},
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "has_real_survey": false
        },
        {
            "country": "South Africa",
            "iso": "ZAF",
            "region": "Africa",
            "total_military": 89000.0,
            "sum_personnel": 80336.0,
            "count_mobilizations": 81,
            "hazards": {
                "Earthquake": 0.2584269662921348,
                "Flood": 8.179264555669048,
                "Storm": 0.01741573033707865
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Zambia",
            "iso": "ZMB",
            "region": "Africa",
            "total_military": 16000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 18,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Zimbabwe",
            "iso": "ZWE",
            "region": "Africa",
            "total_military": 51000.0,
            "sum_personnel": 0.0,
            "count_mobilizations": 15,
            "hazards": {},
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "has_real_survey": false
        },
        {
            "country": "Global (Based on Median)",
            "iso": "REG_Global",
            "region": "Global",
            "total_military": 37000.0,
            "sum_personnel": 58075955.0,
            "count_mobilizations": 2413,
            "hazards": {
                "Drought": 3.8054054054054056,
                "Earthquake": 6.256756756756757,
                "Extreme Temperature": 2.9729729729729732,
                "Flood": 5.405405405405405,
                "Mass Movement": 6.756756756756757,
                "Storm": 8.08108108108108,
                "Volcanic Activity": 0.6756756756756757,
                "Wildfire": 1.4864864864864866
            },
            "survey": {
                "International Terrorism": 36.36,
                "War (Peer-to-Peer)": 70.79,
                "Illegal Drugs": 20.44,
                "Resource Scarcities": 29.84,
                "Domestic Terrorism": 26.12,
                "Civil Unrest": 19.83
            },
            "hazards_min": {
                "Drought": 0.0022082018927444794,
                "Earthquake": 0.0008602150537634409,
                "Extreme Temperature": 0.029573590096286104,
                "Flood": 0.0012903225806451613,
                "Mass Movement": 0.0005541069100391134,
                "Storm": 0.0003259452411994785,
                "Volcanic Activity": 0.006804733727810651,
                "Wildfire": 0.0030824372759856635
            },
            "hazards_max": {
                "Drought": 454.54545454545456,
                "Earthquake": 58.99017857142857,
                "Extreme Temperature": 88.12260536398468,
                "Flood": 254.78927203065135,
                "Mass Movement": 80.35714285714286,
                "Storm": 197.23865877712032,
                "Volcanic Activity": 6.0,
                "Wildfire": 9.859154929577464
            },
            "survey_min": {
                "International Terrorism": 0.0,
                "War (Peer-to-Peer)": 0.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 0.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 100.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 100.0,
                "Resource Scarcities": 100.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 100.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "North America",
            "iso": "REG_North America",
            "region": "North America",
            "total_military": 23000.0,
            "sum_personnel": 4836583.0,
            "count_mobilizations": 711,
            "hazards": {
                "Drought": 30.434782608695656,
                "Earthquake": 3.369565217391304,
                "Extreme Temperature": 6.086956521739131,
                "Flood": 8.695652173913043,
                "Mass Movement": 20.973913043478262,
                "Storm": 13.0,
                "Volcanic Activity": 1.652173913043478,
                "Wildfire": 2.4347826086956523
            },
            "survey": {
                "International Terrorism": 38.36,
                "War (Peer-to-Peer)": 74.76,
                "Illegal Drugs": 15.97,
                "Resource Scarcities": 21.12,
                "Domestic Terrorism": 21.12,
                "Civil Unrest": 11.88
            },
            "hazards_min": {
                "Drought": 30.434782608695656,
                "Earthquake": 0.0008602150537634409,
                "Extreme Temperature": 0.5833333333333334,
                "Flood": 0.0012903225806451613,
                "Mass Movement": 0.00879765395894428,
                "Storm": 0.00035842293906810036,
                "Volcanic Activity": 0.027240143369175625,
                "Wildfire": 0.0030824372759856635
            },
            "hazards_max": {
                "Drought": 30.434782608695656,
                "Earthquake": 4.651162790697675,
                "Extreme Temperature": 3.194444444444444,
                "Flood": 71.42857142857143,
                "Mass Movement": 40.2,
                "Storm": 100.0,
                "Volcanic Activity": 0.7674418604651163,
                "Wildfire": 8.333333333333332
            },
            "survey_min": {
                "International Terrorism": 5.0,
                "War (Peer-to-Peer)": 0.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 0.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 100.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 100.0,
                "Resource Scarcities": 100.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 100.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "South America",
            "iso": "REG_South America",
            "region": "South America",
            "total_military": 87000.0,
            "sum_personnel": 429486.0,
            "count_mobilizations": 188,
            "hazards": {
                "Drought": 0.6333333333333333,
                "Earthquake": 2.586206896551724,
                "Extreme Temperature": 0.5,
                "Flood": 0.5057471264367815,
                "Mass Movement": 0.3448275862068966,
                "Storm": 0.7471264367816092,
                "Volcanic Activity": 0.8051724137931034,
                "Wildfire": 1.4942528735632183
            },
            "survey": {
                "International Terrorism": 83.0,
                "War (Peer-to-Peer)": 98.5,
                "Illegal Drugs": 63.5,
                "Resource Scarcities": 66.0,
                "Domestic Terrorism": 42.5,
                "Civil Unrest": 21.0
            },
            "hazards_min": {
                "Drought": 0.014041994750656168,
                "Earthquake": 0.0189873417721519,
                "Extreme Temperature": 0.25,
                "Flood": 0.0043859649122807015,
                "Mass Movement": 0.0058411214953271035,
                "Storm": 0.014563106796116505,
                "Volcanic Activity": 0.3508771929824561,
                "Wildfire": 0.025316455696202535
            },
            "hazards_max": {
                "Drought": 0.07874015748031496,
                "Earthquake": 34.285714285714285,
                "Extreme Temperature": 0.75,
                "Flood": 12.05909090909091,
                "Mass Movement": 6.329113924050633,
                "Storm": 26.65242718446602,
                "Volcanic Activity": 0.8780701754385966,
                "Wildfire": 9.859154929577464
            },
            "survey_min": {
                "International Terrorism": 75.0,
                "War (Peer-to-Peer)": 97.0,
                "Illegal Drugs": 50.0,
                "Resource Scarcities": 57.0,
                "Domestic Terrorism": 25.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 91.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 77.0,
                "Resource Scarcities": 75.0,
                "Domestic Terrorism": 60.0,
                "Civil Unrest": 42.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "Europe",
            "iso": "REG_Europe",
            "region": "Europe",
            "total_military": 25000.0,
            "sum_personnel": 1387387.0,
            "count_mobilizations": 307,
            "hazards": {
                "Drought": 5.632000000000001,
                "Earthquake": 3.3360000000000003,
                "Extreme Temperature": 5.0,
                "Flood": 4.0,
                "Mass Movement": 6.4799999999999995,
                "Storm": 3.408,
                "Volcanic Activity": 0.5,
                "Wildfire": 1.7999999999999998
            },
            "survey": {
                "International Terrorism": 23.8,
                "War (Peer-to-Peer)": 77.666,
                "Illegal Drugs": 18.15,
                "Resource Scarcities": 29.0,
                "Domestic Terrorism": 16.85,
                "Civil Unrest": 24.38
            },
            "hazards_min": {
                "Drought": 0.46315789473684216,
                "Earthquake": 0.010204081632653062,
                "Extreme Temperature": 0.029573590096286104,
                "Flood": 0.009868421052631578,
                "Mass Movement": 0.09803921568627451,
                "Storm": 0.0028198074277854196,
                "Volcanic Activity": 0.25,
                "Wildfire": 0.018569463548830812
            },
            "hazards_max": {
                "Drought": 8.872077028885831,
                "Earthquake": 55.00000000000001,
                "Extreme Temperature": 46.875,
                "Flood": 38.25136612021858,
                "Mass Movement": 6.0,
                "Storm": 38.25136612021858,
                "Volcanic Activity": 0.75,
                "Wildfire": 5.769230769230769
            },
            "survey_min": {
                "International Terrorism": 0.0,
                "War (Peer-to-Peer)": 38.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 10.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 50.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 20.0,
                "Resource Scarcities": 100.0,
                "Domestic Terrorism": 39.0,
                "Civil Unrest": 100.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "Asia",
            "iso": "REG_Asia",
            "region": "Asia",
            "total_military": 122500.0,
            "sum_personnel": 51197484.0,
            "count_mobilizations": 1066,
            "hazards": {
                "Drought": 28.57142857142857,
                "Earthquake": 2.936326530612245,
                "Extreme Temperature": 12.244897959183673,
                "Flood": 4.081632653061225,
                "Mass Movement": 2.4489795918367347,
                "Storm": 5.714285714285714,
                "Volcanic Activity": 0.22448979591836735,
                "Wildfire": 3.1020408163265305
            },
            "survey": {
                "International Terrorism": 31.64,
                "War (Peer-to-Peer)": 73.375,
                "Illegal Drugs": 16.64,
                "Resource Scarcities": 21.64,
                "Domestic Terrorism": 31.64,
                "Civil Unrest": 19.14
            },
            "hazards_min": {
                "Drought": 0.0022082018927444794,
                "Earthquake": 0.0026627218934911242,
                "Extreme Temperature": 0.05302226935312832,
                "Flood": 0.001955671447196871,
                "Mass Movement": 0.0005541069100391134,
                "Storm": 0.0003259452411994785,
                "Volcanic Activity": 0.006804733727810651,
                "Wildfire": 0.045364891518737675
            },
            "hazards_max": {
                "Drought": 22.847100175746924,
                "Earthquake": 58.99017857142857,
                "Extreme Temperature": 88.12260536398468,
                "Flood": 254.78927203065135,
                "Mass Movement": 80.35714285714286,
                "Storm": 197.23865877712032,
                "Volcanic Activity": 0.9554140127388535,
                "Wildfire": 3.2544378698224854
            },
            "survey_min": {
                "International Terrorism": 5.0,
                "War (Peer-to-Peer)": 0.0,
                "Illegal Drugs": 0.0,
                "Resource Scarcities": 3.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 100.0,
                "War (Peer-to-Peer)": 100.0,
                "Illegal Drugs": 84.0,
                "Resource Scarcities": 95.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 72.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "Africa",
            "iso": "REG_Africa",
            "region": "Africa",
            "total_military": 19000.0,
            "sum_personnel": 164801.0,
            "count_mobilizations": 47,
            "hazards": {
                "Drought": 0.8157894736842105,
                "Earthquake": 52.63157894736842,
                "Extreme Temperature": 0.5,
                "Flood": 1.5789473684210527,
                "Mass Movement": 0.9210526315789472,
                "Storm": 1.1052631578947367,
                "Volcanic Activity": 0.2894736842105263,
                "Wildfire": 0.5
            },
            "survey": {
                "International Terrorism": 41.83,
                "War (Peer-to-Peer)": 44.16,
                "Illegal Drugs": 49.2,
                "Resource Scarcities": 59.6,
                "Domestic Terrorism": 65.2,
                "Civil Unrest": 49.6
            },
            "hazards_min": {
                "Drought": 0.325,
                "Earthquake": 0.2584269662921348,
                "Extreme Temperature": 0.25,
                "Flood": 0.056249999999999994,
                "Mass Movement": 0.5434782608695652,
                "Storm": 0.0348314606741573,
                "Volcanic Activity": 5.0,
                "Wildfire": 0.25
            },
            "hazards_max": {
                "Drought": 454.54545454545456,
                "Earthquake": 3.067484662576687,
                "Extreme Temperature": 0.75,
                "Flood": 11.235955056179774,
                "Mass Movement": 0.6666666666666667,
                "Storm": 2.8421052631578947,
                "Volcanic Activity": 6.0,
                "Wildfire": 0.75
            },
            "survey_min": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 35.0,
                "Illegal Drugs": 6.0,
                "Resource Scarcities": 2.0,
                "Domestic Terrorism": 6.0,
                "Civil Unrest": 1.0
            },
            "survey_max": {
                "International Terrorism": 75.0,
                "War (Peer-to-Peer)": 75.0,
                "Illegal Drugs": 76.0,
                "Resource Scarcities": 96.0,
                "Domestic Terrorism": 100.0,
                "Civil Unrest": 100.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "Oceania/Pacific",
            "iso": "REG_OceaniaPacific",
            "region": "Oceania/Pacific",
            "total_military": 7000.0,
            "sum_personnel": 60214.0,
            "count_mobilizations": 94,
            "hazards": {
                "Drought": 0.5,
                "Earthquake": 7.142857142857142,
                "Extreme Temperature": 12.5,
                "Flood": 3.9285714285714284,
                "Mass Movement": 0.6857142857142857,
                "Storm": 2.142857142857143,
                "Volcanic Activity": 0.4214285714285715,
                "Wildfire": 4.285714285714286
            },
            "survey": {
                "International Terrorism": 30.0,
                "War (Peer-to-Peer)": 42.67,
                "Illegal Drugs": 50.0,
                "Resource Scarcities": 51.67,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 6.67
            },
            "hazards_min": {
                "Drought": 0.25,
                "Earthquake": 0.6166666666666667,
                "Extreme Temperature": 0.6666666666666667,
                "Flood": 0.08,
                "Mass Movement": 0.8999999999999999,
                "Storm": 0.08333333333333334,
                "Volcanic Activity": 0.075,
                "Wildfire": 0.16666666666666669
            },
            "hazards_max": {
                "Drought": 0.75,
                "Earthquake": 17.96,
                "Extreme Temperature": 1.5,
                "Flood": 11.833333333333334,
                "Mass Movement": 1.5,
                "Storm": 10.725,
                "Volcanic Activity": 5.0,
                "Wildfire": 2.0
            },
            "survey_min": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 18.0,
                "Illegal Drugs": 5.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 50.0,
                "War (Peer-to-Peer)": 90.0,
                "Illegal Drugs": 75.0,
                "Resource Scarcities": 80.0,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 5.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        },
        {
            "country": "Global (Based on Averages)",
            "iso": "REG_Global2",
            "region": "Global",
            "total_military": 165000.0,
            "sum_personnel": 58075955.0,
            "count_mobilizations": 2413,
            "hazards": {
                "Drought": 19.985098039215686,
                "Earthquake": 9.148959264778938,
                "Extreme Temperature": 19.311823691460056,
                "Flood": 14.57098337821525,
                "Mass Movement": 10.936589497459062,
                "Storm": 18.84824346405229,
                "Volcanic Activity": 0.3050909090909091,
                "Wildfire": 1.2907575757575758
            },
            "survey": {
                "International Terrorism": 36.36,
                "War (Peer-to-Peer)": 70.79,
                "Illegal Drugs": 20.44,
                "Resource Scarcities": 29.84,
                "Domestic Terrorism": 26.12,
                "Civil Unrest": 19.83
            },
            "hazards_min": {
                "Drought": 0.0022082018927444794,
                "Earthquake": 0.0008602150537634409,
                "Extreme Temperature": 0.029573590096286104,
                "Flood": 0.0012903225806451613,
                "Mass Movement": 0.0005541069100391134,
                "Storm": 0.0003259452411994785,
                "Volcanic Activity": 0.006804733727810651,
                "Wildfire": 0.0030824372759856635
            },
            "hazards_max": {
                "Drought": 454.54545454545456,
                "Earthquake": 58.99017857142857,
                "Extreme Temperature": 88.12260536398468,
                "Flood": 254.78927203065135,
                "Mass Movement": 80.35714285714286,
                "Storm": 197.23865877712032,
                "Volcanic Activity": 6.0,
                "Wildfire": 9.859154929577464
            },
            "survey_min": {
                "International Terrorism": 20.0,
                "War (Peer-to-Peer)": 18.0,
                "Illegal Drugs": 5.0,
                "Resource Scarcities": 5.0,
                "Domestic Terrorism": 0.0,
                "Civil Unrest": 0.0
            },
            "survey_max": {
                "International Terrorism": 50.0,
                "War (Peer-to-Peer)": 90.0,
                "Illegal Drugs": 75.0,
                "Resource Scarcities": 80.0,
                "Domestic Terrorism": 10.0,
                "Civil Unrest": 5.0
            },
            "has_real_survey": true,
            "is_region_benchmark": true
        }
    ],
    "hazard_totals": {
        "Drought": 560582.0,
        "Earthquake": 3683371.0,
        "Extreme Temperature": 1752548.0,
        "Flood": 23537238.0,
        "Mass Movement": 2905305.0,
        "Storm": 25377275.0,
        "Volcanic Activity": 12585.0,
        "Wildfire": 247051.0
    },
    "hazard_deaths": {
        "Drought": 4953978.0,
        "Earthquake": 1465836.0,
        "Extreme Temperature": 165100.0,
        "Flood": 6288219.0,
        "Mass Movement": 35994.0,
        "Storm": 996201.0,
        "Volcanic Activity": 30639.0,
        "Wildfire": 2704.0
    }
};