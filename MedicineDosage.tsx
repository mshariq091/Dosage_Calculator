import { useState } from 'react';
import MedicineSelector, { Medicine } from '@/components/MedicineSelector';
import WeightInput from '@/components/WeightInput';
import DosageCalculator from '@/components/DosageCalculator';
import { medicines } from '@/data/medicines';

export default function MedicineDosage() {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [weight, setWeight] = useState<string>('');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-foreground" data-testid="text-title">
              Medicine Dosage Calculator
            </h1>
            <p className="text-muted-foreground">
              Calculate weight-based medication dosages with frequency information
            </p>
          </div>

          {/* Medicine Selection */}
          <MedicineSelector
            selectedMedicine={selectedMedicine}
            onMedicineSelect={setSelectedMedicine}
            medicines={medicines}
          />

          {/* Weight Input */}
          {selectedMedicine && (
            <div className="animate-in slide-in-from-top-3 duration-300">
              <WeightInput
                weight={weight}
                onWeightChange={setWeight}
              />
            </div>
          )}

          {/* Dosage Calculation */}
          {selectedMedicine && weight && (
            <div className="animate-in slide-in-from-top-3 duration-300">
              <DosageCalculator
                medicine={selectedMedicine}
                weight={weight}
              />
            </div>
          )}

          {/* Placeholder messages */}
          {!selectedMedicine && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Select a medicine above to get started
              </p>
            </div>
          )}

          {selectedMedicine && !weight && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Enter your weight to calculate the dosage
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}