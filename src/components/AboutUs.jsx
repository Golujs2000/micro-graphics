import React from 'react';
import { ShieldCheck, Leaf, Cpu, Award, MapPin, Phone, Users, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function AboutUs() {
  const machinery = [
    {
      name: "Heidelberg 4-Color Offset Press",
      use: "Commercial High-Volume Runs",
      desc: "German precision engineering delivering 12,000 sheets/hour with automatic ink-zone calibration."
    },
    {
      name: "Konica Minolta AccurioPress",
      use: "Digital Same-Day Express",
      desc: "Ultra-high resolution 2400 DPI photographic printing on art cards up to 400 GSM."
    },
    {
      name: "Roland 10ft Eco-Solvent Plotters",
      use: "Outdoor Signage & Flex Banners",
      desc: "Wide-format outdoor graphics with weather-tested UV and solvent resistance."
    },
    {
      name: "Automated Thermal Laminators & Die-Cutters",
      use: "Finishing & Packaging",
      desc: "Velvet soft-touch, gloss, matte laminations and laser-sharp custom box die-cutting."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workshop Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src={COMPANY_INFO.coverPhoto}
                alt="Micro Graphics Printing Workshop at Free Press Ln, Pirmuhani, Golambar, Patna"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-mg-gold text-slate-950 uppercase tracking-wider">
                  Inside Our Patna Press
                </span>
                <p className="text-base sm:text-lg font-black">
                  Micro Graphics Industrial Workshop
                </p>
                <p className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-mg-cyan" />
                  Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna
                </p>
              </div>
            </div>

            {/* Badge floating */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-mg-navy text-white p-4 rounded-2xl shadow-xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-mg-cyan/20 flex items-center justify-center text-mg-cyan">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-black text-mg-gold">15+ Years</p>
                <p className="text-xs text-slate-300 font-medium">Patna’s Trusted Print Partner</p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mg-gold/10 text-amber-700 border border-mg-gold/20 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Micro Graphics
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Transforming Digital Ideas into <span className="text-gradient-cmyk">Physical Reality in Patna</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in the bustling commercial heart of Golambar, Pirmuhani, <strong>Micro Graphics</strong> (mgfx) has grown into one of Patna’s most technologically advanced commercial printing powerhouses.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine traditional German offset craftsmanship with state-of-the-art Japanese digital printing systems. Whether an entrepreneur printing their first 100 visiting cards or a statewide retail chain rolling out 500 outdoor hoardings across Bihar, our facility treats every micron of ink with obsessive perfection.
            </p>

            {/* Core Values / Eco-Friendly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Leaf className="w-4 h-4 text-emerald-500" />
                  <span>Eco-Friendly Soy Inks</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Non-toxic, bio-degradable inks and FSC-certified paper options.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-mg-cyan" />
                  <span>Color Proof Guarantee</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Zero deviation from approved digital proof to final print run.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-slate-800 shadow-md"
              >
                Visit Our Patna Workshop
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-mg-cyan-700 hover:text-mg-cyan-800"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 9386992015</span>
              </a>
            </div>

          </div>

        </div>

        {/* Machinery Fleet Showcase */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-mg-cyan-700">Production Capacity</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Our Advanced Printing Machinery Fleet
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Modern heavy machinery housed inside our Free Press Ln facility ensures uncompromised speed and fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machinery.map((mach, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mg-gold transition-all duration-300 space-y-2">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                  {mach.use}
                </span>
                <h4 className="text-base font-black text-slate-900">{mach.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{mach.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
