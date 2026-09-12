import React from 'react';
import PriceCalculator from '../components/PriceCalculator';
import { Calculator, ShieldCheck, Zap, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function CalculatorPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Live Quotation System
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Instant <span className="text-gradient-cmyk">Price Calculator</span> & Online Order
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Configure custom sizes, paper GSM, premium finishes, and bulk volume discount quantities with instant transparent factory pricing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <PriceCalculator />
      </div>

    </div>
  );
}
