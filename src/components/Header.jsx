import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import Logo from './Logo';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-100 text-slate-800 text-xs py-2 px-4 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-amber-700 font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-mg-cyan animate-pulse"></span>
              24-Hour Express Rush Printing Available in Patna
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-mg-cyan-600" />
              Free Press Ln, Golambar, Pirmuhani, Patna
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-mg-cyan-600" />
              Mon-Sat: 9:30 AM - 8:30 PM
            </span>
            <div className="flex items-center gap-1.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-slate-900 font-black hover:text-mg-cyan-700 transition-colors bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-xs text-[11px] sm:text-xs"
                title="Call 93869 92015"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-mg-cyan-600" />
                <span>93869 92015</span>
              </a>
              <span className="text-slate-300">/</span>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhone}`}
                className="inline-flex items-center text-slate-900 font-black hover:text-mg-cyan-700 transition-colors bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-xs text-[11px] sm:text-xs"
                title="Call 93040 97965"
              >
                <span>93040 97965</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white/95 backdrop-blur-md py-3.5 shadow-xs border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Icon & Text */}
          <Link to="/" className="flex items-center group">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:text-mg-cyan-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20need%20a%20printing%20inquiry%20for%20Patna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-mg-cyan hover:bg-mg-cyan-600 shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-mg-gold hover:from-amber-300 hover:to-amber-500 shadow-md transition-all duration-200 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <Link
              to="/contact"
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-mg-gold"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-6 py-6 animate-in slide-in-from-top duration-300 text-slate-900">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-slate-800 font-bold text-base border-b border-slate-100 hover:text-mg-cyan-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20need%20a%20printing%20inquiry%20for%20Patna.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-mg-cyan hover:bg-mg-cyan-600 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp ({COMPANY_INFO.formattedPhone})</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-mg-gold shadow-md"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
