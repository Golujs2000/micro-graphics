import React, { useState } from 'react';
import { Sparkles, UploadCloud, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award, Clock, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Hero({ onOpenQuote, onSelectService }) {
  const [dragActive, setDragActive] = useState(false);
  const [quickUploadedFile, setQuickUploadedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setQuickUploadedFile(file);
      onOpenQuote({ preloadedFile: file });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setQuickUploadedFile(file);
      onOpenQuote({ preloadedFile: file });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-sky-50/40 text-slate-900 border-b border-slate-200">
      {/* Background Subtle Luminous Tint Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-mg-cyan/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-rose-200/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Local Printing Authority */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-mg-cyan animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Patna’s Most Trusted Printing Hub • Golambar / Pirmuhani
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-slate-950">
              Your Business, <br className="hidden sm:inline" />
              <span className="text-gradient-cmyk">Our Printing Expertise.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Commercial <span className="text-slate-950 font-bold">Heidelberg Offset</span>, high-speed <span className="text-slate-950 font-bold">Digital Color</span>, weatherproof <span className="text-slate-950 font-bold">Flex Banners</span>, and precision <span className="text-slate-950 font-bold">Product Packaging</span> at unbeatable direct factory rates in Patna.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>24-Hour Express Rush Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>300 DPI High-Def Color Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero Middlemen Factory Direct Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Free Pre-Press Art Inspection</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-mg-gold to-amber-500 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Calculate Instant Price</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all duration-200 hover:scale-105"
              >
                <span>Explore 10+ Categories</span>
              </a>
            </div>

            {/* Local Phone Callout */}
            <div className="pt-2 text-xs text-slate-600 flex items-center justify-center lg:justify-start gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Need urgent prints in Patna today? Call workshop direct:</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-mg-cyan-700 font-extrabold hover:underline">
                {COMPANY_INFO.formattedPhone}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive "Upload & Print" Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Subtle Decorative Frame Accent */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-mg-cyan via-amber-400 to-rose-400 opacity-30 blur-md"></div>

              {/* Fast-Track Upload Card */}
              <div className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500" />
                      Upload & Print in Patna
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fast-track your artwork for instant review & quote
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Active Queue
                  </span>
                </div>

                {/* Drag and Drop Zone */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                    dragActive
                      ? 'border-mg-cyan bg-sky-50 scale-[1.02]'
                      : 'border-slate-300 hover:border-mg-cyan bg-slate-50'
                  }`}
                >
                  <input
                    type="file"
                    id="hero-file-input"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept=".pdf,.cdr,.ai,.eps,.psd,.tiff,.jpg,.jpeg,.png,.zip"
                  />

                  <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                    <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center border border-sky-200 text-mg-cyan-700">
                      <UploadCloud className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Drag & Drop artwork here, or <span className="text-mg-cyan-700 underline">browse</span>
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Supports: PDF, CDR, AI, PSD, TIFF, JPG/PNG (Up to 50MB)
                      </p>
                    </div>

                    {quickUploadedFile && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 font-bold">
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                        <span>Ready: {quickUploadedFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct Launch to Full Calculator */}
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-extrabold text-white bg-mg-cyan-600 hover:bg-mg-cyan-700 transition-all duration-200 shadow-md"
                >
                  <span>Configure Size, Material & Finish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Prepress Assurance Micro-banner */}
                <div className="flex items-center justify-between text-[11px] text-slate-600 bg-slate-100 p-3 rounded-xl border border-slate-200">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-mg-cyan-700" />
                    Strict Privacy Guaranteed
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium">Direct WhatsApp Updates</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Stats Counters Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-amber-600">{COMPANY_INFO.experienceYears}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Years Experience (Est. {COMPANY_INFO.establishedYear})</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-mg-cyan-700">{COMPANY_INFO.projectsCompleted}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Completed Print Orders</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600">{COMPANY_INFO.clientSatisfaction}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Client Satisfaction Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <p className="text-3xl sm:text-4xl font-black text-rose-600">{COMPANY_INFO.rushTurnaround}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-bold">Same-Day Emergency Service</p>
          </div>
        </div>

      </div>
    </section>
  );
}
