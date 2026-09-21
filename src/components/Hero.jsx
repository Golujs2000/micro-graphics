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

        {/* Trust Highlights Checklist: Balanced 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 pt-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-mg-cyan-600 shrink-0" />
            <span className="whitespace-nowrap">24h Express Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-mg-cyan-600 shrink-0" />
            <span className="whitespace-nowrap">300+ DPI Precision</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-mg-cyan-600 shrink-0" />
            <span className="whitespace-nowrap">Factory Direct Rates</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-mg-cyan-600 shrink-0" />
            <span className="whitespace-nowrap">Free Pre-Press Check</span>
          </div>
        </div>

        {/* Action CTA Buttons: Balanced, Sleek & Non-wrapping */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 max-w-xl mx-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 group whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-100 border-2 border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 hover:-translate-y-0.5 group whitespace-nowrap"
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Local Workshop Direct Helpline Pill */}
        <div className="pt-6 flex items-center justify-center">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 hover:border-amber-400 text-xs text-slate-700 shadow-xs hover:shadow-sm transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-mg-cyan animate-pulse"></span>
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Need urgent prints or signage in Patna? Call:</span>
            <span className="text-mg-cyan-700 font-extrabold group-hover:underline">
              93869 92015 / 93040 97965
            </span>
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
            <p className="text-3xl sm:text-4xl font-black text-mg-cyan-600">{COMPANY_INFO.clientSatisfaction}</p>
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

