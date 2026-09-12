import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import PolicyModal from './components/PolicyModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CalculatorPage from './pages/CalculatorPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/siteData';

export default function App() {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-mg-cyan selection:text-white">
        
        {/* Site Header */}
        <Header />

        {/* Main Content Multi-Page Routing */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer onOpenPolicy={(policy) => setActivePolicy(policy)} />

        {/* Legal & Policy Modals */}
        {activePolicy && (
          <PolicyModal
            policyType={activePolicy}
            onClose={() => setActivePolicy(null)}
          />
        )}

        {/* Sticky Floating Quick Contact Actions (WhatsApp & Phone) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="pointer-events-auto sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl hover:scale-110 transition-transform border border-slate-700"
            title="Call Micro Graphics"
          >
            <Phone className="w-5 h-5 text-amber-400" />
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%20Patna%2C%20I%20need%20a%20printing%20estimate.`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-2xl hover:scale-105 transition-all group"
            title="Chat with Micro Graphics on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:animate-bounce" />
            <span className="text-xs hidden md:inline-block font-bold">Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </Router>
  );
}
