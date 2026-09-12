import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Footer({ onOpenPolicy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Logo (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Same-Line Horizontal Logo */}
            <Link to="/" className="flex items-center gap-3 bg-white p-2.5 rounded-2xl w-fit shadow-xs">
              <img
                src="/assets/micro graphics icon.png"
                alt="Micro Graphics Icon"
                className="h-10 w-auto object-contain shrink-0"
              />
              <img
                src="/assets/micro graphics text.png"
                alt="Micro Graphics Printing Solution"
                className="h-6 w-auto object-contain shrink-0"
              />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Patna’s premier commercial printing press. Operating industrial Heidelberg offset machines, digital high-speed presses, and large-format outdoor flex plotters at Free Press Lane, Golambar, Pirmuhani.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-9 h-9 rounded-xl bg-mg-cyan hover:bg-mg-cyan-400 text-slate-950 flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                title="Call Workshop Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-transform hover:scale-110"
                title="Email Inquiries"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Printing Services (Direct Links to Detail Pages) */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/service/offset-printing" className="hover:text-amber-400 transition-colors">Commercial Offset Printing</Link></li>
              <li><Link to="/service/digital-printing" className="hover:text-amber-400 transition-colors">High-Speed Digital Printing</Link></li>
              <li><Link to="/service/flex-banner" className="hover:text-amber-400 transition-colors">Outdoor Flex & Star Flex</Link></li>
              <li><Link to="/service/product-labels" className="hover:text-amber-400 transition-colors">Die-Cut Product Labels</Link></li>
              <li><Link to="/service/packaging-boxes" className="hover:text-amber-400 transition-colors">Custom Mono Cartons & Packaging</Link></li>
              <li><Link to="/service/corporate-stationery" className="hover:text-amber-400 transition-colors">Corporate Stationery & Cards</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-white transition-colors">All 9 Print Services</Link></li>
              <li><Link to="/calculator" className="text-mg-cyan hover:underline font-bold">Instant Price Calculator</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Past Projects & Reviews</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us & Machinery</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Print Bleed & FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Patna Workshop Directions</Link></li>
            </ul>
          </div>

          {/* Col 4: Store Location & Timings */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Patna Workshop
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-mg-cyan shrink-0 mt-0.5" />
                <span>Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001 (J45V+VXW)</span>
              </p>
              <p className="flex items-center gap-2 text-slate-200 font-black">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.formattedPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mg-cyan shrink-0" />
                <span>Mon - Sat: 9:30 AM - 8:30 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Local Patna SEO Keyword Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-400 mb-1">Serving All Patna & Bihar Commercial Sectors:</p>
          <p>
            Printing Press in Patna • Heidelberg Offset Printing Golambar • Flex Banner Printing Pirmuhani • Same Day Visiting Card Printing Salimpur Ahra • Product Label Stickers Boring Road • Packaging Box Manufacturer Kankarbagh • Wedding Card Printing Patna • Roll Up Standee Gandhi Maidan • Leaflets & Catalogs Delivery in Muzaffarpur, Gaya & Bhagalpur.
          </p>
        </div>
      </div>

      {/* Lower Copyright & Policy Links Bar */}
      <div className="bg-black/60 py-5 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">Micro Graphics</span> — Established {COMPANY_INFO.establishedYear}. Free Press Ln, Pirmuhani, Patna, Bihar 800001.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenPolicy('shipping')}
              className="hover:text-white transition-colors underline"
            >
              Shipping & Delivery
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('returns')}
              className="hover:text-white transition-colors underline"
            >
              Returns & Reprints
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors underline"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

    </footer>
  );
}
