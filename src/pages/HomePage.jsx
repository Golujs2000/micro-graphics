import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Hero from '../components/Hero';
import ClientShowcase from '../components/ClientShowcase';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import AboutUs from '../components/AboutUs';
import Resources from '../components/Resources';
import ContactSection from '../components/ContactSection';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleOpenQuote = (options = {}) => {
    navigate('/contact');
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

      {/* 2.5 Esteemed Corporate & Government Clients */}
      <ClientShowcase />

      {/* 3. Popular & Filterable Services Grid */}
      <ServicesGrid
        onSelectService={handleSelectService}
      />

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
