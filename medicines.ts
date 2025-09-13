import { Medicine } from '@/components/MedicineSelector';

export const medicines: Medicine[] = [
  {
    name: "Acetaminophen (Paracetamol)",
    use: "Pain, fever",
    dosage: "10–15 mg/kg",
    frequency: "Every 4–6 hrs; Max 60 mg/kg/day",
    minDose: 10,
    maxDose: 15
  },
  {
    name: "Ibuprofen",
    use: "Pain, inflammation",
    dosage: "5–10 mg/kg",
    frequency: "Every 6–8 hrs; Max 40 mg/kg/day",
    minDose: 5,
    maxDose: 10
  },
  {
    name: "Amoxicillin",
    use: "Bacterial infections",
    dosage: "20–40 mg/kg/day",
    frequency: "Divided into 2–3 doses",
    minDose: 20,
    maxDose: 40
  },
  {
    name: "Azithromycin",
    use: "Respiratory infections",
    dosage: "10 mg/kg (Day 1), then 5 mg/kg/day",
    frequency: "5-day course",
    minDose: 5,
    maxDose: 10
  },
  {
    name: "Cefixime",
    use: "UTI, respiratory infections",
    dosage: "8–12 mg/kg/day",
    frequency: "Once daily",
    minDose: 8,
    maxDose: 12
  },
  {
    name: "Metronidazole",
    use: "GI infections",
    dosage: "7.5 mg/kg",
    frequency: "Every 8 hrs",
    minDose: 7.5,
    maxDose: 7.5
  },
  {
    name: "Clindamycin",
    use: "Skin, dental infections",
    dosage: "8–25 mg/kg/day",
    frequency: "Divided into 3–4 doses",
    minDose: 8,
    maxDose: 25
  },
  {
    name: "Ondansetron",
    use: "Nausea, vomiting",
    dosage: "0.15 mg/kg",
    frequency: "Every 8 hrs; Max 8 mg/dose",
    minDose: 0.15,
    maxDose: 0.15
  },
  {
    name: "Prednisolone",
    use: "Inflammation, asthma",
    dosage: "1–2 mg/kg/day",
    frequency: "Tapering often needed",
    minDose: 1,
    maxDose: 2
  },
  {
    name: "Doxycycline",
    use: "Bacterial infections",
    dosage: "2–5 mg/kg/day",
    frequency: "Avoid in children <8 yrs",
    minDose: 2,
    maxDose: 5
  },
  {
    name: "Ciprofloxacin",
    use: "Severe infections",
    dosage: "10–20 mg/kg twice daily",
    frequency: "Max 500 mg/dose",
    minDose: 10,
    maxDose: 20
  },
  {
    name: "Diphenhydramine",
    use: "Allergies, sleep aid",
    dosage: "1–2 mg/kg",
    frequency: "Every 6 hrs; Max 50 mg/dose",
    minDose: 1,
    maxDose: 2
  },
  {
    name: "Chlorpheniramine",
    use: "Allergies",
    dosage: "0.35 mg/kg",
    frequency: "Every 4–6 hrs",
    minDose: 0.35,
    maxDose: 0.35
  },
  {
    name: "Loratadine",
    use: "Seasonal allergies",
    dosage: "0.2 mg/kg",
    frequency: "Once daily",
    minDose: 0.2,
    maxDose: 0.2
  },
  {
    name: "Oseltamivir (Tamiflu)",
    use: "Influenza",
    dosage: "3 mg/kg",
    frequency: "Twice daily for 5 days",
    minDose: 3,
    maxDose: 3
  },
  {
    name: "Iron (Ferrous sulfate)",
    use: "Iron deficiency anemia",
    dosage: "3–6 mg/kg elemental iron",
    frequency: "Once or twice daily",
    minDose: 3,
    maxDose: 6
  },
  {
    name: "Levothyroxine",
    use: "Hypothyroidism",
    dosage: "10–15 mcg/kg/day",
    frequency: "Adjusted by age",
    minDose: 0.01, // converted from mcg to mg
    maxDose: 0.015
  },
  {
    name: "Valproic Acid",
    use: "Seizures",
    dosage: "10–15 mg/kg",
    frequency: "Twice daily; titrate up",
    minDose: 10,
    maxDose: 15
  },
  {
    name: "Phenytoin",
    use: "Seizures",
    dosage: "5–8 mg/kg/day",
    frequency: "Maintenance dose",
    minDose: 5,
    maxDose: 8
  },
  {
    name: "Carbamazepine",
    use: "Seizures",
    dosage: "10–20 mg/kg/day",
    frequency: "Divided doses",
    minDose: 10,
    maxDose: 20
  },
  {
    name: "Phenobarbital",
    use: "Seizures",
    dosage: "3–5 mg/kg/day",
    frequency: "Once daily",
    minDose: 3,
    maxDose: 5
  },
  {
    name: "Hydroxychloroquine",
    use: "Autoimmune diseases",
    dosage: "6.5 mg/kg/day",
    frequency: "Based on ideal body weight",
    minDose: 6.5,
    maxDose: 6.5
  },
  {
    name: "Allopurinol",
    use: "Gout",
    dosage: "10 mg/kg/day",
    frequency: "Max 300 mg/day",
    minDose: 10,
    maxDose: 10
  },
  {
    name: "Folic Acid",
    use: "Deficiency, pregnancy",
    dosage: "0.1–0.5 mg/kg/day",
    frequency: "Max 1 mg/day",
    minDose: 0.1,
    maxDose: 0.5
  },
  {
    name: "Ivermectin",
    use: "Parasitic infections",
    dosage: "0.2 mg/kg",
    frequency: "Single dose or repeated",
    minDose: 0.2,
    maxDose: 0.2
  },
  {
    name: "Albendazole",
    use: "Worm infections",
    dosage: "10 mg/kg/day",
    frequency: "Often 1–3 days",
    minDose: 10,
    maxDose: 10
  },
  {
    name: "Sodium Valproate",
    use: "Epilepsy",
    dosage: "20–30 mg/kg/day",
    frequency: "Divided doses",
    minDose: 20,
    maxDose: 30
  },
  {
    name: "Topiramate",
    use: "Epilepsy, migraine",
    dosage: "1–3 mg/kg/day",
    frequency: "Titrate slowly",
    minDose: 1,
    maxDose: 3
  },
  {
    name: "Lamotrigine",
    use: "Epilepsy, bipolar disorder",
    dosage: "0.3–0.6 mg/kg/day",
    frequency: "Titrate slowly",
    minDose: 0.3,
    maxDose: 0.6
  },
  {
    name: "Desloratadine",
    use: "Allergies",
    dosage: "0.2 mg/kg/day",
    frequency: "Non-sedating",
    minDose: 0.2,
    maxDose: 0.2
  },
  {
    name: "Fexofenadine",
    use: "Allergies",
    dosage: "1 mg/kg twice daily",
    frequency: "Pediatric use",
    minDose: 1,
    maxDose: 1
  },
  {
    name: "Pyrimethamine",
    use: "Toxoplasmosis",
    dosage: "1 mg/kg/day",
    frequency: "Often combined",
    minDose: 1,
    maxDose: 1
  },
  {
    name: "Amoxicillin/Clavulanate",
    use: "Bacterial infections",
    dosage: "20–40 mg/kg/day",
    frequency: "Divided doses",
    minDose: 20,
    maxDose: 40
  },
  {
    name: "Cefuroxime",
    use: "Respiratory infections",
    dosage: "20–30 mg/kg/day",
    frequency: "Twice daily",
    minDose: 20,
    maxDose: 30
  },
  {
    name: "Cefdinir",
    use: "Otitis media, sinusitis",
    dosage: "14 mg/kg/day",
    frequency: "Once or twice daily",
    minDose: 14,
    maxDose: 14
  },
  {
    name: "Erythromycin",
    use: "Respiratory infections",
    dosage: "30–50 mg/kg/day",
    frequency: "Divided doses",
    minDose: 30,
    maxDose: 50
  },
  {
    name: "Clarithromycin",
    use: "Respiratory infections",
    dosage: "15 mg/kg/day",
    frequency: "Twice daily",
    minDose: 15,
    maxDose: 15
  },
  {
    name: "Linezolid",
    use: "Resistant infections",
    dosage: "10 mg/kg every 8 hrs",
    frequency: "Pediatric use",
    minDose: 10,
    maxDose: 10
  },
  {
    name: "Fluconazole",
    use: "Fungal infections",
    dosage: "6–12 mg/kg/day",
    frequency: "Once daily",
    minDose: 6,
    maxDose: 12
  },
  {
    name: "Ketoconazole",
    use: "Fungal infections",
    dosage: "3–6 mg/kg/day",
    frequency: "Use with caution",
    minDose: 3,
    maxDose: 6
  },
  {
    name: "Rifampin",
    use: "Tuberculosis",
    dosage: "10–20 mg/kg/day",
    frequency: "Once daily",
    minDose: 10,
    maxDose: 20
  },
  {
    name: "Isoniazid",
    use: "Tuberculosis",
    dosage: "10–15 mg/kg/day",
    frequency: "Once daily",
    minDose: 10,
    maxDose: 15
  },
  {
    name: "Pyrazinamide",
    use: "Tuberculosis",
    dosage: "30–40 mg/kg/day",
    frequency: "Once daily",
    minDose: 30,
    maxDose: 40
  },
  {
    name: "Ethambutol",
    use: "Tuberculosis",
    dosage: "15–25 mg/kg/day",
    frequency: "Once daily",
    minDose: 15,
    maxDose: 25
  },
  {
    name: "Dapsone",
    use: "Leprosy",
    dosage: "1–2 mg/kg/day",
    frequency: "Once daily",
    minDose: 1,
    maxDose: 2
  },
  {
    name: "Methotrexate",
    use: "Autoimmune, cancer",
    dosage: "0.3–0.5 mg/kg/week",
    frequency: "Weekly dose",
    minDose: 0.3,
    maxDose: 0.5
  },
  {
    name: "Cyclosporine",
    use: "Transplant, autoimmune",
    dosage: "5–10 mg/kg/day",
    frequency: "Divided doses",
    minDose: 5,
    maxDose: 10
  },
  {
    name: "Tacrolimus",
    use: "Transplant",
    dosage: "0.1–0.3 mg/kg/day",
    frequency: "Divided doses",
    minDose: 0.1,
    maxDose: 0.3
  },
  {
    name: "Acyclovir",
    use: "Herpes, varicella",
    dosage: "20 mg/kg/dose",
    frequency: "4 times/day for 5 days",
    minDose: 20,
    maxDose: 20
  },
  {
    name: "Valacyclovir",
    use: "Herpes",
    dosage: "10–20 mg/kg/dose",
    frequency: "Twice daily",
    minDose: 10,
    maxDose: 20
  },
  {
    name: "Salbutamol (Albuterol)",
    use: "Asthma",
    dosage: "0.15 mg/kg/dose",
    frequency: "Every 6 hrs",
    minDose: 0.15,
    maxDose: 0.15
  },
  {
    name: "Theophylline",
    use: "Asthma",
    dosage: "10–15 mg/kg/day",
    frequency: "Divided doses",
    minDose: 10,
    maxDose: 15
  }
];