import React from 'react';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Golambar, Pirmuhani, Patna
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Contact Us & <span className="text-gradient-cmyk">Visit Our Press</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Drop by our workshop at Free Press Lane for paper texture samples, or connect directly with our production manager.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <ContactSection />
      </div>

    </div>
  );
}
