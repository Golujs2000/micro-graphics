import React, { useState } from 'react';
import { Eye, X, Star, Quote, Sparkles, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Gold Foil Corporate Visiting Cards",
      client: "Patna Tech & Real Estate Ventures",
      category: "stationery",
      image: "/assets/corporate stationery.png",
      specs: "400 GSM Imported Board • Velvet Soft-Touch • Metallic Gold Hot Foil Stamped",
      result: "Elevated corporate brand perception across Bihar investor summits."
    },
    {
      id: 2,
      title: "Commercial Heidelberg Offset Catalog",
      client: "Bihar Industrial Equipment Hub",
      category: "commercial",
      image: "/assets/offset printing.png",
      specs: "10,000 Copies • 250 GSM Cover with Thermal Matte • 130 GSM Art Interior",
      result: "Delivered in 4 business days with zero color variance across 80 pages."
    },
    {
      id: 3,
      title: "High-Visibility Star Flex Signage",
      client: "Patna Commercial Complex, Golambar",
      category: "signage",
      image: "/assets/flex banner.png",
      specs: "Heavyweight Star Flex • Solvent UV Inks • Rust-proof Reinforced Eyelets",
      result: "Weather-tested through 2 monsoon seasons without fading."
    },
    {
      id: 4,
      title: "Waterproof Jar & Bottle Labels",
      client: "Organic Farm Organics (Boring Road)",
      category: "packaging",
      image: "/assets/product label.png",
      specs: "Die-cut Vinyl • Gloss Anti-Scratch Lamination • Waterproof Adhesive",
      result: "Replaced imported labels, saving 35% on packaging overheads."
    },
    {
      id: 5,
      title: "Executive Tri-Fold Promotional Leaflets",
      client: "Patna Super Specialty Hospital",
      category: "commercial",
      image: "/assets/flyers.png",
      specs: "170 GSM Gloss Art Paper • Machine Creased • Precision Flush Cut",
      result: "50,000 copies printed and dispatched for Bihar healthcare camp."
    },
    {
      id: 6,
      title: "Annual Business Summit Stage Branding",
      client: "Bihar Youth Leadership Conclave",
      category: "signage",
      image: "/assets/event printing.png",
      specs: "Roll-Up Standees • 30ft Seamless Backdrop • Custom Delegate Badges",
      result: "Overnight rush setup delivered directly to the Patna conference hall."
    },
    {
      id: 7,
      title: "Hardcover Corporate Profile Booklets",
      client: "Nirvi Financial Solutions",
      category: "stationery",
      image: "/assets/company profile.png",
      specs: "Hardbound Binding • Spot UV Title • 200 GSM Silk Interior Leaves",
      result: "Distributed to board directors and international banking partners."
    },
    {
      id: 8,
      title: "Same-Day High-Speed Digital Proofing",
      client: "Creative Advertising Agency Patna",
      category: "digital",
      image: "/assets/digital printing.png",
      specs: "Konica Minolta AccurioPress • 2400 DPI High-Definition Photo Output",
      result: "Fast turnaround proofs approved within 90 minutes of order placement."
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mg-cyan/10 text-mg-cyan-700 text-xs font-bold uppercase tracking-wider">
            Verified Patna Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Featured <span className="text-gradient-cmyk">Work & Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A glimpse into actual commercial printing projects engineered at our Golambar, Patna facility.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'stationery', label: 'Corporate Stationery' },
            { id: 'commercial', label: 'Offset & Catalogs' },
            { id: 'signage', label: 'Flex & Signage' },
            { id: 'packaging', label: 'Labels & Packaging' },
            { id: 'digital', label: 'Digital Prints' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl m-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-xs font-black text-slate-900 shadow-lg">
                    <Eye className="w-4 h-4 text-mg-cyan" />
                    Inspect Details
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mg-cyan-700">
                    {item.client}
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-mg-cyan-600 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 truncate">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Carousel / Grid */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-mg-cyan-700">Client Reviews</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Trusted by 500+ Businesses in Patna & Bihar
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-mg-gold">
                    {[...Array(testi.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-mg-gold text-mg-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{testi.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900">{testi.name}</p>
                  <p className="text-[11px] text-slate-500">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Inspect Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 w-full bg-slate-900 flex items-center justify-center p-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-black text-mg-cyan-700 uppercase tracking-wider">
                  {selectedItem.client}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selectedItem.title}</h3>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p><strong className="text-slate-900">Technical Specifications:</strong> {selectedItem.specs}</p>
                <p><strong className="text-slate-900">Client Impact:</strong> {selectedItem.result}</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href="#calculator"
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-mg-navy text-white text-xs font-bold hover:bg-slate-800"
                >
                  Order This Type of Print
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs text-slate-500 hover:text-slate-900 font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
