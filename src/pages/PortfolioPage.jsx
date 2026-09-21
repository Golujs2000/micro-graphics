import React from 'react';
import Portfolio from '../components/Portfolio';
import ClientShowcase from '../components/ClientShowcase';

export default function PortfolioPage() {
  return (
    <div className="pt-24 bg-slate-100 min-h-screen text-slate-900">
      <Portfolio />
      <ClientShowcase />
    </div>
  );
}
