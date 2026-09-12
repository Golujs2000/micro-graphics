import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { POPULAR_SERVICES, COMPANY_INFO } from '../data/siteData';
import PriceCalculator from '../components/PriceCalculator';
import { 
  ArrowLeft, CheckCircle2, Clock, Phone, MessageCircle, 
  Sparkles, FileText, ChevronRight, ShieldCheck, Cpu, ArrowRight 
} from 'lucide-react';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Lookup service by id
  const service = POPULAR_SERVICES.find(s => s.id === serviceId) || POPULAR_SERVICES[0];

  // Map serviceId to calculator product id if applicable
  let defaultCalcId = 'visiting-cards';
  if (service.id.includes('flex')) defaultCalcId = 'flex-banner';
  else if (service.id.includes('label')) defaultCalcId = 'product-stickers';
  else if (service.id.includes('flyer')) defaultCalcId = 'flyers';
  else if (service.id.includes('offset')) defaultCalcId = 'flyers';

  const otherServices = POPULAR_SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-600 font-semibold flex-wrap">
          <Link to="/" className="hover:text-mg-cyan-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services" className="hover:text-mg-cyan-700">All Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-950 font-bold">{service.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        
        {/* Service Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Graphic Artwork Column */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 p-2 shadow-sm group">
              <img
                src={service.image}
                alt={`${service.title} in Patna, Bihar`}
                className="w-full h-80 sm:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-mg-gold text-slate-950 shadow-md">
                {service.startingPrice}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-mg-cyan-700" />
                {service.turnaround}
              </span>
            </div>
          </div>

          {/* Details & Action Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-mg-cyan-900 border border-sky-200 text-xs font-bold uppercase tracking-wider">
              {service.category.toUpperCase()} PRINTING SOLUTION
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base text-amber-700 font-extrabold">
              {service.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.detailedDescription || service.description}
            </p>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100">
              <a
                href="#order-calculator"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-mg-gold to-amber-500 hover:from-amber-300 hover:to-amber-500 shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Calculate Price for this Item</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%20Patna%2C%20I%20want%20to%20order%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              📍 Produced at Free Press Ln, Pirmuhani, Golambar press. Direct pickup or same-day local delivery across Patna.
            </p>
          </div>

        </div>

        {/* Technical Specifications Table & Industry Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Specifications Table (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-mg-cyan-700" />
              <h3 className="text-xl font-black text-slate-950">Technical Specifications</h3>
            </div>

            {service.specs ? (
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Machinery Used:</span>
                  <span className="font-bold text-slate-900 text-right">{service.specs.technology}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Substrate / Paper:</span>
                  <span className="font-bold text-slate-900 text-right">{service.specs.paperOptions}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Weight Range (GSM):</span>
                  <span className="font-bold text-slate-900 text-right">{service.specs.gsmRange}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Finishing Available:</span>
                  <span className="font-bold text-slate-900 text-right">{service.specs.finishesAvailable}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Minimum Order Qty:</span>
                  <span className="font-bold text-slate-900 text-right">{service.specs.minOrderQty}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Standard Turnaround:</span>
                  <span className="font-bold text-emerald-700 text-right">{service.specs.turnaroundStandard}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">Express Patna Rush:</span>
                  <span className="font-bold text-rose-700 text-right">{service.specs.turnaroundRush}</span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500">Standard commercial lithography specifications apply.</p>
            )}
          </div>

          {/* Industry Applications & Prepress Checklist (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Industry Applications Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-black text-slate-950">Common Patna Industry Uses</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {(service.applications || [
                  'Healthcare & Clinics in Kankarbagh',
                  'Retail Stores & Supermarkets in Boring Road',
                  'Schools & Coaching Centers in Patna',
                  'Exhibitions & Events at Gandhi Maidan'
                ]).map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <span className="font-medium">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prepress Checklist Box */}
            <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Pre-Press Artwork Checklist</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {(service.prepressChecklist || [
                  'Include 3mm bleed margin on all sides',
                  'Set color space to CMYK at 300 DPI',
                  'Convert fonts to outlines/curves',
                  'Submit PDF/X or CorelDraw CDR file'
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Embedded Interactive Calculator Anchor */}
        <div id="order-calculator" className="pt-6">
          <div className="mb-4">
            <span className="text-xs font-black uppercase tracking-wider text-amber-700">Instant Online Quote</span>
            <h3 className="text-2xl font-black text-slate-950">Customize {service.title} & Order</h3>
          </div>
          <PriceCalculator preselectedService={defaultCalcId} />
        </div>

        {/* Explore Other Services Carousel / Grid */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-mg-cyan-800 uppercase tracking-wider">Related Solutions</span>
              <h3 className="text-xl font-black text-slate-950">Explore Other Printing Categories</h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-mg-cyan-700 hover:text-mg-cyan-800 inline-flex items-center gap-1"
            >
              <span>View All 9 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/service/${other.id}`}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-700">{other.startingPrice}</span>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-mg-cyan-700 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{other.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
