import WeightInput from '../WeightInput';
import { useState } from 'react';

export default function WeightInputExample() {
  const [weight, setWeight] = useState<string>('');

  return (
    <WeightInput
      weight={weight}
      onWeightChange={(newWeight) => {
        setWeight(newWeight);
        console.log('Weight changed:', newWeight);
      }}
    />
  );
}