// src/data/medicines.js
export const medicines = [
  {
    id: 1,
    name: "Emzor Paracetamol",
    description:
      "Emzor paracetamol tablet is used to relieve mild to mild to moderate pain from a headache, toothache, cold, flu, joint pain or period pain.",
    dosages: ["500mg", "250mg", "100mg"],
    packageSizes: ["10 tablets", "20 tablets", "30 tablets"],
    prescription: false,
    prices: {
      "500mg": { "10 tablets": 500, "20 tablets": 700, "30 tablets": 900 },
      "250mg": { "10 tablets": 300, "20 tablets": 500, "30 tablets": 700 },
      "100mg": { "10 tablets": 200, "20 tablets": 350, "30 tablets": 500 },
    },
  },
  {
    id: 2,
    name: "Ibuprofen",
    description:
      "Ibuprofen tablet is used to relieve mild to moderate pain from a headache, toothache, cold, flu, joint pain, or periods pain.",
    dosages: ["200mg", "400mg", "600mg"],
    packageSizes: ["12 tablets", "24 tablets", "36 tablets"],
    prescription: false,
    prices: {
      "200mg": { "12 tablets": 300, "24 tablets": 500, "36 tablets": 700 },
      "400mg": { "12 tablets": 500, "24 tablets": 900, "36 tablets": 1300 },

      "600mg": { "12 tablets": 700, "24 tablets": 1200, "36 tablets": 1800 },
    },
  },
  {
    id: 3,
    name: "Amoxicillin",
    description:
      "Antibiotic for bacterial infections and stomach ulcers treatment.",
    dosages: ["250mg", "500mg", "750mg"],
    packageSizes: ["10 capsules", "20 capsules", "30 capsules"],
    prescription: true,
    prices: {
      "250mg": { "10 capsules": 500, "20 capsules": 900, "30 capsules": 1300 },
      "500mg": { "10 capsules": 800, "20 capsules": 1500, "30 capsules": 2200 },
      "750mg": {
        "10 capsules": 1200,
        "20 capsules": 2300,
        "30 capsules": 3300,
      },
    },
  },
  {
    id: 4,
    name: "Loratadine",
    description: "Antihistamine for allergy relief and hay fever symptoms.",
    dosages: ["5mg", "10mg"],
    packageSizes: ["5 tablets", "10 tablets", "15 tablets"],
    prescription: false,
    prices: {
      "5mg": { "5 tablets": 200, "10 tablets": 350, "15 tablets": 500 },
      "10mg": { "5 tablets": 300, "10 tablets": 500, "15 tablets": 700 },
    },
  },
  {
    id: 5,
    name: "Omeprazole",
    description:
      "Reduces stomach acid production for heartburn relief and ulcers.",
    dosages: ["10mg", "20mg", "40mg"],
    packageSizes: ["7 capsules", "14 capsules", "28 capsules"],
    prescription: false,
    prices: {
      "10mg": { "7 capsules": 400, "14 capsules": 750, "28 capsules": 1400 },
      "20mg": { "7 capsules": 600, "14 capsules": 1100, "28 capsules": 2000 },
      "40mg": { "7 capsules": 800, "14 capsules": 1500, "28 capsules": 2800 },
    },
  },
  {
    id: 6,
    name: "Lisinopril",
    description:
      "Lisinopril is used alone or together with other medicines to treat high blood pressure (hypertension).",
    dosages: ["5mg", "10mg", "20mg"],
    packageSizes: ["30 tablets", "90 tablets"],
    prescription: true,
    prices: {
      "5mg": { "30 tablets": 1000, "90 tablets": 2800 },
      "10mg": { "30 tablets": 1500, "90 tablets": 4000 },
      "20mg": { "30 tablets": 2000, "90 tablets": 5500 },
    },
  },
  {
    id: 7,
    name: "Atorvastatin",
    description: "Cholesterol lowering medication.",
    dosages: ["10mg", "20mg", "40mg"],
    packageSizes: ["30 tablets", "90 tablets"],
    prescription: true,
    prices: {
      "10mg": { "30 tablets": 1200, "90 tablets": 3200 },
      "20mg": { "30 tablets": 1800, "90 tablets": 4800 },
      "40mg": { "30 tablets": 2500, "90 tablets": 6500 },
    },
  },
  {
    id: 8,
    name: "Metformin",
    description:
      "Used to control high blood sugar in people with type 2 diabetes.",
    dosages: ["500mg", "850mg", "1000mg"],
    packageSizes: ["30 tablets", "60 tablets", "90 tablets"],
    prescription: true,
    prices: {
      "500mg": { "30 tablets": 800, "60 tablets": 1500, "90 tablets": 2200 },
      "850mg": { "30 tablets": 1000, "60 tablets": 1900, "90 tablets": 2800 },
      "1000mg": { "30 tablets": 1200, "60 tablets": 2300, "90 tablets": 3400 },
    },
  },
  {
    id: 9,
    name: "Cetirizine",
    description: "Antihistamine used to relieve allergy symptoms.",
    dosages: ["5mg", "10mg"],
    packageSizes: ["10 tablets", "20 tablets", "30 tablets"],
    prescription: false,
    prices: {
      "5mg": { "10 tablets": 300, "20 tablets": 500, "30 tablets": 700 },
      "10mg": { "10 tablets": 400, "20 tablets": 700, "30 tablets": 1000 },
    },
  },
  {
    id: 10,
    name: "Aspirin",
    description: "Used to reduce pain, fever, or inflammation.",
    dosages: ["75mg", "300mg"],
    packageSizes: ["10 tablets", "20 tablets", "50 tablets"],
    prescription: false,
    prices: {
      "75mg": { "10 tablets": 200, "20 tablets": 350, "50 tablets": 800 },
      "300mg": { "10 tablets": 300, "20 tablets": 500, "50 tablets": 1200 },
    },
  },
  {
    id: 11,
    name: "Clopidogrel",
    description: "Prevents blood clots in people with heart disease or stroke.",
    dosages: ["75mg"],
    packageSizes: ["28 tablets", "56 tablets"],
    prescription: true,
    prices: {
      "75mg": { "28 tablets": 2500, "56 tablets": 4800 },
    },
  },
  {
    id: 12,
    name: "Salbutamol",
    description:
      "Relieves symptoms of asthma and chronic obstructive pulmonary disease (COPD).",
    dosages: ["100mcg"],
    packageSizes: ["1 inhaler", "2 inhalers"],
    prescription: true,
    prices: {
      "100mcg": { "1 inhaler": 2500, "2 inhalers": 4800 },
    },
  },
];
