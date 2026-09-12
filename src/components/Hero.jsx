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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-mg-navy to-slate-950 text-white">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-mg-cyan/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-mg-gold/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-mg-magenta/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Local Patna Printing Authority */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-mg-cyan animate-ping"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Patna’s Most Trusted Printing Hub • Golambar / Pirmuhani
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]">
              Your Business, <br className="hidden sm:inline" />
              <span className="text-gradient-cmyk">Our Printing Expertise.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              State-of-the-art commercial <span className="text-white font-semibold">Heidelberg Offset</span>, high-speed <span className="text-white font-semibold">Digital Color</span>, weatherproof <span className="text-white font-semibold">Flex Banners</span>, and precision <span className="text-white font-semibold">Product Packaging</span> at unbeatable direct factory rates in Patna.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>24-Hour Express Rush Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>300 DPI High-Def Color Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Zero Middlemen Factory Direct Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Free Pre-Press Art Inspection</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-mg-gold to-amber-400 hover:from-amber-400 hover:to-mg-gold shadow-lg hover:shadow-glow-gold transition-all duration-200 hover:scale-105 group"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Calculate Instant Price</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-all duration-200 hover:scale-105"
              >
                <span>Explore 10+ Categories</span>
              </a>
            </div>

            {/* Local Phone Callout */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <Clock className="w-4 h-4 text-mg-gold" />
              <span>Need urgent prints in Patna today? Call workshop direct:</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-mg-cyan font-bold hover:underline">
                {COMPANY_INFO.formattedPhone}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive "Upload & Print" Quick Dropzone & Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Decorative CMYK Frame Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-mg-cyan via-mg-gold to-mg-magenta opacity-50 blur-lg group-hover:opacity-75 transition duration-1000"></div>

              {/* Fast-Track Upload Card */}
              <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-mg-gold" />
                      Upload & Print in Patna
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fast-track your artwork for instant review & quote
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
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
                      ? 'border-mg-cyan bg-mg-cyan/10 scale-[1.02]'
                      : 'border-slate-700 hover:border-mg-gold bg-slate-950/60'
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
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mg-cyan/20 to-mg-gold/20 flex items-center justify-center border border-slate-700 text-mg-cyan">
                      <UploadCloud className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Drag & Drop your artwork here, or <span className="text-mg-gold underline">browse</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Supports: PDF, CDR, AI, PSD, TIFF, High-Res JPG/PNG (Up to 50MB)
                      </p>
                    </div>

                    {quickUploadedFile && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300">
                        <FileCheck className="w-4 h-4 text-emerald-400" />
                        <span>Ready: {quickUploadedFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct Launch to Full Calculator */}
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-extrabold text-slate-950 bg-mg-cyan hover:bg-mg-cyan-400 transition-all duration-200 shadow-md hover:shadow-glow-cyan"
                >
                  <span>Configure Size, Material & Finish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Prepress Assurance Micro-banner */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-mg-cyan" />
                    Strict Privacy Guaranteed
                  </span>
                  <span className="text-slate-500">•</span>
                  <span>Direct WhatsApp Updates</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Stats Counters Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-mg-gold">{COMPANY_INFO.experienceYears}</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Years Serving Patna & Bihar</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-mg-cyan">{COMPANY_INFO.projectsCompleted}</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Completed Print Orders</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-emerald-400">{COMPANY_INFO.clientSatisfaction}</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Client Satisfaction Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-mg-magenta">{COMPANY_INFO.rushTurnaround}</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Same-Day Emergency Service</p>
          </div>
        </div>

      </div>
    </section>
  );
}
