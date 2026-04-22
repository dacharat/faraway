/* =========================================================
   TRAVEL_DATA — destination dataset + geo lookups
   - months          : per-month list of destination entries
   - city_coords     : [lat, lng] per city/region label (used by map view)
   - country_coords  : [lat, lng] centroid fallback when a city is missing
                       from city_coords
   To add a new destination:
     1) push it under the appropriate month in `months`
     2) add lat/lng for any new city to `city_coords`
        (or just add the country to `country_coords` for a quick fallback)
   ========================================================= */
const TRAVEL_DATA = {
  "dataset_version": "2026.04",
  "total_entries": 132,
  "currency": "USD",
  "city_coords": {
    "Bangkok": [
      13.76,
      100.5
    ],
    "Chiang Mai": [
      18.79,
      98.99
    ],
    "Krabi": [
      8.08,
      98.91
    ],
    "Koh Lanta": [
      7.63,
      99.08
    ],
    "Railay": [
      8.01,
      98.84
    ],
    "Buenos Aires": [
      -34.61,
      -58.38
    ],
    "El Calafate": [
      -50.34,
      -72.26
    ],
    "El Chaltén": [
      -49.33,
      -72.89
    ],
    "Bariloche": [
      -41.13,
      -71.31
    ],
    "Mendoza": [
      -32.89,
      -68.84
    ],
    "Península Valdés": [
      -42.5,
      -64
    ],
    "Salta": [
      -24.78,
      -65.41
    ],
    "Iguazú Falls": [
      -25.69,
      -54.44
    ],
    "Niseko": [
      42.8,
      140.69
    ],
    "Furano": [
      43.34,
      142.38
    ],
    "Sapporo": [
      43.07,
      141.35
    ],
    "Hakuba": [
      36.7,
      137.85
    ],
    "Tokyo": [
      35.68,
      139.69
    ],
    "Kyoto": [
      35.01,
      135.77
    ],
    "Osaka": [
      34.69,
      135.5
    ],
    "Nara": [
      34.68,
      135.8
    ],
    "Hirosaki": [
      40.6,
      140.46
    ],
    "Takayama": [
      36.14,
      137.25
    ],
    "Aomori": [
      40.82,
      140.74
    ],
    "Tokushima": [
      34.07,
      134.55
    ],
    "Nikko": [
      36.72,
      139.7
    ],
    "Kamikochi": [
      36.25,
      137.62
    ],
    "Hokkaido": [
      43.22,
      142.86
    ],
    "Manuel Antonio": [
      9.39,
      -84.14
    ],
    "Monteverde": [
      10.3,
      -84.82
    ],
    "La Fortuna": [
      10.47,
      -84.64
    ],
    "Tamarindo": [
      10.3,
      -85.84
    ],
    "Queenstown": [
      -45.03,
      168.66
    ],
    "Wanaka": [
      -44.7,
      169.14
    ],
    "Abel Tasman": [
      -40.99,
      173.02
    ],
    "Rotorua": [
      -38.14,
      176.25
    ],
    "Milford Sound": [
      -44.67,
      167.92
    ],
    "Bay of Islands": [
      -35.22,
      174.08
    ],
    "Wellington": [
      -41.29,
      174.78
    ],
    "Ndutu": [
      -3.06,
      34.85
    ],
    "Ngorongoro Crater": [
      -3.16,
      35.55
    ],
    "Zanzibar": [
      -6.13,
      39.31
    ],
    "Arusha": [
      -3.37,
      36.68
    ],
    "Northern Serengeti": [
      -1.89,
      34.83
    ],
    "Grumeti Reserve": [
      -2.12,
      34.24
    ],
    "Oaxaca": [
      17.06,
      -96.72
    ],
    "Mexico City": [
      19.43,
      -99.13
    ],
    "Yucatán": [
      20.71,
      -89.09
    ],
    "Baja California Sur": [
      26.04,
      -111.67
    ],
    "Mérida": [
      20.97,
      -89.62
    ],
    "San Miguel de Allende": [
      20.91,
      -100.74
    ],
    "Tromsø": [
      69.65,
      18.96
    ],
    "Lofoten Islands": [
      68.15,
      13.8
    ],
    "Alta": [
      69.97,
      23.27
    ],
    "Senja": [
      69.35,
      17
    ],
    "Hoi An": [
      15.88,
      108.33
    ],
    "Ho Chi Minh City": [
      10.82,
      106.63
    ],
    "Mekong Delta": [
      10.02,
      105.78
    ],
    "Phu Quoc": [
      10.22,
      103.96
    ],
    "Da Nang": [
      16.05,
      108.21
    ],
    "Hanoi": [
      21.03,
      105.85
    ],
    "Ha Long Bay": [
      20.91,
      107.18
    ],
    "Sapa": [
      22.34,
      103.84
    ],
    "Rio de Janeiro": [
      -22.91,
      -43.17
    ],
    "Salvador": [
      -12.97,
      -38.51
    ],
    "Olinda": [
      -8.01,
      -34.86
    ],
    "São Paulo": [
      -23.55,
      -46.63
    ],
    "Manaus": [
      -3.12,
      -60.02
    ],
    "Pantanal": [
      -16.3,
      -56.6
    ],
    "Sydney": [
      -33.87,
      151.21
    ],
    "Tasmania": [
      -41.64,
      146.32
    ],
    "Port Douglas": [
      -16.48,
      145.47
    ],
    "Melbourne": [
      -37.81,
      144.96
    ],
    "Uluru": [
      -25.34,
      131.04
    ],
    "Cairns": [
      -16.92,
      145.77
    ],
    "Petra": [
      30.33,
      35.44
    ],
    "Wadi Rum": [
      29.57,
      35.42
    ],
    "Amman": [
      31.95,
      35.93
    ],
    "Dead Sea": [
      31.56,
      35.47
    ],
    "Cape Town": [
      -33.92,
      18.42
    ],
    "Kruger National Park": [
      -24,
      31.5
    ],
    "Stellenbosch": [
      -33.94,
      18.88
    ],
    "Garden Route": [
      -33.97,
      22.45
    ],
    "Reykjavík": [
      64.14,
      -21.89
    ],
    "South Coast": [
      63.43,
      -19.36
    ],
    "Snæfellsnes Peninsula": [
      64.82,
      -23.78
    ],
    "Jökulsárlón": [
      64.05,
      -16.18
    ],
    "Westfjords": [
      65.93,
      -23.16
    ],
    "Akureyri": [
      65.68,
      -18.09
    ],
    "Highlands": [
      64.63,
      -18.3
    ],
    "Kandy": [
      7.29,
      80.64
    ],
    "Ella": [
      6.87,
      81.05
    ],
    "Galle": [
      6.04,
      80.22
    ],
    "Yala National Park": [
      6.36,
      81.52
    ],
    "Amsterdam": [
      52.37,
      4.9
    ],
    "Keukenhof": [
      52.27,
      4.55
    ],
    "Rotterdam": [
      51.92,
      4.48
    ],
    "The Hague": [
      52.08,
      4.31
    ],
    "Cusco": [
      -13.53,
      -71.97
    ],
    "Machu Picchu": [
      -13.16,
      -72.55
    ],
    "Sacred Valley": [
      -13.32,
      -72.08
    ],
    "Arequipa": [
      -16.4,
      -71.54
    ],
    "Colca Canyon": [
      -15.6,
      -71.8
    ],
    "Lake Titicaca": [
      -15.5,
      -69.75
    ],
    "Paro": [
      27.43,
      89.42
    ],
    "Thimphu": [
      27.47,
      89.64
    ],
    "Punakha": [
      27.59,
      89.86
    ],
    "Bumthang": [
      27.56,
      90.75
    ],
    "Rome": [
      41.9,
      12.5
    ],
    "Amalfi Coast": [
      40.63,
      14.6
    ],
    "Florence": [
      43.77,
      11.25
    ],
    "Puglia": [
      40.79,
      17.1
    ],
    "Tuscany": [
      43.32,
      11.33
    ],
    "Venice": [
      45.44,
      12.32
    ],
    "Okavango Delta": [
      -19.28,
      22.89
    ],
    "Chobe National Park": [
      -18.78,
      24.66
    ],
    "Moremi Game Reserve": [
      -19.28,
      23.57
    ],
    "Makgadikgadi Pans": [
      -20.8,
      25.2
    ],
    "Paris": [
      48.85,
      2.35
    ],
    "French Riviera": [
      43.7,
      7.27
    ],
    "Provence": [
      43.95,
      4.8
    ],
    "Loire Valley": [
      47.47,
      0.5
    ],
    "Bali": [
      -8.34,
      115.09
    ],
    "Yogyakarta": [
      -7.8,
      110.36
    ],
    "Komodo": [
      -8.55,
      119.49
    ],
    "Lombok": [
      -8.65,
      116.32
    ],
    "Nusa Penida": [
      -8.73,
      115.54
    ],
    "Gili Islands": [
      -8.35,
      116.04
    ],
    "Komodo National Park": [
      -8.55,
      119.49
    ],
    "Vancouver": [
      49.28,
      -123.12
    ],
    "Banff": [
      51.18,
      -115.57
    ],
    "Lake Louise": [
      51.43,
      -116.18
    ],
    "Quebec City": [
      46.81,
      -71.21
    ],
    "Québec City": [
      46.81,
      -71.21
    ],
    "Niagara": [
      43.09,
      -79.08
    ],
    "Jasper": [
      52.87,
      -118.08
    ],
    "Montréal": [
      45.5,
      -73.57
    ],
    "Masai Mara": [
      -1.48,
      35.14
    ],
    "Amboseli": [
      -2.65,
      37.26
    ],
    "Samburu": [
      0.62,
      37.54
    ],
    "Lamu": [
      -2.27,
      40.9
    ],
    "Ljubljana": [
      46.06,
      14.51
    ],
    "Lake Bled": [
      46.37,
      14.11
    ],
    "Soča Valley": [
      46.25,
      13.73
    ],
    "Piran": [
      45.53,
      13.57
    ],
    "Ulaanbaatar": [
      47.89,
      106.91
    ],
    "Gobi Desert": [
      42.8,
      103
    ],
    "Terelj National Park": [
      47.98,
      107.47
    ],
    "Khövsgöl Lake": [
      50.5,
      100.3
    ],
    "Kharkhorin": [
      47.2,
      102.83
    ],
    "Santorini": [
      36.39,
      25.46
    ],
    "Crete": [
      35.24,
      24.81
    ],
    "Milos": [
      36.75,
      24.42
    ],
    "Athens": [
      37.98,
      23.73
    ],
    "Valencia": [
      39.47,
      -0.38
    ],
    "Buñol": [
      39.42,
      -0.79
    ],
    "San Sebastián": [
      43.32,
      -1.98
    ],
    "Mallorca": [
      39.7,
      2.99
    ],
    "Barcelona": [
      41.39,
      2.17
    ],
    "Jungfrau Region": [
      46.54,
      7.98
    ],
    "Zermatt": [
      46.02,
      7.75
    ],
    "Lucerne": [
      47.05,
      8.31
    ],
    "Engadine": [
      46.5,
      9.84
    ],
    "Denali National Park": [
      63.33,
      -150.5
    ],
    "Kenai Fjords": [
      59.88,
      -149.9
    ],
    "Katmai": [
      58.5,
      -155
    ],
    "Anchorage": [
      61.22,
      -149.9
    ],
    "Vermont": [
      44.56,
      -72.58
    ],
    "White Mountains": [
      44.27,
      -71.3
    ],
    "Acadia": [
      44.35,
      -68.2
    ],
    "Upstate New York": [
      43,
      -75
    ],
    "Istanbul": [
      41.01,
      28.98
    ],
    "Cappadocia": [
      38.65,
      34.83
    ],
    "Ephesus": [
      37.94,
      27.34
    ],
    "Antalya": [
      36.9,
      30.69
    ],
    "Pamukkale": [
      37.92,
      29.12
    ],
    "Volcanoes National Park": [
      -1.48,
      29.49
    ],
    "Kigali": [
      -1.94,
      30.06
    ],
    "Nyungwe Forest": [
      -2.47,
      29.15
    ],
    "Lake Kivu": [
      -2.04,
      29.17
    ],
    "Kathmandu": [
      27.71,
      85.32
    ],
    "Kathmandu Valley": [
      27.71,
      85.32
    ],
    "Annapurna region": [
      28.6,
      83.82
    ],
    "Khumbu region": [
      27.95,
      86.8
    ],
    "Upper Mustang": [
      29.18,
      83.97
    ],
    "Pokhara": [
      28.21,
      83.98
    ],
    "Everest Base Camp": [
      28,
      86.85
    ],
    "Annapurna Circuit": [
      28.6,
      84
    ],
    "Munich": [
      48.14,
      11.58
    ],
    "Berlin": [
      52.52,
      13.4
    ],
    "Romantic Road": [
      49.37,
      10.18
    ],
    "Black Forest": [
      48,
      8.25
    ],
    "Nuremberg": [
      49.45,
      11.08
    ],
    "Dresden": [
      51.05,
      13.74
    ],
    "Cologne": [
      50.94,
      6.96
    ],
    "Etosha National Park": [
      -18.85,
      16.33
    ],
    "Sossusvlei": [
      -24.76,
      15.29
    ],
    "Swakopmund": [
      -22.68,
      14.53
    ],
    "Damaraland": [
      -20.5,
      14.5
    ],
    "Muscat": [
      23.59,
      58.41
    ],
    "Wahiba Sands": [
      22.02,
      58.88
    ],
    "Jebel Akhdar": [
      23.05,
      57.66
    ],
    "Musandam Peninsula": [
      26.2,
      56.25
    ],
    "Jaipur": [
      26.92,
      75.79
    ],
    "Rajasthan": [
      27.02,
      74.22
    ],
    "Varanasi": [
      25.32,
      83.01
    ],
    "Delhi": [
      28.61,
      77.21
    ],
    "Kerala backwaters": [
      9.5,
      76.34
    ],
    "Rovaniemi": [
      66.5,
      25.73
    ],
    "Levi": [
      67.8,
      24.82
    ],
    "Helsinki": [
      60.17,
      24.94
    ],
    "Saariselkä": [
      68.42,
      27.43
    ],
    "Lalibela": [
      12.03,
      39.04
    ],
    "Gondar": [
      12.6,
      37.47
    ],
    "Simien Mountains": [
      13.18,
      38.03
    ],
    "Addis Ababa": [
      9.03,
      38.74
    ],
    "4,000 Islands": [
      13.95,
      105.85
    ],
    "Abu Dhabi": [
      24.45,
      54.39
    ],
    "Addu Atoll": [
      -0.6,
      73.1
    ],
    "Ait Benhaddou": [
      31.05,
      -7.13
    ],
    "Akagera NP": [
      -1.75,
      30.72
    ],
    "Alentejo": [
      38.5,
      -7.85
    ],
    "Algarve": [
      37.05,
      -8.13
    ],
    "Alsace": [
      48.32,
      7.45
    ],
    "Amazon": [
      -3.74,
      -73.25
    ],
    "Ambergris Caye": [
      17.92,
      -87.97
    ],
    "Angkor Wat": [
      13.41,
      103.87
    ],
    "Annapurna": [
      28.6,
      83.82
    ],
    "Arenal": [
      10.46,
      -84.7
    ],
    "Ari Atoll": [
      3.85,
      72.83
    ],
    "Arugam Bay": [
      6.84,
      81.84
    ],
    "Aswan": [
      24.09,
      32.9
    ],
    "Atacama Desert": [
      -23.5,
      -68.2
    ],
    "Atacama": [
      -23.5,
      -68.2
    ],
    "Ayutthaya": [
      14.36,
      100.58
    ],
    "Azores": [
      37.74,
      -25.66
    ],
    "Baa Atoll": [
      5.2,
      73.07
    ],
    "Bagan": [
      21.17,
      94.86
    ],
    "Batumi": [
      41.64,
      41.64
    ],
    "Belize City": [
      17.5,
      -88.2
    ],
    "Bergen": [
      60.39,
      5.32
    ],
    "Bilbao": [
      43.26,
      -2.93
    ],
    "Bodrum": [
      37.03,
      27.43
    ],
    "Bogotá": [
      4.71,
      -74.07
    ],
    "Bolaven Plateau": [
      15.2,
      106.2
    ],
    "Bondi Beach": [
      -33.89,
      151.28
    ],
    "Boracay": [
      11.97,
      121.92
    ],
    "Brittany": [
      48.2,
      -2.93
    ],
    "Cairngorms": [
      57.08,
      -3.67
    ],
    "Cairo": [
      30.04,
      31.24
    ],
    "Cartagena": [
      10.39,
      -75.51
    ],
    "Cebu": [
      10.32,
      123.9
    ],
    "Central Kalahari": [
      -22.5,
      23.5
    ],
    "Chobe": [
      -18.78,
      24.66
    ],
    "Coffee Region": [
      4.81,
      -75.69
    ],
    "Comporta": [
      38.39,
      -8.79
    ],
    "Connemara": [
      53.5,
      -9.86
    ],
    "Corcovado NP": [
      8.55,
      -83.59
    ],
    "Córdoba": [
      37.89,
      -4.78
    ],
    "Denali NP": [
      63.33,
      -150.5
    ],
    "Diani Beach": [
      -4.3,
      39.59
    ],
    "Dingle Peninsula": [
      52.13,
      -10.27
    ],
    "Douro Valley": [
      41.16,
      -7.79
    ],
    "Draa Valley": [
      30.32,
      -6.23
    ],
    "Dubai": [
      25.2,
      55.27
    ],
    "Dublin": [
      53.35,
      -6.26
    ],
    "Dubrovnik": [
      42.65,
      18.09
    ],
    "Easter Island": [
      -27.11,
      -109.35
    ],
    "Edinburgh": [
      55.95,
      -3.19
    ],
    "Essaouira": [
      31.51,
      -9.77
    ],
    "Etosha NP": [
      -18.85,
      16.33
    ],
    "Flåm": [
      60.86,
      7.11
    ],
    "Fortaleza": [
      -3.73,
      -38.52
    ],
    "Fès": [
      34.02,
      -5
    ],
    "Geiranger": [
      62.1,
      7.21
    ],
    "Glacier Bay": [
      58.5,
      -136.9
    ],
    "Goa": [
      15.3,
      74.12
    ],
    "Great Barrier Reef": [
      -18.29,
      147.7
    ],
    "Ha Giang": [
      22.83,
      104.98
    ],
    "Hakkaido": [
      43.22,
      142.86
    ],
    "Hakone": [
      35.23,
      139.1
    ],
    "Harar": [
      9.31,
      42.14
    ],
    "Havana": [
      23.11,
      -82.37
    ],
    "Hudson Valley": [
      41.7,
      -73.94
    ],
    "Hvar": [
      43.17,
      16.44
    ],
    "Hội An": [
      15.88,
      108.33
    ],
    "Inle Lake": [
      20.57,
      96.91
    ],
    "Isle of Skye": [
      57.27,
      -6.22
    ],
    "Kakheti Wine Region": [
      41.92,
      45.69
    ],
    "Kampot": [
      10.61,
      104.18
    ],
    "Kas": [
      36.2,
      29.64
    ],
    "Katmai NP": [
      58.5,
      -155
    ],
    "Kazbegi": [
      42.66,
      44.64
    ],
    "Kerala": [
      10.85,
      76.27
    ],
    "Khumbu": [
      27.95,
      86.8
    ],
    "Koh Rong": [
      10.72,
      103.27
    ],
    "Koh Samui": [
      9.51,
      100.01
    ],
    "Kruger": [
      -24,
      31.5
    ],
    "Lake Tekapo": [
      -44,
      170.48
    ],
    "Langtang": [
      28.21,
      85.55
    ],
    "Lisbon": [
      38.72,
      -9.14
    ],
    "Loch Lomond": [
      56.1,
      -4.62
    ],
    "Luang Prabang": [
      19.89,
      102.13
    ],
    "Luxor": [
      25.69,
      32.64
    ],
    "Mandalay": [
      21.97,
      96.08
    ],
    "Marrakech": [
      31.63,
      -8.01
    ],
    "Matsumoto": [
      36.24,
      137.97
    ],
    "Medellín": [
      6.24,
      -75.58
    ],
    "Merzouga": [
      31.1,
      -4.01
    ],
    "Moremi": [
      -19.28,
      23.57
    ],
    "Mount Hutt": [
      -43.47,
      171.55
    ],
    "Mumbai": [
      19.08,
      72.88
    ],
    "Mustang": [
      28.99,
      83.95
    ],
    "Myvatn": [
      65.6,
      -16.99
    ],
    "Nairobi": [
      -1.29,
      36.82
    ],
    "Naxos": [
      37.1,
      25.38
    ],
    "New Hampshire": [
      43.19,
      -71.57
    ],
    "Ngapali Beach": [
      18.45,
      94.36
    ],
    "Ngorongoro": [
      -3.16,
      35.55
    ],
    "North Malé Atoll": [
      4.4,
      73.5
    ],
    "Okinawa": [
      26.34,
      127.94
    ],
    "Omo Valley": [
      5.62,
      36.55
    ],
    "Orkney": [
      59,
      -3
    ],
    "Ottawa": [
      45.42,
      -75.69
    ],
    "Pai": [
      19.36,
      98.45
    ],
    "Palawan": [
      9.84,
      118.74
    ],
    "Paros": [
      37.08,
      25.15
    ],
    "Pelion": [
      39.43,
      23.05
    ],
    "Phnom Penh": [
      11.55,
      104.92
    ],
    "Phong Nha Caves": [
      17.59,
      106.28
    ],
    "Placencia": [
      16.51,
      -88.37
    ],
    "Plitvice Lakes": [
      44.88,
      15.62
    ],
    "Polonnaruwa": [
      7.94,
      81
    ],
    "Porto": [
      41.16,
      -8.62
    ],
    "Puno": [
      -15.84,
      -70.02
    ],
    "Pátzcuaro": [
      19.51,
      -101.61
    ],
    "Raa Atoll": [
      5.6,
      72.95
    ],
    "Rann of Kutch": [
      23.97,
      70.66
    ],
    "Ras Al Khaimah": [
      25.79,
      55.94
    ],
    "Rhine Valley": [
      50.07,
      7.71
    ],
    "Rhodes": [
      36.43,
      28.22
    ],
    "Rovinj": [
      45.08,
      13.63
    ],
    "San Cristóbal de las Casas": [
      16.74,
      -92.64
    ],
    "San Ignacio": [
      17.16,
      -89.07
    ],
    "Santiago": [
      -33.45,
      -70.67
    ],
    "Seville": [
      37.39,
      -5.99
    ],
    "Sharm el-Sheikh": [
      27.91,
      34.33
    ],
    "Siargao": [
      9.86,
      126.05
    ],
    "Siem Reap": [
      13.36,
      103.86
    ],
    "Sigiriya": [
      7.96,
      80.76
    ],
    "Split": [
      43.51,
      16.44
    ],
    "São Luís": [
      -2.53,
      -44.3
    ],
    "Tamil Nadu": [
      11.13,
      78.66
    ],
    "Tbilisi": [
      41.72,
      44.78
    ],
    "Terelj NP": [
      47.98,
      107.47
    ],
    "Terelj": [
      47.98,
      107.47
    ],
    "Tohoku": [
      39.7,
      141.15
    ],
    "Torres del Paine": [
      -50.97,
      -73.41
    ],
    "Tortuguero": [
      10.54,
      -83.5
    ],
    "Tour de France routes": [
      45.76,
      4.85
    ],
    "Triglav NP": [
      46.36,
      13.84
    ],
    "Trincomalee": [
      8.57,
      81.23
    ],
    "Trinidad": [
      21.8,
      -79.99
    ],
    "Tsavo": [
      -2.99,
      38.47
    ],
    "Valparaíso": [
      -33.05,
      -71.61
    ],
    "Vang Vieng": [
      18.92,
      102.45
    ],
    "Varadero": [
      23.16,
      -81.27
    ],
    "Vis": [
      43.06,
      16.18
    ],
    "Viñales": [
      22.62,
      -83.71
    ],
    "Volcanoes NP": [
      -1.48,
      29.49
    ],
    "Wild Atlantic Way": [
      53.27,
      -9.05
    ],
    "Yucatán Peninsula": [
      20.71,
      -89.09
    ],
    "Zakynthos": [
      37.79,
      20.9
    ],
    "Óbidos": [
      39.36,
      -9.16
    ],
    "Harbin": [
      45.75,
      126.64
    ],
    "Sanya": [
      18.25,
      109.51
    ],
    "Hong Kong": [
      22.32,
      114.17
    ],
    "Guilin": [
      25.27,
      110.29
    ],
    "Yangshuo": [
      24.78,
      110.49
    ],
    "Chengdu": [
      30.57,
      104.07
    ],
    "Jiuzhaigou": [
      33.26,
      103.92
    ],
    "Hangzhou": [
      30.25,
      120.15
    ],
    "West Lake": [
      30.24,
      120.13
    ],
    "Suzhou": [
      31.3,
      120.62
    ],
    "Zhangjiajie": [
      29.12,
      110.48
    ],
    "Kunming": [
      24.88,
      102.83
    ],
    "Dali": [
      25.61,
      100.27
    ],
    "Lijiang": [
      26.87,
      100.23
    ],
    "Shangri-La": [
      27.83,
      99.71
    ],
    "Lhasa": [
      29.65,
      91.11
    ],
    "Yamdrok Lake": [
      28.9,
      90.68
    ],
    "Namtso Lake": [
      30.7,
      90.55
    ],
    "Inner Mongolia": [
      41.54,
      110.8
    ],
    "Hulunbuir": [
      49.21,
      119.77
    ],
    "Urumqi": [
      43.83,
      87.62
    ],
    "Kashgar": [
      39.47,
      75.99
    ],
    "Turpan": [
      42.95,
      89.19
    ],
    "Huangshan": [
      30.14,
      118.17
    ],
    "Beijing": [
      39.91,
      116.39
    ],
    "Shanghai": [
      31.23,
      121.47
    ],
    "Xi'an": [
      34.27,
      108.95
    ],
    "Zhouzhuang": [
      31.11,
      120.86
    ],
    "Pingyao": [
      37.19,
      112.18
    ],
    "Longji Rice Terraces": [
      25.76,
      110.08
    ],
    "Yuanyang Rice Terraces": [
      23.16,
      102.78
    ],
    "Emei Shan": [
      29.6,
      103.33
    ],
    "Dunhuang": [
      40.14,
      94.66
    ],
    "Jiayuguan": [
      39.81,
      98.3
    ],
    "Chongqing": [
      29.56,
      106.55
    ],
    "Three Gorges": [
      31,
      110.5
    ],
    "Guizhou": [
      26.6,
      106.71
    ],
    "Fanjingshan": [
      27.91,
      108.68
    ],
    "Xinjiang": [
      41.12,
      85.24
    ]
  },
  "country_coords": {
    "Thailand": [
      15.87,
      100.99
    ],
    "Argentina": [
      -38.42,
      -63.62
    ],
    "Japan": [
      36.2,
      138.25
    ],
    "Costa Rica": [
      9.75,
      -83.75
    ],
    "New Zealand": [
      -41,
      174
    ],
    "Tanzania": [
      -6.37,
      34.89
    ],
    "Mexico": [
      23.63,
      -102.55
    ],
    "Norway": [
      60.47,
      8.47
    ],
    "Vietnam": [
      14.06,
      108.28
    ],
    "Brazil": [
      -14.24,
      -51.92
    ],
    "Australia": [
      -25.27,
      133.78
    ],
    "Jordan": [
      30.59,
      36.24
    ],
    "South Africa": [
      -30.56,
      22.94
    ],
    "Iceland": [
      64.96,
      -19.02
    ],
    "Sri Lanka": [
      7.87,
      80.77
    ],
    "Netherlands": [
      52.13,
      5.29
    ],
    "Peru": [
      -9.19,
      -75.02
    ],
    "Bhutan": [
      27.51,
      90.43
    ],
    "Italy": [
      41.87,
      12.57
    ],
    "Botswana": [
      -22.33,
      24.68
    ],
    "France": [
      46.23,
      2.21
    ],
    "Indonesia": [
      -0.79,
      113.92
    ],
    "Canada": [
      56.13,
      -106.35
    ],
    "Kenya": [
      -0.02,
      37.91
    ],
    "Slovenia": [
      46.15,
      14.99
    ],
    "Mongolia": [
      46.86,
      103.85
    ],
    "Greece": [
      39.07,
      21.82
    ],
    "Spain": [
      40.46,
      -3.75
    ],
    "Switzerland": [
      46.82,
      8.23
    ],
    "United States": [
      39.83,
      -98.58
    ],
    "Turkey": [
      38.96,
      35.24
    ],
    "Rwanda": [
      -1.94,
      29.87
    ],
    "Nepal": [
      28.39,
      84.12
    ],
    "Germany": [
      51.17,
      10.45
    ],
    "Namibia": [
      -22.96,
      18.49
    ],
    "Oman": [
      21.47,
      55.98
    ],
    "India": [
      20.59,
      78.96
    ],
    "Finland": [
      61.92,
      25.75
    ],
    "Ethiopia": [
      9.15,
      40.49
    ],
    "Morocco": [
      31.79,
      -7.09
    ],
    "United Arab Emirates": [
      23.42,
      53.85
    ],
    "Maldives": [
      3.2,
      73.22
    ],
    "Portugal": [
      39.4,
      -8.22
    ],
    "Cuba": [
      21.52,
      -77.78
    ],
    "Belize": [
      17.19,
      -88.5
    ],
    "Colombia": [
      4.57,
      -74.3
    ],
    "Croatia": [
      45.1,
      15.2
    ],
    "Georgia": [
      42.32,
      43.36
    ],
    "Chile": [
      -35.68,
      -71.54
    ],
    "Cambodia": [
      12.57,
      104.99
    ],
    "Scotland": [
      56.49,
      -4.2
    ],
    "Ireland": [
      53.41,
      -8.24
    ],
    "Laos": [
      19.86,
      102.5
    ],
    "Myanmar": [
      21.91,
      95.96
    ],
    "Philippines": [
      12.88,
      121.77
    ],
    "Egypt": [
      26.82,
      30.8
    ],
    "China": [
      35.86,
      104.2
    ]
  },
  "months": {
    "January": [
      {
        "month": "January",
        "country": "Thailand",
        "best_cities_or_regions": [
          "Bangkok",
          "Chiang Mai",
          "Krabi",
          "Koh Lanta"
        ],
        "why_visit": "January is peak dry season with clear skies and comfortable temperatures across the country. The Andaman islands are at their most idyllic, Chiang Mai nights are pleasantly cool, and Bangkok is endlessly vibrant without the tropical heat.",
        "climate": {
          "avg_temp_c": "24–32",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–80",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Bo Sang Umbrella Festival (Chiang Mai, late Jan)",
          "Chinese New Year prep in Bangkok Chinatown",
          "Chiang Mai Flower Festival (early Feb lead-up)"
        ],
        "travel_styles": [
          "beach",
          "food",
          "culture",
          "nightlife"
        ],
        "pros": [
          "Near-perfect dry-season weather",
          "Excellent value — food, transport, lodging cheap",
          "Wide variety of beach and cultural options",
          "Domestic flight network efficient"
        ],
        "cons": [
          "Popular islands heavily crowded",
          "Accommodation prices at yearly high",
          "Air quality deteriorates in the north late month"
        ]
      },
      {
        "month": "January",
        "country": "Japan",
        "best_cities_or_regions": [
          "Niseko",
          "Furano",
          "Hakuba",
          "Sapporo"
        ],
        "why_visit": "Hokkaido delivers the world's finest powder skiing in January — 'Japow' with up to 15m of snowfall per season. Combine epic ski runs with steaming onsen, ryokan dinners, and ice sculpture festivals.",
        "climate": {
          "avg_temp_c": "−8–2",
          "rainfall_level": "high",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "200–400",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Sapporo White Illumination (through mid-Jan)",
          "Otaru Snow Light Path Festival",
          "Coming of Age Day (2nd Monday)"
        ],
        "travel_styles": [
          "skiing",
          "wellness",
          "food",
          "culture"
        ],
        "pros": [
          "World-class powder snow",
          "Excellent onsen and ryokan culture",
          "Safe, efficient, and clean infrastructure",
          "Stunning winter scenery"
        ],
        "cons": [
          "Niseko accommodation rivals Swiss Alps in price",
          "Sells out 6+ months ahead",
          "Very cold with short daylight"
        ]
      },
      {
        "month": "January",
        "country": "Argentina",
        "best_cities_or_regions": [
          "El Calafate",
          "El Chaltén",
          "Buenos Aires",
          "Bariloche"
        ],
        "why_visit": "January is peak Patagonian summer with 18+ hours of daylight ideal for trekking Fitz Roy and visiting Perito Moreno Glacier. Buenos Aires pulses with open-air tango, weekend fairs, and rooftop parrillas.",
        "climate": {
          "avg_temp_c": "10–24",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Festival Nacional del Folklore de Cosquín (late Jan)",
          "Peak Patagonian trekking season",
          "Buenos Aires summer milongas and outdoor tango"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "culture",
          "food"
        ],
        "pros": [
          "Ideal hiking weather with long daylight",
          "World-class steak and Malbec",
          "Vibrant Buenos Aires arts and nightlife",
          "Patagonia scenery at its most accessible"
        ],
        "cons": [
          "Top Patagonia lodges book 6–12 months ahead",
          "Domestic flight prices surge in summer",
          "Inflation causes unpredictable costs"
        ]
      },
      {
        "month": "January",
        "country": "New Zealand",
        "best_cities_or_regions": [
          "Queenstown",
          "Abel Tasman",
          "Wanaka",
          "Rotorua"
        ],
        "why_visit": "Peak Kiwi summer delivers warm temperatures, nearly 15 hours of daylight, and perfect conditions for the Great Walks, glacier hikes, and kayaking in Abel Tasman. The country's outdoor scene is fully operational.",
        "climate": {
          "avg_temp_c": "14–24",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–220",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Auckland Anniversary Day regatta (late Jan)",
          "Wanaka Warbirds Airshow (biennial)",
          "Summer Great Walks fully open"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wellness",
          "food"
        ],
        "pros": [
          "Best outdoor and hiking weather",
          "Long daylight until 9pm",
          "Stunning landscapes and safe travel",
          "Wine regions at peak"
        ],
        "cons": [
          "Summer holiday crowds spike",
          "Campervans and lodges at peak prices",
          "Sandflies in remote wilderness areas"
        ]
      },
      {
        "month": "January",
        "country": "Costa Rica",
        "best_cities_or_regions": [
          "Manuel Antonio",
          "Arenal",
          "Monteverde",
          "Tamarindo"
        ],
        "why_visit": "Costa Rica's dry season brings reliable sunshine, perfect for zip-lining, white-water rafting, and wildlife spotting as animals gather around shrinking water sources in national parks.",
        "climate": {
          "avg_temp_c": "22–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–180",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Fiestas de Palmares (mid-Jan)",
          "Fiesta de Santa Cruz (Guanacaste)",
          "Dry-season surfing peak on Pacific coast"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wildlife",
          "beach"
        ],
        "pros": [
          "Reliable dry-season weather nationwide",
          "Outstanding biodiversity — toucans, monkeys, sloths",
          "World-class adventure activities",
          "English widely spoken"
        ],
        "cons": [
          "High-season prices across the board",
          "Popular parks and beaches crowded",
          "Domestic transfers slow without car rental"
        ]
      },
      {
        "month": "January",
        "country": "Morocco",
        "best_cities_or_regions": [
          "Marrakech",
          "Fès",
          "Merzouga (Sahara)",
          "Essaouira"
        ],
        "why_visit": "January is the coolest and most comfortable time to explore Morocco's imperial cities and the Sahara. Desert nights are spectacularly starlit and medinas are vivid without summer's sweltering heat.",
        "climate": {
          "avg_temp_c": "6–18",
          "rainfall_level": "medium",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–100",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Marrakech International Film Festival aftermath",
          "Almond blossom season in Tafraoute (late Jan)",
          "Desert camel tours in peak season"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "food",
          "nature"
        ],
        "pros": [
          "Ideal temperatures for medina exploring and desert trekking",
          "Fewer tourists than spring peak",
          "Excellent value — riads and street food affordable",
          "Vibrant souks and Sahara experiences"
        ],
        "cons": [
          "Cold desert nights (near 0°C)",
          "Occasional rain in northern cities",
          "Persistent carpet-seller pressure in medinas"
        ]
      },
      {
        "month": "January",
        "country": "United Arab Emirates",
        "best_cities_or_regions": [
          "Dubai",
          "Abu Dhabi",
          "Ras Al Khaimah"
        ],
        "why_visit": "January is the UAE's finest month — blue skies, mid-20s temperatures, and Dubai in full festival mode. Perfect for desert safaris, beach days, and mega-events like Dubai Shopping Festival.",
        "climate": {
          "avg_temp_c": "18–26",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "200–500",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Dubai Shopping Festival (Jan)",
          "Abu Dhabi HSBC Golf Championship",
          "Dubai Marathon (Jan)"
        ],
        "travel_styles": [
          "beach",
          "nightlife",
          "food",
          "adventure"
        ],
        "pros": [
          "Perfect cool-season weather",
          "World-class hotels and dining",
          "Excellent desert and dune experiences",
          "Tax-free shopping"
        ],
        "cons": [
          "Very expensive",
          "Alcohol restricted and costly",
          "Culturally conservative outside resorts"
        ]
      },
      {
        "month": "January",
        "country": "South Africa",
        "best_cities_or_regions": [
          "Cape Town",
          "Garden Route",
          "Kruger National Park",
          "Stellenbosch"
        ],
        "why_visit": "Cape Town basks in full summer sun — ideal for Table Mountain hikes, whale watching opportunities, and wine estates in Stellenbosch. Kruger is lush and great for general game viewing.",
        "climate": {
          "avg_temp_c": "17–28",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–200",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Cape Town Minstrel Carnival (Tweede Nuwe Jaar, Jan 2)",
          "Cape Town Comedy Festival",
          "Summer beach season peak"
        ],
        "travel_styles": [
          "beach",
          "wildlife",
          "food",
          "adventure",
          "nature"
        ],
        "pros": [
          "Excellent summer weather in the Cape",
          "World-class wine and food scene",
          "Great value with strong USD/EUR",
          "Excellent beaches and mountain hiking"
        ],
        "cons": [
          "Cape Town extremely busy and pricey in summer",
          "Jellyfish and jellyfish stings possible",
          "Advance bookings essential"
        ]
      },
      {
        "month": "January",
        "country": "Mexico",
        "best_cities_or_regions": [
          "Oaxaca",
          "Yucatán Peninsula",
          "Baja California Sur",
          "San Cristóbal de las Casas"
        ],
        "why_visit": "January offers warm dry weather across Mexico with whale watching in Baja peaking, Oaxaca's mezcal and market culture thriving, and Yucatán's cenotes and Mayan ruins crowd-free compared to spring break.",
        "climate": {
          "avg_temp_c": "15–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "70–140",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Gray whale watching begins in Baja (Jan–Mar)",
          "Three Kings Day (Jan 6)",
          "Guelaguetza preparations in Oaxaca"
        ],
        "travel_styles": [
          "culture",
          "food",
          "wildlife",
          "beach",
          "adventure"
        ],
        "pros": [
          "Dry, warm weather across most regions",
          "World-class street food and mezcal",
          "Whale watching just beginning in Baja",
          "Less crowded than March spring break"
        ],
        "cons": [
          "Cancún/Tulum getting pricier every year",
          "Safety varies significantly by region",
          "Altitude in CDMX and Oaxaca affects some travelers"
        ]
      },
      {
        "month": "January",
        "country": "India",
        "best_cities_or_regions": [
          "Rajasthan (Jaipur, Jodhpur, Udaipur)",
          "Kerala",
          "Goa",
          "Tamil Nadu"
        ],
        "why_visit": "January is India's peak travel season with cool, dry weather across the north — perfect for Golden Triangle tours, camel safaris in the Thar Desert, and backwater cruises in Kerala.",
        "climate": {
          "avg_temp_c": "10–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–100",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Jaipur Literature Festival (late Jan)",
          "Republic Day (Jan 26)",
          "Makar Sankranti kite festival",
          "Rann Utsav in Kutch"
        ],
        "travel_styles": [
          "culture",
          "food",
          "wellness",
          "wildlife",
          "nature"
        ],
        "pros": [
          "Ideal cool-season weather in the north",
          "Incredibly rich culture and history",
          "Outstanding value — top meals under $5",
          "Diverse experiences from deserts to backwaters"
        ],
        "cons": [
          "Very crowded at top heritage sites",
          "Delhi air quality can be poor",
          "Long distances require careful planning"
        ]
      },
      {
        "month": "January",
        "country": "China",
        "best_cities_or_regions": [
          "Harbin",
          "Sanya",
          "Hong Kong",
          "Guilin"
        ],
        "why_visit": "January in China is a tale of extremes at their finest. Harbin's International Ice and Snow Sculpture Festival (the world's largest) turns the city into a blazing neon ice city at -20°C, while Sanya on Hainan Island offers tropical beaches rivaling Southeast Asia. Hong Kong's winter is its most pleasant and crowd-free season.",
        "climate": {
          "avg_temp_c": "-20–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Harbin International Ice and Snow Sculpture Festival (Jan–Feb)",
          "Chinese New Year preparations (late Jan 2025 / mid-Feb 2026)",
          "Sanya beach high season peak",
          "Hong Kong Arts Festival preparations"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "beach",
          "nature"
        ],
        "pros": [
          "Harbin Ice Festival is one of the world's most unique spectacles",
          "Sanya beaches warm and sunny — tropical escape within China",
          "Hong Kong uncrowded and pleasant at 18°C",
          "Great value compared to Southeast Asian beach alternatives"
        ],
        "cons": [
          "Harbin extreme cold (-20°C) requires specialist layering",
          "Domestic flights pricey as Chinese New Year approaches",
          "Spring Festival week sees mass domestic migration — transport chaos"
        ]
      }
    ],
    "February": [
      {
        "month": "February",
        "country": "Vietnam",
        "best_cities_or_regions": [
          "Hoi An",
          "Ho Chi Minh City",
          "Phu Quoc",
          "Mekong Delta"
        ],
        "why_visit": "Southern Vietnam enjoys dry warm weather while Tết Lunar New Year (Feb 17, 2026) fills streets with lanterns, dragon dances, and exuberant family celebrations. Hoi An's lantern festival near the full moon is magical.",
        "climate": {
          "avg_temp_c": "20–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "35–75",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Tết Nguyên Đán (Feb 17, 2026)",
          "Hoi An Full Moon Lantern Festival",
          "Perfume Pagoda Festival (Feb–Apr)"
        ],
        "travel_styles": [
          "food",
          "culture",
          "beach",
          "nature"
        ],
        "pros": [
          "Exceptional street food at rock-bottom prices",
          "Rich Tết cultural experience",
          "Excellent beach weather in south/central",
          "Diverse scenery in compact country"
        ],
        "cons": [
          "Businesses close for a week around Tết",
          "Domestic transport sells out pre-Tết",
          "North Vietnam still cold and misty"
        ]
      },
      {
        "month": "February",
        "country": "Brazil",
        "best_cities_or_regions": [
          "Rio de Janeiro",
          "Salvador",
          "Olinda",
          "São Paulo"
        ],
        "why_visit": "Rio Carnival 2026 runs Feb 13–21, the world's largest street party, with Sambadrome samba parades Feb 15–17. Beaches blaze with summer energy and free blocos (street parties) fill every neighbourhood.",
        "climate": {
          "avg_temp_c": "24–35",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Rio Carnival (Feb 13–21, 2026)",
          "Salvador Carnival (same dates)",
          "Champions' Parade Feb 21"
        ],
        "travel_styles": [
          "nightlife",
          "culture",
          "beach",
          "food"
        ],
        "pros": [
          "World's most iconic festival atmosphere",
          "Spectacular Sambadrome parades",
          "Gorgeous beaches and tropical summer",
          "Free street blocos open to all"
        ],
        "cons": [
          "Prices 2–3x normal during Carnival week",
          "Pickpocketing common in crowds",
          "Hot, humid, physically exhausting"
        ]
      },
      {
        "month": "February",
        "country": "Norway",
        "best_cities_or_regions": [
          "Tromsø",
          "Lofoten Islands",
          "Alta",
          "Senja"
        ],
        "why_visit": "February provides the optimal balance of long dark nights for aurora viewing and enough daylight for snowmobiling, dog-sledding, and Sámi reindeer experiences. Whale safari season runs through March.",
        "climate": {
          "avg_temp_c": "−6–2",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–450",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Northern Lights Festival Tromsø (late Jan/early Feb)",
          "Sámi National Day (Feb 6)",
          "Sámi Week & Reindeer Race (Tromsø)"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "wildlife",
          "culture"
        ],
        "pros": [
          "Prime aurora borealis viewing window",
          "Unique Arctic activities",
          "Stunning snow-covered fjord landscapes",
          "Sámi cultural experiences"
        ],
        "cons": [
          "Very expensive — one of the world's priciest destinations",
          "Arctic tours book 4–6 months ahead",
          "Extreme cold requires proper gear"
        ]
      },
      {
        "month": "February",
        "country": "Tanzania",
        "best_cities_or_regions": [
          "Ndutu",
          "Ngorongoro Crater",
          "Zanzibar",
          "Arusha"
        ],
        "why_visit": "February is wildebeest calving peak in the southern Serengeti's Ndutu region — up to 8,000 calves born daily, attracting cheetahs, lions, and hyenas for extraordinary predator action. Zanzibar offers warm beach extension.",
        "climate": {
          "avg_temp_c": "18–28",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "500–900",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Wildebeest calving season peak",
          "Sauti za Busara music festival (Zanzibar)",
          "Kilimanjaro Marathon (last weekend Feb)"
        ],
        "travel_styles": [
          "wildlife",
          "nature",
          "adventure",
          "beach"
        ],
        "pros": [
          "Greatest wildlife spectacle on earth at peak",
          "High predator activity",
          "Lush green Serengeti landscapes",
          "Ideal Zanzibar beach extension combo"
        ],
        "cons": [
          "Expensive mobile camps — book 9–12 months ahead",
          "Afternoon rains and muddy tracks possible",
          "Long international flights required"
        ]
      },
      {
        "month": "February",
        "country": "Jordan",
        "best_cities_or_regions": [
          "Petra",
          "Wadi Rum",
          "Amman",
          "Dead Sea"
        ],
        "why_visit": "February offers cool, uncrowded conditions for exploring Petra and camping under Wadi Rum's star-filled skies. The Treasury at dawn with no queues and wildflowers dotting the hills is unforgettable.",
        "climate": {
          "avg_temp_c": "7–17",
          "rainfall_level": "medium",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "90–170",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Jordan Trail hiking season begins",
          "Amman Jazz Festival (biennial)",
          "Wildflower season starting in north"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wellness"
        ],
        "pros": [
          "Far fewer tourists at Petra than in spring",
          "Cool, manageable hiking temperatures",
          "Clear desert skies for stargazing",
          "Discounted hotel rates in low season"
        ],
        "cons": [
          "Cold desert nights near 0°C",
          "Some sites reduced hours",
          "Occasional heavy rain in Amman"
        ]
      },
      {
        "month": "February",
        "country": "Maldives",
        "best_cities_or_regions": [
          "North Malé Atoll",
          "Baa Atoll",
          "Ari Atoll",
          "Addu Atoll"
        ],
        "why_visit": "February is the driest, sunniest month in the Maldives with flat calm seas and outstanding visibility for diving and snorkeling. Whale shark and manta ray encounters at Baa Atoll peak January–April.",
        "climate": {
          "avg_temp_c": "26–31",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "400–1200",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Peak whale shark season at Baa Atoll (UNESCO Biosphere Reserve)",
          "Manta ray aggregation season",
          "Valentine's Day packages at resorts"
        ],
        "travel_styles": [
          "beach",
          "wellness",
          "wildlife",
          "nature"
        ],
        "pros": [
          "Best diving and snorkeling visibility of the year",
          "Perfect overwater bungalow weather",
          "Whale shark and manta encounters",
          "Stunning turquoise lagoons"
        ],
        "cons": [
          "Extremely expensive — among world's priciest destinations",
          "Limited budget options",
          "Remote location means long transfers"
        ]
      },
      {
        "month": "February",
        "country": "Portugal",
        "best_cities_or_regions": [
          "Lisbon",
          "Porto",
          "Algarve",
          "Óbidos"
        ],
        "why_visit": "February's mild winter weather makes Portugal Europe's best-value city-break destination, with Carnaval celebrations in Ovar and Torres Vedras, and almost no tourist crowds at Sintra and Porto.",
        "climate": {
          "avg_temp_c": "9–17",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–180",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Carnaval de Torres Vedras (one of Europe's best)",
          "Ovar Carnaval",
          "Fantasporto Film Festival (Porto)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "wellness"
        ],
        "pros": [
          "Lowest hotel prices of the year",
          "Almost no queues at Sintra or Porto's Livraria Lello",
          "Mild, walkable weather for city sightseeing",
          "Exceptional food and wine scene"
        ],
        "cons": [
          "Rainy and grey days possible",
          "Some coastal areas quiet/closed",
          "Sea too cold for swimming"
        ]
      },
      {
        "month": "February",
        "country": "Australia",
        "best_cities_or_regions": [
          "Sydney",
          "Tasmania",
          "Cairns",
          "Melbourne"
        ],
        "why_visit": "Late Austral summer keeps seas warm for Great Barrier Reef snorkeling and Tasmania's walking tracks open. Sydney's Mardi Gras preparations build excitement and Perth Festival fills the city with world-class arts.",
        "climate": {
          "avg_temp_c": "18–28",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "180–320",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Sydney Gay and Lesbian Mardi Gras preparations",
          "Perth Festival (entire February)",
          "Tropfest short film festival"
        ],
        "travel_styles": [
          "beach",
          "nature",
          "adventure",
          "food"
        ],
        "pros": [
          "Warm sea temperatures for reef snorkeling",
          "Long daylight hours",
          "Excellent food and wine",
          "Full range of outdoor activities"
        ],
        "cons": [
          "Cyclone risk in far north Queensland",
          "Box jellyfish warnings on northern beaches",
          "Very expensive vs. Southeast Asian alternatives"
        ]
      },
      {
        "month": "February",
        "country": "Peru",
        "best_cities_or_regions": [
          "Cusco",
          "Sacred Valley",
          "Puno (Lake Titicaca)",
          "Arequipa"
        ],
        "why_visit": "February's rainy season keeps most trekkers away, making Machu Picchu and Sacred Valley uncrowded. The wetness creates dramatic misty scenery, and Puno's Virgen de la Candelaria festival is Peru's most spectacular.",
        "climate": {
          "avg_temp_c": "7–21",
          "rainfall_level": "high",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–110",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Virgen de la Candelaria Festival, Puno (early Feb — UNESCO-listed)",
          "Carnaval celebrations in Cusco and Cajamarca"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature"
        ],
        "pros": [
          "Machu Picchu at its most uncrowded",
          "Lowest prices of the year",
          "Lush, dramatically green Andean landscapes",
          "Virgen de la Candelaria — Peru's biggest festival"
        ],
        "cons": [
          "Heavy rain daily in the Andes",
          "Inca Trail closed for maintenance",
          "Muddy trails and occasional landslides"
        ]
      },
      {
        "month": "February",
        "country": "Cuba",
        "best_cities_or_regions": [
          "Havana",
          "Trinidad",
          "Viñales",
          "Varadero"
        ],
        "why_visit": "Cuba's dry season peaks in February with warm, breezy weather perfect for Havana's vintage car culture, Viñales tobacco valley hikes, and Trinidad's colonial squares. The streets feel authentic before heavy tourist season.",
        "climate": {
          "avg_temp_c": "20–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–120",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Havana Jazz Festival (late Jan/Feb)",
          "Cigar Festival Havana (Feb)",
          "Carnaval de Santiago (July, but smaller events Feb)"
        ],
        "travel_styles": [
          "culture",
          "music",
          "nightlife",
          "nature"
        ],
        "pros": [
          "Dry, warm, breezy weather",
          "Unique time-capsule experience",
          "World-class cigars, rum, and salsa",
          "Affordable accommodation in casas particulares"
        ],
        "cons": [
          "Limited internet connectivity",
          "US citizens face additional restrictions",
          "Infrastructure and service quality inconsistent"
        ]
      },
      {
        "month": "February",
        "country": "China",
        "best_cities_or_regions": [
          "Harbin",
          "Chengdu",
          "Guilin",
          "Hong Kong"
        ],
        "why_visit": "Chinese New Year (Feb 17, 2026) is China's biggest event — lion dances, fireworks, lantern festivals and temple fairs fill every city. Harbin's ice sculptures are still spectacular mid-month, and Chengdu celebrates with Sichuan opera and street food fairs at its most festive.",
        "climate": {
          "avg_temp_c": "-15–16",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Chinese New Year / Spring Festival (Feb 17, 2026)",
          "Lantern Festival (15th day of CNY — Mar 3, 2026)",
          "Harbin Ice Festival peak (Jan–Feb)",
          "Chengdu temple fairs and street celebrations"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "Chinese New Year celebrations unlike anything else in Asia",
          "Fireworks and lantern displays across every city",
          "Harbin Ice Festival still at peak beauty",
          "Chengdu hotpot and Sichuan street food at their most festive"
        ],
        "cons": [
          "Transport fully booked weeks ahead around CNY week",
          "Many shops and restaurants close for CNY holiday",
          "Prices double or triple for accommodation during peak period"
        ]
      }
    ],
    "March": [
      {
        "month": "March",
        "country": "Japan",
        "best_cities_or_regions": [
          "Tokyo",
          "Kyoto",
          "Osaka",
          "Nara"
        ],
        "why_visit": "Late March marks cherry blossom peak in central Japan — 2026 forecast has Tokyo at full bloom around March 27. Mild spring weather, hanami picnics in parks, and geisha dances at Kyoto's Miyako Odori are quintessential Japan.",
        "climate": {
          "avg_temp_c": "6–15",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–280",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Sakura (cherry blossom) season",
          "Omizutori fire festival, Nara (Mar 1–14)",
          "Hina Matsuri (Mar 3)",
          "Miyako Odori (geisha dances, late Mar/Apr)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "wellness"
        ],
        "pros": [
          "Once-in-a-lifetime sakura experience",
          "Pleasant mild spring weather",
          "Exceptional food across every price point",
          "Efficient rail for blossom-chasing around the country"
        ],
        "cons": [
          "Hotel rates surge for bloom week",
          "Peak crowds at famous hanami spots",
          "Bloom timing varies and can be unpredictable"
        ]
      },
      {
        "month": "March",
        "country": "Sri Lanka",
        "best_cities_or_regions": [
          "Galle",
          "Ella",
          "Yala National Park",
          "Kandy"
        ],
        "why_visit": "March is dry-season prime for the south and west coasts — great for beach-safari combos, leopard tracking at Yala (world's highest density of wild leopards), and cool tea-country train rides through Ella.",
        "climate": {
          "avg_temp_c": "24–33",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "45–100",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Medin Poya (full moon ceremony)",
          "Blue whale season off Mirissa (Nov–Apr peak)",
          "Tea harvest tours in hill country"
        ],
        "travel_styles": [
          "beach",
          "wildlife",
          "culture",
          "nature"
        ],
        "pros": [
          "Excellent south/west coast weather",
          "Great value for money — food and lodging affordable",
          "World-class leopard safari at Yala",
          "Compact country — diverse circuit in one week"
        ],
        "cons": [
          "East coast still in rainy pattern",
          "Yala crowded around popular sightings",
          "Heat builds significantly toward end of month"
        ]
      },
      {
        "month": "March",
        "country": "Iceland",
        "best_cities_or_regions": [
          "Reykjavík",
          "South Coast",
          "Snæfellsnes Peninsula",
          "Jökulsárlón"
        ],
        "why_visit": "March is the last strong month for Northern Lights combined with rapidly lengthening daylight — up to 13 hours by month's end. Ice caves remain naturally blue, F-roads are still safely closed, keeping crowds down.",
        "climate": {
          "avg_temp_c": "−2–4",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "200–380",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "DesignMarch Reykjavík (late March)",
          "Beer Day (Mar 1)",
          "Last natural blue ice cave season"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "wellness"
        ],
        "pros": [
          "Aurora still frequently visible",
          "13+ hrs daylight by end of month",
          "Last chance for blue ice caves",
          "Fewer tourists than summer"
        ],
        "cons": [
          "Unpredictable weather — storms can close routes",
          "Very expensive food and tours",
          "Ring Road sections may still be icy"
        ]
      },
      {
        "month": "March",
        "country": "Jordan",
        "best_cities_or_regions": [
          "Petra",
          "Wadi Rum",
          "Amman",
          "Dead Sea"
        ],
        "why_visit": "March brings mild temperatures and wildflower carpets across Jordan's hills, making it ideal for hiking Petra's trails and camping in Wadi Rum's red desert without summer's scorching heat.",
        "climate": {
          "avg_temp_c": "10–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "90–170",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Jordan Trail thru-hiking season peak",
          "Wildflower blooms in Dana and Ajloun",
          "End of Ramadan period (adjust visiting hours)"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wellness"
        ],
        "pros": [
          "Ideal hiking weather at Petra and Wadi Rum",
          "Wildflower blooms across the highlands",
          "Excellent stargazing in desert",
          "Safe, welcoming destination"
        ],
        "cons": [
          "Ramadan may affect restaurant hours",
          "Chilly desert nights still possible",
          "Petra entrance fee is steep ($80+)"
        ]
      },
      {
        "month": "March",
        "country": "South Africa",
        "best_cities_or_regions": [
          "Cape Town",
          "Stellenbosch",
          "Kruger",
          "Garden Route"
        ],
        "why_visit": "Late summer in the Cape — warm dry days ideal for Table Mountain hiking and wine harvest in Stellenbosch. Kruger's bush begins to dry out as rainy season ends, improving game viewing significantly.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–200",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Cape Town International Jazz Festival (late March)",
          "Cape Town Cycle Tour (early March)",
          "Stellenbosch wine harvest festivals"
        ],
        "travel_styles": [
          "wildlife",
          "food",
          "nature",
          "adventure",
          "beach"
        ],
        "pros": [
          "Excellent Cape summer weather",
          "Wine harvest and gourmet scene at peak",
          "Good Kruger value vs. winter peak",
          "Strong USD/EUR purchasing power"
        ],
        "cons": [
          "Kruger bush still thick — not peak game viewing",
          "Occasional Cape Town heat waves",
          "Some safety concerns in urban areas"
        ]
      },
      {
        "month": "March",
        "country": "Portugal",
        "best_cities_or_regions": [
          "Alentejo",
          "Lisbon",
          "Douro Valley",
          "Algarve"
        ],
        "why_visit": "March brings longer days and spring blossoms to Portugal — the Algarve coast wakes up with almond and orange blossoms, and Lisbon is explored without August's tourist crush at Belém and São Jorge Castle.",
        "climate": {
          "avg_temp_c": "11–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "110–190",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Semana Santa processions in Braga and Óbidos",
          "Lisbon Half Marathon (Mar)",
          "Algarve spring almond blossom season"
        ],
        "travel_styles": [
          "culture",
          "food",
          "wellness",
          "nature"
        ],
        "pros": [
          "Low crowds at all major sights",
          "Reasonable shoulder-season prices",
          "Spring wildflowers across Alentejo and Algarve",
          "Excellent pastéis de nata and wine trail"
        ],
        "cons": [
          "Rain still possible, especially in north",
          "Sea too cold for swimming in most areas",
          "Some resort infrastructure still closed"
        ]
      },
      {
        "month": "March",
        "country": "Morocco",
        "best_cities_or_regions": [
          "Fès",
          "Merzouga",
          "Draa Valley",
          "Essaouira"
        ],
        "why_visit": "Spring arrives in Morocco with mild temperatures perfect for a week in the Sahara, the rose valley of Dadès, and Fès's labyrinthine medina. Crowds build in April, so March is the sweet spot.",
        "climate": {
          "avg_temp_c": "10–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–110",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Marrakech Marathon (late Jan/Mar variant)",
          "Almond blossom in Tafraoute (Feb–Mar)",
          "Sefrou Cherry Festival (June run-up prep begins)"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "food",
          "nature"
        ],
        "pros": [
          "Ideal temperatures for desert and medina",
          "Fewer tourists than April–May peak",
          "Good value — riads affordable",
          "Stunning valley and desert scenery"
        ],
        "cons": [
          "Evening cold in the desert",
          "Haggling culture tiring for some",
          "Women solo travelers may face extra attention"
        ]
      },
      {
        "month": "March",
        "country": "Belize",
        "best_cities_or_regions": [
          "Belize City",
          "Placencia",
          "Ambergris Caye",
          "San Ignacio"
        ],
        "why_visit": "March is the heart of Belize's dry season — calm Caribbean seas ideal for diving the Blue Hole, pristine Mayan jungle sites, and whale shark aggregations off Gladden Spit (peak March–June).",
        "climate": {
          "avg_temp_c": "22–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–200",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Whale shark season at Gladden Spit (Mar–Jun)",
          "Baron Bliss Day (Mar 9)",
          "La Ruta Maya Canoe Race"
        ],
        "travel_styles": [
          "adventure",
          "wildlife",
          "beach",
          "nature"
        ],
        "pros": [
          "Excellent diving — Blue Hole and barrier reef",
          "Whale shark encounters peak March–May",
          "Authentic jungle Mayan ruins",
          "English-speaking, safe destination"
        ],
        "cons": [
          "Expensive for Central America",
          "Ambergris Caye can feel overdeveloped",
          "Limited budget accommodation on islands"
        ]
      },
      {
        "month": "March",
        "country": "Rwanda",
        "best_cities_or_regions": [
          "Volcanoes National Park",
          "Kigali",
          "Nyungwe Forest",
          "Akagera NP"
        ],
        "why_visit": "March is the start of the long rainy season, but gorilla trekking continues year-round and the forest is lush and photogenic. Lighter visitor numbers mean easier permit access and lower camp prices.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "400–1200",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Kwibuka (genocide remembrance — Apr, nearby)",
          "Nyungwe forest canopy walks open year-round",
          "Gorilla trekking year-round"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature",
          "culture"
        ],
        "pros": [
          "Easier gorilla permit availability",
          "Lush green forest landscapes",
          "Kigali — cleanest, safest city in Africa",
          "Combines well with Uganda chimpanzees"
        ],
        "cons": [
          "Daily rain makes trails muddy",
          "Gorilla permits still $1,500/person",
          "Rainy season can cloud mountain views"
        ]
      },
      {
        "month": "March",
        "country": "Colombia",
        "best_cities_or_regions": [
          "Cartagena",
          "Bogotá",
          "Medellín",
          "Coffee Region"
        ],
        "why_visit": "March is one of Colombia's drier months, making Cartagena's colorful colonial walled city, Medellín's eternal-spring climate, and the Coffee Region's lush fincas shine at their best.",
        "climate": {
          "avg_temp_c": "18–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Barranquilla Carnaval (Feb–Mar, UNESCO)",
          "Bogotá International Book Fair prep",
          "Coffee harvest tours in Quindío"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "nature",
          "adventure"
        ],
        "pros": [
          "Excellent weather in most regions",
          "Emerging food and coffee scene",
          "Affordable prices and easy transport",
          "One of South America's most dynamic cities (Medellín)"
        ],
        "cons": [
          "Safety awareness still required in some areas",
          "Bogotá altitude (2,600m) affects some travelers",
          "Tourism infrastructure still developing in rural areas"
        ]
      },
      {
        "month": "March",
        "country": "China",
        "best_cities_or_regions": [
          "Hangzhou",
          "Guilin",
          "Kunming",
          "Suzhou"
        ],
        "why_visit": "Spring arrives beautifully across southern China in March — cherry blossoms blanket Wuhan and Hangzhou's West Lake, Guilin's karst peaks reflect in glassy rivers, and Kunming's Dounan Flower Market earns its title as the 'Spring City.' Post-CNY crowds clear and prices normalize.",
        "climate": {
          "avg_temp_c": "8–22",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Cherry blossom season: Wuhan, Hangzhou, Nanjing",
          "Kunming International Flower Expo",
          "Guilin Li River cruise shoulder season opens",
          "Guizhou Lusheng Festival (Miao ethnic minority)"
        ],
        "travel_styles": [
          "nature",
          "culture",
          "food",
          "wellness"
        ],
        "pros": [
          "Cherry blossoms at Hangzhou West Lake world-class",
          "Guilin's misty karst scenery spectacular in spring light",
          "Post-CNY prices normalise — good value",
          "Kunming permanently pleasant — 'City of Eternal Spring'"
        ],
        "cons": [
          "Rainy and drizzly across southern China",
          "Wuhan cherry blossom crowds are enormous",
          "Some mountain trails still cold and slippery"
        ]
      }
    ],
    "April": [
      {
        "month": "April",
        "country": "Japan",
        "best_cities_or_regions": [
          "Kyoto",
          "Hirosaki",
          "Takayama",
          "Tohoku"
        ],
        "why_visit": "Early April continues cherry blossom season in Kyoto and Tokyo while late April sees peak blooms spread north to Hirosaki (Japan's most famous castle sakura festival). Spring festivals fill the country with traditional culture.",
        "climate": {
          "avg_temp_c": "10–19",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Hirosaki Cherry Blossom Festival (late Apr)",
          "Takayama Spring Festival (Apr 14–15)",
          "Miyako Odori geisha dances (Kyoto)",
          "Yabusame (horseback archery) at Kamakura"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "wellness"
        ],
        "pros": [
          "Sakura season extended through northern Japan",
          "Warm pleasant spring temperatures",
          "World-class food and transport",
          "Beautiful temples in bloom"
        ],
        "cons": [
          "Golden Week (late Apr/May) causes surge in crowds and prices",
          "Hotels peak-priced",
          "Shinkansen fully booked weeks ahead for Golden Week"
        ]
      },
      {
        "month": "April",
        "country": "Netherlands",
        "best_cities_or_regions": [
          "Keukenhof/Lisse",
          "Amsterdam",
          "Rotterdam",
          "The Hague"
        ],
        "why_visit": "April is peak tulip season at Keukenhof Gardens and the bulb fields of Lisse, culminating in the nationwide orange-clad street party of King's Day (Koningsdag) on April 27 with free markets on every canal.",
        "climate": {
          "avg_temp_c": "5–13",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–220",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Keukenhof Gardens open season",
          "Koningsdag (Apr 27)",
          "Bloemencorso Bollenstreek flower parade (late April)",
          "Delft Spring Art Weekend"
        ],
        "travel_styles": [
          "culture",
          "nature",
          "food",
          "nightlife"
        ],
        "pros": [
          "Iconic tulip fields in full bloom",
          "Vibrant King's Day celebration nationwide",
          "Compact, bike-friendly cities",
          "Excellent museums (Rijksmuseum, Van Gogh)"
        ],
        "cons": [
          "Very crowded at Keukenhof and Amsterdam",
          "Unpredictable showers and cool temps",
          "Accommodation prices spike around Koningsdag"
        ]
      },
      {
        "month": "April",
        "country": "Thailand",
        "best_cities_or_regions": [
          "Chiang Mai",
          "Ayutthaya",
          "Bangkok",
          "Pai"
        ],
        "why_visit": "Songkran (Thai New Year, Apr 13–15) is the world's biggest water festival — Chiang Mai's moat road becomes the most epic multi-day water fight on earth. Despite the heat, this cultural experience is unmissable.",
        "climate": {
          "avg_temp_c": "28–36",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–80",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Songkran (Apr 13–15)",
          "Pattaya Songkran festival",
          "Thai New Year temple ceremonies"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "adventure"
        ],
        "pros": [
          "Iconic Songkran water festival experience",
          "Great value for money year-round",
          "Fascinating Buddhist New Year temple rituals",
          "Excellent Northern Thailand cuisine"
        ],
        "cons": [
          "Very hot (35°C+) outside water fights",
          "Road travel dangerous around Songkran",
          "Many businesses close during holiday"
        ]
      },
      {
        "month": "April",
        "country": "Peru",
        "best_cities_or_regions": [
          "Cusco",
          "Sacred Valley",
          "Machu Picchu",
          "Arequipa"
        ],
        "why_visit": "Shoulder between rainy and dry season — landscapes burst green after the rains but skies clear beautifully. Semana Santa in Cusco brings spectacular processions, and the Inca Trail has just reopened April 1.",
        "climate": {
          "avg_temp_c": "7–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Semana Santa (Holy Week) in Cusco and Ayacucho",
          "Inca Trail reopens Apr 1",
          "Señor de los Temblores procession"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "food"
        ],
        "pros": [
          "Lush green Andean landscapes post-rain",
          "Spectacular Holy Week religious pageantry",
          "Less crowded than May–August peak",
          "Inca Trail fresh and less booked"
        ],
        "cons": [
          "Occasional heavy rain and muddy trails",
          "Altitude sickness risk in Cusco (3,400m)",
          "Some mountain passes still wet"
        ]
      },
      {
        "month": "April",
        "country": "Greece",
        "best_cities_or_regions": [
          "Athens",
          "Santorini",
          "Crete",
          "Pelion"
        ],
        "why_visit": "April is the best month in Greece — wildflowers carpet ancient ruins, temperatures are warm but not scorching, and Easter (Apr 20, 2025 / Apr 5, 2026) brings spectacular midnight candlelit processions.",
        "climate": {
          "avg_temp_c": "12–22",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–220",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Orthodox Easter (April)",
          "Corfu Easter celebrations (most elaborate in Greece)",
          "St. George's Day feast (Apr 23)",
          "Athens Half Marathon (Apr)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "beach",
          "nature"
        ],
        "pros": [
          "Wildflowers on ancient sites",
          "Warm sea and uncrowded beaches",
          "Easter rituals deep and authentic",
          "Lower prices than July/August peak"
        ],
        "cons": [
          "Some islands limited services before May",
          "Orthodox Easter accommodation books out",
          "Santorini still quite quiet — limited dining"
        ]
      },
      {
        "month": "April",
        "country": "Nepal",
        "best_cities_or_regions": [
          "Kathmandu",
          "Annapurna region",
          "Langtang",
          "Pokhara"
        ],
        "why_visit": "April is the pre-monsoon trekking season peak — rhododendrons blaze red and pink across the hillsides, views are clear before pre-monsoon haze, and Kathmandu celebrates Bisket Jatra and New Year festivals.",
        "climate": {
          "avg_temp_c": "12–26",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–90",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Bisket Jatra (Nepali New Year)",
          "Rato Machhendranath chariot festival",
          "Rhododendron bloom season peak"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Rhododendron blooms are spectacular",
          "Good Himalayan views before pre-monsoon haze",
          "Rich festival calendar",
          "Affordable budget trekking"
        ],
        "cons": [
          "Trails crowded on Annapurna and Everest routes",
          "Pre-monsoon haze can reduce mountain visibility late month",
          "Hot at lower elevations"
        ]
      },
      {
        "month": "April",
        "country": "Kenya",
        "best_cities_or_regions": [
          "Nairobi",
          "Amboseli",
          "Tsavo",
          "Diani Beach"
        ],
        "why_visit": "April is low season in Kenya — the long rains begin but game viewing remains excellent and prices drop significantly. Amboseli's views of Kilimanjaro are dramatic against stormy skies and lodges are half-empty.",
        "climate": {
          "avg_temp_c": "15–28",
          "rainfall_level": "high",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "200–450",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Easter week conservation events",
          "Kilimanjaro visible with dramatic storm backdrop",
          "Diani Beach (off-peak, good value)"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature",
          "beach"
        ],
        "pros": [
          "Lowest safari prices of the year (40–50% off peak)",
          "Green, photogenic landscapes",
          "Virtually no crowds at top parks",
          "Dramatic storm-sky photography"
        ],
        "cons": [
          "Heavy rain makes some tracks impassable",
          "Fewer plains game concentrated (animals spread out with water)",
          "Dirt roads can be very muddy"
        ]
      },
      {
        "month": "April",
        "country": "Bhutan",
        "best_cities_or_regions": [
          "Paro",
          "Thimphu",
          "Punakha",
          "Bumthang"
        ],
        "why_visit": "April delivers Bhutan at its most glorious — rhododendrons in full bloom, the Paro Tsechu festival (Mar–Apr) with ancient masked cham dances, and crystal-clear Himalayan mountain views.",
        "climate": {
          "avg_temp_c": "10–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "280–450",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Paro Tsechu (late Mar/early Apr)",
          "Rhododendron Festival (Lamperi)",
          "Ura Yakchoe (late April)"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wellness"
        ],
        "pros": [
          "Most spectacular festival of the year",
          "Rhododendrons and clear mountain views",
          "Tiger's Nest ideal hiking weather",
          "Unique 'high-value, low-impact' destination"
        ],
        "cons": [
          "$100/day Sustainable Development Fee mandatory",
          "Paro Tsechu permits and lodges sell out",
          "Limited flights into Paro"
        ]
      },
      {
        "month": "April",
        "country": "Spain",
        "best_cities_or_regions": [
          "Seville",
          "Córdoba",
          "Barcelona",
          "San Sebastián"
        ],
        "why_visit": "April is Spain's most magical month — Semana Santa in Seville features the world's most intense Holy Week processions, followed immediately by the Feria de Abril (spring fair) with flamenco, horses, and fino sherry.",
        "climate": {
          "avg_temp_c": "14–23",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–220",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Semana Santa Seville (week before Easter)",
          "Feria de Abril, Seville (2 weeks after Easter)",
          "Córdoba Patio Festival (May, books in April)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "nature"
        ],
        "pros": [
          "Semana Santa is one of the world's great religious spectacles",
          "Feria de Abril is a week-long flamenco party",
          "Warm spring weather across Andalusia",
          "Excellent tapas and sherry culture"
        ],
        "cons": [
          "Seville hotels triple in price during Semana Santa",
          "Procession routes cause major congestion",
          "Booking essential 6+ months ahead"
        ]
      },
      {
        "month": "April",
        "country": "Ethiopia",
        "best_cities_or_regions": [
          "Lalibela",
          "Gondar",
          "Simien Mountains",
          "Omo Valley"
        ],
        "why_visit": "April falls in the bega (dry season) before the rains — ideal for trekking the Simien Mountains, visiting Lalibela's rock-hewn churches, and joining Ethiopian Orthodox Easter (Fasika) celebrations.",
        "climate": {
          "avg_temp_c": "12–26",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Fasika (Ethiopian Easter, Apr)",
          "Simien Mountains trekking season",
          "Timkat aftermath (Jan celebration still felt)"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Excellent trekking weather in highlands",
          "Fasika celebrations intense and authentic",
          "Low tourist density — sites uncrowded",
          "Gelada baboon viewing in Simiens"
        ],
        "cons": [
          "Altitude (2,400m+) affects some visitors",
          "Limited luxury infrastructure",
          "Some regions require security escorts"
        ]
      },
      {
        "month": "April",
        "country": "China",
        "best_cities_or_regions": [
          "Chengdu",
          "Jiuzhaigou",
          "Xi'an",
          "Hangzhou"
        ],
        "why_visit": "April is one of China's finest travel months — Chengdu's baby panda cubs are newly visible at the Giant Panda Base, Jiuzhaigou's turquoise lakes shine with spring melt, and Xi'an's Terracotta Army can be explored in mild weather without summer hordes.",
        "climate": {
          "avg_temp_c": "12–22",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Giant Panda breeding season — new cubs visible (Apr–Jun)",
          "Qingming Festival (tomb-sweeping, early Apr)",
          "Tulip and peony gardens peak bloom (Luoyang, Beijing)",
          "Jiuzhaigou spring thaw — waterfalls and lakes at their clearest"
        ],
        "travel_styles": [
          "wildlife",
          "culture",
          "nature",
          "adventure"
        ],
        "pros": [
          "Baby giant pandas viewable at Chengdu Research Base",
          "Jiuzhaigou's rainbow lakes at their most vibrant",
          "Xi'an Terracotta Warriors without summer crowd surge",
          "Pleasant spring temperatures across the country"
        ],
        "cons": [
          "Qingming holiday (early Apr) creates short domestic travel surge",
          "Jiuzhaigou permits can sell out — book 2–3 weeks ahead",
          "Southern China still rainy and humid"
        ]
      }
    ],
    "May": [
      {
        "month": "May",
        "country": "Italy",
        "best_cities_or_regions": [
          "Rome",
          "Amalfi Coast",
          "Tuscany",
          "Puglia"
        ],
        "why_visit": "May is Italy's golden month — warm enough for swimming on the Amalfi Coast, wildflowers blanketing Tuscany, and pre-June prices that make shoulder-season travel dramatically more affordable than summer.",
        "climate": {
          "avg_temp_c": "14–23",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–280",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Giro d'Italia (May)",
          "Italian Open tennis Rome",
          "Infiorata flower-carpet festivals (Genzano, Noto)",
          "Maggio Musicale Fiorentino"
        ],
        "travel_styles": [
          "culture",
          "food",
          "beach",
          "wellness"
        ],
        "pros": [
          "Ideal weather, warm seas without August heat",
          "Lower prices than June–August",
          "Lush green countryside and blooming landscapes",
          "Outdoor dining in perfect conditions"
        ],
        "cons": [
          "Rome and Florence already very busy",
          "Sea still cool in early May",
          "Popular coastal villages fill quickly on weekends"
        ]
      },
      {
        "month": "May",
        "country": "Japan",
        "best_cities_or_regions": [
          "Tokyo",
          "Kyoto",
          "Okinawa",
          "Hakone"
        ],
        "why_visit": "Golden Week (Apr 29–May 5) is Japan's biggest travel surge — crowds everywhere, but the country is at its celebratory best. Late May quiets down dramatically, with fresh green foliage (Shinryoku) and perfect temperatures.",
        "climate": {
          "avg_temp_c": "15–24",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–240",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Golden Week (Apr 29–May 5)",
          "Kanda Matsuri Tokyo (mid-May, odd years)",
          "Sanja Matsuri Asakusa (3rd Sat/Sun May)",
          "Okinawa coral and sea season opens"
        ],
        "travel_styles": [
          "culture",
          "food",
          "beach",
          "nature"
        ],
        "pros": [
          "Fresh green 'Shinryoku' foliage after sakura",
          "Okinawa beaches perfect temperature",
          "Multiple major festivals during Golden Week",
          "Great weather across the country"
        ],
        "cons": [
          "Golden Week domestic travel is chaotic and crowded",
          "Prices double during Golden Week",
          "Book everything months in advance for early May"
        ]
      },
      {
        "month": "May",
        "country": "France",
        "best_cities_or_regions": [
          "Paris",
          "French Riviera",
          "Provence",
          "Alsace"
        ],
        "why_visit": "Cannes Film Festival (May 12–23, 2026) and Monaco Grand Prix light up the Riviera, while Paris enjoys ideal spring weather with long daylight and fewer tourists than July/August.",
        "climate": {
          "avg_temp_c": "11–21",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–300",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Cannes Film Festival (May 12–23, 2026)",
          "Monaco Grand Prix (late May)",
          "Roland-Garros French Open (late May)",
          "Nuit des Musées (free museum night)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "beach"
        ],
        "pros": [
          "Glamorous Riviera events and star-spotting",
          "Ideal mild weather for Paris walks",
          "Long daylight hours",
          "Excellent wine region access (Burgundy, Bordeaux)"
        ],
        "cons": [
          "Cannes and Monaco cause enormous price spikes",
          "Paris very busy in May",
          "Frequent May public holidays cause some closures"
        ]
      },
      {
        "month": "May",
        "country": "Indonesia",
        "best_cities_or_regions": [
          "Bali",
          "Komodo",
          "Gili Islands",
          "Yogyakarta"
        ],
        "why_visit": "May opens Bali's dry season with sunny skies, calm seas for diving Komodo, low humidity, and Vesak (Waisak) celebrations at Borobudur — one of Buddhism's most ethereal ceremonies.",
        "climate": {
          "avg_temp_c": "23–31",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–100",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Vesak/Waisak Day at Borobudur (full moon in May)",
          "Bali Spirit Festival (May)",
          "Komodo dive season begins"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "wellness",
          "adventure",
          "food"
        ],
        "pros": [
          "Dry sunny weather with low humidity",
          "Excellent value for money",
          "Excellent surf and dive conditions",
          "Iconic Vesak lantern release at Borobudur"
        ],
        "cons": [
          "Popular beaches getting busier",
          "Komodo boats book out quickly",
          "Traffic congestion in south Bali"
        ]
      },
      {
        "month": "May",
        "country": "Botswana",
        "best_cities_or_regions": [
          "Okavango Delta",
          "Chobe National Park",
          "Moremi",
          "Makgadikgadi Pans"
        ],
        "why_visit": "May begins Botswana's dry winter season as the Okavango floods peak — wildlife concentrates around waterways and mokoro (dugout canoe) safaris are at their most magical before peak-season pricing.",
        "climate": {
          "avg_temp_c": "10–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "600–1500",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Okavango Delta flood peak",
          "Start of dry-season game viewing",
          "Wild dog pup season in Moremi"
        ],
        "travel_styles": [
          "wildlife",
          "nature",
          "adventure"
        ],
        "pros": [
          "Peak flood in the Delta for mokoro canoeing",
          "Cooler, clearer conditions",
          "Shoulder-season rates at many camps",
          "Exceptional predator activity"
        ],
        "cons": [
          "Very expensive fly-in camps",
          "Cold early mornings (5–10°C)",
          "Remote — specialist logistics required"
        ]
      },
      {
        "month": "May",
        "country": "Croatia",
        "best_cities_or_regions": [
          "Dubrovnik",
          "Hvar",
          "Plitvice Lakes",
          "Rovinj"
        ],
        "why_visit": "May hits Croatia's sweet spot — warm enough to swim in the Adriatic, Plitvice Lakes at their most vivid, and Dubrovnik fully alive but 30% fewer tourists than July's peak invasion.",
        "climate": {
          "avg_temp_c": "14–24",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–230",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Dubrovnik Summer Festival preparations",
          "Hvar music and sailing events begin",
          "Rowing at Omiš Regatta"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "adventure"
        ],
        "pros": [
          "Adriatic just warm enough to swim",
          "30% less crowded than summer",
          "Lower prices than July/August",
          "Plitvice waterfalls at their fullest from spring rains"
        ],
        "cons": [
          "Some remote islands still limited services",
          "Dubrovnik still busy on weekends",
          "Peak prices in 2nd half of May increasing"
        ]
      },
      {
        "month": "May",
        "country": "Canada",
        "best_cities_or_regions": [
          "Vancouver",
          "Banff/Lake Louise",
          "Quebec City",
          "Ottawa"
        ],
        "why_visit": "Canada awakens in May with blooming gardens, thawing Rockies lakes turning turquoise, spring whale watching beginning off both coasts, and the Ottawa Canadian Tulip Festival drawing millions of visitors.",
        "climate": {
          "avg_temp_c": "7–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–240",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Canadian Tulip Festival, Ottawa (mid-May)",
          "Victoria Day long weekend (May 18, 2026)",
          "Stratford Festival season opens"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "wildlife",
          "culture"
        ],
        "pros": [
          "National parks open but uncrowded",
          "Lake Louise begins turning turquoise",
          "Long daylight hours for road trips",
          "Good whale watching — BC orcas and Quebec belugas"
        ],
        "cons": [
          "Rockies lakes partially frozen early May",
          "Variable weather — snow possible in mountains",
          "Some high-altitude trails closed"
        ]
      },
      {
        "month": "May",
        "country": "Georgia",
        "best_cities_or_regions": [
          "Tbilisi",
          "Kazbegi",
          "Kakheti Wine Region",
          "Batumi"
        ],
        "why_visit": "Spring in Georgia is extraordinary — Kazbegi's mountain passes open, Kakheti's vineyards are lush, and Tbilisi's outdoor café culture blooms. One of Europe's best hidden value destinations.",
        "climate": {
          "avg_temp_c": "12–24",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–90",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Tbilisoba City Festival (Oct, but spring events too)",
          "Wine Tourism Day (2nd Sun of May)",
          "Kazbegi hiking season opens"
        ],
        "travel_styles": [
          "culture",
          "food",
          "adventure",
          "nature"
        ],
        "pros": [
          "Exceptional wine (qvevri amber wine) and khinkali food culture",
          "Stunning Caucasus mountain scenery",
          "Extremely affordable — one of Europe's cheapest",
          "Warm, welcoming local culture"
        ],
        "cons": [
          "Limited English outside Tbilisi",
          "Infrastructure still developing in rural areas",
          "Some mountain roads still muddy early May"
        ]
      },
      {
        "month": "May",
        "country": "Chile",
        "best_cities_or_regions": [
          "Easter Island",
          "Atacama Desert",
          "Santiago",
          "Valparaíso"
        ],
        "why_visit": "May is late autumn in Chile — ideal for Atacama stargazing and hiking (minus summer crowds), visiting Easter Island's moai before its rainy season, and Santiago's wine valley restaurants at their best.",
        "climate": {
          "avg_temp_c": "5–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "90–190",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Atacama autumn stargazing season",
          "Tapati Rapa Nui Festival (Feb, but Easter Island visits May)",
          "Chilean Navy Day (May 21)"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "food",
          "culture"
        ],
        "pros": [
          "Far fewer tourists in Atacama and Easter Island",
          "Clear skies for world's best stargazing in Atacama",
          "Santiago's wine and restaurant scene excellent",
          "Autumn colors in the Lake District"
        ],
        "cons": [
          "Patagonia too cold and windy in May",
          "Easter Island flights expensive",
          "Some hiking trails in south inaccessible"
        ]
      },
      {
        "month": "May",
        "country": "Ethiopia",
        "best_cities_or_regions": [
          "Addis Ababa",
          "Lalibela",
          "Simien Mountains",
          "Omo Valley"
        ],
        "why_visit": "May sits just before Ethiopia's main rainy season — highland temperatures are perfect, Omo Valley tribal ceremonies are active, and Lalibela's rock-hewn churches can be explored in peace.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Omo Valley tribal ceremonies (year-round)",
          "Pre-rainy season Simien trekking",
          "Harar city cultural events"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "wildlife",
          "nature"
        ],
        "pros": [
          "Dry weather window before main rains",
          "Exceptional highland trekking in Simiens",
          "Gelada baboon and Ethiopian wolf spotting",
          "Deeply authentic and uncrowded"
        ],
        "cons": [
          "Rains can start early in western regions",
          "Limited luxury accommodation",
          "Altitude adjustment needed in highlands"
        ]
      },
      {
        "month": "May",
        "country": "China",
        "best_cities_or_regions": [
          "Zhangjiajie",
          "Guilin",
          "Longji Rice Terraces",
          "Guizhou"
        ],
        "why_visit": "May is prime time for China's most dramatic landscapes. Zhangjiajie's Avatar mountain pillars float above swirling cloud seas, Guilin's karst peaks are lush green from spring rains, and the Longji Rice Terraces are filled with fresh water catching reflections of the sky.",
        "climate": {
          "avg_temp_c": "18–28",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Labour Day Golden Week (May 1–5) — domestic travel surge",
          "Zhangjiajie cloud sea season (peak May–Jun)",
          "Miao ethnic minority festivals in Guizhou",
          "Longji terraces flooding with water (most photogenic)"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "culture",
          "food"
        ],
        "pros": [
          "Zhangjiajie cloud sea phenomena at peak frequency",
          "Rice terraces filled with water — most photogenic state",
          "Lush green scenery across all of southern China",
          "Guizhou ethnic minority culture deeply authentic and undervisited"
        ],
        "cons": [
          "Labour Day Golden Week (May 1–5) extremely crowded at top sites",
          "Humid and occasionally rainy across the south",
          "Zhangjiajie glass bridge and scenic areas crowded all month"
        ]
      }
    ],
    "June": [
      {
        "month": "June",
        "country": "Iceland",
        "best_cities_or_regions": [
          "Reykjavík",
          "South Coast",
          "Westfjords",
          "Myvatn"
        ],
        "why_visit": "June brings the midnight sun — nearly 24 hours of daylight peaking at the solstice. Puffin colonies arrive on coastal cliffs, all highland F-roads begin opening, and whale watching peaks off Húsavík.",
        "climate": {
          "avg_temp_c": "8–13",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–450",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Icelandic National Day (Jun 17)",
          "Summer Solstice / Jónsmessa (Jun 24)",
          "Secret Solstice Music Festival",
          "Puffin season peak"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "wildlife",
          "wellness"
        ],
        "pros": [
          "24-hour daylight — hike at midnight",
          "Puffin and whale watching at peak",
          "All Ring Road and most F-roads accessible",
          "Driest and calmest month of the year"
        ],
        "cons": [
          "40–60% more expensive than shoulder season",
          "Popular sites very crowded",
          "No chance of Northern Lights"
        ]
      },
      {
        "month": "June",
        "country": "Norway",
        "best_cities_or_regions": [
          "Bergen",
          "Flåm",
          "Geiranger",
          "Lofoten Islands"
        ],
        "why_visit": "Norwegian fjords glow under the midnight sun in June — kayak between towering walls of granite, hike the Trolltunga, and witness Midsummer bonfires on the Sognefjord. The most dramatic scenery in Europe.",
        "climate": {
          "avg_temp_c": "10–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–450",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Midsummer (Jonsok) bonfires across fjords",
          "Bergen International Festival (late May/Jun)",
          "Norway Cycling stages"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "wellness",
          "culture"
        ],
        "pros": [
          "Midnight sun makes each day feel twice as long",
          "Peak fjord scenery — wildflowers, waterfalls",
          "Hiking trails fully accessible",
          "Trolltunga and Preikestolen at their best"
        ],
        "cons": [
          "Very expensive",
          "Popular viewpoints crowded mid-June",
          "Unpredictable coastal weather"
        ]
      },
      {
        "month": "June",
        "country": "Kenya",
        "best_cities_or_regions": [
          "Masai Mara",
          "Amboseli",
          "Samburu",
          "Lamu"
        ],
        "why_visit": "June ends the long rains and begins Kenya's dry season — wildlife concentrates around water sources and the Great Migration herds begin pushing north toward the Mara, just ahead of the July crowd surge.",
        "climate": {
          "avg_temp_c": "12–26",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "250–600",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Great Migration herds entering Kenya",
          "Lamu Cultural Festival (Nov, but prep begins)",
          "Madaraka Day (Jun 1)"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "culture",
          "beach"
        ],
        "pros": [
          "Early migration action before peak-season prices",
          "Post-rain green landscapes for photography",
          "Less crowded than July–October",
          "Excellent Amboseli Kilimanjaro views"
        ],
        "cons": [
          "River crossings not yet guaranteed",
          "Some camps at late-season pricing still",
          "Short rains may still affect some areas"
        ]
      },
      {
        "month": "June",
        "country": "Slovenia",
        "best_cities_or_regions": [
          "Lake Bled",
          "Soča Valley",
          "Ljubljana",
          "Triglav NP"
        ],
        "why_visit": "June offers warm, sunny days for swimming in Lake Bled, whitewater rafting the emerald Soča, and hiking the Julian Alps with wildflowers in peak bloom — one of Europe's most scenic and underrated countries.",
        "climate": {
          "avg_temp_c": "13–24",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–180",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Statehood Day (Jun 25)",
          "Ljubljana Festival opening",
          "Summer hiking season begins in Triglav NP"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "culture",
          "food"
        ],
        "pros": [
          "Stunning alpine and coastal scenery",
          "Warm swimmable lakes and rivers",
          "Excellent value vs. Austrian/Italian neighbors",
          "Great hiking and kayaking conditions"
        ],
        "cons": [
          "Afternoon thunderstorms common in the Alps",
          "Lake Bled tour-bus crowds midday",
          "Limited direct international flight options"
        ]
      },
      {
        "month": "June",
        "country": "Mongolia",
        "best_cities_or_regions": [
          "Ulaanbaatar",
          "Terelj NP",
          "Khövsgöl Lake",
          "Gobi Desert"
        ],
        "why_visit": "June sees Mongolia's steppes at their lushest and greenest, with foals running free and local countryside Naadams beginning. A perfect window before July's National Naadam crowds while experiencing nomadic life authentically.",
        "climate": {
          "avg_temp_c": "10–24",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–180",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Local countryside Naadams begin late June",
          "Khövsgöl Lake Tsagaan Sar aftermath",
          "Eagle festival season approach"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Lush green steppe at its most photogenic",
          "Mild temperatures for Gobi trekking",
          "Far fewer tourists than July Naadam peak",
          "Ger camp stays and horseback riding optimal"
        ],
        "cons": [
          "Limited tourism infrastructure outside UB",
          "Long rough overland drives",
          "Weather shifts fast on the steppe"
        ]
      },
      {
        "month": "June",
        "country": "Cambodia",
        "best_cities_or_regions": [
          "Angkor Wat",
          "Siem Reap",
          "Kampot",
          "Koh Rong"
        ],
        "why_visit": "June is green season in Cambodia — Angkor Wat's moats fill and the jungle backdrop turns vivid. Lower prices, far fewer tourists, and misty early-morning temple photographs make for a genuinely atmospheric experience.",
        "climate": {
          "avg_temp_c": "26–33",
          "rainfall_level": "high",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "35–80",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Queen Mother's Birthday (Jun 18)",
          "Angkor in monsoon atmosphere",
          "Tonle Sap Lake beginning to fill"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "food",
          "nature"
        ],
        "pros": [
          "Angkor Wat dramatically less crowded",
          "Lowest prices of the year",
          "Lush green jungle frames temples beautifully",
          "Authentic local experiences without tourist pressure"
        ],
        "cons": [
          "Heavy afternoon rainstorms",
          "Hot and very humid (feels 38°C+)",
          "Some rural roads impassable"
        ]
      },
      {
        "month": "June",
        "country": "Scotland",
        "best_cities_or_regions": [
          "Edinburgh",
          "Isle of Skye",
          "Cairngorms",
          "Loch Lomond"
        ],
        "why_visit": "June is Scotland's longest daylight month — up to 18 hours on the summer solstice. Isle of Skye's dramatic cliffs and sea stacks are accessible without October's gales, and Highland wildflowers are spectacular.",
        "climate": {
          "avg_temp_c": "10–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–250",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Royal Highland Show, Edinburgh (Jun)",
          "Summer solstice events",
          "Skye Music Festival (Jun)"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "culture",
          "wildlife"
        ],
        "pros": [
          "Long daylight for exploring remote landscapes",
          "Wildflowers and heather just starting",
          "Midges not yet at peak (July/Aug worse)",
          "Castle and distillery tours in perfect weather"
        ],
        "cons": [
          "Unpredictable rain — prepare for all weathers",
          "Island transport books quickly",
          "Expensive for Western Europe"
        ]
      },
      {
        "month": "June",
        "country": "New Zealand",
        "best_cities_or_regions": [
          "Queenstown",
          "Wanaka",
          "Mount Hutt",
          "Wellington"
        ],
        "why_visit": "June opens New Zealand's ski season — Queenstown and Wanaka transform into world-class ski destinations with Remarkables and Coronet Peak receiving fresh snow. A unique southern hemisphere winter ski escape.",
        "climate": {
          "avg_temp_c": "0–12",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "180–380",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "NZ ski season opening (mid-Jun)",
          "Queenstown Winter Festival",
          "Matariki (Māori New Year, public holiday Jun 2026)"
        ],
        "travel_styles": [
          "skiing",
          "adventure",
          "food",
          "wellness"
        ],
        "pros": [
          "World-class ski resorts in stunning alpine settings",
          "Queenstown's après-ski and restaurants excellent",
          "Matariki celebrations add cultural depth",
          "Uncrowded compared to summer"
        ],
        "cons": [
          "Expensive ski passes and accommodation",
          "Ski conditions variable in early June",
          "Cold temperatures across the South Island"
        ]
      },
      {
        "month": "June",
        "country": "Brazil",
        "best_cities_or_regions": [
          "Fortaleza",
          "Pantanal",
          "Manaus",
          "São Luís"
        ],
        "why_visit": "June brings dry-season conditions to the Amazon and Pantanal (ideal for jaguar spotting) while the Northeast explodes with Festas Juninas — Campina Grande and Caruaru host Brazil's biggest rural-folk festival cycle with forró music and quadrilha dancing.",
        "climate": {
          "avg_temp_c": "18–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "70–160",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Festas Juninas / Forró festival season (Jun–Jul)",
          "Parintins Folklore Festival (late June)",
          "Pantanal jaguar safari season begins"
        ],
        "travel_styles": [
          "culture",
          "wildlife",
          "nature",
          "food",
          "nightlife"
        ],
        "pros": [
          "Massive São João street festival culture",
          "Pantanal jaguar spotting season begins",
          "Mild dry winter in Rio and São Paulo",
          "Shoulder-season prices"
        ],
        "cons": [
          "Ocean too cool for beach days in Rio",
          "Amazon logistics are complex",
          "Safety varies significantly by region"
        ]
      },
      {
        "month": "June",
        "country": "Greece",
        "best_cities_or_regions": [
          "Athens",
          "Crete",
          "Rhodes",
          "Zakynthos"
        ],
        "why_visit": "June offers the best balance of Greek summer — hot and sunny days, a warm Aegean Sea, and 30% fewer visitors than July/August peak, with full ferry schedules for island hopping and the Athens Epidaurus Festival starting.",
        "climate": {
          "avg_temp_c": "20–30",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–280",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Athens Epidaurus Festival opens (Jun–Aug)",
          "Zakynthos loggerhead turtle nesting season",
          "Rockwave Festival (Athens, late Jun)"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "nightlife",
          "wildlife"
        ],
        "pros": [
          "Hot sunny beach weather with warm seas",
          "Full island ferry schedules",
          "Ancient sites performed live at Epidaurus",
          "30% less crowded than August"
        ],
        "cons": [
          "Santorini still very busy",
          "Meltemi winds can disrupt island-hopping",
          "Top accommodation nearly fully booked"
        ]
      },
      {
        "month": "June",
        "country": "China",
        "best_cities_or_regions": [
          "Lhasa",
          "Yamdrok Lake",
          "Namtso Lake",
          "Shangri-La"
        ],
        "why_visit": "June opens the Tibetan Plateau's best travel window — roads are clear, skies are intensely blue at altitude, and the Tibetan landscape explodes with wildflowers before July's monsoon edges in. Shangri-La (Deqin) in Yunnan offers a gentler high-altitude alternative with blooming alpine meadows.",
        "climate": {
          "avg_temp_c": "8–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–200",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Saga Dawa (Tibetan Buddhist holy month, Jun 2026)",
          "Shoton Festival preparations (Jul/Aug)",
          "Shangri-La wildflower season peak",
          "Tibet Autonomous Region open season"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "wellness"
        ],
        "pros": [
          "Tibet at its most accessible with clear mountain views",
          "Potala Palace and Jokhang Temple in spectacular high-altitude light",
          "Wildflowers carpet the plateau — extraordinary photography",
          "Saga Dawa pilgrimage season — deeply spiritual atmosphere"
        ],
        "cons": [
          "Tibet requires a special Tibet Travel Permit (arrange 2–4 weeks ahead)",
          "Altitude sickness risk — Lhasa sits at 3,650m",
          "Expensive guided tours mandatory throughout Tibet"
        ]
      }
    ],
    "July": [
      {
        "month": "July",
        "country": "Tanzania",
        "best_cities_or_regions": [
          "Northern Serengeti",
          "Grumeti Reserve",
          "Ngorongoro",
          "Zanzibar"
        ],
        "why_visit": "July is peak Great Migration month — herds push through the Western Corridor for Grumeti River crossings and early Mara River crossings begin in the north. Dry, cool conditions make for outstanding game viewing.",
        "climate": {
          "avg_temp_c": "14–27",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "400–900",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Great Migration Grumeti and early Mara River crossings",
          "Peak dry-season game viewing",
          "Zanzibar Sauti za Busara aftermath"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature",
          "beach"
        ],
        "pros": [
          "Best month for river crossings and predator action",
          "Cool, dry, low-malaria conditions",
          "Combine Serengeti with Zanzibar beach",
          "Exceptional photography conditions"
        ],
        "cons": [
          "Expensive — lodges book 6–12 months ahead",
          "River crossing viewpoints crowded",
          "Cold predawn game drives (8–12°C)"
        ]
      },
      {
        "month": "July",
        "country": "Mongolia",
        "best_cities_or_regions": [
          "Ulaanbaatar",
          "Terelj",
          "Gobi Desert",
          "Kharkhorin"
        ],
        "why_visit": "July hosts the UNESCO-listed Naadam Festival (Jul 11–13, 2026) — three days of wrestling, archery, and horse racing. The steppe is at its most lush and green, perfect for ger stays and horseback nomadic experiences.",
        "climate": {
          "avg_temp_c": "13–24",
          "rainfall_level": "medium",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–180",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Naadam Festival (Jul 11–13, 2026)",
          "Countryside Naadams in Khovd, Bayan-Ölgii",
          "Eagle Festival (Oct, but area visits July)"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature"
        ],
        "pros": [
          "Once-in-a-lifetime Naadam cultural spectacle",
          "Lush steppe ideal for riding and camping",
          "Long warm days for exploration",
          "Combines well with Gobi Desert"
        ],
        "cons": [
          "UB hotels 40–80% pricier around Naadam",
          "Brief heavy afternoon thunderstorms",
          "Rough overland travel to remote areas"
        ]
      },
      {
        "month": "July",
        "country": "France",
        "best_cities_or_regions": [
          "Paris",
          "Tour de France routes",
          "Brittany",
          "Loire Valley"
        ],
        "why_visit": "Tour de France (late June/July) sends a carnival of cyclists through stunning countryside and into Paris for the grand finale on the Champs-Élysées. Bastille Day (Jul 14) delivers one of the world's great national day celebrations.",
        "climate": {
          "avg_temp_c": "18–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "160–320",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Bastille Day (Jul 14)",
          "Tour de France finale on Champs-Élysées",
          "Avignon Festival (theatre, Jul)",
          "Francofolies de La Rochelle (Jul)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "adventure"
        ],
        "pros": [
          "Bastille Day fireworks from the Eiffel Tower",
          "Tour de France roadside viewing is free and joyful",
          "Loire Valley châteaux in summer light",
          "Best outdoor café and market season"
        ],
        "cons": [
          "Paris extremely crowded and hot",
          "Many Parisians leave — service quality can drop",
          "Beach resorts very expensive"
        ]
      },
      {
        "month": "July",
        "country": "Indonesia",
        "best_cities_or_regions": [
          "Bali",
          "Nusa Penida",
          "Komodo",
          "Gili Islands"
        ],
        "why_visit": "Heart of dry season — sunny skies, calm seas, best diving visibility in Komodo and Bali. Bali Arts Festival runs mid-June to mid-July in Denpasar, showcasing Balinese dance, music, and craft at its most elaborate.",
        "climate": {
          "avg_temp_c": "23–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "50–120",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Bali Arts Festival (mid-Jun to mid-Jul)",
          "Dry-season surfing peak at Uluwatu",
          "Independence Day preparations (Aug 17)"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "adventure",
          "wellness",
          "food"
        ],
        "pros": [
          "Reliable sunshine and minimal rainfall",
          "Best underwater visibility for diving",
          "Excellent value vs. Western destinations",
          "Major cultural programming"
        ],
        "cons": [
          "Bali beaches and Ubud very crowded",
          "Accommodation 30–50% above shoulder prices",
          "Traffic in south Bali significant"
        ]
      },
      {
        "month": "July",
        "country": "Colombia",
        "best_cities_or_regions": [
          "Medellín",
          "Cartagena",
          "Bogotá",
          "Coffee Region"
        ],
        "why_visit": "July is Colombia's high season — Medellín's Feria de las Flores preparation kicks off, Cartagena's Caribbean beaches and historic walled city are sunny and spectacular, and the coffee region is at peak beauty.",
        "climate": {
          "avg_temp_c": "16–30",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Feria de las Flores Medellín (early Aug, preparations Jul)",
          "Bogotá summer events",
          "Ibero-American Theatre Festival preparations"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife",
          "adventure",
          "beach"
        ],
        "pros": [
          "Medellín's remarkable urban transformation to explore",
          "Cartagena Caribbean beach weather",
          "Rich coffee culture and finca stays",
          "Excellent and rapidly improving food scene"
        ],
        "cons": [
          "Safety awareness still required in some areas",
          "Bogotá altitude affects some travelers",
          "Cartagena humidity very high"
        ]
      },
      {
        "month": "July",
        "country": "Croatia",
        "best_cities_or_regions": [
          "Hvar",
          "Dubrovnik",
          "Split",
          "Vis"
        ],
        "why_visit": "July is Croatia in full summer glory — hot clear days, warm Adriatic perfect for island-hopping by catamaran, and Hvar's lavender fields in bloom with world-class yacht parties in Paklinski Islands.",
        "climate": {
          "avg_temp_c": "22–33",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–320",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Dubrovnik Summer Festival (Jul–Aug)",
          "Ultra Europe music festival, Split (Jul)",
          "Hvar lavender harvest season"
        ],
        "travel_styles": [
          "beach",
          "nightlife",
          "food",
          "culture",
          "adventure"
        ],
        "pros": [
          "Perfect beach and sailing weather",
          "Adriatic at its warmest (27°C)",
          "Lavender harvest on Hvar",
          "World-class nightlife on Hvar and Dubrovnik"
        ],
        "cons": [
          "Dubrovnik massively overcrowded — cruise ships daily",
          "Accommodation prices at yearly peak",
          "Parking and traffic in coastal cities nightmarish"
        ]
      },
      {
        "month": "July",
        "country": "Canada",
        "best_cities_or_regions": [
          "Banff & Jasper",
          "Vancouver",
          "Québec City",
          "Montréal"
        ],
        "why_visit": "July delivers Canada's warmest hiking weather in the Rockies, turquoise-lake reflections of Mount Edith Cavell and Moraine Lake, whale watching along both coasts, and marquee summer festivals.",
        "climate": {
          "avg_temp_c": "15–26",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–300",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Canada Day (Jul 1)",
          "Calgary Stampede (early Jul)",
          "Montréal Jazz Festival",
          "Just for Laughs Montréal"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "culture",
          "food",
          "wildlife"
        ],
        "pros": [
          "Peak hiking weather in Rockies — all passes open",
          "Whale watching peak on both coasts",
          "World-class summer festivals",
          "Long daylight in the north"
        ],
        "cons": [
          "National parks extremely crowded",
          "Peak prices on hotels and campervans",
          "Wildfire smoke can affect western regions"
        ]
      },
      {
        "month": "July",
        "country": "Japan",
        "best_cities_or_regions": [
          "Aomori",
          "Tokushima",
          "Kyoto",
          "Hokkaido"
        ],
        "why_visit": "July is Japan's matsuri (festival) season — Aomori Nebuta's enormous illuminated floats, Tokushima's Awa Odori mass dance festival, and Obon ancestor celebrations across the country. Hokkaido offers cool lavender-scented escape from city heat.",
        "climate": {
          "avg_temp_c": "23–34",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Aomori Nebuta (Aug 2–7, preparation in July)",
          "Gion Matsuri, Kyoto (Jul 1–31)",
          "Hokkaido Furano lavender peak (mid-Jul)",
          "Hanabi fireworks throughout the month"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "wellness"
        ],
        "pros": [
          "Some of Japan's most spectacular festivals",
          "Fireworks nearly every weekend",
          "Hokkaido cool-weather alternative to humid cities",
          "Festive street-food evenings"
        ],
        "cons": [
          "Hot and very humid in Honshu cities",
          "Typhoon season begins",
          "Domestic travel surge around Obon"
        ]
      },
      {
        "month": "July",
        "country": "Greece",
        "best_cities_or_regions": [
          "Milos",
          "Naxos",
          "Paros",
          "Athens"
        ],
        "why_visit": "Classic Mediterranean summer — hot dry days, warm Aegean for swimming, full island-hopping schedules. Milos and Naxos offer dramatic sea caves, volcanic beaches and traditional villages without Santorini's crowds.",
        "climate": {
          "avg_temp_c": "23–33",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "150–350",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Athens Epidaurus Festival (open-air theatre)",
          "Meltemi sailing winds excellent",
          "Rockwave Festival Athens"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "Guaranteed sunshine and warm sea",
          "Full ferry schedules for island-hopping",
          "Vibrant nightlife on Ios and Mykonos",
          "Ancient theatre performances at Epidaurus"
        ],
        "cons": [
          "Santorini and Mykonos extremely crowded",
          "Accommodation prices double at peak",
          "Athens heatwaves can exceed 38°C"
        ]
      },
      {
        "month": "July",
        "country": "Namibia",
        "best_cities_or_regions": [
          "Etosha National Park",
          "Sossusvlei",
          "Damaraland",
          "Swakopmund"
        ],
        "why_visit": "July is Namibia's peak dry season — wildlife concentrates around Etosha's floodlit waterholes enabling unique night viewing, Sossusvlei dunes glow orange at sunrise, and Swakopmund offers adventure activities in mild coastal fog.",
        "climate": {
          "avg_temp_c": "5–25",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–350",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Etosha waterhole peak game viewing",
          "Swakopmund Annual Festival",
          "Desert-adapted wildlife season"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature"
        ],
        "pros": [
          "Night waterhole viewing unique in Africa",
          "Clear dry skies — exceptional stargazing",
          "Desolate, photogenic dune landscapes",
          "Low malaria risk"
        ],
        "cons": [
          "Cold nights — 0–5°C in highlands",
          "Peak-season lodge prices",
          "Very long self-drive distances"
        ]
      },
      {
        "month": "July",
        "country": "China",
        "best_cities_or_regions": [
          "Hulunbuir",
          "Inner Mongolia",
          "Xinjiang",
          "Lijiang"
        ],
        "why_visit": "July transforms Inner Mongolia's Hulunbuir grasslands into a sea of emerald green, home to Mongolian ger camps, horse festivals, and the Naadam-style Nadam Fair. Xinjiang's Silk Road cities of Kashgar and Dunhuang are also spectacular in July's dry heat, with ancient bazaars and desert camels.",
        "climate": {
          "avg_temp_c": "18–35",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Nadam Fair Inner Mongolia (Jul–Aug) — wrestling, archery, horse racing",
          "Kashgar Sunday Bazaar (every Sunday, peak in summer)",
          "Dunhuang Silk Road culture events",
          "Lijiang Torch Festival (Yi ethnic minority, late Jul)"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Hulunbuir grasslands at peak green — stunning Mongolian culture",
          "Kashgar's ancient bazaar and Id Kah Mosque authentic and uncrowded by China standards",
          "Dunhuang's Mogao Caves world-class Buddhist art",
          "Horseback riding and ger stays in Inner Mongolia"
        ],
        "cons": [
          "Xinjiang requires careful research on current travel advisories",
          "Hulunbuir remote — long train or flight from major cities",
          "July heat in Xinjiang cities can reach 40°C+"
        ]
      }
    ],
    "August": [
      {
        "month": "August",
        "country": "Spain",
        "best_cities_or_regions": [
          "Valencia/Buñol",
          "San Sebastián",
          "Mallorca",
          "Bilbao"
        ],
        "why_visit": "August is Spain's biggest fiesta month — La Tomatina tomato battle in Buñol (Aug 26), Semana Grande in San Sebastián, and Mallorca beaches at their most beautiful. Pintxos bars in Basque Country are the world's best food crawl.",
        "climate": {
          "avg_temp_c": "20–33",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "La Tomatina (Aug 26, Buñol)",
          "Semana Grande San Sebastián (mid-Aug)",
          "Feria de Málaga (mid-Aug)",
          "Bilbao BBK Live Festival"
        ],
        "travel_styles": [
          "culture",
          "beach",
          "food",
          "nightlife"
        ],
        "pros": [
          "Iconic festivals and street celebrations",
          "Ideal beach weather on all coasts",
          "World-class pintxos and seafood",
          "Long festive evenings"
        ],
        "cons": [
          "Madrid and Seville hit 38–42°C",
          "Many local shops close for August holidays",
          "Coastal resorts and Barcelona extremely crowded"
        ]
      },
      {
        "month": "August",
        "country": "Botswana",
        "best_cities_or_regions": [
          "Okavango Delta",
          "Chobe",
          "Moremi",
          "Central Kalahari"
        ],
        "why_visit": "Peak dry season in Botswana means wildlife density is extraordinary — elephants crowd the Chobe River in their thousands, predator-prey encounters happen daily in Moremi, and mokoro channels are at their fullest.",
        "climate": {
          "avg_temp_c": "8–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "600–1500",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Peak elephant concentration on Chobe River",
          "Wild dog denning season ends — pups now mobile",
          "Okavango flood at its most navigable"
        ],
        "travel_styles": [
          "wildlife",
          "nature",
          "adventure"
        ],
        "pros": [
          "Africa's best overall game viewing",
          "Cool, low-humidity conditions",
          "Elephant concentrations at Chobe unparalleled",
          "Exceptional predator sightings"
        ],
        "cons": [
          "Among world's most expensive safari destinations",
          "Cold (5°C) predawn game drives",
          "Top camps book 12+ months ahead"
        ]
      },
      {
        "month": "August",
        "country": "Peru",
        "best_cities_or_regions": [
          "Machu Picchu",
          "Sacred Valley",
          "Colca Canyon",
          "Arequipa"
        ],
        "why_visit": "August is peak dry season in the Andes with clear blue skies perfect for the classic Inca Trail hike and photography of Machu Picchu. Andean festivals, including Arequipa's patronal fiesta, add cultural richness.",
        "climate": {
          "avg_temp_c": "6–19",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "70–150",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Pachamama Day (Aug 1)",
          "Fiesta de Arequipa (Aug 15)",
          "Inca Trail peak season",
          "Qoyllur Riti pilgrimage aftermath"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature"
        ],
        "pros": [
          "Clearest Machu Picchu skies of the year",
          "Dry stable trail conditions",
          "Excellent Andean stargazing",
          "Cooler temperatures for altitude hiking"
        ],
        "cons": [
          "Inca Trail permits sell out 5–6 months ahead",
          "Machu Picchu crowds at yearly peak",
          "Freezing nights at altitude (3,400m+)"
        ]
      },
      {
        "month": "August",
        "country": "Switzerland",
        "best_cities_or_regions": [
          "Jungfrau Region",
          "Zermatt",
          "Lucerne",
          "Engadine"
        ],
        "why_visit": "August is peak Alpine summer — all high-altitude trails, cable cars, and mountain huts fully open. Swiss National Day (Aug 1) lights mountain summits with bonfires, and Lucerne Festival draws world-class orchestras.",
        "climate": {
          "avg_temp_c": "12–24",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–500",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Swiss National Day (Aug 1) — bonfires on every peak",
          "Lucerne Festival",
          "Street Parade Zürich (early Aug)",
          "Montreux Jazz Festival (Jul/Aug)"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wellness",
          "culture"
        ],
        "pros": [
          "Entire Alpine trail and lift network open",
          "Wildflower meadows and glacier access at peak",
          "Swiss National Day bonfires spectacular",
          "Hut-to-hut trekking at its best"
        ],
        "cons": [
          "One of the world's most expensive destinations",
          "Popular trails very crowded",
          "Afternoon thunderstorms common in mountains"
        ]
      },
      {
        "month": "August",
        "country": "Japan",
        "best_cities_or_regions": [
          "Aomori",
          "Tokushima",
          "Kyoto",
          "Hokkaido"
        ],
        "why_visit": "Japan's matsuri season peaks in August — Aomori Nebuta (Aug 2–7), Tokushima's Awa Odori dance festival (Aug 12–15), and the Obon ancestor observance create a country-wide explosion of tradition and fireworks.",
        "climate": {
          "avg_temp_c": "23–35",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Aomori Nebuta Matsuri (Aug 2–7)",
          "Awa Odori Tokushima (Aug 12–15)",
          "Obon (mid-Aug)",
          "Kyoto Gozan Okuribi (Aug 16)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature"
        ],
        "pros": [
          "Japan's most spectacular traditional festivals",
          "Hanabi fireworks almost every weekend",
          "Hokkaido cool alternative to humid Honshu",
          "Festive street-food culture peak"
        ],
        "cons": [
          "Hot and very humid in cities",
          "Typhoon season — disruption possible",
          "Obon travel surge affects transport"
        ]
      },
      {
        "month": "August",
        "country": "United States",
        "best_cities_or_regions": [
          "Denali NP",
          "Katmai NP",
          "Kenai Fjords",
          "Glacier Bay"
        ],
        "why_visit": "August in Alaska is the peak season for brown bear salmon-run viewing at Katmai's Brooks Falls, calving glaciers in Kenai Fjords, and early autumn tundra colors beginning to paint Denali — some of Earth's most raw wilderness.",
        "climate": {
          "avg_temp_c": "8–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–500",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Brown bear salmon run at Brooks Falls (peak)",
          "Alaska State Fair Palmer",
          "Tundra fall color begins late August"
        ],
        "travel_styles": [
          "wildlife",
          "nature",
          "adventure"
        ],
        "pros": [
          "World-class bear viewing at Brooks Falls",
          "Whale watching at peak",
          "Early aurora possible late month",
          "Tundra fall colors beginning"
        ],
        "cons": [
          "Mosquitoes and biting flies active",
          "Frequent coastal rain and fog",
          "Lodges near Katmai book a year ahead"
        ]
      },
      {
        "month": "August",
        "country": "Scotland",
        "best_cities_or_regions": [
          "Edinburgh",
          "Isle of Skye",
          "Cairngorms",
          "Orkney"
        ],
        "why_visit": "Edinburgh in August is transformed by the world's largest arts festival — the Edinburgh Festival Fringe, International Festival, and Military Tattoo fill every venue and street corner with performers from 50+ countries.",
        "climate": {
          "avg_temp_c": "12–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–280",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Edinburgh Festival Fringe (world's largest arts festival, Aug)",
          "Edinburgh International Festival",
          "Royal Edinburgh Military Tattoo",
          "Edinburgh Art Festival"
        ],
        "travel_styles": [
          "culture",
          "nightlife",
          "food",
          "nature"
        ],
        "pros": [
          "World's largest arts festival — extraordinary variety",
          "Mild summer weather ideal for Highland day trips",
          "Whisky distillery tours in full swing",
          "Isle of Skye at its most accessible"
        ],
        "cons": [
          "Edinburgh accommodation prices treble during Fringe",
          "City extremely crowded — book 6+ months ahead",
          "Scottish midges at their worst in August"
        ]
      },
      {
        "month": "August",
        "country": "Portugal",
        "best_cities_or_regions": [
          "Algarve",
          "Lisbon",
          "Douro Valley",
          "Comporta"
        ],
        "why_visit": "Algarve beaches hit their sun-drenched peak in August with warm Atlantic seas, dramatic sea-cave kayaking, and Douro wine estates hosting harvest preparations. Lisbon's summer festival scene runs through August.",
        "climate": {
          "avg_temp_c": "18–30",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–250",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Festas de Nossa Senhora da Agonia (Viana do Castelo)",
          "Super Bock Super Rock festival",
          "Medieval Fair of Santa Maria da Feira",
          "NOS Alive festival"
        ],
        "travel_styles": [
          "beach",
          "food",
          "culture",
          "nightlife"
        ],
        "pros": [
          "Algarve beaches stunning in peak sun",
          "Atlantic sea warm but refreshing vs. Mediterranean",
          "Excellent wine regions accessible",
          "More affordable than Spain/France/Italy"
        ],
        "cons": [
          "Algarve very crowded — book 3–4 months ahead",
          "Lisbon busy and hot in summer",
          "Airport queues can be severe"
        ]
      },
      {
        "month": "August",
        "country": "Turkey",
        "best_cities_or_regions": [
          "Bodrum",
          "Cappadocia",
          "Istanbul",
          "Kas"
        ],
        "why_visit": "Turkish riviera peaks in August — Aegean gulet boat trips, Bodrum's stunning peninsulas, and Cappadocia's balloon rides over fairy chimneys remain operational. Istanbul's outdoor venues and Bosphorus ferry culture shine.",
        "climate": {
          "avg_temp_c": "22–34",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "70–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Victory Day (Aug 30)",
          "Bodrum Cup yacht racing preparations",
          "Bodrum International Ballet Festival"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "adventure"
        ],
        "pros": [
          "Mediterranean/Aegean at peak warmth for gulet sailing",
          "Excellent balloon-flight conditions in Cappadocia",
          "Outstanding food and hospitality",
          "Affordable for a European summer destination"
        ],
        "cons": [
          "Very hot — Cappadocia can hit 35°C",
          "Istanbul humidity oppressive",
          "Bodrum crowded with international jet-set"
        ]
      },
      {
        "month": "August",
        "country": "Vietnam",
        "best_cities_or_regions": [
          "Da Nang",
          "Hội An",
          "Phong Nha Caves",
          "Ha Giang"
        ],
        "why_visit": "August is high season for central Vietnam's beaches at Da Nang and Hội An with hot sunny days, excellent seafood, and Phong Nha's world-famous cave systems open. Ha Giang's rice terraces begin turning gold.",
        "climate": {
          "avg_temp_c": "27–35",
          "rainfall_level": "low",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–90",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Hội An Full Moon Lantern Festival",
          "Wandering Souls Day (Aug 25) — Vu Lan",
          "Da Nang beach events season peak"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "adventure"
        ],
        "pros": [
          "Best beach weather in central Vietnam",
          "World-class cave exploration in Phong Nha",
          "Exceptional street food at very low prices",
          "Rich history in Hội An and Hue"
        ],
        "cons": [
          "Very hot and humid (feels 38°C+)",
          "Typhoon risk increases late August",
          "Da Nang beach crowded with domestic tourists"
        ]
      },
      {
        "month": "August",
        "country": "China",
        "best_cities_or_regions": [
          "Huangshan",
          "Jiuzhaigou",
          "Chongqing",
          "Guizhou"
        ],
        "why_visit": "August brings the Sea of Clouds to Yellow Mountain (Huangshan) — the most painted mountain in Chinese art — and Jiuzhaigou's waterfalls are at maximum flow. While cities swelter, these highland destinations are pleasantly cool and cinematically dramatic.",
        "climate": {
          "avg_temp_c": "18–32",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Huangshan Sea of Clouds peak season",
          "Qixi Festival — Chinese Valentine's Day (Aug 2026)",
          "Jiuzhaigou waterfalls at maximum flow",
          "Chongqing Hotpot Festival"
        ],
        "travel_styles": [
          "nature",
          "adventure",
          "food",
          "culture"
        ],
        "pros": [
          "Huangshan (Yellow Mountain) cloud sea photography iconic",
          "Jiuzhaigou's multicoloured lakes and waterfalls at full power",
          "Cool highland temperatures vs. suffocating lowland cities",
          "Chongqing hotpot in its hometown — spiciest and most authentic"
        ],
        "cons": [
          "August is China's peak domestic travel month — very crowded",
          "Huangshan cable cars queue for 2–3 hours on weekends",
          "Typhoon risk on eastern and southern coasts"
        ]
      }
    ],
    "September": [
      {
        "month": "September",
        "country": "Italy",
        "best_cities_or_regions": [
          "Tuscany",
          "Rome",
          "Amalfi Coast",
          "Venice"
        ],
        "why_visit": "September is Italy's finest month — warm seas, grape harvest (vendemmia) festivals in Tuscany, Venice Film Festival, and significantly fewer tourists than August. The light is golden and food is exceptional with seasonal truffles.",
        "climate": {
          "avg_temp_c": "17–28",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–300",
        "season_type": "shoulder",
        "crowd_level": "high",
        "key_events": [
          "Venice International Film Festival (late Aug/early Sep)",
          "Regata Storica Venice (1st Sun of Sep)",
          "Tuscany grape harvest (vendemmia)",
          "Tartufo Bianco (white truffle season begins)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "beach",
          "wellness"
        ],
        "pros": [
          "Warm beaches without August crowds and heat",
          "Harvest season — fresh wine and early truffles",
          "Venice Film Festival glamour",
          "Perfect warm September temperatures"
        ],
        "cons": [
          "Still busy and pricey at top sites",
          "Occasional early-autumn thunderstorms",
          "Film Festival inflates Venice accommodation"
        ]
      },
      {
        "month": "September",
        "country": "Germany",
        "best_cities_or_regions": [
          "Munich",
          "Berlin",
          "Rhine Valley",
          "Black Forest"
        ],
        "why_visit": "Oktoberfest runs Sep 19–Oct 4, 2026, in Munich — the world's largest folk festival with 6 million visitors, beer tents, oompah bands, and roast chickens. Combine with Rhine Valley wine harvest for the full German autumn experience.",
        "climate": {
          "avg_temp_c": "10–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–260",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Oktoberfest (Sep 19–Oct 4, 2026)",
          "Cannstatter Volksfest Stuttgart",
          "Rhine in Flames river fireworks",
          "Berlin Marathon (late Sep)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "Iconic Oktoberfest experience",
          "Rhine Valley wine harvest",
          "Comfortable sightseeing temperatures",
          "Berlin Marathon is a World Major"
        ],
        "cons": [
          "Munich hotels 3–5x normal prices during Oktoberfest",
          "Tent reservations needed months ahead",
          "Rainy evenings possible"
        ]
      },
      {
        "month": "September",
        "country": "Turkey",
        "best_cities_or_regions": [
          "Cappadocia",
          "Istanbul",
          "Ephesus",
          "Antalya"
        ],
        "why_visit": "September delivers ideal Turkish weather — warm Aegean swimming continues, Cappadocia balloon rides are outstanding in clear autumn air, and ancient ruins like Ephesus are explored without summer's scorching heat.",
        "climate": {
          "avg_temp_c": "17–29",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Cappadox Festival",
          "Istanbul Biennial (odd years)",
          "Aegean sea still warm for swimming"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "food",
          "beach"
        ],
        "pros": [
          "Excellent weather across the country",
          "30% cheaper than peak summer",
          "Cappadocia balloon conditions optimal",
          "Mediterranean sea warm through October"
        ],
        "cons": [
          "Istanbul still busy",
          "Lira volatility makes pricing unpredictable",
          "Balloon slots book out weeks ahead"
        ]
      },
      {
        "month": "September",
        "country": "Nepal",
        "best_cities_or_regions": [
          "Kathmandu",
          "Annapurna",
          "Khumbu",
          "Mustang"
        ],
        "why_visit": "September marks the end of monsoon — rain-washed clear air creates the sharpest Himalayan views of the year, lush green valleys provide a spectacular backdrop, and trails are quieter than October's peak.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–90",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Indra Jatra Kathmandu (mid-September)",
          "Teej Festival",
          "End of monsoon — trails reopening"
        ],
        "travel_styles": [
          "adventure",
          "culture",
          "nature",
          "wellness"
        ],
        "pros": [
          "Clearest mountain views post-monsoon",
          "Lush green landscapes",
          "Quieter trails than peak October",
          "Indra Jatra masked processions in Kathmandu"
        ],
        "cons": [
          "Early month rain and muddy trails",
          "Lukla flight delays remain likely",
          "Leeches on lower-elevation paths"
        ]
      },
      {
        "month": "September",
        "country": "Rwanda",
        "best_cities_or_regions": [
          "Volcanoes NP",
          "Kigali",
          "Nyungwe Forest",
          "Lake Kivu"
        ],
        "why_visit": "September is the tail of the long dry season — firmer forest trails for gorilla trekking, the annual Kwita Izina gorilla-naming ceremony, and the most stunning views of the Virunga volcanoes before short rains arrive.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "500–1500",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Kwita Izina gorilla naming ceremony (early Sep)",
          "Rwanda Film Festival",
          "Rwanda Mountain Gorilla Trek"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature",
          "culture"
        ],
        "pros": [
          "Dry trails — best gorilla trekking conditions",
          "Kwita Izina unique cultural experience",
          "Clear volcano views",
          "Safe, clean, well-organized destination"
        ],
        "cons": [
          "Gorilla permits $1,500/person",
          "Short rains may begin late September",
          "Top lodges book 6–12 months ahead"
        ]
      },
      {
        "month": "September",
        "country": "Argentina",
        "best_cities_or_regions": [
          "Buenos Aires",
          "Península Valdés",
          "Mendoza",
          "Salta"
        ],
        "why_visit": "September brings jacarandas blooming in Buenos Aires, peak southern right whale season at Península Valdés (watching from shore), and spring arriving across the country — with a fraction of the January crowds.",
        "climate": {
          "avg_temp_c": "10–21",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–180",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Southern right whale season at Valdés (peak)",
          "Tango Buenos Aires Festival",
          "Penguins arriving at Punta Tombo"
        ],
        "travel_styles": [
          "wildlife",
          "culture",
          "food",
          "nature"
        ],
        "pros": [
          "Extraordinary close-up whale watching at Valdés",
          "Jacaranda-lined Buenos Aires at its most beautiful",
          "Shoulder-season prices",
          "Mendoza wine scene gearing up for harvest"
        ],
        "cons": [
          "Patagonia still cold and windy",
          "Some southern trails not yet open",
          "Whale observation cliff can be windy"
        ]
      },
      {
        "month": "September",
        "country": "Japan",
        "best_cities_or_regions": [
          "Kyoto",
          "Hakkaido",
          "Tokyo",
          "Matsumoto"
        ],
        "why_visit": "Early autumn brings Hokkaido's first red-leaf displays, comfortable temperatures after summer humidity, and excellent food — matsutake mushrooms, new sake (Shinshu), and Pacific saury season fill restaurant menus.",
        "climate": {
          "avg_temp_c": "18–27",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–240",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Early koyo (autumn foliage) in Hokkaido",
          "Moon-viewing (Tsukimi) ceremonies",
          "New sake season begins",
          "Respect for the Aged Day (3rd Mon Sep)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "wellness"
        ],
        "pros": [
          "First autumn colors in Hokkaido",
          "Comfortable temperatures after August heat",
          "Excellent seasonal cuisine",
          "Fewer tourists than spring sakura season"
        ],
        "cons": [
          "Typhoons still possible in early September",
          "Sea still warm — good for Okinawa but not 'autumn'",
          "Hokkaido leaf color just beginning — peak is October"
        ]
      },
      {
        "month": "September",
        "country": "Morocco",
        "best_cities_or_regions": [
          "Marrakech",
          "Fès",
          "Ait Benhaddou",
          "Essaouira"
        ],
        "why_visit": "September is the best month to visit Marrakech — temperatures drop from summer's 40°C to a comfortable 25–30°C, the annual Gnaoua Music Festival wraps up, and the Sahara is warm without scorching.",
        "climate": {
          "avg_temp_c": "16–30",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–110",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Eid al-Adha (date varies)",
          "Essaouira Gnaoua Festival tail end",
          "Post-summer riad season opening"
        ],
        "travel_styles": [
          "culture",
          "food",
          "adventure",
          "nature"
        ],
        "pros": [
          "Much more comfortable temperatures than summer",
          "Pre-peak tourist levels",
          "Desert still warm for evening camps",
          "Excellent riad values vs. spring peak"
        ],
        "cons": [
          "Occasional lingering heat waves early month",
          "Post-Eid al-Adha closures possible",
          "High UV even in September"
        ]
      },
      {
        "month": "September",
        "country": "Ireland",
        "best_cities_or_regions": [
          "Dingle Peninsula",
          "Connemara",
          "Wild Atlantic Way",
          "Dublin"
        ],
        "why_visit": "September is Ireland's golden month — summer crowds have gone, but the weather is often better than July, heather blankets the Connemara hills in purple, and the literary and arts festival season peaks.",
        "climate": {
          "avg_temp_c": "8–16",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "140–260",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Galway International Oyster Festival (late Sep)",
          "All-Ireland GAA Finals (early Sep)",
          "Lisdoonvarna Matchmaking Festival",
          "Dublin Fringe Festival"
        ],
        "travel_styles": [
          "culture",
          "nature",
          "food",
          "adventure"
        ],
        "pros": [
          "Best weather-to-crowd ratio of the year",
          "Purple heather in bloom on moors",
          "Oyster and seafood season — one of world's best",
          "Warm pub culture and live traditional music"
        ],
        "cons": [
          "Unpredictable Atlantic weather — rain can persist",
          "Some islands reduce ferry service",
          "Rural areas require a car"
        ]
      },
      {
        "month": "September",
        "country": "Laos",
        "best_cities_or_regions": [
          "Luang Prabang",
          "Vang Vieng",
          "Bolaven Plateau",
          "4,000 Islands"
        ],
        "why_visit": "Late monsoon in Laos makes the Mekong River dramatic and the waterfalls spectacular — Kuang Si Falls roar with maximum flow. Luang Prabang's alms-giving ceremony at dawn operates year-round in meditative tranquility.",
        "climate": {
          "avg_temp_c": "22–30",
          "rainfall_level": "high",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "35–80",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Boun Ok Phansa — end of Buddhist Lent (Oct, preparation Sep)",
          "Mekong River at maximum flow",
          "Kuang Si Falls peak cascade"
        ],
        "travel_styles": [
          "culture",
          "nature",
          "wellness",
          "adventure"
        ],
        "pros": [
          "Waterfalls at their most powerful and beautiful",
          "Very few tourists — authentic experience",
          "Lowest prices of the year",
          "Daily alms ceremony undisturbed by crowds"
        ],
        "cons": [
          "Heavy afternoon rains daily",
          "Some river-based activities disrupted by strong current",
          "Roads in rural areas can flood"
        ]
      },
      {
        "month": "September",
        "country": "China",
        "best_cities_or_regions": [
          "Zhangjiajie",
          "Beijing",
          "Pingyao",
          "Xi'an"
        ],
        "why_visit": "September is the golden month for northern China — Beijing's Summer Palace and Temple of Heaven glow in warm autumn light, Pingyao's ancient walled city is explored in comfortable temperatures, and Zhangjiajie's Avatar pillars begin their first autumn coloring.",
        "climate": {
          "avg_temp_c": "15–27",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Mid-Autumn Festival / Mooncake Festival (late Sep 2026)",
          "Zhangjiajie autumn coloring begins",
          "Beijing Fragrant Hills early foliage (Oct peak, starts Sep)",
          "Pingyao International Photography Festival (Sep)"
        ],
        "travel_styles": [
          "culture",
          "nature",
          "food",
          "adventure"
        ],
        "pros": [
          "Ideal Beijing weather — clear blue skies and comfortable temperatures",
          "Mid-Autumn Festival mooncake culture rich and authentic",
          "Pingyao Photography Festival world-class event in stunning setting",
          "Great Wall walks without summer heat and humidity"
        ],
        "cons": [
          "Golden Week (Oct 1–7) booking pressure means Sep fills up fast",
          "Beijing traffic and pollution can flare",
          "Mid-Autumn Festival accommodation books out in major cities"
        ]
      }
    ],
    "October": [
      {
        "month": "October",
        "country": "Japan",
        "best_cities_or_regions": [
          "Kyoto",
          "Nikko",
          "Kamikochi",
          "Tokyo"
        ],
        "why_visit": "October brings early autumn koyo (leaf-peering) to highland areas and Hokkaido, with comfortable dry weather across the country — the perfect month for temple-hopping and autumn food culture before November's peak-leaf crowds arrive.",
        "climate": {
          "avg_temp_c": "15–22",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "120–200",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Jidai Matsuri, Kyoto (Oct 22)",
          "Kurama Fire Festival (Oct 22)",
          "Early koyo in Japanese Alps and Hokkaido",
          "Tokyo Ramen Festival"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "adventure"
        ],
        "pros": [
          "Crisp autumn weather ideal for sightseeing",
          "Early koyo in mountains spectacular",
          "Excellent seasonal food — matsutake, chestnuts, persimmons",
          "Before November peak pricing"
        ],
        "cons": [
          "Typhoons still possible early October",
          "Domestic travel busy on autumn foliage weekends",
          "Kyoto rapidly getting more expensive"
        ]
      },
      {
        "month": "October",
        "country": "Nepal",
        "best_cities_or_regions": [
          "Kathmandu",
          "Annapurna Circuit",
          "Everest Base Camp",
          "Pokhara"
        ],
        "why_visit": "October is Nepal's single best trekking month — perfectly clear post-monsoon skies deliver unobstructed Himalayan views, stable trail conditions, and Dashain and Tihar festivals add vibrant cultural encounters.",
        "climate": {
          "avg_temp_c": "10–24",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "35–70",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Dashain (largest Hindu festival)",
          "Tihar festival (lights)",
          "Peak Himalayan trekking season"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "culture",
          "wellness"
        ],
        "pros": [
          "Clearest mountain views of the year",
          "Perfect trekking weather",
          "Dashain celebrations vibrant and authentic",
          "World's best value adventure destination"
        ],
        "cons": [
          "Popular trails and teahouses crowded",
          "Lukla flights frequently delayed",
          "Permits and good lodges book out months ahead"
        ]
      },
      {
        "month": "October",
        "country": "Namibia",
        "best_cities_or_regions": [
          "Etosha NP",
          "Sossusvlei",
          "Damaraland",
          "Swakopmund"
        ],
        "why_visit": "October is the hottest dry-season month in Namibia — animals congregate at Etosha's last remaining waterholes, Sossusvlei dunes are photogenic in early-morning light, and Namibia is at its most dramatic.",
        "climate": {
          "avg_temp_c": "15–33",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "300–700",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Peak Etosha waterhole game viewing",
          "Windhoek Oktoberfest (late Oct)",
          "Sossusvlei photography season peak"
        ],
        "travel_styles": [
          "wildlife",
          "adventure",
          "nature"
        ],
        "pros": [
          "Maximum wildlife concentration around waterholes",
          "Dry, clear skies for stargazing",
          "Empty, dramatic dune landscapes",
          "Low malaria risk"
        ],
        "cons": [
          "Very hot — 35°C+ in the south",
          "Peak lodge pricing",
          "Long self-drive distances between sights"
        ]
      },
      {
        "month": "October",
        "country": "Mexico",
        "best_cities_or_regions": [
          "Oaxaca",
          "Mexico City",
          "Pátzcuaro",
          "Mérida"
        ],
        "why_visit": "Día de los Muertos preparations begin in Oaxaca and Michoacán in late October — markets fill with marigolds and sugar skulls, altars are constructed, and the pre-festival energy is intense and deeply moving.",
        "climate": {
          "avg_temp_c": "14–26",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Día de los Muertos preparations (late Oct)",
          "Festival Cultural Cervantino in Guanajuato",
          "Pátzcuaro Día de Muertos (Nov 1–2 peak)",
          "Halloween in CDMX"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "Build-up to one of the world's great cultural events",
          "Dry, perfect weather across Mexico",
          "Cervantino festival world-class arts",
          "Oaxacan food and mezcal scene excellent"
        ],
        "cons": [
          "Oaxaca hotels book out far in advance",
          "Flights expensive in Día de Muertos window",
          "Massive crowds at cemetery events on Nov 1–2"
        ]
      },
      {
        "month": "October",
        "country": "Portugal",
        "best_cities_or_regions": [
          "Douro Valley",
          "Lisbon",
          "Alentejo",
          "Azores"
        ],
        "why_visit": "October is ideal in Portugal — autumn golden light in the Douro Valley during grape harvest, warm Lisbon weather, and Azores whale watching peaking. Far fewer tourists than summer with most restaurants still fully open.",
        "climate": {
          "avg_temp_c": "14–23",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "110–210",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Douro Valley wine harvest (vendimha)",
          "Azores whale watching peak",
          "Lisbon Web Summit (tech, late Oct)",
          "Republic Day (Oct 5)"
        ],
        "travel_styles": [
          "food",
          "nature",
          "culture",
          "wildlife"
        ],
        "pros": [
          "Douro Valley harvest landscape stunning",
          "Warm autumn weather for Lisbon walks",
          "Azores humpback and sperm whale encounters",
          "Excellent wine and food at harvest prices"
        ],
        "cons": [
          "Autumn rain begins increasing",
          "Some Algarve coastal venues close end of month",
          "Azores weather unpredictable"
        ]
      },
      {
        "month": "October",
        "country": "United States",
        "best_cities_or_regions": [
          "Vermont",
          "New Hampshire",
          "Acadia",
          "Hudson Valley"
        ],
        "why_visit": "Peak New England fall foliage sweeps south through October, painting the landscape in reds, oranges, and yellows. Apple orchards, pumpkin festivals, Halloween atmosphere in Salem, and crisp hiking weather complete the picture.",
        "climate": {
          "avg_temp_c": "5–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "180–320",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Peak fall foliage (early–mid Oct)",
          "Salem Haunted Happenings (all October)",
          "Stowe Foliage Arts Festival",
          "Keene Pumpkin Festival"
        ],
        "travel_styles": [
          "nature",
          "culture",
          "food"
        ],
        "pros": [
          "World-famous autumn foliage",
          "Cool hiking and cycling conditions",
          "Apple/pumpkin harvest festivals",
          "Halloween atmosphere in Salem unique"
        ],
        "cons": [
          "Inns booked out — two-night minimums common",
          "Weekend crowds very heavy",
          "Peak prices across the region"
        ]
      },
      {
        "month": "October",
        "country": "Cambodia",
        "best_cities_or_regions": [
          "Siem Reap",
          "Angkor Wat",
          "Phnom Penh",
          "Kampot"
        ],
        "why_visit": "Late October marks the end of Cambodia's rainy season — Angkor Wat's moats are full, the jungle is vivid green, and the Water Festival (Bon Om Touk) sees boat races on the Mekong with hundreds of thousands of spectators.",
        "climate": {
          "avg_temp_c": "24–32",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "35–80",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Bon Om Touk Water Festival (Phnom Penh, late Oct/Nov)",
          "Pchum Ben (Ancestor Festival, Sep/Oct)",
          "Tonle Sap reverse flow event"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "adventure"
        ],
        "pros": [
          "Moats and lakes filled — dramatic Angkor photography",
          "Water Festival is Cambodia's biggest celebration",
          "Transition to dry season begins",
          "Still low on tourists vs. Nov–Feb peak"
        ],
        "cons": [
          "Still humid and hot",
          "Heavy showers possible early October",
          "Some rural roads muddy"
        ]
      },
      {
        "month": "October",
        "country": "Sri Lanka",
        "best_cities_or_regions": [
          "Trincomalee",
          "Arugam Bay",
          "Sigiriya",
          "Polonnaruwa"
        ],
        "why_visit": "October offers a seasonal flip — the east coast's dry season begins just as the west coast rains arrive, making Trincomalee and Arugam Bay (world-class surf) ideal, while Sigiriya's ruins are accessible without summer's heat.",
        "climate": {
          "avg_temp_c": "24–31",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "45–100",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Arugam Bay surf season peak",
          "Deepavali preparations",
          "East coast dry season begins"
        ],
        "travel_styles": [
          "beach",
          "adventure",
          "culture",
          "wildlife"
        ],
        "pros": [
          "East coast beaches excellent while west coast visitors stay away",
          "Arugam Bay — world-class right-hand surf break",
          "Cultural Triangle sites uncrowded",
          "Affordable across the board"
        ],
        "cons": [
          "Inter-monsoon rains unpredictable",
          "West coast and Galle rainy and grey",
          "Some national parks have high grass obscuring game"
        ]
      },
      {
        "month": "October",
        "country": "Peru",
        "best_cities_or_regions": [
          "Cusco",
          "Amazon (Manu)",
          "Arequipa",
          "Colca Canyon"
        ],
        "why_visit": "October is the shoulder before wet season — crowds drop, prices fall, and rain is still minimal in the Andes. The Amazon Manu Biosphere Reserve is at its most accessible with rivers manageable and wildlife excellent.",
        "climate": {
          "avg_temp_c": "8–22",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Señor de los Milagros procession Lima (Oct)",
          "Manu wildlife season (high biodiversity)",
          "Purple wave procession in Lima (Oct, South America's largest religious procession)"
        ],
        "travel_styles": [
          "adventure",
          "wildlife",
          "culture",
          "nature"
        ],
        "pros": [
          "Significantly fewer crowds than June–August",
          "Lower prices across lodges and tours",
          "Amazon wildlife excellent (animals easier to spot)",
          "Machu Picchu without summer queues"
        ],
        "cons": [
          "Short afternoon rains beginning",
          "Some highland roads getting muddy",
          "Inca Trail no longer as optimal as dry season"
        ]
      },
      {
        "month": "October",
        "country": "Turkey",
        "best_cities_or_regions": [
          "Cappadocia",
          "Istanbul",
          "Ephesus",
          "Bodrum"
        ],
        "why_visit": "October is Turkey's sweet spot — warm Mediterranean weather, optimal hot-air balloon conditions in Cappadocia, clear autumn skies over ancient ruins, and 40% lower prices than August peak.",
        "climate": {
          "avg_temp_c": "14–24",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–120",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Akbank Jazz Festival Istanbul",
          "Republic Day (Oct 29)",
          "Antalya Golden Orange Film Festival"
        ],
        "travel_styles": [
          "culture",
          "food",
          "adventure",
          "beach"
        ],
        "pros": [
          "Ideal ballooning conditions in Cappadocia",
          "Mediterranean still swimmable",
          "40% cheaper than August",
          "Ancient sites dramatically less crowded"
        ],
        "cons": [
          "Inflation makes prices volatile",
          "Eastern Turkey gets cold quickly",
          "Some coastal resorts closing late month"
        ]
      },
      {
        "month": "October",
        "country": "China",
        "best_cities_or_regions": [
          "Guilin",
          "Yuanyang Rice Terraces",
          "Chengdu",
          "Zhangjiajie"
        ],
        "why_visit": "October's Golden Week (Oct 1–7) is China's busiest travel period — but the second half of October offers some of the country's best weather conditions. Guilin and Yangshuo are at peak autumn beauty, Yuanyang's flooded terraces glow gold and amber, and Zhangjiajie's pillars turn fiery red.",
        "climate": {
          "avg_temp_c": "12–24",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "National Day Golden Week (Oct 1–7)",
          "Zhangjiajie autumn foliage peak (mid–late Oct)",
          "Guilin autumn mist and karst scenery peak",
          "Yuanyang Rice Terraces harvest season"
        ],
        "travel_styles": [
          "nature",
          "culture",
          "food",
          "adventure"
        ],
        "pros": [
          "Zhangjiajie autumn colours among China's most dramatic",
          "Guilin's karst peaks draped in autumn mist — painterly scenery",
          "Yuanyang harvest — terraces a patchwork of gold and amber",
          "Comfortable temperatures across all of southern China"
        ],
        "cons": [
          "Golden Week Oct 1–7 is China's most crowded travel period — avoid if possible",
          "Accommodation prices peak during National Holiday week",
          "Post-Golden Week excellent — but plan accordingly"
        ]
      }
    ],
    "November": [
      {
        "month": "November",
        "country": "Vietnam",
        "best_cities_or_regions": [
          "Hội An",
          "Da Nang",
          "Ha Long Bay",
          "Hanoi"
        ],
        "why_visit": "Central Vietnam's dry season peaks in November — sunny beach days in Hội An, Ha Long Bay cruises in calm water, and the lantern festival near the full moon. Hanoi is cool and dry, perfect for Old Quarter exploration.",
        "climate": {
          "avg_temp_c": "20–28",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–80",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Hội An Full Moon Lantern Festival",
          "Ha Long Bay cruise high season begins",
          "Vietnam Teachers' Day (Nov 20)",
          "Sapa harvest season ends"
        ],
        "travel_styles": [
          "culture",
          "food",
          "beach",
          "nature"
        ],
        "pros": [
          "Excellent weather in centre and north",
          "Very affordable street food and hotels",
          "Hội An lantern festival magical",
          "Ha Long Bay in peak condition"
        ],
        "cons": [
          "North Sapa cold and possibly misty",
          "Late typhoon risk on central coast early Nov",
          "Some rain lingers early month in Hue"
        ]
      },
      {
        "month": "November",
        "country": "Mexico",
        "best_cities_or_regions": [
          "Oaxaca",
          "Mexico City",
          "Pátzcuaro",
          "San Miguel de Allende"
        ],
        "why_visit": "Día de los Muertos (Nov 1–2) transforms Oaxaca, Pátzcuaro, and Mexico City into world-class celebrations of marigold altars, candlelit cemetery vigils, and parade processions. One of the world's great cultural events.",
        "climate": {
          "avg_temp_c": "14–26",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Día de los Muertos (Nov 1–2)",
          "CDMX Day of the Dead Parade (Desfile de Día de Muertos)",
          "Revolution Day (Nov 20)",
          "Festival Cervantino aftermath events"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "Iconic Día de los Muertos experience",
          "Ideal dry-season weather",
          "Oaxacan food (mole, tlayudas) and mezcal world-class",
          "San Miguel de Allende cobblestone beauty"
        ],
        "cons": [
          "Oaxaca hotels triple in price and sell out months ahead",
          "Flights very expensive around Nov 1–2",
          "Cemetery events massively crowded"
        ]
      },
      {
        "month": "November",
        "country": "Oman",
        "best_cities_or_regions": [
          "Muscat",
          "Wahiba Sands",
          "Jebel Akhdar",
          "Musandam Peninsula"
        ],
        "why_visit": "November is Oman's finest travel month — desert temperatures drop to perfect 22–28°C, turtle nesting season at Ras al Jinz peaks, and the Musandam Peninsula's dramatic fjords are ideal for dhow cruising.",
        "climate": {
          "avg_temp_c": "22–30",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "130–250",
        "season_type": "high",
        "crowd_level": "low",
        "key_events": [
          "Turtle nesting at Ras al Jinz (peak)",
          "National Day (Nov 18)",
          "Diving high season in Daymaniyat Islands",
          "Muscat Festival early preparations"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "culture",
          "wildlife"
        ],
        "pros": [
          "Ideal desert and beach temperatures",
          "Turtle watching — one of world's great wildlife experiences",
          "Very few tourists — genuine discovery feeling",
          "Safe, clean, family-friendly destination"
        ],
        "cons": [
          "Distances between sights are very long",
          "Limited nightlife — alcohol restricted",
          "More expensive than neighboring UAE for comparable lodging"
        ]
      },
      {
        "month": "November",
        "country": "India",
        "best_cities_or_regions": [
          "Rajasthan",
          "Varanasi",
          "Kerala",
          "Delhi"
        ],
        "why_visit": "Diwali (Nov 8, 2026) turns Rajasthan into a sea of lamps and fireworks. Cool dry weather across the north makes November the best month for Golden Triangle touring and Pushkar Camel Fair — a once-a-year desert spectacle.",
        "climate": {
          "avg_temp_c": "12–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "45–100",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Diwali (Nov 8, 2026)",
          "Pushkar Camel Fair (Nov)",
          "Dev Deepawali Varanasi (Nov)",
          "Guru Nanak Jayanti (Nov 24)"
        ],
        "travel_styles": [
          "culture",
          "food",
          "wellness",
          "wildlife"
        ],
        "pros": [
          "Perfect cool touring weather",
          "Diwali celebrations extraordinary",
          "Pushkar Fair is a bucket-list spectacle",
          "Great heritage hotel value"
        ],
        "cons": [
          "Delhi air quality extremely poor post-Diwali (AQI 400+)",
          "Trains and flights book out around festivals",
          "Pushkar Camel Fair accommodation basic"
        ]
      },
      {
        "month": "November",
        "country": "Argentina",
        "best_cities_or_regions": [
          "Buenos Aires",
          "El Calafate",
          "Mendoza",
          "Iguazú Falls"
        ],
        "why_visit": "Spring in Argentina — jacaranda-lined Buenos Aires avenues in full purple bloom, Patagonian trekking season opening before Christmas crowds, and Iguazú Falls at excellent water levels in warm spring weather.",
        "climate": {
          "avg_temp_c": "10–25",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "90–170",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Día de la Tradición (Nov 10)",
          "Buenos Aires Jazz Festival",
          "Creamfields BA",
          "Patagonia trekking season opens"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "food",
          "culture"
        ],
        "pros": [
          "Patagonia trails opening with far fewer crowds than Jan",
          "Jacarandas in peak purple bloom — stunning",
          "Mendoza wine country pre-harvest activity",
          "Favourable exchange rates"
        ],
        "cons": [
          "Patagonia weather still unpredictable",
          "Torres del Paine refugios not fully open until mid-Nov",
          "Peso volatility affects on-the-ground costs"
        ]
      },
      {
        "month": "November",
        "country": "Maldives",
        "best_cities_or_regions": [
          "North Malé Atoll",
          "Baa Atoll",
          "Ari Atoll",
          "Raa Atoll"
        ],
        "why_visit": "November is the transition from wet to dry season — seas calm, excellent diving visibility returns, prices are still 30–40% below peak January rates, and the islands remain serene before Christmas rush.",
        "climate": {
          "avg_temp_c": "27–31",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "350–1000",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Dry season beginning (mid-Nov)",
          "Whale shark encounters returning",
          "Manta ray aggregation season begins"
        ],
        "travel_styles": [
          "beach",
          "wellness",
          "wildlife",
          "nature"
        ],
        "pros": [
          "30–40% cheaper than Jan–March peak",
          "Seas calming — good dive conditions",
          "Whale shark and manta encounters beginning",
          "Fewer tourists — more genuine island tranquility"
        ],
        "cons": [
          "Early-month rain possible",
          "Some itinerary timing still weather-dependent",
          "Very expensive even at shoulder season rates"
        ]
      },
      {
        "month": "November",
        "country": "Ethiopia",
        "best_cities_or_regions": [
          "Lalibela",
          "Simien Mountains",
          "Addis Ababa",
          "Harar"
        ],
        "why_visit": "November is peak Bega dry season — clear skies, cool highland temperatures, and excellent trekking conditions. The Christmas preparations (Genna, Jan 7) give a glimpse of ancient Orthodox traditions beginning.",
        "climate": {
          "avg_temp_c": "10–24",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Simien Mountains peak trekking season",
          "Harar Hyena feeding nightly",
          "Ethiopian Wolf sightings in Bale Mountains",
          "Genna (Christmas) preparations begin"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Ideal dry-season trekking weather",
          "Clear visibility for photography at Lalibela",
          "Ethiopian wolf — world's rarest canid — sightings peak",
          "Leads into January Timkat festival"
        ],
        "cons": [
          "Top lodges book out a year ahead",
          "Altitude (2,000–4,500m) affects some visitors",
          "Domestic flights often delayed"
        ]
      },
      {
        "month": "November",
        "country": "Costa Rica",
        "best_cities_or_regions": [
          "Tortuguero",
          "Corcovado NP",
          "Manuel Antonio",
          "Monteverde"
        ],
        "why_visit": "November marks the beginning of Costa Rica's dry season on the Pacific coast and is turtle nesting season on the Caribbean side. Crowds are minimal, prices are lower, and wildlife is spectacular in lush post-rain rainforests.",
        "climate": {
          "avg_temp_c": "22–30",
          "rainfall_level": "medium",
          "humidity": "high"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–190",
        "season_type": "shoulder",
        "crowd_level": "low",
        "key_events": [
          "Caribbean sea turtle nesting at Tortuguero",
          "Dry season begins on Pacific side",
          "Scarlet macaw season in Corcovado"
        ],
        "travel_styles": [
          "wildlife",
          "nature",
          "adventure",
          "beach"
        ],
        "pros": [
          "Green, lush rainforest excellent for wildlife",
          "Turtle nesting on Caribbean coast",
          "30–40% cheaper than Jan–March peak",
          "Fewer tourists — more authentic experiences"
        ],
        "cons": [
          "Caribbean coast still rainy through November",
          "Pacific dry season just starting — can still be wet",
          "Road travel difficult in rural south"
        ]
      },
      {
        "month": "November",
        "country": "Chile",
        "best_cities_or_regions": [
          "Torres del Paine",
          "Atacama",
          "Easter Island",
          "Santiago"
        ],
        "why_visit": "November opens Patagonia's trekking season just before Christmas crowds surge — Torres del Paine's W Trek and Circuit are accessible with spring wildflowers, guanaco herds, and condors soaring above granite towers.",
        "climate": {
          "avg_temp_c": "5–18",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–220",
        "season_type": "shoulder",
        "crowd_level": "medium",
        "key_events": [
          "Torres del Paine trekking season opens",
          "Spring wildflowers across Patagonia",
          "Easter Island's quietest pre-season month"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Torres del Paine before Christmas crowd surge",
          "Spring wildflowers on the pampas",
          "Guanaco, condor, and puma spotting excellent",
          "30% cheaper than Jan peak"
        ],
        "cons": [
          "Patagonian wind and weather extremely unpredictable",
          "Some refugios not fully open until mid-November",
          "Atacama hot — afternoon shade needed"
        ]
      },
      {
        "month": "November",
        "country": "Myanmar",
        "best_cities_or_regions": [
          "Bagan",
          "Inle Lake",
          "Mandalay",
          "Ngapali Beach"
        ],
        "why_visit": "November marks Myanmar's ideal travel month — just after monsoon, dry and warm, with Tazaungdaing lantern festival lighting up Bagan's temple silhouettes. Inle Lake's floating villages and markets are at their most photogenic.",
        "climate": {
          "avg_temp_c": "20–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–110",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Tazaungdaing Lantern Festival (Bagan hot air balloons)",
          "Bagan balloon season opens",
          "Inle Lake harvest festival"
        ],
        "travel_styles": [
          "culture",
          "nature",
          "food",
          "adventure"
        ],
        "pros": [
          "Hot-air balloons over Bagan temples at dawn",
          "Ideal temperatures for temple exploration",
          "Inle Lake at its most atmospheric",
          "One of Southeast Asia's most authentic destinations"
        ],
        "cons": [
          "Current political situation requires careful research",
          "Some border areas restricted to visitors",
          "Limited international flight options"
        ]
      },
      {
        "month": "November",
        "country": "China",
        "best_cities_or_regions": [
          "Shanghai",
          "Guilin",
          "Dali",
          "Beijing"
        ],
        "why_visit": "November is underrated — Shanghai's plane trees turn golden, Beijing's Fragrant Hills blaze in late autumn red (early Nov), and Guilin and Dali offer comfortably warm days with minimal tourists. China's off-peak window gives travelers authentic access without crowds.",
        "climate": {
          "avg_temp_c": "5–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "low",
        "crowd_level": "low",
        "key_events": [
          "Beijing Fragrant Hills autumn foliage peak (early Nov)",
          "Shanghai autumn fashion and arts season",
          "Dali Winter Solstice preparations",
          "Singles' Day (Nov 11) shopping festival"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nature",
          "wellness"
        ],
        "pros": [
          "Beijing Fragrant Hills autumn foliage spectacular early November",
          "Lowest tourist levels — heritage sites uncrowded",
          "Hotel prices drop 30–40% from October peak",
          "Shanghai's food and art scene at its cosmopolitan best"
        ],
        "cons": [
          "Beijing gets cold quickly — can reach 0°C by late November",
          "Northern China air quality worsens as coal heating begins",
          "Limited outdoor activities in the far north"
        ]
      }
    ],
    "December": [
      {
        "month": "December",
        "country": "Finland",
        "best_cities_or_regions": [
          "Rovaniemi",
          "Levi",
          "Saariselkä",
          "Helsinki"
        ],
        "why_visit": "December in Finnish Lapland — Santa Claus's official hometown, reindeer sleigh rides through snow-covered taiga forests, and the aurora borealis blazing overhead during polar night. An unmissable Arctic winter magic destination.",
        "climate": {
          "avg_temp_c": "−15–−3",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "250–500",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Santa Claus Village peak season",
          "Finnish Independence Day (Dec 6)",
          "Helsinki Christmas Market (Tuomaan Markkinat)",
          "Aurora borealis viewing peak"
        ],
        "travel_styles": [
          "skiing",
          "adventure",
          "nature",
          "wellness"
        ],
        "pros": [
          "Magical Arctic Christmas atmosphere",
          "Excellent aurora viewing",
          "Husky sledding, ice fishing, saunas",
          "Well-organized family activities"
        ],
        "cons": [
          "Very expensive — especially in peak Christmas week",
          "Extreme cold (-20°C) requires specialist gear",
          "Glass igloos and top lodges book 6–12 months ahead"
        ]
      },
      {
        "month": "December",
        "country": "Thailand",
        "best_cities_or_regions": [
          "Bangkok",
          "Chiang Mai",
          "Krabi",
          "Koh Samui"
        ],
        "why_visit": "December is Thailand's finest month — dry, sunny, and warm nationwide. Bangkok's rooftop bars and river celebrations for New Year are spectacular, southern islands have perfect weather, and Chiang Mai nights are refreshingly cool.",
        "climate": {
          "avg_temp_c": "22–32",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "King's Birthday / Father's Day (Dec 5)",
          "Chiang Mai Red Cross Winter Fair",
          "Bangkok NYE fireworks at CentralWorld and riverside",
          "Full Moon Party Koh Phangan"
        ],
        "travel_styles": [
          "beach",
          "food",
          "nightlife",
          "culture"
        ],
        "pros": [
          "Best weather of the year across the country",
          "Excellent diving visibility on Andaman coast",
          "Christmas/NYE celebrations in Bangkok world-class",
          "Still great value despite December prices"
        ],
        "cons": [
          "Hotel rates spike 30–50% over Christmas/NYE",
          "Popular islands and Bangkok heavily crowded",
          "New Year's Eve accommodation needs advance booking"
        ]
      },
      {
        "month": "December",
        "country": "Germany",
        "best_cities_or_regions": [
          "Nuremberg",
          "Dresden",
          "Munich",
          "Cologne"
        ],
        "why_visit": "Germany's Christkindlmärkte (Christmas markets) transform every town square from late November through December 23 — Nuremberg's Christkindlesmarkt is the most famous, Dresden's Striezelmarkt the oldest (since 1434), and Cologne's Cathedral Market the most dramatic.",
        "climate": {
          "avg_temp_c": "−2–5",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "150–280",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Nuremberg Christkindlesmarkt",
          "Dresden Striezelmarkt (oldest in Germany, since 1434)",
          "Munich Marienplatz Christmas Market",
          "Cologne Cathedral Christmas Market"
        ],
        "travel_styles": [
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "World's most iconic Christmas markets",
          "Excellent rail connections between cities",
          "Superb beer, wine and hearty winter food",
          "Many museums uncrowded midweek"
        ],
        "cons": [
          "Cold, often grey and wet weather",
          "Most markets close Dec 23–24",
          "Munich and Cologne peak weekend prices soar"
        ]
      },
      {
        "month": "December",
        "country": "New Zealand",
        "best_cities_or_regions": [
          "Queenstown",
          "Milford Sound",
          "Bay of Islands",
          "Lake Tekapo"
        ],
        "why_visit": "Early summer in New Zealand brings 15+ hours of daylight, spectacular lupin blooms around Lake Tekapo, and all Great Walks open — better pricing than January and fewer crowds before the school holiday rush.",
        "climate": {
          "avg_temp_c": "10–22",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "200–380",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Rhythm & Vines festival (Gisborne, Dec 29–31)",
          "Lake Tekapo lupin bloom peak",
          "Great Walks fully open",
          "Pōhutukawa (NZ Christmas tree) blooms"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Long daylight for late hiking",
          "Fewer crowds than January",
          "Lupin blooms stunning",
          "All outdoor activities and Great Walks available"
        ],
        "cons": [
          "Rates spike sharply after Dec 20",
          "Fiordland wet and midge-prone",
          "Campervans book out months ahead"
        ]
      },
      {
        "month": "December",
        "country": "Ethiopia",
        "best_cities_or_regions": [
          "Lalibela",
          "Gondar",
          "Simien Mountains",
          "Omo Valley"
        ],
        "why_visit": "Peak dry season with cool highland temperatures, crystal-clear trekking skies, and the lead-up to Genna (Ethiopian Christmas, Jan 7) and Timkat (Epiphany) — the most elaborate Orthodox celebrations in Africa.",
        "climate": {
          "avg_temp_c": "10–24",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Preparations for Genna (Jan 7)",
          "Simien Mountains peak trekking",
          "Omo Valley tribal ceremonies active",
          "Pre-Timkat pilgrimage begins"
        ],
        "travel_styles": [
          "culture",
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Ideal dry, cool weather for highland trekking",
          "Lalibela extraordinary by torchlight at dawn",
          "Omo Valley tribal culture authentic",
          "Leads into January's Timkat — world's most visually stunning festival"
        ],
        "cons": [
          "Top Lalibela lodges book 12+ months ahead",
          "Altitude (2,000–4,000m) affects some visitors",
          "Genna celebrations crowded late December"
        ]
      },
      {
        "month": "December",
        "country": "Philippines",
        "best_cities_or_regions": [
          "Palawan (El Nido, Coron)",
          "Siargao",
          "Cebu",
          "Boracay"
        ],
        "why_visit": "December is peak season in the Philippines — Palawan's crystal-clear lagoons, Siargao's surf, and the country's legendary Christmas spirit make it Asia's most festive beach destination. Giant lantern festivals in San Fernando are spectacular.",
        "climate": {
          "avg_temp_c": "24–30",
          "rainfall_level": "low",
          "humidity": "medium"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "50–120",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Giant Lantern Festival San Fernando, Pampanga (mid-Dec)",
          "Sinulog Festival prep (Jan, but activities begin Dec)",
          "Christmas Season — world's longest Christmas (Sep–Jan)",
          "Panagbenga Festival preparations"
        ],
        "travel_styles": [
          "beach",
          "culture",
          "food",
          "nightlife"
        ],
        "pros": [
          "World-class island scenery and marine biodiversity",
          "Warmest and most joyful Christmas atmosphere in Asia",
          "Affordable — great value for Southeast Asia",
          "Excellent diving and snorkeling in clear December waters"
        ],
        "cons": [
          "Popular islands very crowded",
          "El Nido island-hopping tours fully booked",
          "Typhoon season theoretically ending but still possible in eastern Visayas"
        ]
      },
      {
        "month": "December",
        "country": "Australia",
        "best_cities_or_regions": [
          "Sydney",
          "Melbourne",
          "Bondi Beach",
          "Great Barrier Reef"
        ],
        "why_visit": "Summer arrives in Australia — Sydney Harbour Christmas and NYE fireworks are globally iconic, Bondi Beach hosts its famous Christmas Day celebrations, and the Great Barrier Reef has excellent visibility before peak January heat.",
        "climate": {
          "avg_temp_c": "18–28",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "luxury",
        "estimated_daily_cost_usd": "200–400",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Sydney NYE Harbour fireworks (best in the world)",
          "Boxing Day Test Cricket (MCG, Dec 26)",
          "Bondi Beach Christmas celebrations",
          "Sydney to Hobart Yacht Race (Dec 26)"
        ],
        "travel_styles": [
          "beach",
          "food",
          "nightlife",
          "culture",
          "adventure"
        ],
        "pros": [
          "Sydney Harbour NYE one of the world's great events",
          "Warm beach weather and long daylight",
          "Reef snorkeling in excellent condition",
          "Outstanding food and wine culture"
        ],
        "cons": [
          "Most expensive month of the year",
          "Accommodation books out by mid-year for NYE",
          "Bushfire smoke can affect interior regions"
        ]
      },
      {
        "month": "December",
        "country": "Chile",
        "best_cities_or_regions": [
          "Torres del Paine",
          "Easter Island",
          "Atacama",
          "Valparaíso"
        ],
        "why_visit": "December in Patagonia means long daylight for trekking Torres del Paine, spring wildflowers on the pampas, and puma sightings peak as guanacos give birth. Easter Island's blue waters are perfect for snorkeling.",
        "climate": {
          "avg_temp_c": "7–20",
          "rainfall_level": "medium",
          "humidity": "medium"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "100–220",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Torres del Paine peak season opens",
          "Valparaíso NYE fireworks (Chile's biggest)",
          "Easter Island summer season begins",
          "Guanaco birthing season in Patagonia"
        ],
        "travel_styles": [
          "adventure",
          "nature",
          "wildlife"
        ],
        "pros": [
          "Long Patagonian summer days (18+ hours)",
          "Puma and condor sightings excellent",
          "Wildflowers across the pampas",
          "Easter Island stunning snorkeling and moai visits"
        ],
        "cons": [
          "Torres del Paine very crowded — book months ahead",
          "Patagonian wind extreme",
          "Very expensive in peak December season"
        ]
      },
      {
        "month": "December",
        "country": "Egypt",
        "best_cities_or_regions": [
          "Luxor",
          "Aswan",
          "Cairo",
          "Sharm el-Sheikh"
        ],
        "why_visit": "December is Egypt's best month — cool, clear weather ideal for Valley of the Kings, Karnak, Abu Simbel, and Nile cruises without summer's brutal heat. The Red Sea at Sharm el-Sheikh offers world-class diving in warm 24°C waters.",
        "climate": {
          "avg_temp_c": "10–22",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "60–130",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Abu Simbel Sun Festival (Dec 22) — sun illuminates inner sanctuary",
          "Luxor National Festival",
          "Christmas celebrations at Coptic churches"
        ],
        "travel_styles": [
          "culture",
          "beach",
          "adventure",
          "history"
        ],
        "pros": [
          "Ideal cool weather for ancient site exploration",
          "Abu Simbel Sun Festival (Dec 22) extraordinary",
          "Red Sea diving world-class year-round",
          "Nile cruises at their most comfortable"
        ],
        "cons": [
          "Luxor and Cairo tourist pressure from guides and vendors",
          "Peak prices at top Nile cruise companies",
          "Cairo traffic and air quality challenging"
        ]
      },
      {
        "month": "December",
        "country": "India",
        "best_cities_or_regions": [
          "Rajasthan",
          "Goa",
          "Mumbai",
          "Rann of Kutch"
        ],
        "why_visit": "December is India's peak travel month — Goa's beaches are sunny and packed with a festive international crowd, Rajasthan's desert forts glow golden under clear winter skies, and the Rann of Kutch's salt desert hosts its spectacular White Desert Festival.",
        "climate": {
          "avg_temp_c": "10–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "budget",
        "estimated_daily_cost_usd": "40–100",
        "season_type": "high",
        "crowd_level": "high",
        "key_events": [
          "Rann Utsav White Desert Festival (Nov–Jan)",
          "Goa Christmas and NYE celebrations",
          "Jaipur Literature Festival preparations",
          "Camel Fair tail events"
        ],
        "travel_styles": [
          "culture",
          "beach",
          "food",
          "wellness",
          "nightlife"
        ],
        "pros": [
          "Perfect cool-season weather nationwide",
          "Goa Christmas celebrations vibrant and international",
          "Rajasthan at its most atmospheric under clear skies",
          "Incredible value across lodging and food"
        ],
        "cons": [
          "Goa beaches and Rajasthan monuments very crowded",
          "Heritage hotel prices at yearly peak",
          "Delhi air quality remains poor December"
        ]
      },
      {
        "month": "December",
        "country": "China",
        "best_cities_or_regions": [
          "Harbin",
          "Sanya",
          "Hong Kong",
          "Shanghai"
        ],
        "why_visit": "December offers China's most contrasting experiences — Harbin's Ice and Snow Festival begins Dec 24 with illuminated ice palaces covering several square kilometres, while Sanya's tropical beaches rival the Maldives in warmth. Hong Kong's iconic Victoria Harbour Christmas light show is Asia's most spectacular.",
        "climate": {
          "avg_temp_c": "-20–28",
          "rainfall_level": "low",
          "humidity": "low"
        },
        "budget_category": "mid-range",
        "estimated_daily_cost_usd": "80–160",
        "season_type": "high",
        "crowd_level": "medium",
        "key_events": [
          "Harbin International Ice and Snow Sculpture Festival (opens Dec 24)",
          "Hong Kong WinterFest — Victoria Harbour light show",
          "Sanya beach high season begins",
          "Shanghai New Year countdown at The Bund"
        ],
        "travel_styles": [
          "adventure",
          "beach",
          "culture",
          "nightlife",
          "nature"
        ],
        "pros": [
          "Harbin Ice Festival opening (Dec 24) — world's most spectacular ice art",
          "Sanya beaches warm at 28°C — China's tropical island escape",
          "Hong Kong Christmas lights and harbour atmosphere magical",
          "Shanghai Bund New Year celebration world-class"
        ],
        "cons": [
          "Harbin's extreme cold (-20°C) — proper Arctic gear essential",
          "December flights expensive as Christmas and CNY approach",
          "Sanya accommodation peaks in price for beach high season"
        ]
      }
    ]
  }
};
