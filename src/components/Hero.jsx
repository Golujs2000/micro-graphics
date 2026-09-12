import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Clock, Award, ShieldCheck, Zap, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Hero({ onOpenQuote, onSelectService }) {
  return (
    <section id="home" className="relative py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-sky-50/40 text-slate-900 border-b border-slate-200">
      {/* Background Subtle Luminous Tint Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-mg-cyan/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="flex h-2.5 w-2.5 rounded-full bg-mg-cyan animate-ping"></span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
            Patna’s Most Trusted Printing Hub • Golambar / Pirmuhani
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-950 max-w-4xl mx-auto">
          Your Business, <br className="hidden sm:inline" />
          <span className="text-gradient-cmyk">Our Printing Expertise.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-700 max-w-3xl font-normal leading-relaxed mx-auto mt-5">
          Commercial <span className="text-slate-950 font-bold">Heidelberg Offset</span>, high-speed <span className="text-slate-950 font-bold">Digital Color</span>, weatherproof <span className="text-slate-950 font-bold">Flex Banners</span>, and precision <span className="text-slate-950 font-bold">Product Packaging</span> at unbeatable direct factory rates in Patna.
        </p>

        {/* Trust Highlights Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 text-sm text-slate-800 font-semibold max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>24-Hour Express Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>300+ DPI Precision CMYK</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Direct Factory Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Free Pre-Press Art Check</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 max-w-md mx-auto">
          <Link
            to="/calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-mg-gold to-amber-500 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Calculate Instant Price</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all duration-200 hover:scale-105"
          >
            <Layers className="w-5 h-5 text-slate-600" />
            <span>Explore All Services</span>
          </Link>
        </div>

        {/* Local Phone Direct Line */}
        <div className="pt-6 text-xs text-slate-600 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-amber-600" />
          <span>Need urgent prints in Patna today? Call workshop direct:</span>
          <a href={`tel:${COMPANY_INFO.phone}`} className="text-mg-cyan-700 font-extrabold hover:underline">
            {COMPANY_INFO.formattedPhone}
          </a>
        </div>

        {/* Live Stats Counters Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-amber-600">{COMPANY_INFO.experienceYears}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Years Experience (Est. {COMPANY_INFO.establishedYear})</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-mg-cyan-700">{COMPANY_INFO.projectsCompleted}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Completed Print Orders</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600">{COMPANY_INFO.clientSatisfaction}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Client Satisfaction Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-rose-600">{COMPANY_INFO.rushTurnaround}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Same-Day Emergency Service</p>
          </div>
        </div>

      </div>
    </section>
  );
}

