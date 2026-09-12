import React from 'react';
import Resources from '../components/Resources';
import { FileCode, Download, HelpCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function ResourcesPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-mg-cyan-900 text-xs font-bold uppercase tracking-wider">
            <FileCode className="w-3.5 h-3.5 text-mg-cyan-700" />
            Designer & Pre-Press Help
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Print Guidelines, <span className="text-gradient-cmyk">Bleed Specs</span> & FAQs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to prepare flawless artwork files for Heidelberg offset and digital presses in Patna.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Resources />
      </div>

    </div>
  );
}
