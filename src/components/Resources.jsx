import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileCode, CheckCircle, AlertTriangle, Layers, Download, Sparkles } from 'lucide-react';
import { FAQS } from '../data/siteData';

export default function Resources() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const templates = [
    { name: "Standard Business Card", size: "3.5\" x 2\" (with 3mm Bleed)", ext: "PDF / CDR Template" },
    { name: "A4 Flyer & Brochure", size: "210 x 297 mm (300 DPI CMYK)", ext: "PDF / AI Template" },
    { name: "Roll-Up Standee Banner", size: "6 ft x 3 ft (High-Res 150 DPI)", ext: "PDF Template" },
    { name: "Waterproof Product Sticker", size: "2\" x 2\" (Contour Cut Line)", ext: "CDR / EPS Template" },
  ];

  return (
    <section id="resources" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <FileCode className="w-3.5 h-3.5 text-mg-cyan" />
            Pre-Press Printing Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Print Prep Guidelines & <span className="text-gradient-cmyk">FAQs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Avoid common printing pitfalls. Follow our technical prepress guide for razor-sharp results on our Patna presses.
          </p>
        </div>

        {/* Visual Pre-Press Diagram & Rules Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Bleed & Margin Visualizer (Clean Light Design) */}
          <div className="lg:col-span-6 bg-slate-50 text-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-amber-700 uppercase tracking-wider">Visual Technical Guide</span>
              <h3 className="text-xl font-black text-slate-950">Understanding Bleed, Trim & Safe Zones</h3>
            </div>

            {/* Visual Box Simulator */}
            <div className="relative p-6 rounded-2xl bg-rose-50/60 border-2 border-dashed border-rose-400 flex flex-col items-center justify-center min-h-[220px]">
              <span className="absolute top-2 left-3 text-[10px] font-black text-rose-700">
                🔴 Bleed Area (Add +3mm on all 4 sides for clean cutting)
              </span>

              {/* Trim Line Box */}
              <div className="w-full h-full p-6 rounded-xl border-2 border-mg-cyan-600 bg-white shadow-xs flex flex-col items-center justify-center relative">
                <span className="absolute top-2 right-3 text-[10px] font-black text-mg-cyan-800">
                  🔵 Trim Line (Finished Product Dimension)
                </span>

                {/* Safe Zone Box */}
                <div className="w-full p-4 rounded-lg border-2 border-dashed border-emerald-500 bg-emerald-50/80 text-center space-y-1">
                  <span className="text-xs font-black text-emerald-800">
                    🟢 Safe Zone (Keep All Essential Text & Logos Here)
                  </span>
                  <p className="text-[11px] text-slate-700 font-medium">
                    Keep copy at least 3mm (0.125") inside the trim line to prevent edge cutoff during guillotining.
                  </p>
                </div>
              </div>
            </div>

            {/* Prepress Golden Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="font-extrabold text-mg-cyan-800 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-mg-cyan-600" />
                  CMYK Color Mode
                </p>
                <p className="text-slate-600 mt-1 text-[11px] font-medium">
                  Never submit RGB files to avoid unexpected shade shifts during commercial ink transfer.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="font-extrabold text-amber-800 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  300 DPI Resolution
                </p>
                <p className="text-slate-600 mt-1 text-[11px] font-medium">
                  All embedded raster photos must be 300 DPI at 100% reproduction scale to avoid pixelation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="font-extrabold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Convert Fonts to Curves
                </p>
                <p className="text-slate-600 mt-1 text-[11px] font-medium">
                  Convert all typography to curves / outlines (Ctrl+Q in CorelDraw, Ctrl+Shift+O in AI).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-slate-700" />
                  Rich Black Formula
                </p>
                <p className="text-slate-600 mt-1 text-[11px] font-medium">
                  For dark backgrounds: C:40, M:30, Y:30, K:100 for a deep, saturated rich black.
                </p>
              </div>
            </div>

            {/* Template Specs */}
            <div className="pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Standard Template Dimensions
              </h4>
              <div className="space-y-2 text-xs">
                {templates.map((tpl, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div>
                      <p className="font-black text-slate-900">{tpl.name}</p>
                      <p className="text-[10px] text-slate-500 font-semibold">{tpl.size}</p>
                    </div>
                    <span className="text-[10px] text-amber-900 font-bold bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                      {tpl.ext}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-bold text-mg-cyan-700 uppercase tracking-wider">Got Questions?</span>
              <h3 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h3>
              <p className="text-xs text-slate-500">Everything you need to know about placing print orders in Patna.</p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-slate-50 border-mg-cyan/40 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-black text-slate-900 text-sm sm:text-base"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-mg-cyan shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Need Direct Prepress Help Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-sm font-bold text-slate-900">Need artwork assistance or a custom template?</p>
                <p className="text-xs text-slate-600 mt-0.5">Send your rough file to our Patna prepress designers on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/919386992015?text=Hello%20Micro%20Graphics%20Prepress%2C%20I%20need%20help%20verifying%20my%20artwork%20file."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shrink-0"
              >
                Chat with Prepress
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
