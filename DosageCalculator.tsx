import DosageCalculator from '../DosageCalculator';
import { Medicine } from '../MedicineSelector';

const sampleMedicine: Medicine = {
  name: "Acetaminophen (Paracetamol)",
  use: "Pain, fever",
  dosage: "10–15 mg/kg",
  frequency: "Every 4–6 hrs; Max 60 mg/kg/day",
  minDose: 10,
  maxDose: 15
};

export default function DosageCalculatorExample() {
  return (
    <div className="space-y-4">
      <DosageCalculator medicine={sampleMedicine} weight="70" />
      <DosageCalculator medicine={sampleMedicine} weight="" />
    </div>
  );
}