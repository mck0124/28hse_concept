const properties = [
  {
    id: "s1",
    mode: "sale",
    title: "Ocean View Flat",
    district: "Hong Kong Island",
    area: "Aberdeen",
    type: "Apartment",
    price: 5480000,
    beds: 1,
    size: 307,
    tag: "Homepage Ads",
    agent: "Verified agent",
    verified: true,
    mtr: false,
    updated: 6,
    image: "https://images.pexels.com/photos/4183171/pexels-photo-4183171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260",
    summary: "Exclusive ocean view tour available. Serious inquiries only."
  },
  {
    id: "s2",
    mode: "sale",
    title: "Taikoo Shing City Home",
    district: "Hong Kong Island",
    area: "Quarry Bay",
    type: "Apartment",
    price: 7800000,
    beds: 2,
    size: 487,
    tag: "Agency Ads",
    agent: "Midland Realty",
    verified: true,
    mtr: true,
    updated: 2,
    image: "https://images.unsplash.com/photo-1705330534746-5a5c67bf48d1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    summary: "Well-kept two-bedroom flat near transport and daily amenities."
  },
  {
    id: "s3",
    mode: "sale",
    title: "Kai Tak Clubhouse Residence",
    district: "Kowloon",
    area: "Kai Tak",
    type: "Apartment",
    price: 10300000,
    beds: 3,
    size: 592,
    tag: "Exclusive",
    agent: "Centaline Property",
    verified: true,
    mtr: true,
    updated: 1,
    image: "https://images.pexels.com/photos/4175759/pexels-photo-4175759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900",
    summary: "Landmark three-bedroom unit with clubhouse and open city view."
  },
  {
    id: "s4",
    mode: "sale",
    title: "Fo Tan Family Apartment",
    district: "New Territories East",
    area: "Fo Tan",
    type: "Apartment",
    price: 6380000,
    beds: 2,
    size: 515,
    tag: "Price Cut",
    agent: "28Hse Partner",
    verified: false,
    mtr: true,
    updated: 9,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    summary: "Quiet estate layout with efficient storage and green outlook."
  },
  {
    id: "s5",
    mode: "sale",
    title: "Mid-Levels Family Residence",
    district: "Hong Kong Island",
    area: "Mid-Levels",
    type: "Apartment",
    price: 15800000,
    beds: 3,
    size: 824,
    tag: "School Net",
    agent: "Centaline Property",
    verified: true,
    mtr: false,
    updated: 4,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200",
    summary: "Family-size home with balcony, storage and easy Central access."
  },
  {
    id: "s6",
    mode: "sale",
    title: "YOHO Town Starter Flat",
    district: "New Territories West",
    area: "Yuen Long",
    type: "Apartment",
    price: 4980000,
    beds: 2,
    size: 433,
    tag: "Starter",
    agent: "28Hse Partner",
    verified: true,
    mtr: true,
    updated: 8,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200",
    summary: "Entry budget home near rail, malls and daily transport links."
  },
  {
    id: "s7",
    mode: "sale",
    title: "LOHAS Park Seaview Tower",
    district: "New Territories East",
    area: "Tseung Kwan O",
    type: "Apartment",
    price: 9200000,
    beds: 3,
    size: 681,
    tag: "Seaview",
    agent: "Midland Realty",
    verified: true,
    mtr: true,
    updated: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    summary: "Three-bedroom tower flat with open sea view and clubhouse."
  },
  {
    id: "s8",
    mode: "sale",
    title: "Qianhai Investment Suite",
    district: "Greater Bay Area",
    area: "Qianhai",
    type: "Apartment",
    price: 3880000,
    beds: 1,
    size: 452,
    tag: "GBA",
    agent: "Greater Bay Desk",
    verified: false,
    mtr: true,
    updated: 12,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
    summary: "Cross-border investment sample listing with transport-led positioning."
  },
  {
    id: "s9",
    mode: "sale",
    title: "Hung Hom Covered Car Park",
    district: "Kowloon",
    area: "Hung Hom",
    type: "Car Park",
    price: 2380000,
    beds: 0,
    size: 126,
    tag: "Car Park",
    agent: "28Hse Partner",
    verified: true,
    mtr: true,
    updated: 13,
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1200",
    summary: "Covered parking space near rail, estates and cross-harbour access."
  },
  {
    id: "r1",
    mode: "rent",
    title: "Tin Shui Wai Town Centre",
    district: "New Territories West",
    area: "Tin Shui Wai",
    type: "Apartment",
    price: 21000,
    beds: 2,
    size: 546,
    tag: "MTR Access",
    agent: "Verified agent",
    verified: true,
    mtr: true,
    updated: 3,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
    summary: "Town centre home above Light Rail station with practical layout."
  },
  {
    id: "r2",
    mode: "rent",
    title: "Mong Kok Retail Shop",
    district: "Kowloon",
    area: "Mong Kok",
    type: "Shop",
    price: 85000,
    beds: 0,
    size: 1000,
    tag: "High Traffic",
    agent: "Commercial Desk",
    verified: true,
    mtr: true,
    updated: 4,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1200",
    summary: "Prime retail position with heavy foot traffic and wide frontage."
  },
  {
    id: "r3",
    mode: "rent",
    title: "Kowloon Bay Office",
    district: "Kowloon",
    area: "Kowloon Bay",
    type: "Office",
    price: 70000,
    beds: 0,
    size: 4748,
    tag: "Renovated",
    agent: "Office Leasing",
    verified: true,
    mtr: false,
    updated: 5,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    summary: "Renovated office, ready for appointment viewing."
  },
  {
    id: "r4",
    mode: "rent",
    title: "Central Serviced Studio",
    district: "Hong Kong Island",
    area: "Central",
    type: "Apartment",
    price: 18500,
    beds: 1,
    size: 238,
    tag: "Move-in Ready",
    agent: "Verified agent",
    verified: true,
    mtr: true,
    updated: 1,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
    summary: "Compact studio for commuters who want the fastest Central access."
  },
  {
    id: "r4b",
    mode: "rent",
    title: "Causeway Bay Service Apartment",
    district: "Hong Kong Island",
    area: "Causeway Bay",
    type: "Service Apartment",
    price: 28000,
    beds: 1,
    size: 320,
    tag: "Service Apt",
    agent: "Serviced Living Desk",
    verified: true,
    mtr: true,
    updated: 2,
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&q=80&w=1200",
    summary: "Flexible serviced apartment for short stays, relocation and business travel."
  },
  {
    id: "r5",
    mode: "rent",
    title: "Tung Chung Family Lease",
    district: "New Territories West",
    area: "Tung Chung",
    type: "Apartment",
    price: 26500,
    beds: 3,
    size: 705,
    tag: "Family",
    agent: "28Hse Partner",
    verified: true,
    mtr: true,
    updated: 7,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
    summary: "Practical three-bedroom lease close to MTR, airport and outlets."
  },
  {
    id: "r6",
    mode: "rent",
    title: "Sha Tin Riverside Home",
    district: "New Territories East",
    area: "Sha Tin",
    type: "Apartment",
    price: 32000,
    beds: 3,
    size: 742,
    tag: "Riverside",
    agent: "Midland Realty",
    verified: true,
    mtr: false,
    updated: 6,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200",
    summary: "Larger layout with open river outlook and estate facilities."
  },
  {
    id: "r7",
    mode: "rent",
    title: "Tsim Sha Tsui Grade-A Office",
    district: "Kowloon",
    area: "Tsim Sha Tsui",
    type: "Office",
    price: 58000,
    beds: 0,
    size: 1820,
    tag: "Harbour Side",
    agent: "Office Leasing",
    verified: true,
    mtr: true,
    updated: 2,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    summary: "Efficient office floorplate near MTR, hotels and retail traffic."
  },
  {
    id: "r8",
    mode: "rent",
    title: "Tokyo Short-Stay Apartment",
    district: "Japan",
    area: "Tokyo",
    type: "Apartment",
    price: 14800,
    beds: 1,
    size: 301,
    tag: "Japan",
    agent: "Overseas Desk",
    verified: false,
    mtr: true,
    updated: 11,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    summary: "Overseas rental sample for users comparing Hong Kong and Japan."
  },
  {
    id: "o1",
    mode: "owner",
    title: "Owner Direct Mei Foo Home",
    district: "Kowloon",
    area: "Mei Foo",
    type: "Apartment",
    price: 6900000,
    beds: 2,
    size: 533,
    tag: "Owner",
    agent: "Owner direct",
    verified: false,
    mtr: true,
    updated: 7,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200",
    summary: "Owner-direct listing with simple viewing arrangement."
  },
  {
    id: "o2",
    mode: "owner",
    title: "Owner Direct North Point Flat",
    district: "Hong Kong Island",
    area: "North Point",
    type: "Apartment",
    price: 6180000,
    beds: 2,
    size: 451,
    tag: "Owner",
    agent: "Owner direct",
    verified: true,
    mtr: true,
    updated: 5,
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=1200",
    summary: "Owner-verified flat with flexible viewing and clear asking terms."
  },
  {
    id: "o3",
    mode: "owner",
    title: "Tsuen Wan Owner Listing",
    district: "New Territories West",
    area: "Tsuen Wan",
    type: "Apartment",
    price: 5750000,
    beds: 2,
    size: 482,
    tag: "Owner",
    agent: "Owner direct",
    verified: false,
    mtr: true,
    updated: 10,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    summary: "Direct owner sample with railway convenience and compact layout."
  },
  {
    id: "o4",
    mode: "owner",
    title: "Sai Kung Garden House",
    district: "New Territories East",
    area: "Sai Kung",
    type: "Land",
    price: 12800000,
    beds: 3,
    size: 1180,
    tag: "Outdoor",
    agent: "Owner direct",
    verified: true,
    mtr: false,
    updated: 14,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1200",
    summary: "Garden living sample for buyers who prefer low-density homes."
  },
  {
    id: "o5",
    mode: "owner",
    title: "Zhuhai Bay Apartment",
    district: "Greater Bay Area",
    area: "Zhuhai",
    type: "Apartment",
    price: 2680000,
    beds: 2,
    size: 620,
    tag: "GBA Owner",
    agent: "Owner direct",
    verified: false,
    mtr: false,
    updated: 15,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200",
    summary: "Greater Bay owner sample with lower budget and larger floor area."
  }
];

const mapAreas = [
  { district: "Hong Kong Island", area: "Central", lat: 22.2819, lng: 114.1582 },
  { district: "Hong Kong Island", area: "Admiralty", lat: 22.2797, lng: 114.1654 },
  { district: "Hong Kong Island", area: "Wan Chai", lat: 22.2770, lng: 114.1723 },
  { district: "Hong Kong Island", area: "Causeway Bay", lat: 22.2802, lng: 114.1845 },
  { district: "Hong Kong Island", area: "Tin Hau", lat: 22.2821, lng: 114.1912 },
  { district: "Hong Kong Island", area: "North Point", lat: 22.2911, lng: 114.2004 },
  { district: "Hong Kong Island", area: "Quarry Bay", lat: 22.2866, lng: 114.2135 },
  { district: "Hong Kong Island", area: "Taikoo Shing", lat: 22.2861, lng: 114.2166 },
  { district: "Hong Kong Island", area: "Kennedy Town", lat: 22.2810, lng: 114.1287 },
  { district: "Hong Kong Island", area: "Sai Ying Pun", lat: 22.2862, lng: 114.1424 },
  { district: "Hong Kong Island", area: "Aberdeen", lat: 22.2480, lng: 114.1528 },
  { district: "Hong Kong Island", area: "Mid-Levels", lat: 22.2804, lng: 114.1503 },
  { district: "Kowloon", area: "Tsim Sha Tsui", lat: 22.2976, lng: 114.1722 },
  { district: "Kowloon", area: "Jordan", lat: 22.3047, lng: 114.1716 },
  { district: "Kowloon", area: "Mong Kok", lat: 22.3193, lng: 114.1694 },
  { district: "Kowloon", area: "Prince Edward", lat: 22.3244, lng: 114.1689 },
  { district: "Kowloon", area: "Mei Foo", lat: 22.3370, lng: 114.1402 },
  { district: "Kowloon", area: "Hung Hom", lat: 22.3069, lng: 114.1873 },
  { district: "Kowloon", area: "Kowloon City", lat: 22.3284, lng: 114.1892 },
  { district: "Kowloon", area: "Kai Tak", lat: 22.3231, lng: 114.2034 },
  { district: "Kowloon", area: "Kowloon Bay", lat: 22.3235, lng: 114.2133 },
  { district: "Kowloon", area: "Kwun Tong", lat: 22.3120, lng: 114.2264 },
  { district: "New Territories East", area: "Sha Tin", lat: 22.3820, lng: 114.1880 },
  { district: "New Territories East", area: "Tai Wai", lat: 22.3736, lng: 114.1788 },
  { district: "New Territories East", area: "Fo Tan", lat: 22.3956, lng: 114.1983 },
  { district: "New Territories East", area: "Tai Po", lat: 22.4492, lng: 114.1694 },
  { district: "New Territories East", area: "Ma On Shan", lat: 22.4245, lng: 114.2312 },
  { district: "New Territories East", area: "Tseung Kwan O", lat: 22.3076, lng: 114.2608 },
  { district: "New Territories East", area: "Sai Kung", lat: 22.3837, lng: 114.2734 },
  { district: "New Territories West", area: "Tsuen Wan", lat: 22.3717, lng: 114.1149 },
  { district: "New Territories West", area: "Yuen Long", lat: 22.4445, lng: 114.0222 },
  { district: "New Territories West", area: "Tin Shui Wai", lat: 22.4565, lng: 114.0031 },
  { district: "New Territories West", area: "Tung Chung", lat: 22.2880, lng: 113.9415 },
  { district: "New Territories West", area: "Tuen Mun", lat: 22.3917, lng: 113.9770 },
  { district: "New Territories West", area: "Discovery Bay", lat: 22.2959, lng: 114.0163 },
  { district: "Greater Bay Area", area: "Shenzhen", lat: 22.5431, lng: 114.0579 },
  { district: "Greater Bay Area", area: "Qianhai", lat: 22.5355, lng: 113.9004 },
  { district: "Greater Bay Area", area: "Zhuhai", lat: 22.2711, lng: 113.5767 },
  { district: "Japan", area: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { district: "Japan", area: "Osaka", lat: 34.6937, lng: 135.5023 }
];

const areaBoundaryPolygons = {
  "Central": [[22.2860, 114.1494], [22.2866, 114.1624], [22.2824, 114.1668], [22.2760, 114.1638], [22.2753, 114.1534], [22.2801, 114.1482]],
  "Admiralty": [[22.2827, 114.1608], [22.2830, 114.1706], [22.2789, 114.1732], [22.2746, 114.1694], [22.2765, 114.1628]],
  "Wan Chai": [[22.2838, 114.1694], [22.2842, 114.1808], [22.2798, 114.1842], [22.2740, 114.1803], [22.2729, 114.1725], [22.2774, 114.1685]],
  "Causeway Bay": [[22.2861, 114.1782], [22.2860, 114.1898], [22.2828, 114.1945], [22.2763, 114.1930], [22.2739, 114.1850], [22.2774, 114.1774]],
  "Tin Hau": [[22.2895, 114.1874], [22.2904, 114.1958], [22.2854, 114.1998], [22.2817, 114.1930], [22.2826, 114.1875]],
  "North Point": [[22.2960, 114.1920], [22.2962, 114.2062], [22.2914, 114.2122], [22.2862, 114.2070], [22.2879, 114.1961], [22.2916, 114.1914]],
  "Quarry Bay": [[22.2915, 114.2076], [22.2910, 114.2182], [22.2850, 114.2222], [22.2818, 114.2152], [22.2857, 114.2070]],
  "Taikoo Shing": [[22.2895, 114.2148], [22.2898, 114.2244], [22.2844, 114.2265], [22.2818, 114.2192], [22.2847, 114.2132]],
  "Kennedy Town": [[22.2860, 114.1222], [22.2874, 114.1320], [22.2818, 114.1361], [22.2767, 114.1318], [22.2780, 114.1236]],
  "Sai Ying Pun": [[22.2896, 114.1374], [22.2894, 114.1484], [22.2837, 114.1512], [22.2792, 114.1465], [22.2812, 114.1376]],
  "Aberdeen": [[22.2552, 114.1452], [22.2555, 114.1608], [22.2474, 114.1670], [22.2398, 114.1594], [22.2418, 114.1468]],
  "Mid-Levels": [[22.2858, 114.1416], [22.2872, 114.1584], [22.2806, 114.1652], [22.2724, 114.1580], [22.2745, 114.1432]],
  "Tsim Sha Tsui": [[22.3042, 114.1650], [22.3040, 114.1810], [22.2973, 114.1834], [22.2920, 114.1747], [22.2948, 114.1648]],
  "Jordan": [[22.3099, 114.1648], [22.3105, 114.1774], [22.3042, 114.1800], [22.3005, 114.1710], [22.3043, 114.1640]],
  "Mong Kok": [[22.3258, 114.1624], [22.3266, 114.1743], [22.3182, 114.1776], [22.3128, 114.1692], [22.3185, 114.1608]],
  "Prince Edward": [[22.3301, 114.1620], [22.3304, 114.1736], [22.3236, 114.1761], [22.3192, 114.1683], [22.3234, 114.1610]],
  "Mei Foo": [[22.3419, 114.1330], [22.3434, 114.1462], [22.3369, 114.1500], [22.3309, 114.1425], [22.3341, 114.1327]],
  "Hung Hom": [[22.3136, 114.1810], [22.3131, 114.1946], [22.3051, 114.1976], [22.2994, 114.1890], [22.3041, 114.1795]],
  "Kowloon City": [[22.3348, 114.1810], [22.3346, 114.1972], [22.3266, 114.2007], [22.3214, 114.1904], [22.3266, 114.1794]],
  "Kai Tak": [[22.3307, 114.1940], [22.3318, 114.2108], [22.3208, 114.2154], [22.3141, 114.2047], [22.3206, 114.1940]],
  "Kowloon Bay": [[22.3310, 114.2076], [22.3315, 114.2214], [22.3218, 114.2258], [22.3155, 114.2166], [22.3210, 114.2074]],
  "Kwun Tong": [[22.3192, 114.2187], [22.3186, 114.2362], [22.3092, 114.2408], [22.3033, 114.2291], [22.3105, 114.2180]],
  "Sha Tin": [[22.3926, 114.1798], [22.3912, 114.2000], [22.3787, 114.2074], [22.3696, 114.1906], [22.3765, 114.1768]],
  "Tai Wai": [[22.3814, 114.1692], [22.3821, 114.1844], [22.3728, 114.1880], [22.3654, 114.1774], [22.3708, 114.1670]],
  "Fo Tan": [[22.4036, 114.1905], [22.4054, 114.2072], [22.3952, 114.2123], [22.3877, 114.1990], [22.3932, 114.1888]],
  "Tai Po": [[22.4606, 114.1582], [22.4620, 114.1800], [22.4470, 114.1885], [22.4368, 114.1680], [22.4462, 114.1532]],
  "Ma On Shan": [[22.4358, 114.2194], [22.4354, 114.2440], [22.4213, 114.2496], [22.4116, 114.2298], [22.4212, 114.2152]],
  "Tseung Kwan O": [[22.3227, 114.2512], [22.3210, 114.2738], [22.3030, 114.2802], [22.2920, 114.2585], [22.3053, 114.2468]],
  "Sai Kung": [[22.3958, 114.2580], [22.3964, 114.2906], [22.3753, 114.3012], [22.3612, 114.2732], [22.3750, 114.2495]],
  "Tsuen Wan": [[22.3810, 114.1026], [22.3838, 114.1245], [22.3692, 114.1320], [22.3598, 114.1136], [22.3684, 114.1005]],
  "Yuen Long": [[22.4568, 114.0082], [22.4581, 114.0358], [22.4414, 114.0452], [22.4308, 114.0204], [22.4431, 114.0018]],
  "Tin Shui Wai": [[22.4678, 113.9898], [22.4690, 114.0146], [22.4542, 114.0255], [22.4412, 114.0048], [22.4518, 113.9876]],
  "Tung Chung": [[22.2994, 113.9305], [22.3000, 113.9576], [22.2833, 113.9666], [22.2738, 113.9443], [22.2838, 113.9268]],
  "Tuen Mun": [[22.4048, 113.9622], [22.4070, 113.9914], [22.3890, 114.0008], [22.3758, 113.9762], [22.3880, 113.9568]],
  "Discovery Bay": [[22.3072, 114.0084], [22.3054, 114.0270], [22.2920, 114.0318], [22.2842, 114.0141], [22.2942, 113.9990]],
  "Shenzhen": [[22.5580, 114.0340], [22.5585, 114.0810], [22.5320, 114.0910], [22.5190, 114.0520], [22.5360, 114.0260]],
  "Qianhai": [[22.5486, 113.8780], [22.5510, 113.9210], [22.5290, 113.9318], [22.5160, 113.8950], [22.5324, 113.8705]],
  "Zhuhai": [[22.2870, 113.5525], [22.2885, 113.6040], [22.2580, 113.6120], [22.2430, 113.5720], [22.2638, 113.5410]]
};

const generatedTitles = [
  "Harbour Residence", "Metro Studio", "City View Court", "Station Walk Home",
  "Family Tower", "Garden Estate", "Skyline Flat", "Urban Suite",
  "Clubhouse Residence", "Waterfront Place", "Prime Office", "Retail Front"
];

const generatedImages = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=900"
];

function deterministicOffset(index, salt, scale) {
  const raw = Math.sin((index + 1) * (salt + 3.17)) * 10000;
  return (raw - Math.floor(raw) - 0.5) * scale;
}

const generatedProperties = Array.from({ length: 180 }, (_, index) => {
  const area = mapAreas[index % (mapAreas.length - 2)];
  const mode = index % 7 === 0 ? "owner" : index % 3 === 0 ? "sale" : "rent";
  const commercialType = index % 17 === 0 ? "Shop" : index % 13 === 0 ? "Office" : index % 19 === 0 ? "Car Park" : null;
  const type = commercialType || (index % 11 === 0 ? "Service Apartment" : index % 23 === 0 ? "Land" : "Apartment");
  const beds = type === "Apartment" || type === "Service Apartment" || type === "Land" ? (index % 4) + 1 : 0;
  const size = type === "Office" ? 900 + (index % 18) * 180 : type === "Shop" ? 420 + (index % 10) * 90 : type === "Car Park" ? 120 : 260 + (index % 13) * 52;
  const rentPrice = type === "Office" ? 36000 + (index % 18) * 5200 : type === "Shop" ? 48000 + (index % 12) * 6500 : 12000 + (index % 28) * 1600;
  const salePrice = type === "Car Park" ? 1300000 + (index % 9) * 190000 : type === "Land" ? 9800000 + (index % 8) * 850000 : 3600000 + (index % 34) * 420000;

  return {
    id: `d${index + 1}`,
    mode,
    title: `${area.area} ${generatedTitles[index % generatedTitles.length]}`,
    district: area.district,
    area: area.area,
    type,
    price: mode === "rent" ? rentPrice : salePrice,
    beds,
    size,
    tag: index % 5 === 0 ? "AI Pick" : index % 4 === 0 ? "Near MTR" : index % 3 === 0 ? "Verified" : "New",
    agent: index % 6 === 0 ? "Owner direct" : index % 4 === 0 ? "Centaline Property" : index % 3 === 0 ? "Midland Realty" : "28Hse Partner",
    verified: index % 4 !== 1,
    mtr: index % 5 !== 2,
    updated: (index % 30) + 1,
    image: generatedImages[index % generatedImages.length],
    summary: `${area.area} demo listing with practical transport, price and layout metadata for map filtering.`,
    lat: area.lat + deterministicOffset(index, 1, 0.018),
    lng: area.lng + deterministicOffset(index, 7, 0.024)
  };
});

properties.push(...generatedProperties);

function assignMissingCoordinates() {
  properties.forEach((property, index) => {
    if (typeof property.lat === "number" && typeof property.lng === "number") return;
    const area = mapAreas.find((item) => item.area === property.area) ||
      mapAreas.find((item) => item.district === property.district) ||
      mapAreas[0];
    property.lat = area.lat + deterministicOffset(index, 11, 0.014);
    property.lng = area.lng + deterministicOffset(index, 17, 0.018);
  });
}

assignMissingCoordinates();

const districtMeta = {
  "Hong Kong Island": { key: "hki", label: "HKI", x: 50, y: 69 },
  Kowloon: { key: "kln", label: "KLN", x: 53, y: 52 },
  "New Territories East": { key: "nte", label: "NTE", x: 72, y: 33 },
  "New Territories West": { key: "ntw", label: "NTW", x: 31, y: 31 },
  "Greater Bay Area": { key: "gba", label: "GBA", x: 20, y: 76 },
  Japan: { key: "jpn", label: "JPN", x: 80, y: 74 }
};

const estatePrices = {
  HK: [
    ["South Horizons", "$14,097"],
    ["Residence Bel-Air", "$23,313"],
    ["Taikoo Shing", "$15,086"],
    ["The Avenue", "$25,699"]
  ],
  KLN: [
    ["Whampoa Garden", "$13,112"],
    ["The Harbourside", "$23,906"],
    ["Mei Foo Sun Chuen", "$10,814"],
    ["Laguna Verde", "$14,883"]
  ],
  NTE: [
    ["City One Shatin", "$12,125"],
    ["Festival City", "$14,392"],
    ["The Beaumount", "$10,401"],
    ["The Palazzo", "$15,804"]
  ],
  NTW: [
    ["Yoho Town", "$13,211"],
    ["Kingswood Villas", "$8,704"],
    ["Caribbean Coast", "$10,992"],
    ["Vision City", "$14,320"]
  ]
};

const priceOptions = {
  sale: [
    ["any", "Any price"],
    ["0-6000000", "Under HKD $6M"],
    ["6000000-8000000", "HKD $6M - $8M"],
    ["8000000-12000000", "HKD $8M - $12M"],
    ["12000000-999999999", "HKD $12M+"]
  ],
  rent: [
    ["any", "Any rent"],
    ["0-15000", "Under HKD $15K"],
    ["0-30000", "Under HKD $30K"],
    ["15000-30000", "HKD $15K - $30K"],
    ["30000-60000", "HKD $30K - $60K"],
    ["60000-999999999", "HKD $60K+"]
  ],
  owner: [
    ["any", "Any price"],
    ["0-6000000", "Under HKD $6M"],
    ["6000000-8000000", "HKD $6M - $8M"],
    ["8000000-12000000", "HKD $8M - $12M"],
    ["12000000-999999999", "HKD $12M+"]
  ]
};

const modeLabels = {
  sale: "Buy",
  rent: "Rent",
  owner: "Owner"
};

const state = {
  mode: "sale",
  query: "",
  type: "any",
  priceRange: "any",
  districts: new Set(["all"]),
  bedrooms: "any",
  minSize: "",
  maxSize: "",
  sort: "recommended",
  verifiedOnly: false,
  mtrOnly: false,
  view: "grid",
  saved: new Set(),
  selectedMapPropertyId: null,
  activeMapTab: "price"
};

let lastFocusedElement = null;
let leafletMap = null;
let leafletMarkers = null;
let leafletBoundaries = null;
let leafletHighlight = null;
let currentBaseMapClusters = [];
let hoverHideTimer = null;
let lastScrollPosition = 0;

const elements = {
  tabs: document.querySelectorAll(".tab"),
  searchForm: document.querySelector("#search-form"),
  queryInput: document.querySelector("#query-input"),
  typeFilter: document.querySelector("#type-filter"),
  priceRange: document.querySelector("#price-range"),
  searchMode: document.querySelector("#search-mode"),
  filterToggle: document.querySelector("#filter-toggle"),
  filterPanel: document.querySelector("#filter-panel"),
  filterCount: document.querySelector("#filter-count"),
  filterSummary: document.querySelector("#filter-summary"),
  bedroomFilter: document.querySelector("#bedroom-filter"),
  minSize: document.querySelector("#min-size"),
  maxSize: document.querySelector("#max-size"),
  sortFilter: document.querySelector("#sort-filter"),
  verifiedOnly: document.querySelector("#verified-only"),
  mtrOnly: document.querySelector("#mtr-only"),
  resultsGrid: document.querySelector("#results-grid"),
  emptyState: document.querySelector("#empty-state"),
  activeFilters: document.querySelector("#active-filters"),
  mapCanvas: document.querySelector("#map-canvas"),
  mapSummary: document.querySelector("#map-summary"),
  resultsSummary: document.querySelector("#results-summary"),
  listingsKicker: document.querySelector("#listings-kicker"),
  savedCount: document.querySelector("#saved-count"),
  mortgageForm: document.querySelector("#mortgage-tool"),
  mortgageOutput: document.querySelector("#mortgage-output"),
  estateList: document.querySelector("#estate-list"),
  mapPage: document.querySelector("#map-page"),
  mapPageList: document.querySelector("#map-page-list"),
  mapPageCount: document.querySelector("#map-page-count"),
  mapPageQuery: document.querySelector("#map-page-query"),
  mapStage: document.querySelector(".map-stage"),
  mapStageSummary: document.querySelector("#map-stage-summary"),
  realMap: document.querySelector("#real-map"),
  mapInspector: document.querySelector("#map-inspector"),
  mapHoverCard: document.querySelector("#map-hover-card"),
  modal: document.querySelector("#app-modal"),
  modalTitle: document.querySelector("#modal-title"),
  modalBody: document.querySelector("#modal-body"),
  toast: document.querySelector("#toast"),
  chatbot: document.querySelector("#property-assistant"),
  chatbotPanel: document.querySelector("#chatbot-panel"),
  chatbotToggle: document.querySelector("[data-chat-toggle]"),
  chatbotMessages: document.querySelector("#chatbot-messages"),
  chatbotForm: document.querySelector("#chatbot-form"),
  chatbotInput: document.querySelector("#chatbot-input")
};

function formatHKD(value, mode = state.mode) {
  if (mode === "rent") {
    return `HKD$${Number(value).toLocaleString("en-HK")}/mo`;
  }

  if (value >= 1000000) {
    return `HKD$${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 2)}M`;
  }

  return `HKD$${Number(value).toLocaleString("en-HK")}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 2400);
}

function setChatOpen(open) {
  if (!elements.chatbot || !elements.chatbotPanel || !elements.chatbotToggle) return;
  elements.chatbot.dataset.open = open ? "true" : "false";
  elements.chatbotPanel.hidden = !open;
  elements.chatbotToggle.setAttribute("aria-expanded", String(open));
  elements.chatbotToggle.setAttribute("aria-label", open ? "Close 28Hse assistant" : "Open 28Hse assistant");
  if (open) {
    window.requestAnimationFrame(() => elements.chatbotInput?.focus({ preventScroll: true }));
  }
}

function chatActionButton(action, label) {
  return `<button type="button" data-chat-action="${action}">${escapeHTML(label)}</button>`;
}

function appendChatMessage(sender, message, actions = []) {
  if (!elements.chatbotMessages) return;
  const article = document.createElement("article");
  article.className = `chat-message ${sender}`;
  const icon = sender === "bot"
    ? '<svg viewBox="0 0 24 24"><path d="M4 11.5C4 7.4 7.6 4 12 4s8 3.4 8 7.5S16.4 19 12 19c-1 0-2-.2-2.9-.5L4.5 20l1.3-3.4A7 7 0 0 1 4 11.5Z"></path><path d="M9 11h.01M12 11h.01M15 11h.01"></path></svg>'
    : '<svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="8" r="4"></circle></svg>';
  article.innerHTML = `
    <span class="message-icon" aria-hidden="true">${icon}</span>
    <div>
      <p>${escapeHTML(message)}</p>
      ${actions.length ? `<div class="chat-actions">${actions.join("")}</div>` : ""}
    </div>
  `;
  elements.chatbotMessages.appendChild(article);
  elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

function assistantReplyFor(prompt) {
  const text = prompt.toLowerCase();
  if (text.includes("mtr") || text.includes("30k") || text.includes("rent")) {
    return {
      message: "I prepared a practical rental search: apartments, near MTR, under HKD $30K where possible. Open the map to compare commute and nearby facilities.",
      actions: [
        chatActionButton("rent-mtr-map", "Open map"),
        chatActionButton("rent-under-30k", "Show rentals")
      ]
    };
  }
  if (text.includes("mortgage") || text.includes("loan") || text.includes("payment")) {
    return {
      message: "For a HKD $8M home, a 70% loan over 25 years at 3.5% is roughly HKD $28K per month before fees. You can fine tune it in the mortgage tool.",
      actions: [
        chatActionButton("mortgage-tool", "Open mortgage"),
        chatActionButton("valuation-tool", "Estimate value")
      ]
    };
  }
  if (text.includes("verified") || text.includes("quarry") || text.includes("taikoo")) {
    return {
      message: "I can narrow this to verified Hong Kong Island listings around Quarry Bay and Taikoo Shing, then open the map so the agent and nearby details stay visible.",
      actions: [
        chatActionButton("verified-quarry", "Show verified"),
        chatActionButton("saved-list", "Saved list")
      ]
    };
  }
  if (text.includes("agent") || text.includes("viewing") || text.includes("contact")) {
    return {
      message: "For agent follow-up, keep the listing ID, preferred viewing time and WhatsApp number together. I can open the enquiry panel from here.",
      actions: [
        chatActionButton("contact-agent", "Contact agent"),
        chatActionButton("list-property", "List property")
      ]
    };
  }
  if (text.includes("fee") || text.includes("cost") || text.includes("deposit")) {
    return {
      message: "The key costs are asking rent or price, management fee, deposit estimate, parking, and mortgage or monthly total. Listing detail pages now show these in the Price section.",
      actions: [
        chatActionButton("map-current", "Open map"),
        chatActionButton("mortgage-tool", "Mortgage")
      ]
    };
  }
  return {
    message: "I can help with area search, MTR access, price checks, mortgage estimates, saved listings and agent enquiries. Try asking for a budget, district or commute target.",
    actions: [
      chatActionButton("map-current", "Search map"),
      chatActionButton("rent-under-30k", "Rent under 30K")
    ]
  };
}

function submitChatPrompt(prompt) {
  const message = prompt.trim();
  if (!message) return;
  appendChatMessage("user", message);
  const reply = assistantReplyFor(message);
  appendChatMessage("bot", reply.message, reply.actions);
}

function runChatAction(action) {
  setChatOpen(false);
  if (action === "rent-mtr-map") {
    applyPreset("rent-under-30k", { scroll: false });
    state.mtrOnly = true;
    syncFormControls();
    renderListings();
    navigateToRoute("map");
    showToast("Near-MTR rental map opened.");
    return;
  }
  if (action === "rent-under-30k") {
    applyPreset("rent-under-30k");
    showToast("Rental shortlist prepared.");
    return;
  }
  if (action === "verified-quarry") {
    resetFilters({ render: false });
    setMode("sale", false, false);
    state.query = "Quarry Bay";
    state.type = "Apartment";
    state.verifiedOnly = true;
    state.mtrOnly = true;
    syncFormControls();
    renderListings();
    navigateToRoute("map");
    showToast("Verified Quarry Bay listings opened.");
    return;
  }
  if (action === "mortgage-tool") {
    navigateToRoute("market", { focusTool: "mortgage" });
    return;
  }
  if (action === "valuation-tool") {
    navigateToRoute("market", { focusTool: "estate" });
    openSystemModal("valuation");
    return;
  }
  if (action === "contact-agent") {
    openSystemModal("contact");
    return;
  }
  if (action === "list-property") {
    openSystemModal("list");
    return;
  }
  if (action === "saved-list") {
    openSystemModal("saved");
    return;
  }
  navigateToRoute("map");
}

function seedFromId(id) {
  return String(id).split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function getPropertyProfile(property) {
  const seed = seedFromId(property.id);
  const floor = property.type === "Car Park" ? "Basement" : `${(seed % 31) + 2}F / ${(seed % 18) + 18}F`;
  const managementFee = Math.max(900, Math.round(property.size * (10 + (seed % 7)) / 100) * 100);
  const orientation = ["South", "East", "South East", "Open city", "Harbour side"][seed % 5];
  const heating = ["Split AC", "Window AC", "Central AC", "Individual cooling"][seed % 4];
  const baths = property.beds >= 3 ? 2 : property.beds === 0 ? 0 : 1;
  const options = [
    "Wardrobe", "Desk", "Shoe cabinet", "Fridge", "Washer", "Kitchen sink",
    "Induction hob", "Microwave", "Air-conditioner", "Curtains", "Smart lock", "Storage"
  ].filter((_, index) => (seed + index) % 3 !== 0).slice(0, 9);
  const security = ["CCTV lobby", "24h concierge", "Card access", "Lift security"].filter((_, index) => (seed + index) % 2 === 0);
  const transit = [
    { label: `${property.area} MTR`, line: property.mtr ? "MTR" : "Feeder", distance: property.mtr ? 80 + (seed % 420) : 620 + (seed % 520) },
    { label: `${property.area} Bus Terminus`, line: "Bus", distance: 160 + (seed % 540) },
    { label: "Cross-harbour route", line: "Express", distance: 320 + (seed % 680) }
  ];
  const amenities = [
    { type: "MTR", count: property.mtr ? 1 : 0 },
    { type: "Bus", count: 5 + (seed % 16) },
    { type: "Cafe", count: 8 + (seed % 20) },
    { type: "Bank", count: 2 + (seed % 8) },
    { type: "Clinic", count: 1 + (seed % 6) },
    { type: "School", count: property.type === "Apartment" ? 2 + (seed % 5) : seed % 3 }
  ];
  const agent = getAgentProfile(property, seed);

  return {
    floor,
    managementFee,
    orientation,
    heating,
    baths,
    options,
    security,
    transit,
    amenities,
    agent,
    views: 180 + (seed % 720),
    address: `${property.area}, ${property.district}`,
    parking: seed % 3 === 0 ? "Available" : "Nearby car park",
    monthlyTotal: property.mode === "rent" ? property.price + managementFee : Math.round(property.price * 0.0042),
    deposit: property.mode === "rent" ? property.price * 2 : 0
  };
}

function getAgentProfile(property, seed = seedFromId(property.id)) {
  const agency = property.agent;
  const profiles = {
    "Centaline Property": ["Centaline Property", "License C-000227", "+852 2888 8888", "Central branch"],
    "Midland Realty": ["Midland Realty", "License C-000982", "+852 2929 2929", "Island East branch"],
    "28Hse Partner": ["28Hse Partner Agency", "License C-090128", "+852 3102 2828", "Online enquiry desk"],
    "Verified agent": ["Verified 28Hse Agent", "License C-281128", "+852 2808 2808", "Verified listing desk"],
    "Office Leasing": ["Office Leasing Desk", "License C-771902", "+852 3168 8899", "Commercial branch"],
    "Commercial Desk": ["Commercial Property Desk", "License C-441020", "+852 2866 2338", "Retail leasing branch"],
    "Serviced Living Desk": ["Serviced Living Desk", "License C-520048", "+852 3700 8181", "Relocation desk"],
    "Greater Bay Desk": ["Greater Bay Desk", "License GBA-22018", "+852 3902 1188", "Cross-border desk"],
    "Overseas Desk": ["Overseas Desk", "License OS-82310", "+852 3911 2288", "International desk"],
    "Owner direct": ["Owner direct", "Owner submitted", "+852 6*** ****", "Direct enquiry"]
  };
  const [name, license, phone, branch] = profiles[agency] || [agency, "License verified", "+852 2888 2828", "Partner branch"];
  return {
    name,
    license,
    phone,
    branch,
    manager: agency === "Owner direct" ? "Owner" : ["Chloe Chan", "Marcus Lee", "Ivy Wong", "Jason Ho"][seed % 4],
    score: agency === "Owner direct" ? "Direct" : `${4.6 + ((seed % 4) / 10)} / 5`,
    response: agency === "Owner direct" ? "Usually replies same day" : `${8 + (seed % 18)} min avg. response`
  };
}

function getSimilarProperties(property) {
  return properties
    .filter((item) => item.id !== property.id && item.mode === property.mode && (item.area === property.area || item.district === property.district || item.type === property.type))
    .slice(0, 3);
}

function listingNumber(property) {
  return String(54000000 + seedFromId(property.id) * 317 + property.size * 11).slice(0, 8);
}

function mobileListingUrl(listingId) {
  return `https://www.28hse.com/en/listing/${listingId}`;
}

function qrMultiply(left, right) {
  let result = 0;
  for (let bit = 7; bit >= 0; bit -= 1) {
    result = (result << 1) ^ ((result >>> 7) * 0x11d);
    result ^= ((right >>> bit) & 1) * left;
  }
  return result & 0xff;
}

function qrErrorCorrectionDivisor(degree) {
  const result = Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let index = 0; index < degree; index += 1) {
    for (let cursor = 0; cursor < result.length; cursor += 1) {
      result[cursor] = qrMultiply(result[cursor], root);
      if (cursor + 1 < result.length) {
        result[cursor] ^= result[cursor + 1];
      }
    }
    root = qrMultiply(root, 0x02);
  }
  return result;
}

function qrErrorCorrectionRemainder(data, degree) {
  const divisor = qrErrorCorrectionDivisor(degree);
  const result = Array(degree).fill(0);
  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    divisor.forEach((coefficient, index) => {
      result[index] ^= qrMultiply(coefficient, factor);
    });
  });
  return result;
}

function createQrModules(value) {
  const version = 4;
  const size = 17 + version * 4;
  const dataCodewords = 80;
  const errorCodewords = 20;
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));
  const bytes = Array.from(new TextEncoder().encode(value)).slice(0, 76);
  const bits = [];

  const pushBits = (number, length) => {
    for (let index = length - 1; index >= 0; index -= 1) {
      bits.push(((number >>> index) & 1) === 1);
    }
  };

  const setModule = (x, y, dark, isReserved = true) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = Boolean(dark);
    if (isReserved) reserved[y][x] = true;
  };

  const drawFinder = (left, top) => {
    for (let y = -1; y <= 7; y += 1) {
      for (let x = -1; x <= 7; x += 1) {
        const isInner = x >= 0 && x <= 6 && y >= 0 && y <= 6;
        const isDark = isInner && (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4));
        setModule(left + x, top + y, isDark);
      }
    }
  };

  const drawAlignment = (centerX, centerY) => {
    for (let y = -2; y <= 2; y += 1) {
      for (let x = -2; x <= 2; x += 1) {
        setModule(centerX + x, centerY + y, Math.max(Math.abs(x), Math.abs(y)) !== 1);
      }
    }
  };

  const drawFormatBits = (mask) => {
    const getBit = (number, index) => ((number >>> index) & 1) === 1;
    const errorLevel = 1;
    const data = (errorLevel << 3) | mask;
    let remainder = data;
    for (let index = 0; index < 10; index += 1) {
      remainder = (remainder << 1) ^ (((remainder >>> 9) & 1) ? 0x537 : 0);
    }
    const format = ((data << 10) | remainder) ^ 0x5412;

    for (let index = 0; index <= 5; index += 1) setModule(8, index, getBit(format, index));
    setModule(8, 7, getBit(format, 6));
    setModule(8, 8, getBit(format, 7));
    setModule(7, 8, getBit(format, 8));
    for (let index = 9; index < 15; index += 1) setModule(14 - index, 8, getBit(format, index));
    for (let index = 0; index < 8; index += 1) setModule(size - 1 - index, 8, getBit(format, index));
    for (let index = 8; index < 15; index += 1) setModule(8, size - 15 + index, getBit(format, index));
    setModule(8, size - 8, true);
  };

  drawFinder(0, 0);
  drawFinder(size - 7, 0);
  drawFinder(0, size - 7);
  drawAlignment(26, 26);
  for (let index = 8; index < size - 8; index += 1) {
    setModule(6, index, index % 2 === 0);
    setModule(index, 6, index % 2 === 0);
  }
  drawFormatBits(0);

  pushBits(0x4, 4);
  pushBits(bytes.length, 8);
  bytes.forEach((byte) => pushBits(byte, 8));
  const capacity = dataCodewords * 8;
  pushBits(0, Math.min(4, capacity - bits.length));
  while (bits.length % 8) bits.push(false);

  const data = [];
  for (let index = 0; index < bits.length; index += 8) {
    let byte = 0;
    for (let offset = 0; offset < 8; offset += 1) {
      byte = (byte << 1) | (bits[index + offset] ? 1 : 0);
    }
    data.push(byte);
  }
  const pads = [0xec, 0x11];
  while (data.length < dataCodewords) data.push(pads[data.length % 2]);

  const codewords = data.concat(qrErrorCorrectionRemainder(data, errorCodewords));
  const dataBits = [];
  codewords.forEach((byte) => {
    for (let bit = 7; bit >= 0; bit -= 1) dataBits.push(((byte >>> bit) & 1) === 1);
  });

  let bitIndex = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vertical = 0; vertical < size; vertical += 1) {
      const y = ((right + 1) & 2) === 0 ? size - 1 - vertical : vertical;
      for (let column = 0; column < 2; column += 1) {
        const x = right - column;
        if (!reserved[y][x] && bitIndex < dataBits.length) {
          const masked = (x + y) % 2 === 0;
          modules[y][x] = dataBits[bitIndex] !== masked;
          bitIndex += 1;
        }
      }
    }
  }

  return modules;
}

function renderQrCode(value) {
  const modules = createQrModules(value);
  const size = modules.length;
  const rects = [];
  modules.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) rects.push(`<rect x="${x}" y="${y}" width="1" height="1"></rect>`);
    });
  });
  return `
    <svg class="qr-code" viewBox="0 0 ${size} ${size}" role="img" aria-label="Mobile QR code">
      <rect class="qr-code-bg" width="${size}" height="${size}"></rect>
      <g class="qr-code-pixels">${rects.join("")}</g>
    </svg>
  `;
}

function scrollToTarget(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const routeSections = {
  home: [".search-band", ".home-ad-section", ".quick-links"],
  listings: [".search-band", "#listings"],
  map: ["#map-page"],
  market: ["#market"],
  news: ["#news"],
  homes: ["#homes"]
};

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const routePart = raw.split("?")[0].split("/")[0];
  if (!raw || raw === "home") return "home";
  if (routePart === "buy" || routePart === "rent" || routePart === "owner") return "listings";
  return routeSections[routePart] ? routePart : "home";
}

function mapListingIdFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const listingPath = raw.match(/^map\/listing\/([^/?]+)/);
  const listingQuery = raw.match(/^map\?listing=([^&]+)/);
  return decodeURIComponent(listingPath?.[1] || listingQuery?.[1] || "");
}

function setPrimaryActiveRoute(route) {
  const firstRouteLink = document.querySelector(`.primary-nav [data-route="${route}"]`);
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    const active = route === "listings" && link.dataset.setMode === state.mode ? true : link === firstRouteLink;
    link.classList.toggle("active", active);
  });
}

function applyRoute(route, options = {}) {
  const activeSelectors = routeSections[route] || routeSections.home;
  document.querySelectorAll("main > section").forEach((section) => {
    const visible = activeSelectors.some((selector) => section.matches(selector));
    section.hidden = !visible;
  });

  document.body.dataset.route = route;
  document.body.classList.remove("header-hidden");
  if (route !== "map") {
    document.body.classList.remove("map-detail-open");
    if (elements.mapInspector) {
      elements.mapInspector.classList.remove("open");
      elements.mapInspector.hidden = true;
      elements.mapInspector.removeAttribute("style");
      elements.mapInspector.innerHTML = "";
    }
  }
  setPrimaryActiveRoute(route);

  if (route === "map") {
    renderMapPage();
    const listingId = mapListingIdFromHash();
    const property = listingId ? propertyById(listingId) : null;
    if (property) {
      setTimeout(() => renderMapInspector(property, "price"), 80);
    }
  }

  if (route === "market" && options.focusTool) {
    setTimeout(() => focusTool(options.focusTool), 80);
  } else if (route !== "home") {
    window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  }
}

function navigateToRoute(route, options = {}) {
  const nextRoute = routeSections[route] ? route : "home";
  const nextHash = `#/${nextRoute}`;
  if (window.location.hash !== nextHash) {
    window.history.pushState(null, "", nextHash);
  }
  applyRoute(nextRoute, options);
}

function updatePriceOptions() {
  elements.priceRange.innerHTML = priceOptions[state.mode]
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  if (!priceOptions[state.mode].some(([value]) => value === state.priceRange)) {
    state.priceRange = "any";
  }
  elements.priceRange.value = state.priceRange;
}

function syncModeControls() {
  elements.tabs.forEach((tab) => {
    const active = tab.dataset.mode === state.mode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  elements.searchMode.textContent = modeLabels[state.mode];
  elements.listingsKicker.textContent = modeLabels[state.mode];
  updatePriceOptions();
  updatePrimaryNavForMode(state.mode);
}

function setMode(mode, shouldScroll = false, shouldRender = true) {
  state.mode = mode;
  state.priceRange = "any";
  syncModeControls();
  if (shouldRender) renderListings();
  if (shouldScroll) scrollToTarget("#listings");
}

function updatePrimaryNavForMode(mode) {
  const matchingLink = document.querySelector(`.primary-nav [data-set-mode="${mode}"]`);
  if (!matchingLink) return;
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.classList.toggle("active", link === matchingLink);
  });
}

function setDistrict(button) {
  const district = button.dataset.district;
  const chips = document.querySelectorAll("[data-district]");

  if (district === "all") {
    state.districts = new Set(["all"]);
  } else {
    state.districts.delete("all");
    if (state.districts.has(district)) {
      state.districts.delete(district);
    } else {
      state.districts.add(district);
    }
    if (state.districts.size === 0) state.districts.add("all");
  }

  chips.forEach((chip) => {
    chip.classList.toggle("active", state.districts.has(chip.dataset.district));
    chip.setAttribute("aria-pressed", String(state.districts.has(chip.dataset.district)));
  });
  renderListings();
}

function priceMatches(property) {
  if (state.priceRange === "any") return true;
  const [min, max] = state.priceRange.split("-").map(Number);
  return property.price >= min && property.price <= max;
}

function textMatches(property) {
  if (!state.query) return true;
  const haystack = `${property.title} ${property.district} ${property.area} ${property.type} ${property.summary}`.toLowerCase();
  return haystack.includes(state.query.toLowerCase());
}

function districtMatches(property) {
  return state.districts.has("all") || state.districts.has(property.district);
}

function typeMatches(property) {
  return state.type === "any" || property.type === state.type;
}

function bedroomMatches(property) {
  return state.bedrooms === "any" || property.beds >= Number(state.bedrooms);
}

function sizeMatches(property) {
  const min = Number(state.minSize || 0);
  const max = Number(state.maxSize || Number.MAX_SAFE_INTEGER);
  return property.size >= min && property.size <= max;
}

function getFilteredProperties(options = {}) {
  const ignoreDistrict = options.ignoreDistrict || false;
  const filtered = properties.filter((property) => {
    return property.mode === state.mode &&
      textMatches(property) &&
      (ignoreDistrict || districtMatches(property)) &&
      typeMatches(property) &&
      priceMatches(property) &&
      bedroomMatches(property) &&
      sizeMatches(property) &&
      (!state.verifiedOnly || property.verified) &&
      (!state.mtrOnly || property.mtr);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price-low") return a.price - b.price;
    if (state.sort === "price-high") return b.price - a.price;
    if (state.sort === "size-high") return b.size - a.size;
    if (state.sort === "newest") return a.updated - b.updated;
    return Number(b.verified) - Number(a.verified) || a.updated - b.updated;
  });
}

function getActiveFilterCount() {
  let count = 0;
  if (!state.districts.has("all")) count += state.districts.size;
  if (state.query) count += 1;
  if (state.type !== "any") count += 1;
  if (state.priceRange !== "any") count += 1;
  if (state.bedrooms !== "any") count += 1;
  if (state.minSize || state.maxSize) count += 1;
  if (state.verifiedOnly) count += 1;
  if (state.mtrOnly) count += 1;
  if (state.sort !== "recommended") count += 1;
  return count;
}

function updateFilterSummary(resultCount) {
  const count = getActiveFilterCount();
  elements.filterCount.textContent = count;
  const districts = state.districts.has("all") ? "All districts" : Array.from(state.districts).join(", ");
  const extras = [];
  if (state.bedrooms !== "any") extras.push(`${state.bedrooms}+ beds`);
  if (state.minSize || state.maxSize) extras.push(`${state.minSize || 0}-${state.maxSize || "any"} sq ft`);
  if (state.type !== "any") extras.push(state.type);
  if (state.priceRange !== "any") extras.push(priceOptions[state.mode].find(([value]) => value === state.priceRange)?.[1] || "Custom price");
  if (state.verifiedOnly) extras.push("Verified");
  if (state.mtrOnly) extras.push("Near MTR");

  elements.filterSummary.textContent = count ? `${districts}${extras.length ? `, ${extras.join(", ")}` : ""}` : "No extra filters selected";
  elements.resultsSummary.textContent = `${resultCount} result${resultCount === 1 ? "" : "s"} for ${modeLabels[state.mode].toLowerCase()} listings.`;
}

function renderActiveFilters(resultCount) {
  const chips = [
    `<span class="active-filter active-filter-mode">${modeLabels[state.mode]}</span>`
  ];
  const priceLabel = priceOptions[state.mode].find(([value]) => value === state.priceRange)?.[1];

  if (state.query) chips.push(`<button type="button" data-clear-filter="query">"${escapeHTML(state.query)}"</button>`);
  if (state.type !== "any") chips.push(`<button type="button" data-clear-filter="type">${escapeHTML(state.type)}</button>`);
  if (state.priceRange !== "any") chips.push(`<button type="button" data-clear-filter="price">${escapeHTML(priceLabel)}</button>`);
  if (!state.districts.has("all")) chips.push(`<button type="button" data-clear-filter="district">${escapeHTML(Array.from(state.districts).join(", "))}</button>`);
  if (state.bedrooms !== "any") chips.push(`<button type="button" data-clear-filter="bedrooms">${state.bedrooms}+ beds</button>`);
  if (state.minSize || state.maxSize) chips.push(`<button type="button" data-clear-filter="size">${state.minSize || 0}-${state.maxSize || "any"} sq ft</button>`);
  if (state.verifiedOnly) chips.push(`<button type="button" data-clear-filter="verified">Verified only</button>`);
  if (state.mtrOnly) chips.push(`<button type="button" data-clear-filter="mtr">Near MTR</button>`);
  if (state.sort !== "recommended") chips.push(`<button type="button" data-clear-filter="sort">${escapeHTML(elements.sortFilter.selectedOptions[0]?.textContent || "Sorted")}</button>`);

  const hasExtraFilters = chips.length > 1;
  elements.activeFilters.innerHTML = `
    <div>
      <strong>${resultCount} matches</strong>
      <span>${hasExtraFilters ? "Filtered demo data" : `Use quick picks or map markers to narrow ${properties.length} demo listings.`}</span>
    </div>
    <div class="active-filter-list">
      ${chips.join("")}
      ${hasExtraFilters ? '<button type="button" data-clear-filter="all">Reset all</button>' : ""}
    </div>
  `;
}

function renderMap(matches) {
  const districtMatchesWithoutDistrict = getFilteredProperties({ ignoreDistrict: true });
  const counts = districtMatchesWithoutDistrict.reduce((accumulator, property) => {
    accumulator[property.district] = (accumulator[property.district] || 0) + 1;
    return accumulator;
  }, {});
  const activeDistricts = state.districts.has("all") ? Object.keys(districtMeta) : Array.from(state.districts);

  elements.mapSummary.textContent = `${matches.length} matches in ${state.districts.has("all") ? "all districts" : activeDistricts.join(", ")}`;
  const pins = Object.entries(districtMeta).map(([district, meta]) => {
    const count = counts[district] || 0;
    const active = state.districts.has("all") || state.districts.has(district);
    return `
      <button class="map-pin map-cluster ${active ? "active" : ""} ${count ? "" : "is-empty"}" type="button" style="--x:${meta.x}%; --y:${meta.y}%;" data-map-district="${district}" aria-label="${district}, ${count} matching listings">
        <strong>${count}</strong>
        <span>${district}</span>
      </button>
    `;
  }).join("");

  elements.mapCanvas.innerHTML = `
    <div class="osm-mini-map" aria-hidden="true">
      <img src="https://tile.openstreetmap.org/11/1672/892.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1673/892.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1674/892.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1672/893.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1673/893.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1674/893.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1672/894.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1673/894.png" alt="">
      <img src="https://tile.openstreetmap.org/11/1674/894.png" alt="">
      <small>© OpenStreetMap</small>
    </div>
    ${pins}
  `;
}

function groupMapClusters(matches) {
  const clusters = new Map();
  matches.forEach((property) => {
    const key = `${property.district}|${property.area}`;
    const existing = clusters.get(key) || {
      key,
      district: property.district,
      area: property.area,
      count: 0,
      lat: 0,
      lng: 0,
      minPrice: property.price,
      items: []
    };
    existing.count += 1;
    existing.lat += property.lat;
    existing.lng += property.lng;
    existing.minPrice = Math.min(existing.minPrice, property.price);
    existing.items.push(property);
    clusters.set(key, existing);
  });

  return Array.from(clusters.values()).map((cluster) => ({
    ...cluster,
    lat: cluster.lat / cluster.count,
    lng: cluster.lng / cluster.count
  }));
}

const mapClusterAreaLabels = [
  "Central",
  "Admiralty",
  "Wan Chai",
  "Causeway Bay",
  "Tin Hau",
  "North Point",
  "Quarry Bay",
  "Taikoo Shing",
  "Kennedy Town",
  "Sai Ying Pun",
  "Tsim Sha Tsui",
  "Jordan",
  "Mong Kok",
  "Prince Edward",
  "Kowloon City",
  "Kai Tak",
  "Hung Hom",
  "Kwun Tong",
  "Tsuen Wan",
  "Sha Tin",
  "Tai Wai",
  "Fo Tan",
  "Tseung Kwan O",
  "Yuen Long",
  "Tuen Mun",
  "Ma On Shan",
  "Tin Shui Wai",
  "Discovery Bay"
];

function areaCenter(areaName) {
  return mapAreas.find((item) => item.area === areaName) || null;
}

function areaPolygonForName(areaName) {
  return areaBoundaryPolygons[areaName] || null;
}

function pointInPolygon(point, polygon) {
  const [lat, lng] = point;
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index++) {
    const [latI, lngI] = polygon[index];
    const [latJ, lngJ] = polygon[previous];
    const intersects = ((lngI > lng) !== (lngJ > lng)) &&
      (lat < ((latJ - latI) * (lng - lngI)) / (lngJ - lngI || Number.EPSILON) + latI);
    if (intersects) inside = !inside;
  }
  return inside;
}

function polygonCentroid(polygon) {
  const totals = polygon.reduce((accumulator, point) => {
    accumulator.lat += point[0];
    accumulator.lng += point[1];
    return accumulator;
  }, { lat: 0, lng: 0 });
  return {
    lat: totals.lat / polygon.length,
    lng: totals.lng / polygon.length
  };
}

function pointWithinArea(areaName, seed, index) {
  const polygon = areaPolygonForName(areaName);
  const center = areaCenter(areaName);
  const base = polygon ? polygonCentroid(polygon) : center;
  if (!base) return { lat: 22.337, lng: 114.165 };

  if (!polygon) {
    return {
      lat: base.lat + deterministicOffset(index + seed, 3, 0.004),
      lng: base.lng + deterministicOffset(index + seed, 9, 0.006)
    };
  }

  const lats = polygon.map((point) => point[0]);
  const lngs = polygon.map((point) => point[1]);
  const latSpan = Math.max(...lats) - Math.min(...lats);
  const lngSpan = Math.max(...lngs) - Math.min(...lngs);

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const candidate = [
      base.lat + deterministicOffset(index + seed + attempt * 5, 2, latSpan * 0.42),
      base.lng + deterministicOffset(index + seed + attempt * 7, 6, lngSpan * 0.42)
    ];
    if (pointInPolygon(candidate, polygon)) {
      return { lat: candidate[0], lng: candidate[1] };
    }
  }

  return base;
}

const macroMapRegions = [
  {
    area: "Hong Kong",
    district: "Hong Kong",
    districts: ["Hong Kong Island", "Kowloon", "New Territories East", "New Territories West"],
    lat: 22.335,
    lng: 114.165
  },
  {
    area: "Greater Bay",
    district: "Greater Bay Area",
    districts: ["Greater Bay Area"],
    lat: 22.49,
    lng: 113.96
  },
  {
    area: "Japan",
    district: "Japan",
    districts: ["Japan"],
    lat: 35.6762,
    lng: 139.6503
  }
];

const districtMapRegions = [
  { area: "Hong Kong Island", district: "Hong Kong Island", districts: ["Hong Kong Island"], lat: 22.279, lng: 114.178 },
  { area: "Kowloon", district: "Kowloon", districts: ["Kowloon"], lat: 22.318, lng: 114.184 },
  { area: "NT East", district: "New Territories East", districts: ["New Territories East"], lat: 22.390, lng: 114.220 },
  { area: "NT West", district: "New Territories West", districts: ["New Territories West"], lat: 22.402, lng: 114.030 },
  { area: "Greater Bay", district: "Greater Bay Area", districts: ["Greater Bay Area"], lat: 22.50, lng: 113.94 }
];

function clusterItems(clusters) {
  return clusters.flatMap((cluster) => cluster.items);
}

function aggregateRegionClusters(clusters, regions, level) {
  const items = clusterItems(clusters);
  return regions.map((region) => {
    const regionItems = items.filter((property) => region.districts.includes(property.district));
    if (!regionItems.length) return null;
    return {
      key: `${level}-${region.area}`,
      level,
      district: region.district,
      districts: region.districts,
      area: region.area,
      sourceArea: "",
      count: regionItems.length,
      lat: region.lat,
      lng: region.lng,
      minPrice: Math.min(...regionItems.map((property) => property.price)),
      items: regionItems
    };
  }).filter(Boolean);
}

function mapClustersForZoom(clusters, zoom = 11) {
  if (zoom <= 8.9) {
    return aggregateRegionClusters(clusters, macroMapRegions, "macro");
  }

  if (zoom <= 10.7) {
    return aggregateRegionClusters(clusters, districtMapRegions, "district");
  }

  if (zoom <= 12.2) {
    return clusters.map((cluster) => ({ ...cluster, level: "area" }));
  }

  return visualMapClusters(clusters).map((cluster) => ({ ...cluster, level: "neighborhood" }));
}

function boundaryClustersForZoom(clusters, zoom = 11) {
  if (zoom <= 8.9) {
    return aggregateRegionClusters(clusters, macroMapRegions, "macro")
      .filter((cluster) => areaPolygonPoints(cluster));
  }

  if (zoom <= 10.7) {
    return aggregateRegionClusters(clusters, districtMapRegions, "district")
      .filter((cluster) => areaPolygonPoints(cluster));
  }

  return clusters
    .map((cluster) => ({ ...cluster, level: "area" }))
    .filter((cluster) => areaPolygonForName(cluster.area));
}

function visualMapClusters(clusters) {
  const items = clusters.flatMap((cluster) => cluster.items.map((property) => ({ property, cluster })));
  if (items.length < 36) return clusters;
  const sourceDistricts = new Set(items.map(({ property }) => property.district));
  const candidateAreas = mapAreas.filter((area) => sourceDistricts.has(area.district) && area.district !== "Japan");
  const displayAreas = candidateAreas.length ? candidateAreas : mapAreas.filter((area) => area.district !== "Japan");

  return items.slice(0, 140).map(({ property, cluster }, index) => {
    const seed = seedFromId(property.id);
    const area = displayAreas[(seed + index * 3) % displayAreas.length] || areaCenter(property.area) || cluster;
    const point = pointWithinArea(area.area, seed, index);
    return {
      key: `visual-${property.id}-${index}`,
      district: area.district || property.district,
      area: area.area || property.area,
      sourceArea: area.area || property.area,
      count: 1 + ((seed + index * 29) % 240),
      lat: point.lat,
      lng: point.lng,
      minPrice: property.price,
      items: [property]
    };
  });
}

function coordsToMapPercent(lat, lng) {
  const bounds = { minLat: 22.16, maxLat: 22.56, minLng: 113.86, maxLng: 114.38 };
  const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 100;
  return {
    x: Math.max(2, Math.min(98, x)),
    y: Math.max(2, Math.min(98, y))
  };
}

function mapListTemplate(property) {
  const profile = getPropertyProfile(property);
  const active = state.selectedMapPropertyId === property.id;
  return `
    <button class="map-result-card ${active ? "active" : ""}" type="button" data-map-details="${property.id}">
      <img src="${property.image}" alt="${property.title}" loading="lazy" decoding="async">
      <span>
        <strong>${formatHKD(property.price, property.mode)}</strong>
        <small>${property.area} · ${property.type} · ${property.size.toLocaleString("en-HK")} sq ft</small>
        <em>${property.verified ? "Verified" : "Owner"}${property.mtr ? " · Near MTR" : ""} · ${profile.agent.response}</em>
      </span>
    </button>
  `;
}

function areaPolygonPoints(cluster) {
  if (cluster.level === "macro") {
    if (cluster.area === "Hong Kong") return [[22.468, 113.898], [22.470, 114.332], [22.232, 114.332], [22.214, 113.888]];
    if (cluster.area === "Greater Bay") return [[22.575, 113.845], [22.575, 114.105], [22.250, 114.105], [22.248, 113.550], [22.380, 113.550]];
  }

  if (cluster.level === "district") {
    if (cluster.district === "Hong Kong Island") return [[22.303, 114.118], [22.304, 114.232], [22.246, 114.236], [22.226, 114.154], [22.264, 114.113]];
    if (cluster.district === "Kowloon") return [[22.344, 114.126], [22.345, 114.232], [22.294, 114.238], [22.287, 114.164], [22.319, 114.126]];
    if (cluster.district === "New Territories East") return [[22.472, 114.132], [22.462, 114.312], [22.298, 114.312], [22.302, 114.214], [22.366, 114.142]];
    if (cluster.district === "New Territories West") return [[22.476, 113.900], [22.475, 114.144], [22.282, 114.134], [22.268, 113.912]];
    if (cluster.district === "Greater Bay Area") return [[22.568, 113.860], [22.568, 114.092], [22.255, 114.092], [22.250, 113.554], [22.372, 113.554]];
  }

  const exactPolygon = areaPolygonForName(cluster.area) || areaPolygonForName(cluster.sourceArea);
  if (exactPolygon) return exactPolygon;
  const seed = seedFromId(cluster.key);
  const latRadius = 0.004 + Math.min(cluster.count, 16) * 0.00018;
  const lngRadius = 0.006 + Math.min(cluster.count, 16) * 0.00022;
  return Array.from({ length: 7 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 7;
    const wobble = 0.78 + (((seed + index * 13) % 9) / 24);
    return [
      cluster.lat + Math.sin(angle) * latRadius * wobble,
      cluster.lng + Math.cos(angle) * lngRadius * wobble
    ];
  });
}

function drawClusterHighlight(cluster) {
  if (!leafletMap || !window.L) return;
  if (leafletHighlight) {
    leafletHighlight.remove();
    leafletHighlight = null;
  }
  if (cluster.level === "macro") return;
  leafletHighlight = L.polygon(areaPolygonPoints(cluster), {
    color: "#16a34a",
    weight: 3,
    fillColor: "#16a34a",
    fillOpacity: 0.18,
    opacity: 0.92,
    interactive: false
  }).addTo(leafletMap);
}

function clearClusterHover() {
  if (leafletHighlight) {
    leafletHighlight.remove();
    leafletHighlight = null;
  }
  if (elements.mapHoverCard) {
    elements.mapHoverCard.hidden = true;
    elements.mapHoverCard.innerHTML = "";
  }
}

const boundaryBaseStyle = {
  color: "#16a34a",
  weight: 1.8,
  fillColor: "#16a34a",
  fillOpacity: 0.07,
  opacity: 0.86,
  className: "leaflet-area-boundary",
  interactive: true
};

const boundaryHoverStyle = {
  color: "#0f7a3a",
  weight: 3,
  fillColor: "#16a34a",
  fillOpacity: 0.22,
  opacity: 0.98
};

function clusterStats(cluster) {
  const rentItems = cluster.items.filter((item) => item.mode === "rent");
  const saleItems = cluster.items.filter((item) => item.mode !== "rent");
  const rentAverage = rentItems.length ? Math.round(rentItems.reduce((total, item) => total + item.price, 0) / rentItems.length) : null;
  const saleAverage = saleItems.length ? Math.round(saleItems.reduce((total, item) => total + item.price, 0) / saleItems.length) : null;
  const mtrCount = cluster.items.filter((item) => item.mtr).length;
  const verifiedCount = cluster.items.filter((item) => item.verified).length;
  return { rentAverage, saleAverage, mtrCount, verifiedCount };
}

function showClusterHover(cluster) {
  if (!leafletMap || !elements.mapHoverCard) return;
  clearTimeout(hoverHideTimer);
  drawClusterHighlight(cluster);
  const point = leafletMap.latLngToContainerPoint([cluster.lat, cluster.lng]);
  const stats = clusterStats(cluster);
  elements.mapHoverCard.style.left = `${Math.max(170, Math.min(point.x, elements.realMap.clientWidth - 170))}px`;
  elements.mapHoverCard.style.top = `${Math.max(112, point.y + 46)}px`;
  elements.mapHoverCard.innerHTML = `
    <strong>${escapeHTML(cluster.area)}</strong>
    <span>${cluster.count} matching rooms in ${escapeHTML(cluster.district)}</span>
    <div>
      <b>${stats.rentAverage ? formatHKD(stats.rentAverage, "rent") : "-"}</b>
      <small>avg rent</small>
    </div>
    <div>
      <b>${stats.saleAverage ? formatHKD(stats.saleAverage, "sale") : "-"}</b>
      <small>avg sale</small>
    </div>
    <p>${stats.mtrCount} near MTR · ${stats.verifiedCount} verified agencies</p>
  `;
  elements.mapHoverCard.hidden = false;
}

function scheduleHideClusterHover() {
  clearTimeout(hoverHideTimer);
  hoverHideTimer = setTimeout(clearClusterHover, 220);
}

function lineIcon(paths) {
  return `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      ${paths}
    </svg>
  `;
}

function furnitureIcon(type) {
  const icons = {
    aircon: lineIcon('<rect x="13" y="14" width="38" height="20" rx="2"></rect><path d="M20 22h4M20 27h28M18 39c0 5 5 5 5 9M32 39c0 5-5 5-5 9M46 39c0 5 5 5 5 9"></path>'),
    desk: lineIcon('<path d="M12 19h40v6H12zM16 25v27M48 25v27M34 25v27"></path><path d="M38 31h10M38 39h10M38 47h10"></path>'),
    wardrobe: lineIcon('<path d="M17 9h30v46H17zM32 9v46M17 22h15M17 35h15M39 32v8"></path><path d="M22 55v4M42 55v4"></path>'),
    shoe: lineIcon('<path d="M15 42h36c1.5 0 3-1.4 3-3.2 0-3.6-4-5.1-9.5-6.4-4.2-1-6.4-4.1-7.6-8.8H27v16H15zM27 24v9M37 25h7"></path>'),
    fridge: lineIcon('<rect x="18" y="8" width="28" height="48" rx="2"></rect><path d="M18 28h28M39 16v6M39 36v8"></path>'),
    washer: lineIcon('<rect x="15" y="12" width="34" height="40" rx="2"></rect><path d="M22 19h4M33 19h10"></path><circle cx="32" cy="34" r="10"></circle><path d="M24 36c5 4 11 4 16 0"></path>'),
    sink: lineIcon('<rect x="15" y="20" width="36" height="28" rx="2"></rect><path d="M32 12v16M26 16h16M39 16v6"></path><circle cx="28" cy="34" r="4"></circle><path d="M40 28h5M40 34h5M40 40h5"></path>'),
    induction: lineIcon('<rect x="14" y="16" width="36" height="32" rx="2"></rect><circle cx="25" cy="30" r="6"></circle><circle cx="39" cy="30" r="6"></circle><path d="M22 42h6M36 42h6"></path>'),
    microwave: lineIcon('<rect x="12" y="18" width="40" height="28" rx="2"></rect><rect x="18" y="24" width="22" height="16"></rect><path d="M46 25v2M46 32v2M46 39v2"></path>'),
    curtains: lineIcon('<path d="M14 12h36M18 12v40M46 12v40M18 20c6 2 10 2 14 0M32 20c4 2 8 2 14 0M18 32c6 2 10 2 14 0M32 32c4 2 8 2 14 0M18 44c6 2 10 2 14 0M32 44c4 2 8 2 14 0"></path>'),
    smartlock: lineIcon('<rect x="18" y="12" width="28" height="40" rx="2"></rect><path d="M27 25h10M27 32h10M27 39h10M40 20h1M40 28h1"></path>'),
    storage: lineIcon('<path d="M18 9h28v46H18zM30 9v46M18 22h12M18 35h12M38 32v8"></path>')
  };

  return icons[type] || icons.storage;
}

function securityIcon(type) {
  const icons = {
    intercom: lineIcon('<rect x="18" y="12" width="28" height="40" rx="2"></rect><path d="M26 20h12"></path><path d="M27 28h2M33 28h2M39 28h2M27 34h2M33 34h2M39 34h2M27 40h2M33 40h2M39 40h2"></path>'),
    card: lineIcon('<rect x="20" y="10" width="24" height="44" rx="2"></rect><path d="M25 20h14M25 44h14M44 35h7"></path><path d="M28 28h2M34 28h2M28 34h2M34 34h2"></path>'),
    cctv: lineIcon('<path d="M16 19h34M20 19v11c0 8 6 14 12 14s12-6 12-14V19"></path><circle cx="32" cy="31" r="5"></circle><path d="M32 44v8"></path>'),
    entrance: lineIcon('<rect x="16" y="14" width="34" height="36" rx="2"></rect><path d="M26 23l6-3 6 3v6c0 5-3 8-6 10-3-2-6-5-6-10z"></path><circle cx="46" cy="22" r="3"></circle><path d="M41 34h4M41 40h4M41 46h4"></path>')
  };

  return icons[type] || icons.entrance;
}

function transitIcon(line) {
  const normalized = line.toLowerCase();
  const icons = {
    mtr: lineIcon('<rect x="16" y="12" width="32" height="34" rx="6"></rect><path d="M24 20h16M22 30h20M24 46l-6 8M40 46l6 8"></path><circle cx="25" cy="38" r="3"></circle><circle cx="39" cy="38" r="3"></circle>'),
    feeder: lineIcon('<path d="M18 16h28v28H18z"></path><path d="M24 23h16M24 31h16M18 44l-5 8M46 44l5 8"></path><circle cx="25" cy="38" r="3"></circle><circle cx="39" cy="38" r="3"></circle>'),
    bus: lineIcon('<rect x="14" y="12" width="36" height="36" rx="5"></rect><path d="M20 21h24M20 31h24M19 48l-4 6M49 48l-4 6"></path><circle cx="24" cy="40" r="3"></circle><circle cx="40" cy="40" r="3"></circle>'),
    express: lineIcon('<path d="M35 8 16 35h14l-2 21 20-29H34l1-19Z"></path>')
  };
  if (normalized.includes("express")) return icons.express;
  if (normalized.includes("bus")) return icons.bus;
  if (normalized.includes("feeder")) return icons.feeder;
  return icons.mtr;
}

function poiKey(type) {
  const normalized = type.toLowerCase();
  if (normalized.includes("mtr")) return "mtr";
  if (normalized.includes("bus")) return "bus";
  if (normalized.includes("cafe")) return "cafe";
  if (normalized.includes("bank")) return "bank";
  if (normalized.includes("clinic")) return "clinic";
  if (normalized.includes("school")) return "school";
  if (normalized.includes("room") || normalized.includes("home")) return "room";
  return "place";
}

function poiIcon(type) {
  const icons = {
    mtr: lineIcon('<rect x="16" y="12" width="32" height="34" rx="6"></rect><path d="M23 22h18M22 31h20M24 46l-6 8M40 46l6 8"></path><circle cx="25" cy="39" r="3"></circle><circle cx="39" cy="39" r="3"></circle>'),
    bus: lineIcon('<rect x="14" y="13" width="36" height="34" rx="5"></rect><path d="M20 22h24M20 31h24M19 47l-4 6M49 47l-4 6"></path><circle cx="24" cy="40" r="3"></circle><circle cx="40" cy="40" r="3"></circle>'),
    cafe: lineIcon('<path d="M18 23h26v12c0 7-5 12-13 12S18 42 18 35z"></path><path d="M44 26h4c4 0 6 3 6 6s-2 6-6 6h-4M20 52h26"></path><path d="M25 13v5M32 10v8M39 13v5"></path>'),
    bank: lineIcon('<path d="M12 25h40L32 13zM17 25v23M27 25v23M37 25v23M47 25v23M14 48h36M12 54h40"></path>'),
    clinic: lineIcon('<rect x="15" y="15" width="34" height="34" rx="5"></rect><path d="M32 23v18M23 32h18"></path>'),
    school: lineIcon('<path d="M10 25 32 14l22 11-22 11z"></path><path d="M18 30v12c4 5 24 5 28 0V30M54 25v17"></path>'),
    room: lineIcon('<path d="M13 31 32 15l19 16v22H18V31"></path><path d="M26 53V38h12v15"></path>'),
    place: lineIcon('<path d="M32 55s16-15 16-29a16 16 0 0 0-32 0c0 14 16 29 16 29z"></path><circle cx="32" cy="26" r="6"></circle>')
  };

  return icons[poiKey(type)] || icons.place;
}

function optionIcon(label) {
  const normalized = label.toLowerCase();
  const iconType =
    normalized.includes("air") ? "aircon" :
    normalized.includes("desk") ? "desk" :
    normalized.includes("wardrobe") ? "wardrobe" :
    normalized.includes("shoe") ? "shoe" :
    normalized.includes("fridge") ? "fridge" :
    normalized.includes("washer") ? "washer" :
    normalized.includes("sink") ? "sink" :
    normalized.includes("induction") ? "induction" :
    normalized.includes("microwave") ? "microwave" :
    normalized.includes("curtain") ? "curtains" :
    normalized.includes("lock") ? "smartlock" :
    "storage";

  return `<span class="option-icon option-icon-${iconType}" aria-hidden="true">${furnitureIcon(iconType)}</span>`;
}

function safetyIcon(label) {
  const normalized = label.toLowerCase();
  const iconType =
    normalized.includes("card") ? "card" :
    normalized.includes("cctv") ? "cctv" :
    normalized.includes("concierge") || normalized.includes("lift") ? "entrance" :
    "intercom";

  return `<span class="option-icon security-icon-${iconType}" aria-hidden="true">${securityIcon(iconType)}</span>`;
}

function setMapInspectorActiveSection(sectionKey) {
  state.activeMapTab = sectionKey;
  if (!elements.mapInspector) return;
  elements.mapInspector.querySelectorAll("[data-map-scroll]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mapScroll === sectionKey);
  });
}

function scrollMapInspectorTo(sectionKey, smooth = true) {
  if (!elements.mapInspector) return;
  const scroller = elements.mapInspector.querySelector(".map-inspector-scroll");
  const section = elements.mapInspector.querySelector(`#map-section-${sectionKey}`);
  if (!scroller || !section) return;

  const tabs = elements.mapInspector.querySelector(".inspector-tabs");
  const offset = tabs ? tabs.offsetHeight + 10 : 10;
  const scrollerRect = scroller.getBoundingClientRect();
  const sectionRect = section.getBoundingClientRect();
  const top = Math.max(0, scroller.scrollTop + sectionRect.top - scrollerRect.top - offset);
  setMapInspectorActiveSection(sectionKey);

  if (smooth) {
    scroller.scrollTo({ top, behavior: "smooth" });
    window.setTimeout(() => {
      if (Math.abs(scroller.scrollTop - top) > 6) {
        scroller.scrollTop = top;
      }
    }, 260);
  } else {
    scroller.scrollTop = top;
    requestAnimationFrame(() => {
      scroller.scrollTop = top;
    });
  }
}

function bindMapInspectorScroll() {
  if (!elements.mapInspector) return;
  const scroller = elements.mapInspector.querySelector(".map-inspector-scroll");
  if (!scroller) return;
  const sections = Array.from(scroller.querySelectorAll("[data-inspector-section]"));
  const tabs = elements.mapInspector.querySelector(".inspector-tabs");

  scroller.addEventListener("scroll", () => {
    const threshold = (tabs ? tabs.offsetHeight : 0) + 20;
    const scrollerTop = scroller.getBoundingClientRect().top;
    let activeSection = sections[0]?.dataset.inspectorSection || "price";

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - scrollerTop <= threshold) {
        activeSection = section.dataset.inspectorSection;
      }
    });

    if (activeSection !== state.activeMapTab) {
      setMapInspectorActiveSection(activeSection);
    }
  }, { passive: true });
}

function positionMapInspector() {
  if (!elements.mapInspector || elements.mapInspector.hidden || document.body.dataset.route !== "map") return;
  const stageRect = elements.mapStage?.getBoundingClientRect();
  if (!stageRect || stageRect.width <= 0) return;
  const drawerRight = elements.mapPageList?.getBoundingClientRect().right || stageRect.left;
  const left = Math.min(drawerRight, Math.max(280, window.innerWidth * 0.48));
  const available = window.innerWidth - left;
  const reservedMapWidth = available > 760 ? 260 : Math.max(84, available * 0.24);
  const panelWidth = Math.max(300, Math.min(430, available - reservedMapWidth));
  const style = elements.mapInspector.style;
  style.setProperty("position", "fixed", "important");
  style.setProperty("top", `${Math.max(0, stageRect.top)}px`, "important");
  style.setProperty("left", `${Math.max(0, left)}px`, "important");
  style.setProperty("right", "auto", "important");
  style.setProperty("bottom", "0px", "important");
  style.setProperty("width", `${Math.min(panelWidth, available - 24)}px`, "important");
  style.setProperty("max-width", `${Math.max(260, available - 24)}px`, "important");
  style.setProperty("z-index", "9999", "important");
}

function renderMapInspector(property, tab = state.activeMapTab || "price") {
  if (!elements.mapInspector) return;
  const profile = getPropertyProfile(property);
  const similar = getSimilarProperties(property);
  const listingId = listingNumber(property);
  state.selectedMapPropertyId = property.id;
  state.activeMapTab = tab;
  const saved = state.saved.has(property.id);

  if (document.body.dataset.route === "map" && elements.mapInspector.parentElement !== document.body) {
    document.body.appendChild(elements.mapInspector);
  }
  elements.mapInspector.hidden = false;
  elements.mapInspector.classList.add("open");
  document.body.classList.add("map-detail-open");
  elements.mapInspector.innerHTML = `
    <div class="map-inspector-scroll">
      <div class="map-inspector-head">
        <div>
          <span>Listing ${escapeHTML(property.id.toUpperCase())}</span>
          <h2>Listing ${listingId}</h2>
        </div>
        <div class="map-inspector-actions">
          <button type="button" aria-label="Share listing" data-toast="Share link prepared">↗</button>
          <button type="button" aria-label="${saved ? "Remove saved" : "Save listing"}" data-save="${property.id}">${saved ? "♥" : "♡"}</button>
          <button type="button" aria-label="Close listing panel" data-close-inspector>×</button>
        </div>
      </div>

      <div class="map-photo-grid">
        <img src="${property.image}" alt="${escapeHTML(property.title)}">
        <img src="${generatedImages[(seedFromId(property.id) + 1) % generatedImages.length]}" alt="">
        <img src="${generatedImages[(seedFromId(property.id) + 2) % generatedImages.length]}" alt="">
        <span>+${2 + (seedFromId(property.id) % 6)}</span>
      </div>

      <div class="map-inspector-summary">
        <span>Listing ID ${listingId}</span>
        <h3>${formatHKD(property.price, property.mode)}</h3>
        <p>${escapeHTML(property.title)} · ${escapeHTML(property.area)} · ${property.size.toLocaleString("en-HK")} sq ft</p>
        <dl>
          <div><dt>Type</dt><dd>${escapeHTML(property.type)}</dd></div>
          <div><dt>Size</dt><dd>${property.size.toLocaleString("en-HK")} sq ft</dd></div>
          <div><dt>Floor</dt><dd>${profile.floor}</dd></div>
          <div><dt>Views</dt><dd>${profile.views.toLocaleString("en-HK")} / 7d</dd></div>
        </dl>
      </div>

      <nav class="inspector-tabs" aria-label="Listing detail sections">
        ${[
          ["price", "Price"],
          ["details", "Details"],
          ["options", "Options"],
          ["location", "Nearby"],
          ["agent", "Agent"]
        ].map(([value, label]) => `<button class="${tab === value ? "active" : ""}" type="button" data-map-scroll="${value}">${label}</button>`).join("")}
      </nav>

      <section class="inspector-pane" id="map-section-price" data-inspector-section="price">
        <h4>Price information</h4>
        <div class="price-table">
          <div class="qr-table-row"><span>Mobile QR Code</span><strong class="mobile-qr-code">${renderQrCode(mobileListingUrl(listingId))}<small>Scan to open this listing on mobile</small></strong></div>
          <div><span>${property.mode === "rent" ? "Monthly rent" : "Asking price"}</span><strong>${formatHKD(property.price, property.mode)}</strong></div>
          <div><span>Management fee</span><strong>${formatHKCurrency(profile.managementFee)}</strong></div>
          ${property.mode === "rent" ? `<div><span>Deposit estimate</span><strong>${formatHKCurrency(profile.deposit)}</strong></div>` : ""}
          <div><span>Monthly total</span><strong>${formatHKCurrency(profile.monthlyTotal)}</strong><small>${property.mode === "rent" ? "Rent + management fee" : "Indicative mortgage"}</small></div>
          <div><span>Parking</span><strong>${profile.parking}</strong></div>
        </div>
      </section>

      <section class="inspector-pane" id="map-section-details" data-inspector-section="details">
        <h4>Detail information</h4>
        <div class="detail-table">
          <div><span>Room type</span><strong>${property.beds ? `${property.beds} bedroom` : property.type}</strong></div>
          <div><span>Floor / total</span><strong>${profile.floor}</strong></div>
          <div><span>Saleable area</span><strong>${property.size.toLocaleString("en-HK")} sq ft</strong></div>
          <div><span>Beds / baths</span><strong>${profile.baths || "N/A"}</strong></div>
          <div><span>Orientation</span><strong>${profile.orientation}</strong></div>
          <div><span>Cooling</span><strong>${profile.heating}</strong></div>
        </div>
      </section>

      <section class="inspector-pane" id="map-section-options" data-inspector-section="options">
        <h4>Options <span>${profile.options.length}</span></h4>
        <div class="option-grid">
          ${profile.options.map((option) => `<div>${optionIcon(option)}<span>${escapeHTML(option)}</span></div>`).join("")}
        </div>
        <h4>Security and safety</h4>
        <div class="security-list">
          ${profile.security.map((item) => `<div>${safetyIcon(item)}<span>${escapeHTML(item)}</span></div>`).join("")}
        </div>
      </section>

      <section class="inspector-pane" id="map-section-location" data-inspector-section="location">
        <h4>Location and nearby facilities</h4>
        <p class="address-line">${escapeHTML(profile.address)}</p>
        <div class="mini-poi-map">
          <span class="poi-home">${poiIcon("Room")}<strong>Room</strong></span>
          ${profile.amenities.map((item, index) => `<i class="poi-marker poi-${poiKey(item.type)}" style="--x:${18 + (index * 13) % 70}%;--y:${24 + (index * 17) % 54}%;" aria-label="${escapeHTML(item.type)} nearby">${poiIcon(item.type)}</i>`).join("")}
        </div>
        <div class="amenity-row">
          ${profile.amenities.map((item) => `<div>${poiIcon(item.type)}<strong>${item.count}</strong><span>${escapeHTML(item.type)}</span></div>`).join("")}
        </div>
        <h4>Nearby transit</h4>
        <div class="transit-list">
          ${profile.transit.map((item) => `
            <button type="button" data-toast="${escapeHTML(item.label)} route preview opened">
              <span class="transit-badge">${transitIcon(item.line)}<small>${escapeHTML(item.line)}</small></span>
              <strong>${escapeHTML(item.label)}</strong>
              <em>${item.distance}m</em>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="inspector-pane" id="map-section-agent" data-inspector-section="agent">
        <h4>Agency information</h4>
        <div class="agent-profile">
          <div class="agent-avatar">${profile.agent.name.slice(0, 2).toUpperCase()}</div>
          <div>
            <strong>${escapeHTML(profile.agent.name)}</strong>
            <span>${escapeHTML(profile.agent.branch)}</span>
            <small>${escapeHTML(profile.agent.license)}</small>
          </div>
        </div>
        <div class="agent-facts">
          <div><span>Manager</span><strong>${escapeHTML(profile.agent.manager)}</strong></div>
          <div><span>Phone</span><strong>${escapeHTML(profile.agent.phone)}</strong></div>
          <div><span>Rating</span><strong>${escapeHTML(profile.agent.score)}</strong></div>
          <div><span>Response</span><strong>${escapeHTML(profile.agent.response)}</strong></div>
        </div>
        <h4>More listings from this agency</h4>
        <div class="similar-row">
          ${similar.map((item) => `
            <button type="button" data-map-details="${item.id}">
              <img src="${item.image}" alt="${escapeHTML(item.title)}">
              <strong>${formatHKD(item.price, item.mode)}</strong>
              <span>${escapeHTML(item.area)} · ${item.size.toLocaleString("en-HK")} sq ft</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>

    <div class="map-contact-bar">
      <button type="button" class="secondary-button" data-contact="${property.id}">Call</button>
      <button type="button" class="secondary-button" data-toast="Message inquiry opened.">Message</button>
      <button type="button" class="search-button" data-contact="${property.id}">Contact agent</button>
    </div>
  `;

  bindMapInspectorScroll();
  positionMapInspector();
  setMapInspectorActiveSection(tab);
  if (tab !== "price") {
    requestAnimationFrame(() => scrollMapInspectorTo(tab, false));
  }
  elements.mapStageSummary.textContent = `${property.area} · ${property.type}`;
  renderMapPage();
}

function closeMapInspector(options = {}) {
  const shouldRender = options.render !== false;
  const shouldUpdateHash = options.updateHash !== false;
  state.selectedMapPropertyId = null;
  document.body.classList.remove("map-detail-open");
  clearClusterHover();
  if (shouldUpdateHash && (window.location.hash.startsWith("#/map/listing/") || window.location.hash.startsWith("#/map?listing="))) {
    window.history.pushState(null, "", "#/map");
  }
  if (!elements.mapInspector) {
    if (shouldRender && document.body.dataset.route === "map") renderMapPage();
    return;
  }
  elements.mapInspector.classList.remove("open");
  elements.mapInspector.hidden = true;
  elements.mapInspector.removeAttribute("style");
  elements.mapInspector.innerHTML = "";
  if (shouldRender && document.body.dataset.route === "map") renderMapPage();
}

function renderFallbackMap(clusters) {
  if (!elements.realMap) return;
  const markerClusters = mapClustersForZoom(clusters, 10);
  elements.realMap.innerHTML = `
    <div class="osm-fallback-map">
      <div class="fallback-tiles">
        <img src="https://tile.openstreetmap.org/11/1672/892.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1673/892.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1674/892.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1675/892.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1672/893.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1673/893.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1674/893.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1675/893.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1672/894.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1673/894.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1674/894.png" alt="">
        <img src="https://tile.openstreetmap.org/11/1675/894.png" alt="">
      </div>
      ${markerClusters.map((cluster) => {
        const point = coordsToMapPercent(cluster.lat, cluster.lng);
        return `
          <button class="fallback-cluster marker-level-${cluster.level || "area"}" type="button" style="--x:${point.x}%; --y:${point.y}%;" data-map-district="${cluster.district}" aria-label="${cluster.area}, ${cluster.count} listings">
            <strong>${cluster.count}</strong>
            <span>${cluster.area}</span>
          </button>
        `;
      }).join("")}
      <small class="map-attribution">© OpenStreetMap</small>
    </div>
  `;
}

function selectMapCluster(cluster) {
  state.districts = new Set(cluster.districts || [cluster.district]);
  state.query = cluster.sourceArea || (cluster.level === "area" || cluster.level === "neighborhood" ? cluster.area : "");
  syncFormControls();
  renderListings();
  if (leafletMap) {
    const nextZoom = cluster.level === "macro" ? 10.8 : cluster.level === "district" ? 12 : 14;
    leafletMap.flyTo([cluster.lat, cluster.lng], nextZoom, { duration: 0.55 });
  }
  const firstProperty = getFilteredProperties()[0] || cluster.items[0];
  if (firstProperty) {
    renderMapInspector(firstProperty, "price");
  }
}

function clearMapSelectionForUpdate() {
  if (document.body.dataset.route !== "map") return;
  if (!state.selectedMapPropertyId && (!elements.mapInspector || elements.mapInspector.hidden)) return;
  closeMapInspector({ render: false });
}

function renderLeafletBoundaries() {
  if (!leafletMap || !leafletBoundaries) return;
  leafletBoundaries.clearLayers();
  const zoom = leafletMap.getZoom();
  const boundaryClusters = boundaryClustersForZoom(currentBaseMapClusters, zoom);
  boundaryClusters.forEach((cluster) => {
    const points = areaPolygonPoints(cluster);
    if (!points) return;
    const polygon = L.polygon(points, boundaryBaseStyle).addTo(leafletBoundaries);
    polygon.on("mouseover", () => {
      clearTimeout(hoverHideTimer);
      polygon.setStyle(boundaryHoverStyle);
      showClusterHover(cluster);
    });
    polygon.on("mouseout", () => {
      polygon.setStyle(boundaryBaseStyle);
      scheduleHideClusterHover();
    });
    polygon.on("click", (event) => {
      L.DomEvent.stopPropagation(event.originalEvent || event);
      selectMapCluster(cluster);
    });
  });
}

function renderLeafletMarkers() {
  if (!leafletMap || !leafletMarkers) return;
  clearClusterHover();
  leafletMarkers.clearLayers();
  const markerClusters = mapClustersForZoom(currentBaseMapClusters, leafletMap.getZoom());
  markerClusters.forEach((cluster) => {
    const markerWidth = Math.max(108, Math.min(cluster.level === "neighborhood" ? 150 : 190, 76 + cluster.area.length * 9));
    const icon = L.divIcon({
      className: `leaflet-cluster-marker marker-level-${cluster.level || "area"}`,
      html: `<strong>${cluster.count}</strong><span>${escapeHTML(cluster.area)}</span>`,
      iconSize: [markerWidth, 40],
      iconAnchor: [markerWidth / 2, 20]
    });
    L.marker([cluster.lat, cluster.lng], { icon })
      .addTo(leafletMarkers)
      .on("mouseover", () => showClusterHover(cluster))
      .on("mouseout", scheduleHideClusterHover)
      .on("click", (event) => {
        L.DomEvent.stopPropagation(event.originalEvent || event);
        selectMapCluster(cluster);
      });
  });
}

function renderLeafletMap(clusters) {
  if (!elements.realMap) return;
  if (!window.L) {
    renderFallbackMap(clusters);
    return;
  }
  currentBaseMapClusters = clusters;

  if (!leafletMap) {
    leafletMap = L.map(elements.realMap, {
      zoomControl: false,
      scrollWheelZoom: true,
      attributionControl: true
    }).setView([22.337, 114.165], 11);
    L.control.zoom({ position: "topright" }).addTo(leafletMap);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(leafletMap);
    leafletBoundaries = L.layerGroup().addTo(leafletMap);
    leafletMarkers = L.layerGroup().addTo(leafletMap);
    leafletMap.on("zoomend", () => {
      renderLeafletBoundaries();
      renderLeafletMarkers();
    });
    leafletMap.on("click", () => {
      if (state.selectedMapPropertyId || (elements.mapInspector && !elements.mapInspector.hidden)) {
        closeMapInspector();
      } else {
        clearClusterHover();
      }
    });
  }

  renderLeafletBoundaries();
  renderLeafletMarkers();
  window.requestAnimationFrame(() => leafletMap.invalidateSize());
}

function renderMapPage() {
  if (!elements.mapPageList) return;
  const matches = getFilteredProperties();
  const clusters = groupMapClusters(matches);
  const selectedProperty = state.selectedMapPropertyId ? propertyById(state.selectedMapPropertyId) : null;
  if (elements.mapPageCount) {
    elements.mapPageCount.textContent = `${matches.length.toLocaleString("en-HK")} listings`;
  }
  elements.mapStageSummary.textContent = selectedProperty ? `${selectedProperty.area} · ${selectedProperty.type}` : state.districts.has("all") ? "All Hong Kong districts" : Array.from(state.districts).join(", ");
  elements.mapPageList.innerHTML = matches.slice(0, 80).map(mapListTemplate).join("") || `
    <div class="map-empty">
      <strong>No listings on this map.</strong>
      <p>Reset filters or pick a different district.</p>
      <button class="secondary-button" type="button" data-clear-filter="all">Reset filters</button>
    </div>
  `;
  renderLeafletMap(clusters);
}

function cardTemplate(property) {
  const saved = state.saved.has(property.id);
  const bedText = property.beds ? `${property.beds} bed${property.beds > 1 ? "s" : ""}` : property.type;

  return `
    <article class="property-card" data-property-card="${property.id}">
      <div class="property-image">
        <img src="${property.image}" alt="${property.title}" loading="lazy" decoding="async">
        <span class="badge">${property.tag}</span>
        <button class="save-button ${saved ? "saved" : ""}" type="button" data-save="${property.id}" aria-label="${saved ? "Remove saved listing" : "Save listing"}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.2l-.8-.7C5.4 14.2 2 11.1 2 7.2 2 4.1 4.4 2 7.2 2c1.6 0 3.2.8 4.1 2 1-1.2 2.5-2 4.1-2C18.2 2 21 4.1 21 7.2c0 3.9-3.4 7-9.2 12.3l-.8.7Z"/></svg>
        </button>
      </div>
      <div class="property-body">
        <p class="listing-type">${property.mode === "rent" ? "Lease" : property.mode === "owner" ? "Owner" : "Sell"}</p>
        <h3>${formatHKD(property.price, property.mode)}</h3>
        <p class="property-title">${property.title}</p>
        <dl>
          <div><dt>Area</dt><dd>${property.area}</dd></div>
          <div><dt>Saleable</dt><dd>${property.size.toLocaleString("en-HK")} sq ft</dd></div>
          <div><dt>Rooms</dt><dd>${bedText}</dd></div>
          <div><dt>Agent</dt><dd>${property.agent}</dd></div>
        </dl>
        <p>${property.summary}</p>
        <div class="trust-row" aria-label="Listing trust signals">
          <span class="${property.verified ? "is-verified" : ""}">${property.verified ? "Verified listing" : "Owner submitted"}</span>
          ${property.mtr ? "<span>Near MTR</span>" : ""}
          <button type="button" data-toast="Report received for review">Report</button>
        </div>
        <div class="card-actions">
          <button type="button" class="text-button" data-details="${property.id}">Open listing</button>
          <button type="button" class="secondary-button" data-contact="${property.id}">Contact agent</button>
        </div>
      </div>
    </article>
  `;
}

function renderListings() {
  const matches = getFilteredProperties();
  elements.resultsGrid.classList.toggle("list-view", state.view === "list");
  elements.resultsGrid.innerHTML = matches.map(cardTemplate).join("");
  elements.emptyState.hidden = matches.length > 0;
  syncPressedStates();
  updateFilterSummary(matches.length);
  renderActiveFilters(matches.length);
  renderMap(matches);
  updateSavedCount();
  if (document.body.dataset.route === "map") {
    renderMapPage();
  }
}

function updateSavedCount() {
  elements.savedCount.textContent = state.saved.size;
  elements.savedCount.closest("button")?.setAttribute("aria-label", `Saved listings, ${state.saved.size} saved`);
}

function syncPressedStates() {
  document.querySelectorAll("[data-district]").forEach((chip) => {
    const active = state.districts.has(chip.dataset.district);
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-bedroom]").forEach((button) => {
    const active = state.bedrooms === button.dataset.bedroom;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".view-button").forEach((button) => {
    const active = state.view === button.dataset.view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".map-filter-row [data-set-mode], .map-rail [data-set-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.setMode === state.mode);
  });

  document.querySelectorAll("[data-map-toggle='mtr']").forEach((button) => {
    button.classList.toggle("active", state.mtrOnly);
  });

  document.querySelectorAll("[data-map-toggle='verified']").forEach((button) => {
    button.classList.toggle("active", state.verifiedOnly);
  });
}

function syncFormControls() {
  elements.queryInput.value = state.query;
  if (elements.mapPageQuery) elements.mapPageQuery.value = state.query;
  elements.typeFilter.value = state.type;
  elements.minSize.value = state.minSize;
  elements.maxSize.value = state.maxSize;
  elements.sortFilter.value = state.sort;
  elements.verifiedOnly.checked = state.verifiedOnly;
  elements.mtrOnly.checked = state.mtrOnly;
  syncModeControls();
  syncPressedStates();
}

function resetFilters(options = {}) {
  const shouldRender = options.render !== false;
  state.query = "";
  state.type = "any";
  state.priceRange = "any";
  state.districts = new Set(["all"]);
  state.bedrooms = "any";
  state.minSize = "";
  state.maxSize = "";
  state.sort = "recommended";
  state.verifiedOnly = false;
  state.mtrOnly = false;

  syncFormControls();
  if (shouldRender) renderListings();
}

function clearFilter(key) {
  if (key === "all") {
    resetFilters();
    return;
  }
  if (key === "query") state.query = "";
  if (key === "type") state.type = "any";
  if (key === "price") state.priceRange = "any";
  if (key === "district") state.districts = new Set(["all"]);
  if (key === "bedrooms") state.bedrooms = "any";
  if (key === "size") {
    state.minSize = "";
    state.maxSize = "";
  }
  if (key === "verified") state.verifiedOnly = false;
  if (key === "mtr") state.mtrOnly = false;
  if (key === "sort") state.sort = "recommended";
  syncFormControls();
  renderListings();
}

function applyPreset(preset, options = {}) {
  resetFilters({ render: false });

  if (preset === "apartment") {
    setMode("sale", false, false);
    state.type = "Apartment";
  }
  if (preset === "near-mtr") {
    state.mtrOnly = true;
  }
  if (preset === "verified") {
    state.verifiedOnly = true;
  }
  if (preset === "starter") {
    setMode("sale", false, false);
    state.type = "Apartment";
    state.priceRange = "0-6000000";
  }
  if (preset === "rent-under-30k") {
    setMode("rent", false, false);
    state.type = "Apartment";
    state.priceRange = "0-30000";
  }
  if (preset === "service-apartment") {
    setMode("rent", false, false);
    state.type = "Service Apartment";
    state.priceRange = "15000-30000";
  }
  if (preset === "family") {
    state.bedrooms = "3";
    state.minSize = "500";
  }
  if (preset === "office") {
    setMode("rent", false, false);
    state.type = "Office";
    state.priceRange = "30000-60000";
  }
  if (preset === "shop") {
    setMode("rent", false, false);
    state.type = "Shop";
    state.priceRange = "60000-999999999";
  }
  if (preset === "car-park") {
    setMode("sale", false, false);
    state.type = "Car Park";
  }
  if (preset === "land") {
    setMode("owner", false, false);
    state.type = "Land";
  }

  syncFormControls();
  renderListings();
  if (options.route) {
    navigateToRoute(options.route);
  } else if (options.scroll !== false) {
    navigateToRoute("listings");
  }
}

function applyAIMatch() {
  resetFilters({ render: false });
  setMode("rent", false, false);
  state.type = "Apartment";
  state.priceRange = "0-30000";
  state.districts = new Set(["Hong Kong Island", "Kowloon"]);
  state.verifiedOnly = true;
  state.mtrOnly = true;
  state.sort = "newest";
  syncFormControls();
  renderListings();
  showToast("AI match applied: commute-friendly verified rentals.");
  navigateToRoute("map");
}

function applyDistrictShortcut(district, options = {}) {
  resetFilters({ render: false });
  state.districts = new Set([district]);
  syncFormControls();
  renderListings();
  navigateToRoute(options.route || "map");
}

function openMapModal() {
  const matches = getFilteredProperties({ ignoreDistrict: true });
  const counts = matches.reduce((accumulator, property) => {
    accumulator[property.district] = (accumulator[property.district] || 0) + 1;
    return accumulator;
  }, {});

  openModal("Map preview", `
    <div class="map-modal">
      <p>District markers work like a simplified Dabang-style map search. Pick a district to narrow the listing list immediately.</p>
      <div class="map-modal-grid">
        ${Object.entries(districtMeta).map(([district, meta]) => `
          <button type="button" data-map-district="${district}">
            <span>${meta.label}</span>
            <strong>${district}</strong>
            <small>${counts[district] || 0} matching listings</small>
          </button>
        `).join("")}
      </div>
    </div>
  `);
}

function calculateMortgage() {
  const propertyValue = Number(document.querySelector("#property-value").value) * 10000;
  const loanRatio = Number(document.querySelector("#loan-ratio").value) / 100;
  const years = Number(document.querySelector("#loan-years").value);
  const annualRate = Number(document.querySelector("#interest-rate").value) / 100;
  const principal = propertyValue * loanRatio;
  const monthlyRate = annualRate / 12;
  const payments = years * 12;

  if (!principal || !payments || annualRate === 0) {
    elements.mortgageOutput.textContent = `Monthly estimate: ${formatHKCurrency(principal / payments || 0)}`;
    return;
  }

  const monthly = principal * (monthlyRate * (1 + monthlyRate) ** payments) / ((1 + monthlyRate) ** payments - 1);
  elements.mortgageOutput.textContent = `Monthly estimate: ${formatHKCurrency(monthly)}`;
}

function formatHKCurrency(value) {
  return new Intl.NumberFormat("en-HK", {
    style: "currency",
    currency: "HKD",
    maximumFractionDigits: 0
  }).format(value);
}

function renderEstatePrices(area = "HK") {
  elements.estateList.innerHTML = estatePrices[area]
    .map(([name, price]) => `<li><button type="button" data-estate="${name}"><span>${name}</span><strong>${price}</strong></button></li>`)
    .join("");
}

function openModal(title, html) {
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  elements.modalTitle.textContent = title;
  elements.modalBody.innerHTML = html;
  elements.modal.hidden = false;
  document.body.classList.add("modal-open");
  window.requestAnimationFrame(() => {
    elements.modal.querySelector(".modal-card")?.focus();
  });
}

function closeModal() {
  if (elements.modal.hidden) return;
  elements.modal.hidden = true;
  elements.modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
}

function propertyById(id) {
  return properties.find((property) => property.id === id);
}

function openPropertyModal(id) {
  const property = propertyById(id);
  if (!property) return;
  openModal(property.title, `
    <div class="detail-layout">
      <img src="${property.image}" alt="${property.title}">
      <div>
        <p class="listing-type">${property.mode === "rent" ? "Lease" : property.mode === "owner" ? "Owner direct" : "For sale"}</p>
        <h3>${formatHKD(property.price, property.mode)}</h3>
        <p>${property.summary}</p>
        <ul class="detail-list">
          <li><span>District</span><strong>${property.district}</strong></li>
          <li><span>Area</span><strong>${property.area}</strong></li>
          <li><span>Type</span><strong>${property.type}</strong></li>
          <li><span>Saleable</span><strong>${property.size.toLocaleString("en-HK")} sq ft</strong></li>
          <li><span>Bedrooms</span><strong>${property.beds || "N/A"}</strong></li>
          <li><span>Agent</span><strong>${property.agent}</strong></li>
        </ul>
        <div class="trust-row detail-trust">
          <span class="${property.verified ? "is-verified" : ""}">${property.verified ? "Verified listing" : "Owner submitted"}</span>
          ${property.mtr ? "<span>Near MTR</span>" : ""}
        </div>
        <div class="modal-actions">
          <button class="search-button" type="button" data-contact="${property.id}">Contact agent</button>
          <button class="secondary-button" type="button" data-save="${property.id}">${state.saved.has(property.id) ? "Remove saved" : "Save listing"}</button>
          <button class="secondary-button" type="button" data-toast="Report received for review">Report listing</button>
        </div>
      </div>
    </div>
  `);
}

function openSystemModal(kind) {
  const modalContent = {
    login: ["Login", `
      <div class="auth-layout">
        <form class="stack-form auth-form" data-demo-form="login">
          <p class="auth-kicker">Member workspace</p>
          <label>Email<input type="email" placeholder="you@example.com" required></label>
          <label>Password<input type="password" placeholder="Password" required></label>
          <div class="form-row">
            <label class="check-row"><input type="checkbox"> Keep me signed in</label>
            <button class="text-button" type="button" data-toast="Password reset link prepared">Forgot password?</button>
          </div>
          <button class="search-button" type="submit">Login</button>
          <div class="social-row" aria-label="Alternative login options">
            <button type="button" data-toast="Google login connected in prototype mode">Google</button>
            <button type="button" data-toast="Apple login connected in prototype mode">Apple</button>
          </div>
        </form>
        <aside class="auth-side">
          <strong>After login</strong>
          <span>Saved listings, saved searches, AI match alerts and property posting tools stay together.</span>
          <button class="secondary-button" type="button" data-modal="register">Create account</button>
        </aside>
      </div>
    `],
    register: ["Create account", `
      <div class="auth-layout">
        <form class="stack-form auth-form" data-demo-form="register">
          <p class="auth-kicker">Start with saved search</p>
          <label>Name<input type="text" placeholder="Your name" required></label>
          <label>Email<input type="email" placeholder="you@example.com" required></label>
          <label>Phone<input type="tel" placeholder="+852" required></label>
          <label class="check-row"><input type="checkbox" required> Send property alerts and viewing updates</label>
          <button class="search-button" type="submit">Create account</button>
        </form>
        <aside class="auth-side">
          <strong>Useful from day one</strong>
          <span>Save filters, compare homes, receive AI shortlist alerts and continue enquiries across devices.</span>
          <button class="secondary-button" type="button" data-modal="login">I already have an account</button>
        </aside>
      </div>
    `],
    list: ["List a property", `
      <form class="stack-form listing-form" data-demo-form="list">
        <div class="form-grid-2">
          <label>Listing type<select required><option>For sale</option><option>For rent</option><option>Owner direct</option><option>Commercial</option></select></label>
          <label>Property category<select required><option>Apartment</option><option>Office</option><option>Shop</option><option>Car Park</option><option>Land</option></select></label>
        </div>
        <label>Property title<input type="text" placeholder="Estate, tower, or street" required></label>
        <div class="form-grid-2">
          <label>Asking price<input type="number" placeholder="HKD" required></label>
          <label>Saleable size<input type="number" placeholder="sq ft" required></label>
        </div>
        <label>Contact number<input type="tel" placeholder="+852" required></label>
        <button class="search-button" type="submit">Prepare listing</button>
      </form>
    `],
    saved: ["Saved listings", savedModalContent()],
    valuation: ["Instant valuation", `
      <form class="stack-form" data-demo-form="valuation">
        <label>Estate or address<input type="text" placeholder="Taikoo Shing, Kai Tak..." required></label>
        <label>Saleable size<input type="number" placeholder="sq ft" required></label>
        <button class="search-button" type="submit">Estimate value</button>
      </form>
    `],
    index: ["Market index", "<p>Eva Property Index and Eva Rental Index stay available as first-class homepage tools. In production this panel would deep-link into charts and district history.</p>"],
    furniture: ["Furniture", "<p>Furniture and move-in services stay accessible for users who want to furnish a flat after renting or buying. This prototype keeps it as a utility entry instead of hiding it in a banner.</p><button class='search-button' type='button' data-toast='Furniture service request noted'>Request options</button>"],
    school: ["School Net", "<p>School Net search can connect family buyers to districts, estates and available listings around education zones. In production this would open district-specific school data and matched homes.</p><button class='search-button' type='button' data-toast='School Net filters prepared'>Apply family filters</button>"],
    premium: ["Premium partner listings", "<p>Premium partner inventory remains available as a dedicated entry for users comparing higher-end Hong Kong listings and partner portals.</p><button class='search-button' type='button' data-toast='Premium listings opened in prototype mode'>Open premium list</button>"],
    news: ["More news", "<p>News cards are now clickable. In the production site they can route to market commentary, transaction reports and new project analysis.</p>"],
    projects: ["New home projects", "<p>Project rows are clickable and can open project detail, brochure download and appointment booking flows.</p>"],
    contact: ["Contact 28Hse", "<p>Customer support, agency partnerships and listing enquiries can be grouped here.</p><button class='search-button' type='button' data-toast='Contact request noted'>Request callback</button>"],
    agent: ["Agent / Ads", `
      <form class="stack-form listing-form" data-demo-form="agent enquiry">
        <p>For agency accounts, listing packages, homepage ads and commercial property promotion.</p>
        <div class="form-grid-2">
          <label>Company<input type="text" placeholder="Agency or company name" required></label>
          <label>Contact<input type="tel" placeholder="+852" required></label>
        </div>
        <label>Interest<select required><option>Agency account</option><option>Homepage ads</option><option>Project promotion</option><option>Commercial listing package</option></select></label>
        <button class="search-button" type="submit">Request follow-up</button>
      </form>
    `],
    about: ["About 28Hse", "<p>28Hse is positioned as a fast Hong Kong property portal for buy, rent, estates, valuation, mortgage and market news.</p>"],
    terms: ["Terms", "<p>This prototype keeps legal links active through modal placeholders so the footer has no dead controls.</p>"],
    privacy: ["Privacy", "<p>Privacy copy can be connected to the production policy page later.</p>"]
  };

  const [title, html] = modalContent[kind] || modalContent.about;
  openModal(title, html);
}

function savedModalContent() {
  const savedItems = properties.filter((property) => state.saved.has(property.id));
  if (!savedItems.length) return "<p>No saved listings yet. Tap the heart on a card to build a shortlist.</p>";
  return `
    <div class="saved-list">
      ${savedItems.map((property) => `
        <button type="button" data-details="${property.id}">
          <img src="${property.image}" alt="${property.title}">
          <span><strong>${property.title}</strong><small>${formatHKD(property.price, property.mode)} - ${property.area}</small></span>
        </button>
      `).join("")}
    </div>
  `;
}

function focusTool(tool) {
  scrollToTarget("#market");
  setTimeout(() => {
    const element = document.querySelector(`#${tool}-tool`);
    element?.classList.add("is-highlighted");
    setTimeout(() => element?.classList.remove("is-highlighted"), 1400);
  }, 450);
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => setMode(tab.dataset.mode, false));
});

elements.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = elements.queryInput.value.trim();
  state.type = elements.typeFilter.value;
  state.priceRange = elements.priceRange.value;
  renderListings();
  navigateToRoute("listings");
});

elements.queryInput.addEventListener("input", () => {
  state.query = elements.queryInput.value.trim();
  if (elements.mapPageQuery) elements.mapPageQuery.value = state.query;
  renderListings();
});

elements.mapPageQuery?.addEventListener("input", () => {
  state.query = elements.mapPageQuery.value.trim();
  elements.queryInput.value = state.query;
  renderListings();
  renderMapPage();
});

elements.typeFilter.addEventListener("change", () => {
  state.type = elements.typeFilter.value;
  renderListings();
});

elements.priceRange.addEventListener("change", () => {
  state.priceRange = elements.priceRange.value;
  renderListings();
});

elements.filterToggle.addEventListener("click", () => {
  const open = elements.filterPanel.hidden;
  elements.filterPanel.hidden = !open;
  elements.filterToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-district]").forEach((button) => {
  button.addEventListener("click", () => setDistrict(button));
});

elements.bedroomFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-bedroom]");
  if (!button) return;
  state.bedrooms = button.dataset.bedroom;
  renderListings();
});

[elements.minSize, elements.maxSize].forEach((input) => {
  input.addEventListener("input", () => {
    state.minSize = elements.minSize.value;
    state.maxSize = elements.maxSize.value;
    renderListings();
  });
});

elements.sortFilter.addEventListener("change", () => {
  state.sort = elements.sortFilter.value;
  renderListings();
});

elements.verifiedOnly.addEventListener("change", () => {
  state.verifiedOnly = elements.verifiedOnly.checked;
  renderListings();
});

elements.mtrOnly.addEventListener("change", () => {
  state.mtrOnly = elements.mtrOnly.checked;
  renderListings();
});

document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.querySelector("#apply-filters").addEventListener("click", () => {
  renderListings();
  elements.filterPanel.hidden = true;
  elements.filterToggle.setAttribute("aria-expanded", "false");
  scrollToTarget("#listings");
});

document.querySelector("#map-preview").addEventListener("click", () => navigateToRoute("map"));
document.querySelector("#map-preview-inline").addEventListener("click", () => navigateToRoute("map"));

document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    document.querySelectorAll(".view-button").forEach((item) => item.classList.toggle("active", item === button));
    renderListings();
  });
});

elements.mortgageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateMortgage();
  showToast("Mortgage estimate updated.");
});

elements.mortgageForm.addEventListener("input", calculateMortgage);

document.querySelector(".estate-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-estate-area]");
  if (!button) return;
  document.querySelectorAll("[data-estate-area]").forEach((item) => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderEstatePrices(button.dataset.estateArea);
});

document.addEventListener("click", (event) => {
  const chatToggle = event.target.closest("[data-chat-toggle]");
  if (chatToggle) {
    setChatOpen(elements.chatbotPanel?.hidden);
    return;
  }

  if (event.target.closest("[data-chat-close]")) {
    setChatOpen(false);
    return;
  }

  const chatPromptButton = event.target.closest("[data-chat-prompt]");
  if (chatPromptButton) {
    setChatOpen(true);
    submitChatPrompt(chatPromptButton.dataset.chatPrompt);
    return;
  }

  const chatActionButtonTarget = event.target.closest("[data-chat-action]");
  if (chatActionButtonTarget) {
    runChatAction(chatActionButtonTarget.dataset.chatAction);
    return;
  }

  if (event.target.closest("[data-chat-send]")) {
    event.preventDefault();
    submitChatPrompt(elements.chatbotInput?.value || "");
    if (elements.chatbotInput) elements.chatbotInput.value = "";
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (state.saved.has(id)) {
      state.saved.delete(id);
      showToast("Removed from saved listings.");
    } else {
      state.saved.add(id);
      showToast("Saved to shortlist.");
    }
    renderListings();
    if (state.selectedMapPropertyId === id && elements.mapInspector && !elements.mapInspector.hidden) {
      const property = propertyById(id);
      if (property) renderMapInspector(property, state.activeMapTab);
    }
    if (!elements.modal.hidden && elements.modalTitle.textContent === "Saved listings") {
      elements.modalBody.innerHTML = savedModalContent();
    } else if (!elements.modal.hidden) {
      const modalSaveButton = elements.modalBody.querySelector(`[data-save="${id}"]`);
      if (modalSaveButton) {
        modalSaveButton.textContent = state.saved.has(id) ? "Remove saved" : "Save listing";
      }
    }
    return;
  }

  const closeInspectorButton = event.target.closest("[data-close-inspector]");
  if (closeInspectorButton) {
    closeMapInspector();
    return;
  }

  const mapScrollButton = event.target.closest("[data-map-scroll]");
  if (mapScrollButton) {
    scrollMapInspectorTo(mapScrollButton.dataset.mapScroll);
    return;
  }

  const mapDetailButton = event.target.closest("[data-map-details]");
  if (mapDetailButton) {
    const property = propertyById(mapDetailButton.dataset.mapDetails);
    if (property) {
      state.selectedMapPropertyId = property.id;
      const nextHash = `#/map/listing/${encodeURIComponent(property.id)}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }
      renderMapInspector(property, "price");
      if (leafletMap) leafletMap.flyTo([property.lat, property.lng], 15, { duration: 0.5 });
    }
    return;
  }

  const mapToggleButton = event.target.closest("[data-map-toggle]");
  if (mapToggleButton) {
    clearMapSelectionForUpdate();
    const toggle = mapToggleButton.dataset.mapToggle;
    if (toggle === "mtr") state.mtrOnly = !state.mtrOnly;
    if (toggle === "verified") state.verifiedOnly = !state.verifiedOnly;
    syncFormControls();
    renderListings();
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    clearMapSelectionForUpdate();
    const route = routeButton.dataset.route;
    if (routeButton.dataset.setMode) {
      setMode(routeButton.dataset.setMode, false, false);
      renderListings();
    }
    if (routeButton.dataset.preset) {
      applyPreset(routeButton.dataset.preset, { scroll: false });
    }
    if (routeButton.dataset.districtShortcut) {
      state.districts = new Set([routeButton.dataset.districtShortcut]);
      syncFormControls();
      renderListings();
    }
    navigateToRoute(route, { focusTool: routeButton.dataset.focusTool });
    if (routeButton.dataset.modal) {
      openSystemModal(routeButton.dataset.modal);
    }
    return;
  }

  const presetButton = event.target.closest("[data-preset]");
  if (presetButton) {
    clearMapSelectionForUpdate();
    applyPreset(presetButton.dataset.preset);
    showToast("Quick search applied.");
    return;
  }

  const clearButton = event.target.closest("[data-clear-filter]");
  if (clearButton) {
    clearMapSelectionForUpdate();
    clearFilter(clearButton.dataset.clearFilter);
    return;
  }

  const aiMatchButton = event.target.closest("[data-ai-match]");
  if (aiMatchButton) {
    applyAIMatch();
    return;
  }

  const districtShortcut = event.target.closest("[data-district-shortcut]");
  if (districtShortcut) {
    clearMapSelectionForUpdate();
    applyDistrictShortcut(districtShortcut.dataset.districtShortcut);
    return;
  }

  const mapPin = event.target.closest("[data-map-district]");
  if (mapPin) {
    state.districts = new Set([mapPin.dataset.mapDistrict]);
    syncFormControls();
    renderListings();
    if (!elements.modal.hidden) closeModal();
    if (document.body.dataset.route !== "map") {
      navigateToRoute("map");
    } else {
      renderMapPage();
    }
    return;
  }

  const detailButton = event.target.closest("[data-details]");
  if (detailButton) {
    openPropertyModal(detailButton.dataset.details);
    return;
  }

  const contactButton = event.target.closest("[data-contact]");
  if (contactButton) {
    const property = propertyById(contactButton.dataset.contact);
    if (property) {
      openModal("Contact agent", `
        <p><strong>${property.agent}</strong> can follow up on ${property.title}.</p>
        <div class="modal-actions">
          <button class="search-button" type="button" data-toast="Callback request sent">Request callback</button>
          <button class="secondary-button" type="button" data-toast="WhatsApp handoff opened">WhatsApp</button>
          <button class="secondary-button" type="button" data-toast="Viewing request saved">Book viewing</button>
        </div>
      `);
    }
    return;
  }

  const modalButton = event.target.closest("[data-modal]");
  if (modalButton) {
    event.preventDefault();
    openSystemModal(modalButton.dataset.modal);
    return;
  }

  const modeButton = event.target.closest("[data-set-mode]");
  if (modeButton) {
    clearMapSelectionForUpdate();
    setMode(modeButton.dataset.setMode, false);
    navigateToRoute("listings");
    return;
  }

  const scrollButton = event.target.closest("[data-scroll]");
  if (scrollButton) {
    scrollToTarget(scrollButton.dataset.scroll);
  }

  const toolButton = event.target.closest("[data-focus-tool]");
  if (toolButton) {
    focusTool(toolButton.dataset.focusTool);
  }

  const newsButton = event.target.closest("[data-news]");
  if (newsButton) {
    openModal(newsButton.dataset.news, `<p>${newsButton.querySelector("h3").textContent}</p><p>${newsButton.querySelector("p").textContent}</p>`);
  }

  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    openModal(projectButton.dataset.project, "<p>Project details, price list, gallery and viewing appointment actions would open here.</p><button class='search-button' type='button' data-toast='Project enquiry saved'>Enquire</button>");
  }

  const estateButton = event.target.closest("[data-estate]");
  if (estateButton) {
    openModal(estateButton.dataset.estate, "<p>Estate transaction history, saleable price trend and available listings would open here.</p>");
  }

  const toastButton = event.target.closest("[data-toast]");
  if (toastButton) {
    showToast(toastButton.dataset.toast);
    closeModal();
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }

  if (event.target.closest("[data-action='language']")) {
    const button = event.target.closest("[data-action='language']");
    const currentLocale = button.dataset.locale || (button.textContent.trim().startsWith("TC") ? "tc" : "en");
    const nextLocale = currentLocale === "tc" ? "en" : "tc";
    button.dataset.locale = nextLocale;
    button.textContent = nextLocale === "tc" ? "TC / EN" : "EN / TC";
    showToast(nextLocale === "tc" ? "Traditional Chinese demo mode selected." : "English demo mode selected.");
  }

  if (document.body.dataset.route === "map" && (state.selectedMapPropertyId || (elements.mapInspector && !elements.mapInspector.hidden))) {
    const keepSelection = event.target.closest(".map-inspector, [data-map-details], .leaflet-control, .leaflet-cluster-marker, .fallback-cluster, .leaflet-area-boundary, .map-hover-card");
    const mapSurfaceClick = event.target.closest("#map-page, .site-header");
    if (mapSurfaceClick && !keepSelection) {
      closeMapInspector();
    }
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.closest("#chatbot-form")) {
    event.preventDefault();
    submitChatPrompt(elements.chatbotInput?.value || "");
    if (elements.chatbotInput) elements.chatbotInput.value = "";
    return;
  }

  const form = event.target.closest("[data-demo-form]");
  if (!form) return;
  event.preventDefault();
  const action = form.dataset.demoForm;
  closeModal();
  showToast(`${action.charAt(0).toUpperCase() + action.slice(1)} action completed in prototype mode.`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.modal.hidden) closeModal();
  if (event.key === "Escape" && elements.chatbotPanel && !elements.chatbotPanel.hidden) setChatOpen(false);
});

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const goingDown = current > lastScrollPosition + 8;
  const goingUp = current < lastScrollPosition - 8;
  if (goingDown && current > 120 && !document.body.classList.contains("modal-open")) {
    document.body.classList.add("header-hidden");
  }
  if (goingUp || current < 80) {
    document.body.classList.remove("header-hidden");
  }
  lastScrollPosition = Math.max(0, current);
}, { passive: true });

window.addEventListener("resize", () => {
  positionMapInspector();
  if (leafletMap) {
    window.requestAnimationFrame(() => leafletMap.invalidateSize());
  }
}, { passive: true });

window.addEventListener("popstate", () => {
  applyRoute(routeFromHash(), { instant: true });
});

updatePriceOptions();
renderEstatePrices();
renderListings();
calculateMortgage();
applyRoute(routeFromHash(), { instant: true });
