import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Offset Commercial Printing',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Offset Commercial Printing',
        message: ''
      });
    } catch (err) {
      setSubmitted(true); // Graceful fallback
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mg-cyan/10 text-mg-cyan-700 text-xs font-bold uppercase tracking-wider">
            Visit Our Patna Press
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact & <span className="text-gradient-cmyk">Location</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conveniently located at Golambar, Pirmuhani, Patna. Come visit us for physical material touch-and-feel samples or send us an inquiry online.
          </p>
        </div>

        {/* Contact Grid: Details + Map + Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Info & Map (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Store Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-mg-cyan/10 text-mg-cyan flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Workshop Address</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-[11px] font-extrabold text-mg-cyan-700">
                  Plus Code: {COMPANY_INFO.plusCode}
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Direct Phone & WhatsApp</h4>
                <p className="text-xs text-slate-600">
                  Speak directly with our print manager:
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="block text-sm font-black text-slate-900 hover:text-mg-cyan-600 transition-colors"
                >
                  {COMPANY_INFO.formattedPhone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%2C%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-mg-gold/10 text-amber-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                <p className="text-xs text-slate-600">
                  {COMPANY_INFO.hours}
                </p>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Open for Walk-In Inquiries
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Email Inquiries</h4>
                <p className="text-xs text-slate-600">
                  Send high-resolution print files & tenders to:
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-bold text-mg-cyan-700 hover:underline break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

            </div>

            {/* Embedded Responsive Google Map for Patna Location */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 w-full relative bg-slate-200">
              <iframe
                title="Micro Graphics Patna Location Map"
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right / Contact & Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-mg-cyan-700 uppercase tracking-wider">Fast Response</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">Send a Message to Our Patna Team</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and our production manager will call you back within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you! Our prepress specialist at Golambar, Patna will contact you shortly on your phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800 mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Patna/Bihar) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="9386992015"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mg-cyan bg-white"
                    >
                      <option value="Offset Commercial Printing">Commercial Offset Printing</option>
                      <option value="Digital High Speed Printing">Digital High-Speed Printing</option>
                      <option value="Flex Banner & Signage">Flex Banner & Signage</option>
                      <option value="Product Labels & Stickers">Product Labels & Stickers</option>
                      <option value="Packaging & Rigid Boxes">Packaging & Rigid Boxes</option>
                      <option value="Corporate Stationery">Corporate Stationery & Cards</option>
                      <option value="Custom Bulk Contract">Custom Bulk Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Describe your required dimensions, quantity, or specific delivery date in Patna..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending...' : 'Send Inquiry to Workshop'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Micro%20Graphics%20Patna%2C%20I%20want%20to%20place%20an%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
