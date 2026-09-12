import React from 'react';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen text-slate-900">
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
}

