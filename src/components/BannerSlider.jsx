import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Clock, ArrowRight, MessageCircle, Play, Pause } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 'offset-printing',
      title: 'Commercial Heidelberg 4-Color Offset Printing',
      tagline: 'High Volume Books, Catalogs, Magazines & Brochures',
      description: 'Ultra-low bulk rates with laser-sharp CMYK consistency powered by German Heidelberg multi-color offset presses at our Golambar workshop in Patna.',
      image: '/assets/offset printing.png',
      badge: '★ Factory Production Scale',
      tagBg: 'bg-amber-100 text-amber-900 border-amber-300',
      price: 'Starting at ₹0.85 / unit',
      turnaround: '3 - 4 Days (48h Rush Available)',
      link: '/service/offset-printing'
    },
    {
      id: 'flex-banner',
      title: 'Large Format Flex Banners & Star Flex Signage',
      tagline: 'Weatherproof Outdoor Hoardings, Glow Signs & Roll-Up Standees',
      description: 'Industrial 10ft Roland eco-solvent plotters delivering vibrant, UV-tested, fade-resistant flex hoardings, front-lit & backlit boards across Bihar.',
      image: '/assets/flex banner.png',
      badge: '⚡ Same-Day / 24H Rush in Patna',
      tagBg: 'bg-sky-100 text-sky-900 border-sky-300',
      price: 'Starting at ₹8 / sq.ft',
      turnaround: '2-4h Express in Patna',
      link: '/service/flex-banner'
    },
    {
      id: 'event-printing',
      title: 'Event & Exhibition Printing Solutions',
      tagline: 'Print Solutions for Events, Summits & Promotions',
      description: 'Complete venue & booth branding: retractable aluminum roll-up standees, seamless stage backdrops, promotional canopies, satin lanyards, and delegate ID badges.',
      image: '/assets/event printing.png',
      badge: '🎪 Complete Summit & Booth Branding',
      tagBg: 'bg-sky-100 text-sky-950 border-sky-300',
      price: 'Starting at ₹850 / standee',
      turnaround: 'Same-Day / 4h Rush in Patna',
      link: '/service/event-printing'
    },
    {
      id: 'corporate-stationery',
      title: 'Corporate Stationery & Complete Business Branding',
      tagline: 'Velvet Matte Business Cards, Letterheads & Envelopes',
      description: 'Make a powerful first impression with 350-450 GSM cards, gold foil stamping, spot UV effects, and executive identity stationery suites.',
      image: '/assets/corporate stationery.png',
      badge: '💎 Premium Velvet & Foil Finishes',
      tagBg: 'bg-purple-100 text-purple-900 border-purple-300',
      price: 'Starting at ₹180 / 100 cards',
      turnaround: 'Same-Day Dispatch',
      link: '/service/corporate-stationery'
    },
    {
      id: 'digital-printing',
      title: 'High-Speed Digital Printing & Color Solutions',
      tagline: 'Fast, Flexible & Photographic Quality Prints',
      description: 'Ultra-fast turnarounds on high-definition digital presses with vivid color clarity, no plate-making charges, and zero minimum quantity requirements.',
      image: '/assets/digital printing.png',
      badge: '🚀 Zero Setup Fee • No Minimum Order',
      tagBg: 'bg-teal-100 text-teal-900 border-teal-300',
      price: 'Starting at ₹3.50 / print',
      turnaround: 'Ready in 2 Hours',
      link: '/service/digital-printing'
    },
    {
      id: 'flyers',
      title: 'Promotional Flyers & Marketing Leaflets',
      tagline: 'Promote Your Business Effectively Across Patna & Bihar',
      description: 'High-gloss and matte finished marketing pamphlets, event handouts, and distribution inserts with rich color saturation and crisp typography.',
      image: '/assets/flyers.png',
      badge: '🎯 High-Impact Local Advertising',
      tagBg: 'bg-rose-100 text-rose-900 border-rose-300',
      price: 'Starting at ₹0.90 / flyer',
      turnaround: '24 - 48 Hours',
      link: '/service/flyers'
    }
  ];

  // Auto-play interval: auto slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length, currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  const active = slides[currentSlide];

  return (
    <section 
      aria-label="Featured Print Solutions Slider"
      className="relative pt-28 sm:pt-32 pb-6 bg-gradient-to-b from-slate-100 via-slate-50 to-white border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambient Tints */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Card */}
        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-500">
          
          {/* Top Auto-Slide Countdown Progress Bar */}
          <div className="w-full bg-slate-100 h-1 relative overflow-hidden">
            <div
              key={currentSlide + (isPaused ? '-paused' : '-active')}
              className={`h-full bg-gradient-to-r from-amber-400 to-mg-gold transition-all ${
                isPaused ? 'w-full opacity-30' : 'animate-progress'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 min-h-[380px] lg:min-h-[430px]">
            
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
                <span className="text-[11px] font-bold text-slate-400">
                  Slide {currentSlide + 1} of {slides.length}
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all duration-200 hover:-translate-y-0.5"
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
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-mg-cyan hover:bg-mg-cyan-600 shadow-sm transition-transform hover:scale-105"
                  title="Direct WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right: Relative Service Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center p-2 group">
                <img
                  src={active.image}
                  alt={active.title}
                  loading="eager"
                  className="w-full h-full object-contain rounded-xl transition-all duration-500 group-hover:scale-105"
                />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-slate-900/90 text-white shadow-md backdrop-blur-xs">
                    {active.price}
                  </span>
                  <span className="text-[11px] font-bold text-slate-800 bg-white/95 px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs">
                    Patna Factory Rates
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Previous / Next Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous service slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next service slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Bar: Indicators & Autoplay Controls */}
          <div className="border-t border-slate-100 bg-slate-50/90 px-6 py-3 flex items-center justify-between flex-wrap gap-3">
            
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2 flex-wrap">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-10 bg-amber-500 shadow-xs' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Autoplay Status Toggle */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors text-[11px]"
                title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-mg-cyan fill-mg-cyan" />
                    <span>Autoplay Paused</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-amber-600 fill-amber-600" />
                    <span>Auto-sliding (5s)</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
