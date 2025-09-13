import MedicineSelector, { Medicine } from '../MedicineSelector';
import { useState } from 'react';

const sampleMedicines: Medicine[] = [
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
  }
];

export default function MedicineSelectorExample() {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  return (
    <MedicineSelector
      selectedMedicine={selectedMedicine}
      onMedicineSelect={(medicine) => {
        setSelectedMedicine(medicine);
        console.log('Medicine selected:', medicine);
      }}
      medicines={sampleMedicines}
    />
  );
}