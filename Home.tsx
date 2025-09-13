import { useState } from 'react';
import CountrySelector from '@/components/CountrySelector';
import TipCalculator from '@/components/TipCalculator';
import TippingInfo from '@/components/TippingInfo';

type Country = 'USA' | 'Germany' | 'Japan' | 'India' | 'Bangladesh';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-foreground" data-testid="text-title">
              Tipping Guide
            </h1>
            <p className="text-muted-foreground">
              Calculate tips and learn tipping customs for different countries
            </p>
          </div>

          {/* Country Selector */}
          <CountrySelector
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
          />

          {/* Dynamic Content */}
          {selectedCountry && (
            <div className="space-y-6 animate-in slide-in-from-top-3 duration-300">
              {/* Tipping Information */}
              <TippingInfo country={selectedCountry} />

              {/* Tip Calculator - Only for countries with tipping */}
              {(selectedCountry === 'USA' || selectedCountry === 'Germany' || selectedCountry === 'India' || selectedCountry === 'Bangladesh') && (
                <TipCalculator country={selectedCountry} />
              )}

              {/* Special message for Japan */}
              {selectedCountry === 'Japan' && (
                <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-muted-foreground font-medium" data-testid="text-japan-message">
                    No tip calculation needed - service is included!
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Placeholder when no country selected */}
          {!selectedCountry && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Select a country above to see tipping information and calculator
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}