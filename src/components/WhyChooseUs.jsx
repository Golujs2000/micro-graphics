import React from 'react';
import { Award, Truck, Layers, Building2, Check, X, ShieldCheck, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function WhyChooseUs() {
  const usps = [
    {
      icon: Award,
      title: "High Print Quality",
      desc: "Micro-calibrated CMYK density matching ISO offset standards. Crisp micro-typography, deep obsidian blacks, and true-to-life photographic fidelity.",
      color: "from-mg-cyan to-blue-600"
    },
    {
      icon: Truck,
      title: "On-Time Patna Delivery",
      desc: "Zero tolerance for delays. Reliable local dispatch across Patna city same-day, with insured regional courier to every district of Bihar.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Layers,
      title: "Bulk Order Support",
      desc: "Heavy-duty industrial capacity delivering up to 100,000 prints daily. Factory-direct wholesale pricing with tiered scale discounts.",
      color: "from-mg-gold to-amber-600"
    },
    {
      icon: Building2,
      title: "B2B Printing Solutions",
      desc: "Tailored monthly corporate contracts, GST-compliant invoicing, credit facilities for certified organizations, and dedicated prepress account managers.",
      color: "from-mg-magenta to-rose-600"
    }
  ];

  const comparisonRows = [
    { feature: "Color Management", mg: "Calibrated Heidelberg & Konica Digital Presses", other: "Uncalibrated local desktop print heads" },
    { feature: "Patna Turnaround", mg: "Same-day 24h Express Rush Available", other: "4 to 7 business days delay" },
    { feature: "Pricing Transparency", mg: "Instant live calculator with direct factory rates", other: "Hidden plate & lamination charges" },
    { feature: "Paper Stock Guarantee", mg: "Genuine imported 350-400 GSM art card", other: "Lightweight sub-standard recycled card" },
    { feature: "Prepress Inspection", mg: "Free file check for bleed, resolution & CMYK", other: "Printed as-is with font/color errors" }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-mg-cyan" />
            Engineering Excellence in Patna
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Micro Graphics is <span className="text-gradient-cmyk">Patna's #1 Choice</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            For over 20 years (Established 2005), Patna's top hospitals, retail brands, educational institutes, and startups have trusted our presses for uncompromising precision.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-mg-cyan/40 hover:bg-white hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${usp.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-mg-cyan-600 transition-colors">
                  {usp.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table (Light Theme) */}
        <div className="mt-16 rounded-3xl bg-white text-slate-900 p-6 sm:p-10 shadow-lg border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700">Standard of Excellence</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">Micro Graphics vs Ordinary Printers</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-50">
                  <th className="py-3.5 px-4 rounded-l-xl">Feature</th>
                  <th className="py-3.5 px-4 text-amber-800 font-extrabold bg-amber-50/60">Micro Graphics Patna</th>
                  <th className="py-3.5 px-4 text-slate-500 rounded-r-xl">Ordinary Print Shops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 bg-amber-50/30 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.mg}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.other}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
