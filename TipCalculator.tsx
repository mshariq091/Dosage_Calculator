import TipCalculator from '../TipCalculator';

export default function TipCalculatorExample() {
  return (
    <div className="space-y-4">
      <TipCalculator country="USA" />
      <TipCalculator country="Germany" />
      <TipCalculator country="India" />
      <TipCalculator country="Bangladesh" />
    </div>
  );
}