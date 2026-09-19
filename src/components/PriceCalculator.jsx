import React, { useState, useId } from 'react';
import { Sparkles, MessageCircle, CheckCircle2, Clock, Calculator, HelpCircle, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CALCULATOR_DATA, COMPANY_INFO } from '../data/siteData';

export default function PriceCalculator({ preselectedService }) {
  const nameInputId = useId();
  const phoneInputId = useId();
  const notesInputId = useId();

  // Find initial product or fallback
  const initialProduct = CALCULATOR_DATA.products.find(p => p.id === preselectedService) || CALCULATOR_DATA.products[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [selectedSize, setSelectedSize] = useState(initialProduct.sizes[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(initialProduct.materials[0]);
  const [selectedFinish, setSelectedFinish] = useState(initialProduct.finishes[0]);
  const [quantity, setQuantity] = useState(initialProduct.defaultQty);
  const [isRush, setIsRush] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  // Client form fields
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

  // Handle product change
  const handleProductChange = (prodId) => {
    const prod = CALCULATOR_DATA.products.find(p => p.id === prodId) || CALCULATOR_DATA.products[0];
    setSelectedProduct(prod);
    setSelectedSize(prod.sizes[0]);
    setSelectedMaterial(prod.materials[0]);
    setSelectedFinish(prod.finishes[0]);
    setQuantity(prod.defaultQty);
  };

  // Pricing math calculation
  const calculatePricing = () => {
    let unitPrice = selectedProduct.baseUnitPrice;

    // Apply material factor
    unitPrice *= (selectedMaterial?.priceFactor || 1.0);

    // Apply size multiplier
    unitPrice *= (selectedSize?.multiplier || 1.0);

    // Base total before finish
    let subtotal = unitPrice * quantity;

    // Add finish cost (either per unit or fixed for banners)
    if (selectedProduct.isAreaBased) {
      subtotal += (selectedFinish?.cost || 0) * quantity;
    } else {
      subtotal += (selectedFinish?.cost || 0) * quantity;
    }

    // Volume discount tiers for bulk orders
    let discountPercent = 0;
    if (quantity >= 5000) discountPercent = 0.25;
    else if (quantity >= 2000) discountPercent = 0.18;
    else if (quantity >= 1000) discountPercent = 0.12;
    else if (quantity >= 500) discountPercent = 0.05;

    const discountAmount = subtotal * discountPercent;
    const discountedSubtotal = subtotal - discountAmount;

    // Rush delivery premium
    const rushFee = isRush ? (discountedSubtotal * 0.15 + 150) : 0;

    // Estimated total (Rounded to integer)
    const estimatedTotal = Math.round(discountedSubtotal + rushFee);
    const estimatedUnitPrice = (estimatedTotal / quantity).toFixed(2);

    return {
      subtotal: Math.round(subtotal),
      discountPercent: Math.round(discountPercent * 100),
      discountAmount: Math.round(discountAmount),
      rushFee: Math.round(rushFee),
      estimatedTotal,
      estimatedUnitPrice
    };
  };

  const pricing = calculatePricing();

  // WhatsApp Order Link Generator
  const generateWhatsAppUrl = () => {
    const message = `*MICRO GRAPHICS PATNA - PRINT ESTIMATE*
---------------------------------------
*Product:* ${selectedProduct.name}
*Size:* ${selectedSize.name}
*Material:* ${selectedMaterial.name}
*Finish:* ${selectedFinish.name}
*Quantity:* ${quantity} units
*Turnaround:* ${isRush ? '⚡ 24-Hour Express Rush' : 'Standard (48-72h)'}
*Estimated Price:* ₹${pricing.estimatedTotal.toLocaleString('en-IN')} (₹${pricing.estimatedUnitPrice}/unit)
${clientName ? `*Client Name:* ${clientName}` : ''}
${notes ? `*Special Notes:* ${notes}` : ''}
---------------------------------------
Hello Micro Graphics! I would like to confirm this order for delivery in Patna.`;

    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  // Submit quote to server endpoint
  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    if (!clientPhone || clientPhone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number for Patna dispatch.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    try {
      const payload = {
        product: selectedProduct.name,
        size: selectedSize.name,
        material: selectedMaterial.name,
        finish: selectedFinish.name,
        quantity,
        isRush,
        clientName: clientName || 'Patna Client',
        clientPhone,
        notes
      };

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => null);

      let quoteId = 'MG-' + Math.floor(100000 + Math.random() * 900000);
      if (res && res.ok) {
        const data = await res.json();
        quoteId = data.quoteId || quoteId;
      }

      setSubmittedQuote({
        quoteId,
        product: selectedProduct.name,
        total: pricing.estimatedTotal,
        turnaround: isRush ? '24 Hours (Express Rush)' : '48-72 Hours (Standard)'
      });

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-slate-100/70 text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Instant <span className="text-gradient-cmyk">Price Calculator</span> & Online Order
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Configure paper stock, dimensions, premium coatings, and quantities. Get real-time factory rates with bulk discounts for Patna & Bihar delivery.
          </p>
        </div>

        {/* Success Banner if Quote Submitted */}
        {submittedQuote && (
          <div className="mt-8 max-w-2xl mx-auto p-6 rounded-3xl bg-white border-2 border-mg-cyan shadow-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-sky-100 text-mg-cyan-600 mx-auto flex items-center justify-center border border-sky-300">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-950">
                Quote Request Registered! (ID: {submittedQuote.quoteId})
              </h3>
              <p className="text-sm text-mg-cyan-800 font-bold mt-1">
                Estimated Total: ₹{submittedQuote.total.toLocaleString('en-IN')} • {submittedQuote.turnaround}
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Our prepress engineer at Free Press Ln, Pirmuhani, Patna will review your specs and call you at {clientPhone} to confirm proofs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-mg-cyan hover:bg-mg-cyan-600 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({COMPANY_INFO.formattedPhone})</span>
              </a>
              <button
                onClick={() => setSubmittedQuote(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300"
              >
                Calculate Another Order
              </button>
            </div>
          </div>
        )}

        {/* Main Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Configurator Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 text-slate-900">
            
            {/* 1. Product Selector */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">1</span>
                Select Product Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CALCULATOR_DATA.products.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => handleProductChange(prod.id)}
                    className={`p-3 rounded-2xl text-left border text-xs font-bold transition-all duration-200 flex flex-col justify-between min-h-[70px] ${
                      selectedProduct.id === prod.id
                        ? 'bg-sky-50 border-2 border-mg-cyan-600 text-slate-950 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{prod.name}</span>
                    {selectedProduct.id === prod.id && (
                      <Check className="w-3.5 h-3.5 text-mg-cyan-600 self-end mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimensions & Size */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">2</span>
                Choose Size / Dimensions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      selectedSize.id === size.id
                        ? 'bg-amber-50 border-2 border-amber-500 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <p className="font-bold">{size.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Paper Stock / Material */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">3</span>
                Paper Stock / Material Spec
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProduct.materials.map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setSelectedMaterial(mat)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      selectedMaterial.id === mat.id
                        ? 'bg-sky-50 border-2 border-mg-cyan text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <p className="font-bold">{mat.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Coating / Finishing Options */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">4</span>
                Finishing, Lamination & Effects
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProduct.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      selectedFinish.id === finish.id
                        ? 'bg-rose-50 border-2 border-rose-500 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <p className="font-bold">{finish.name}</p>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                      {finish.cost > 0 ? `+ ₹${finish.cost}/unit` : 'Included'}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Quantity & Tier Stepper */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">5</span>
                  Order Quantity
                </label>
                {pricing.discountPercent > 0 && (
                  <span className="text-xs font-extrabold text-mg-cyan-800 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-300">
                    🎉 {pricing.discountPercent}% Bulk Volume Discount Applied
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={selectedProduct.minQty}
                  max={selectedProduct.isAreaBased ? 20 : 5000}
                  step={selectedProduct.step}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="flex-1 accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedProduct.minQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(selectedProduct.minQty, Number(e.target.value)))}
                    className="w-24 px-3 py-2 rounded-xl bg-white border-2 border-slate-300 text-slate-950 font-black text-center text-sm focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-xs text-slate-600 font-bold">
                    {selectedProduct.isAreaBased ? 'pieces' : 'units'}
                  </span>
                </div>
              </div>

              {/* Volume Discount Indicator chips */}
              <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-600 pt-1">
                <span className="font-semibold">Bulk tiers:</span>
                <span className={`px-2 py-0.5 rounded font-semibold ${quantity >= 500 ? 'bg-sky-100 text-mg-cyan-800 border border-sky-300' : 'bg-slate-100 text-slate-500'}`}>500 (5% off)</span>
                <span className={`px-2 py-0.5 rounded font-semibold ${quantity >= 1000 ? 'bg-sky-100 text-mg-cyan-800 border border-sky-300' : 'bg-slate-100 text-slate-500'}`}>1,000 (12% off)</span>
                <span className={`px-2 py-0.5 rounded font-semibold ${quantity >= 2000 ? 'bg-sky-100 text-mg-cyan-800 border border-sky-300' : 'bg-slate-100 text-slate-500'}`}>2,000 (18% off)</span>
                <span className={`px-2 py-0.5 rounded font-semibold ${quantity >= 5000 ? 'bg-sky-100 text-mg-cyan-800 border border-sky-300' : 'bg-slate-100 text-slate-500'}`}>5,000+ (25% off)</span>
              </div>
            </div>

            {/* 6. Turnaround Speed (Standard vs Rush in Patna) */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">6</span>
                Turnaround Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsRush(false)}
                  className={`p-4 rounded-2xl text-left border-2 text-xs transition-all ${
                    !isRush
                      ? 'bg-sky-50 border-mg-cyan-600 text-slate-950 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                    <span>Standard Production</span>
                    <Clock className="w-4 h-4 text-slate-500" />
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">48 - 72 Hours standard queue</p>
                  <p className="text-mg-cyan-700 font-bold mt-1 text-[11px]">Included (No extra charge)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setIsRush(true)}
                  className={`p-4 rounded-2xl text-left border-2 text-xs transition-all ${
                    isRush
                      ? 'bg-rose-50 border-rose-500 text-slate-950 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                    <span className="flex items-center gap-1.5 text-rose-700">
                      ⚡ 24-Hour Express Rush
                    </span>
                    <span className="text-[10px] bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full font-extrabold">Patna</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">Priority queue slot at Golambar workshop</p>
                  <p className="text-rose-700 font-bold mt-1 text-[11px]">+ ₹150 rush priority fee</p>
                </button>
              </div>
            </div>


          </div>

          {/* Right / Live Quote Summary & Submission Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Price Summary Card (High Contrast Light Luxury Card) */}
            <div className="bg-white border-2 border-amber-400/80 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6 text-slate-900">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">
                    Estimated Factory Price
                  </span>
                  <h3 className="text-xl font-black text-slate-950">Order Summary</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-sky-100 text-mg-cyan-800 border border-sky-300">
                  Patna Rates
                </span>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-700 border-b border-slate-100 pb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Item:</span>
                  <span className="font-bold text-slate-950 text-right">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dimensions:</span>
                  <span className="font-semibold text-slate-900">{selectedSize.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Material Stock:</span>
                  <span className="font-semibold text-slate-900">{selectedMaterial.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Finishing:</span>
                  <span className="font-semibold text-slate-900">{selectedFinish.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Quantity:</span>
                  <span className="font-black text-slate-950">{quantity} units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Production Queue:</span>
                  <span className={isRush ? 'text-rose-700 font-bold' : 'text-mg-cyan-700 font-semibold'}>
                    {isRush ? '⚡ 24-Hour Express' : 'Standard 48-72h'}
                  </span>
                </div>

                {pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-mg-cyan-700 font-extrabold pt-1">
                    <span>Bulk Savings:</span>
                    <span>- ₹{pricing.discountAmount.toLocaleString('en-IN')} ({pricing.discountPercent}%)</span>
                  </div>
                )}
                {isRush && (
                  <div className="flex justify-between text-rose-700 font-semibold">
                    <span>Rush Priority Slot:</span>
                    <span>+ ₹{pricing.rushFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Big Price Display */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-4 rounded-2xl border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-900 uppercase font-bold tracking-wider">Estimated Total</span>
                  <p className="text-3xl sm:text-4xl font-black text-amber-700">
                    ₹{pricing.estimatedTotal.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Approx. <span className="text-slate-950 font-bold">₹{pricing.estimatedUnitPrice}</span> per unit (incl. finish)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] px-2.5 py-1 rounded bg-sky-100 text-mg-cyan-800 font-extrabold border border-sky-300">
                    Best Value
                  </span>
                </div>
              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-3 pt-1">
                {formError && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={nameInputId} className="sr-only">Your Name</label>
                    <input
                      id={nameInputId}
                      type="text"
                      placeholder="Your Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor={phoneInputId} className="sr-only">Phone Number (Patna)</label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      placeholder="Phone (9386992015)*"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={notesInputId} className="sr-only">Specific instructions or delivery area in Patna</label>
                  <input
                    id={notesInputId}
                    type="text"
                    placeholder="Specific instructions or delivery area in Patna"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-mg-cyan-600 focus:bg-white"
                  />
                </div>

                {/* Primary WhatsApp Action */}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-mg-cyan hover:bg-mg-cyan-600 shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp (+91 9386992015)</span>
                </a>

                {/* Secondary Server Quote Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{isSubmitting ? 'Registering...' : 'Register Formal Quote Online'}</span>
                </button>
              </form>

              {/* Patna Local Delivery Promise */}
              <div className="pt-1 text-center text-[11px] text-slate-500 font-medium">
                <p>📍 Direct pickup at Golambar, Pirmuhani or fast dispatch across Patna & Bihar.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
