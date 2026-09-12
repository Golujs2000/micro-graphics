import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Instant Calculator', href: '#calculator' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Pre-Press Help', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-mg-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-mg-gold font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24-Hour Express Rush Printing Available in Patna
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-mg-cyan" />
              Free Press Ln, Golambar, Pirmuhani, Patna
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-mg-cyan" />
              Mon-Sat: 9:30 AM - 8:30 PM
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1 text-white font-bold hover:text-mg-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-mg-cyan" />
              {COMPANY_INFO.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-mg-navy/95 backdrop-blur-md shadow-xl py-2.5 border-b border-slate-800/80'
            : 'bg-white/95 backdrop-blur-md py-3.5 shadow-md border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={COMPANY_INFO.logo}
              alt="Micro Graphics - Printing Solution Patna"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden lg:block">
              <span className={`block text-xs font-extrabold uppercase tracking-widest ${isScrolled ? 'text-mg-cyan' : 'text-mg-cyan-600'}`}>
                Patna's Premier Press
              </span>
              <span className={`text-[10px] font-medium tracking-tight ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                Offset • Digital • Flex • Packaging
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-700 hover:text-mg-cyan-600 hover:bg-slate-100/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20need%20a%20printing%20inquiry%20for%20Patna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-mg-gold to-amber-400 hover:from-amber-400 hover:to-mg-gold shadow-md hover:shadow-glow-gold transition-all duration-200 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-mg-gold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-white hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-mg-navy-dark/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-slate-200 font-semibold text-base border-b border-slate-800/60 hover:text-mg-gold transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20need%20a%20printing%20inquiry%20for%20Patna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp ({COMPANY_INFO.formattedPhone})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-mg-gold to-amber-400 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Open Instant Price Calculator</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
