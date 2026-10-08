import React, { useState } from 'react';
import { 
  Phone, MessageCircle, Mail, MapPin, Globe, Download, Share2, 
  Check, Copy, Clock, ShieldCheck, Award, Sparkles, Building, 
  ExternalLink, QrCode, ChevronRight, Send, ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, TRUSTED_CLIENTS } from '../data/siteData';
import Logo from '../components/Logo';

export default function DigitalVisitingCardPage() {
  const [copiedField, setCopiedField] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [selectedService, setSelectedService] = useState('Flex Printing & Hoardings');
  const [customRequirement, setCustomRequirement] = useState('');

  const cardUrl = typeof window !== 'undefined' ? window.location.href : 'https://micrographics-patna.web.app/card';

  const copyToClipboard = (text, fieldName) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Micro Graphics - Digital Visiting Card',
          text: `Micro Graphics | Commercial Printing & Signage Solutions in Patna. Contact ${COMPANY_INFO.owner}.`,
          url: cardUrl,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(cardUrl, 'cardLink');
        }
      }
    } else {
      copyToClipboard(cardUrl, 'cardLink');
    }
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Kumar;Dhananjay;;;
FN:Dhananjay Kumar
ORG:Micro Graphics
TITLE:Founder & Managing Director
TEL;TYPE=WORK,VOICE:+919386992015
TEL;TYPE=CELL,VOICE:+919304097965
EMAIL;TYPE=PREF,INTERNET:${COMPANY_INFO.email}
URL:https://micrographics-patna.web.app
ADR;TYPE=WORK:;;Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar;Patna;Bihar;800001;India
NOTE:Micro Graphics — Commercial Printing, Outdoor Flex Hoardings, LED Glow Signs, 3D Acrylic Letters & Offset Press in Patna. Estd 2011.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Micro_Graphics_Dhananjay_Kumar.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const message = `Hello Dhananjay ji (Micro Graphics), I found your Digital Visiting Card.\n\n*Service Needed:* ${selectedService}\n*Details:* ${customRequirement || 'Please provide quotation and specifications.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const coreServices = [
    { title: 'Flex & Star Hoardings', desc: 'Heavy frontlit & backlit flex from ₹8/sq.ft' },
    { title: 'LED Glow Sign Boards', desc: 'GSB backlit shop signs with waterproof LEDs' },
    { title: '3D Acrylic Letters', desc: 'Laser-cut raised letters with LED modules' },
    { title: 'Frosted Glass Film', desc: 'Cabin privacy film with computer-cut logos' },
    { title: 'Commercial Offset', desc: 'Heidelberg multi-color catalogs, books & flyers' },
    { title: 'Corporate Visiting Cards', desc: 'Luxury velvet matte & Spot UV visiting cards' },
    { title: 'Packaging Boxes & Labels', desc: 'Mono cartons & waterproof die-cut stickers' },
    { title: 'Canopies & Standees', desc: 'Roll-up exhibition standees & promo tents' },
    { title: 'Custom T-Shirts & Caps', desc: 'Corporate polo, collar & round-neck tees' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        
        {/* Top Control Bar: Download & Share */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Official Digital vCard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQR(!showQR)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700 shadow-sm"
              title="Show QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-400" />
              <span>QR Code</span>
            </button>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700 shadow-sm"
              title="Share Card"
            >
              <Share2 className="w-3.5 h-3.5 text-mg-cyan" />
              <span>{copiedField === 'cardLink' ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* QR Code Modal / Drawer */}
        {showQR && (
          <div className="mb-6 p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md text-center shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="inline-block p-4 bg-white rounded-2xl shadow-xl">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(cardUrl)}&margin=10`}
                alt="Micro Graphics Visiting Card QR Code"
                className="w-44 h-44 mx-auto object-contain rounded-lg"
              />
            </div>
            <p className="mt-3 text-sm font-bold text-white">Scan with any phone camera</p>
            <p className="text-xs text-slate-400 mt-0.5">Instantly saves & opens Micro Graphics Visiting Card</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-3 text-xs text-amber-400 hover:underline font-bold"
            >
              Close QR Code
            </button>
          </div>
        )}

        {/* Main Digital Visiting Card Canvas */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          
          {/* Header Gradient Top Banner */}
          <div className="relative h-40 bg-gradient-to-r from-mg-cyan-900 via-slate-900 to-amber-900/60 p-6 flex flex-col justify-between overflow-hidden">
            {/* Subtle decorative circles */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 rounded-full bg-mg-cyan/10 blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 text-amber-400 text-[11px] font-black border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Commercial Press
              </span>
              <span className="text-[11px] font-bold text-slate-300 bg-slate-950/70 px-2.5 py-1 rounded-full border border-slate-800">
                Estd. 2011 • Patna
              </span>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                15+ Years Printing Leadership
              </span>
              <span className="text-xs font-black text-mg-cyan bg-slate-950/80 px-2 py-0.5 rounded border border-mg-cyan/40">
                24-Hour Express Rush
              </span>
            </div>
          </div>

          {/* Profile Header Block */}
          <div className="px-6 pt-0 pb-6 relative">
            
            {/* Avatar / Brand Logo Badge */}
            <div className="-mt-14 mb-4 flex items-end justify-between">
              <div className="w-24 h-24 rounded-2xl bg-slate-950 p-2 border-2 border-amber-500/50 shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/micro graphics icon.jpg"
                  alt="Micro Graphics Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Save Contact (vCard) Main Button */}
              <button
                onClick={downloadVCard}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Save to Contacts</span>
              </button>
            </div>

            {/* Name, Designation & Brand Title */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white tracking-tight">
                  {COMPANY_INFO.owner}
                </h1>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-sm font-bold text-amber-400 mt-0.5">
                Founder & Managing Director
              </p>
              
              <div className="mt-2.5 pt-2.5 border-t border-slate-800">
                <Logo variant="dark" size="sm" />
                <p className="text-xs text-slate-400 mt-1.5 font-medium leading-relaxed">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>

            {/* Quick 1-Tap Action Buttons Grid */}
            <div className="grid grid-cols-4 gap-2.5 mt-6">
              {/* Call 1 */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-500/40 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200">Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Dhananjay%20ji,%20I%20am%20viewing%20your%20Digital%20Visiting%20Card%20and%20need%20a%20printing%20estimate.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-emerald-500/40 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200">WhatsApp</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-mg-cyan/10 text-mg-cyan flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200">Email</span>
              </a>

              {/* Maps Directions */}
              <a
                href="https://maps.google.com/?q=Micro+Graphics+Pirmuhani+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-red-500/40 text-center transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200">Locate Us</span>
              </a>
            </div>

            {/* Detailed Contact List (with Copy buttons) */}
            <div className="mt-6 space-y-2.5">
              
              {/* Primary Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Primary Phone</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-extrabold text-white hover:text-amber-400 transition-colors">
                      {COMPANY_INFO.formattedPhone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.phone, 'phone1')}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="Copy number"
                >
                  {copiedField === 'phone1' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Secondary / Workshop</p>
                    <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="text-sm font-extrabold text-white hover:text-amber-400 transition-colors">
                      +91 {COMPANY_INFO.secondaryPhone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.secondaryPhone, 'phone2')}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="Copy number"
                >
                  {copiedField === 'phone2' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-mg-cyan flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Official Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-mg-cyan transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.email, 'email')}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Workshop Address */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Registered Workshop & Office</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 leading-snug">
                        {COMPANY_INFO.address}
                      </p>
                      <p className="text-[11px] text-amber-400 mt-1 font-mono">
                        Google Plus Code: {COMPANY_INFO.plusCode}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.address, 'address')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy address"
                  >
                    {copiedField === 'address' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Operating Hours</p>
                  <p className="text-xs font-semibold text-slate-200">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Core Services Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-400" />
                  Printing & Signage Portfolio
                </h3>
                <span className="text-[11px] text-slate-400 font-bold">9 Core Categories</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coreServices.map((svc, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedService(svc.title);
                      const el = document.getElementById('inquiryForm');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-800/40 cursor-pointer transition-all"
                  >
                    <p className="text-xs font-black text-slate-100 flex items-center justify-between">
                      <span>{svc.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {svc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Clients Trust Strip */}
            <div className="mt-8 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
              <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5 text-center">
                Trusted by 500+ Top Enterprises & Institutions
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {TRUSTED_CLIENTS.slice(0, 8).map((client, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-[11px] font-bold text-slate-300"
                  >
                    {client.name}
                  </span>
                ))}
              </div>
            </div>

            {/* 1-Click WhatsApp Quick Quote Form */}
            <div id="inquiryForm" className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-amber-400" />
                Send Instant Inquiry to Dhananjay ji
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select your service and send direct message to WhatsApp for quick quote.
              </p>

              <form onSubmit={handleSendInquiry} className="mt-3.5 space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Select Requirement:
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-white focus:outline-hidden focus:border-amber-400"
                  >
                    {coreServices.map((svc, idx) => (
                      <option key={idx} value={svc.title}>{svc.title}</option>
                    ))}
                    <option value="Custom Printing Project">Custom Printing Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Your Requirements / Size / Quantity:
                  </label>
                  <input
                    type="text"
                    value={customRequirement}
                    onChange={(e) => setCustomRequirement(e.target.value)}
                    placeholder="e.g. 10x4 ft flex banner, urgent in 24 hours"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Bottom Footer Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-white">Micro Graphics — Patna</p>
                <p className="text-[11px] text-slate-500">Free Press Ln, Pirmuhani, Golambar, Patna - 800001</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-300 transition-colors flex items-center gap-1"
                >
                  <Globe className="w-3 h-3 text-mg-cyan" />
                  Main Website
                </a>
                <button
                  onClick={downloadVCard}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/40 text-[11px] font-bold transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Save vCard
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
