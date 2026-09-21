import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, Clock, Check, ArrowRight } from 'lucide-react';
import { SERVICES_CATEGORIES, POPULAR_SERVICES, COMPANY_INFO } from '../data/siteData';

export default function ServicesGrid({ onSelectService, onSelectServiceForCalculator }) {
  const handleSelect = onSelectService || onSelectServiceForCalculator;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? POPULAR_SERVICES
    : POPULAR_SERVICES.filter(service => service.category === activeCategory);

  const displayedServices = activeCategory === 'all'
    ? filteredServices.slice(0, 12)
    : filteredServices;

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mg-cyan/10 text-mg-cyan-700 text-xs font-bold uppercase tracking-wider">
            Comprehensive Printing Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Popular Services & <span className="text-gradient-cmyk">Products</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From single-copy digital prototypes to multi-million commercial offset runs, explore Micro Graphics Patna’s end-to-end printing solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2">
          {SERVICES_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-mg-navy text-white shadow-lg shadow-mg-navy/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Product Graphic Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img
                  src={service.image}
                  alt={`${service.title} printing press in Patna`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {service.popular && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-mg-gold to-amber-400 text-slate-950 shadow-md">
                      ★ Popular in Patna
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                    <Clock className="w-3 h-3 text-mg-cyan" />
                    {service.turnaround}
                  </span>
                </div>
              </div>

              {/* Service Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-mg-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-mg-cyan-700 mt-0.5">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/service/${service.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-extrabold text-slate-900 bg-amber-300 hover:bg-amber-400 transition-colors shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%20Patna%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button for All Category */}
        {activeCategory === 'all' && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Explore All {POPULAR_SERVICES.length} Printing, Signage & Branding Solutions</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Custom Printing CTA Box */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-mg-navy via-slate-900 to-mg-navy-dark text-white p-8 md:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              Need Custom Dimensions or Bulk Institutional Contracting?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We specialize in custom die-cuts, election publicity materials, school/college prospectuses, and bulk corporate gifts across Bihar.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-mg-gold hover:bg-amber-400 transition-all shadow-md"
            >
              Call 9386992015
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Inquire Online
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
