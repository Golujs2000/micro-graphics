import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 'offset-printing',
      title: 'Commercial Heidelberg 4-Color Offset Printing',
      tagline: 'High Volume Books, Catalogs, Magazines & Brochures',
      description: 'Ultra-low bulk rates with laser-sharp CMYK consistency powered by German Heidelberg multi-color offset presses at our Golambar workshop.',
      image: '/assets/offset printing.png',
      badge: '★ High Volume Factory Production',
      accentColor: 'from-amber-500 to-amber-600',
      tagBg: 'bg-amber-100 text-amber-900 border-amber-300',
      price: 'Starting at ₹0.85 / unit',
      turnaround: '3 - 4 Days (48h Rush Available)',
      link: '/service/offset-printing'
    },
    {
      id: 'flex-banner',
      title: 'Large Format Flex Banners & Star Flex Signage',
      tagline: 'Bigger, Brighter, Bolder Outdoor Hoardings & Standees',
      description: 'Industrial 10ft Roland eco-solvent plotters delivering weather-tested, fade-resistant flex hoardings, glow signs, and roll-up exhibition standees.',
      image: '/assets/flex banner.png',
      badge: '⚡ Same-Day / 24H Rush in Patna',
      accentColor: 'from-mg-cyan-600 to-blue-600',
      tagBg: 'bg-sky-100 text-sky-900 border-sky-300',
      price: 'Starting at ₹8 / sq.ft',
      turnaround: '2-4h Express in Patna',
      link: '/service/flex-banner'
    },
    {
      id: 'product-labels',
      title: 'Custom Product Packaging & Waterproof Labels',
      tagline: 'Precision Die-Cut Labels, Cartons & Rigid Gift Boxes',
      description: 'Elevate your brand on retail shelves with custom structural mono cartons, holographic security seals, and waterproof bottle/jar stickers.',
      image: '/assets/product label.png',
      badge: '✨ Precision Digital Die-Cut',
      accentColor: 'from-emerald-600 to-teal-700',
      tagBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      price: 'Starting at ₹0.60 / label',
      turnaround: '24 - 48 Hours',
      link: '/service/product-labels'
    }
  ];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <div 
      className="relative pt-28 sm:pt-32 pb-6 bg-slate-100/80 border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Box */}
        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 min-h-[360px] lg:min-h-[400px]">
            
            {/* Left: Text & CTAs (7 cols) */}
            <div key={active.id} className="lg:col-span-7 space-y-4 text-left animate-in fade-in slide-in-from-left-4 duration-500">
              
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-black border uppercase tracking-wider ${active.tagBg}`}>
                  {active.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  {active.turnaround}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                {active.title}
              </h2>

              <p className="text-sm sm:text-base font-bold text-amber-700">
                {active.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {active.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to={active.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-mg-gold to-amber-500 hover:from-amber-300 hover:to-amber-500 shadow-md transition-transform hover:scale-105"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Instant Calculator</span>
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%20Patna%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(active.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-transform hover:scale-105"
                  title="Direct WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right: Real Graphic Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-50 p-2 border border-slate-200 shadow-inner flex items-center justify-center">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover rounded-xl transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-900/90 text-white shadow-md">
                    {active.price}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous service slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next service slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-transform hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-amber-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
