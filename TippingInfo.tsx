import TippingInfo from '../TippingInfo';

export default function TippingInfoExample() {
  return (
    <div className="space-y-4">
      <TippingInfo country="USA" />
      <TippingInfo country="Germany" />
      <TippingInfo country="Japan" />
      <TippingInfo country="India" />
      <TippingInfo country="Bangladesh" />
    </div>
  );
}