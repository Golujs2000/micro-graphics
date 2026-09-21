import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_CATEGORIES, POPULAR_SERVICES, COMPANY_INFO } from '../data/siteData';
import { Search, Sparkles, MessageCircle, Clock, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = POPULAR_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-mg-cyan-900 text-xs font-bold uppercase tracking-wider">
            Commercial Printing Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Printing Services & <span className="text-gradient-cmyk">Products</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of commercial offset, digital fast-prints, outdoor banners, packaging boxes, and corporate stationery.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-2 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Banners, Business Cards, Labels)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan-600 focus:bg-white transition-all shadow-xs"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {SERVICES_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-xs'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Product Graphic */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                <img
                  src={service.image}
                  alt={`${service.title} printing in Patna`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {service.popular && (
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-amber-400 to-mg-gold text-slate-950 shadow-md">
                      ★ Popular
                    </span>
                  </div>
                )}

                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                    <Clock className="w-3 h-3 text-mg-cyan-700" />
                    {service.turnaround}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-950 group-hover:text-mg-cyan-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 mt-0.5">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/service/${service.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-extrabold text-slate-950 bg-amber-300 hover:bg-amber-400 transition-colors shadow-xs"
                  >
                    <span>View Details & Specs</span>
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

      </div>
    </div>
  );
}
