import CountrySelector from '../CountrySelector';
import { useState } from 'react';

export default function CountrySelectorExample() {
  const [selectedCountry, setSelectedCountry] = useState<'USA' | 'Germany' | 'Japan' | 'India' | 'Bangladesh' | null>(null);

  return (
    <CountrySelector
      selectedCountry={selectedCountry}
      onCountrySelect={(country) => {
        setSelectedCountry(country);
        console.log('Country selected:', country);
      }}
    />
  );
}