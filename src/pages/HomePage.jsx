import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import PriceCalculator from '../components/PriceCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import AboutUs from '../components/AboutUs';
import Resources from '../components/Resources';
import ContactSection from '../components/ContactSection';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleOpenQuote = (options = {}) => {
    navigate('/calculator');
  };

  const handleSelectService = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div>
      {/* 1. Top Banner Slider between Nav and Hero */}
      <BannerSlider />

      {/* 2. Hero Section */}
      <Hero
        onOpenQuote={handleOpenQuote}
        onSelectService={handleSelectService}
      />

      {/* 2. Popular & Filterable Services Grid */}
      <ServicesGrid
        onSelectServiceForCalculator={handleSelectService}
      />

      {/* 3. Interactive Price Calculator & Online Order Engine */}
      <PriceCalculator />

      {/* 4. Why Choose Us & USPs */}
      <WhyChooseUs />

      {/* 5. Featured Work, Portfolio & Testimonials */}
      <Portfolio />

      {/* 6. About Us & Machinery Tour */}
      <AboutUs />

      {/* 7. Print Preparation Guidelines & FAQs */}
      <Resources />

      {/* 8. Contact & Patna Location with Map */}
      <ContactSection />
    </div>
  );
}
