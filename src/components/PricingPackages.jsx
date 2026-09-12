import React from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES, COMPANY_INFO } from '../data/siteData';

export default function PricingPackages({ onOpenQuote }) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mg-cyan/10 text-mg-cyan border border-mg-cyan/20 text-xs font-bold uppercase tracking-wider">
            All-In-One Value Bundles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Transparent Pricing & <span className="text-gradient-cmyk">Package Deals</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Save up to 30% with our curated startup, retail, and event bundles tailored for companies operating in Patna.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-mg-navy border-2 border-mg-gold shadow-2xl scale-105 z-10'
                  : 'bg-slate-800/60 border border-slate-700/80'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-mg-gold to-amber-400 text-slate-950 uppercase tracking-wider shadow-md">
                  Most Popular in Patna
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-mg-cyan">{pkg.tag}</span>
                  <h3 className="text-xl font-black text-white mt-1">{pkg.name}</h3>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-4xl font-black text-mg-gold">{pkg.price}</span>
                  <span className="text-sm text-slate-400 line-through">{pkg.regularPrice}</span>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    {pkg.savings}
                  </span>
                </div>

                <p className="text-xs text-slate-400 border-t border-slate-700/80 pt-4">
                  Package includes everything needed to launch:
                </p>

                <ul className="space-y-3 text-xs text-slate-300">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-700/80 space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price})%20for%20Patna.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold transition-all shadow-md ${
                    pkg.highlight
                      ? 'bg-mg-gold hover:bg-amber-400 text-slate-950'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Package on WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-2 text-center text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Customize Quantities
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Tiers Matrix */}
        <div className="mt-16 rounded-3xl bg-slate-950/70 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h4 className="text-lg font-black text-white">Wholesale Volume Discount Tiers</h4>
              <p className="text-xs text-slate-400">Higher print runs exponentially lower your per-unit cost</p>
            </div>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
              Up to 35% Bulk Scale Rebate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400">500 - 999 Units</p>
              <p className="text-lg font-black text-white mt-1">5% Savings</p>
              <p className="text-[10px] text-slate-500 mt-1">Small Business Tier</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400">1,000 - 1,999 Units</p>
              <p className="text-lg font-black text-white mt-1">12% Savings</p>
              <p className="text-[10px] text-slate-500 mt-1">Growing Retail Tier</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400">2,000 - 4,999 Units</p>
              <p className="text-lg font-black text-white mt-1">18% Savings</p>
              <p className="text-[10px] text-slate-500 mt-1">Corporate Tier</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400">5,000+ Units</p>
              <p className="text-lg font-black text-mg-gold mt-1">25% - 35% Off</p>
              <p className="text-[10px] text-slate-500 mt-1">Wholesale Factory Tier</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
