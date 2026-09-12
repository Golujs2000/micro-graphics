import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PriceCalculator from './components/PriceCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import PricingPackages from './components/PricingPackages';
import AboutUs from './components/AboutUs';
import Resources from './components/Resources';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PolicyModal from './components/PolicyModal';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/siteData';

export default function App() {
  const [selectedServiceForCalc, setSelectedServiceForCalc] = useState(null);
  const [preloadedFile, setPreloadedFile] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null);

  const handleOpenQuote = (options = {}) => {
    if (options.preloadedFile) {
      setPreloadedFile(options.preloadedFile);
    }
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    // Map serviceId to calculator item if applicable
    let targetCalcId = 'visiting-cards';
    if (serviceId.includes('flex')) targetCalcId = 'flex-banner';
    else if (serviceId.includes('label')) targetCalcId = 'product-stickers';
    else if (serviceId.includes('flyer')) targetCalcId = 'flyers';
    else if (serviceId.includes('stationery')) targetCalcId = 'visiting-cards';
    else if (serviceId.includes('offset')) targetCalcId = 'flyers';

    setSelectedServiceForCalc(targetCalcId);
    handleOpenQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-mg-cyan selection:text-white">
      {/* Site Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Quick Dropzone */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onSelectService={handleSelectService}
        />

        {/* 2. Popular & Filterable Services Grid */}
        <ServicesGrid
          onSelectServiceForCalculator={handleSelectService}
        />

        {/* 3. Interactive Price Calculator & Online Order Engine */}
        <PriceCalculator
          preselectedService={selectedServiceForCalc}
          preloadedFile={preloadedFile}
        />

        {/* 4. Why Choose Us & USPs */}
        <WhyChooseUs />

        {/* 5. Featured Work, Portfolio & Testimonials */}
        <Portfolio />

        {/* 6. Pricing Packages & Volume Discounts */}
        <PricingPackages
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 7. About Us & Machinery Tour */}
        <AboutUs />

        {/* 8. Print Preparation Guidelines & FAQs */}
        <Resources />

        {/* 9. Contact & Patna Location with Map */}
        <ContactSection />
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
          <Phone className="w-5 h-5 text-mg-gold" />
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
  );
}
