import React from 'react';
import { TRUSTED_CLIENTS } from '../data/siteData';
import { ShieldCheck, Award, Building2 } from 'lucide-react';

export default function ClientShowcase() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700">
                Enterprise & Government Clientele
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Trusted by National & State Leaders
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-500 max-w-md text-center md:text-right">
            Proudly delivering high-precision offset, outdoor branding, hoardings, and signage for India’s most respected enterprises since 2011.
          </p>
        </div>

        {/* 13 Client Badges Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
          {TRUSTED_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="group p-3.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-amber-400/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center hover:-translate-y-1"
            >
              <span className="w-8 h-8 rounded-lg bg-white group-hover:bg-slate-900 border border-slate-200 group-hover:border-slate-900 flex items-center justify-center text-slate-700 group-hover:text-amber-400 font-black text-xs transition-colors mb-2">
                {client.tag.slice(0, 2).toUpperCase()}
              </span>
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                {client.name}
              </h4>
              <span className="text-[10px] text-slate-500 mt-1 font-medium line-clamp-1">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Brand Color Fidelity Guarantee
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-mg-cyan-700" />
            GST Compliant Corporate Billing & Tender Support
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-700 font-bold">
            ★ Bihar-Wide Logistics & On-Site Mounting
          </span>
        </div>

      </div>
    </section>
  );
}
