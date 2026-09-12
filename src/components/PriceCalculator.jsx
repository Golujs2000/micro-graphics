import React, { useState, useId } from 'react';
import { Sparkles, MessageCircle, UploadCloud, CheckCircle2, Clock, Calculator, HelpCircle, FileText, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CALCULATOR_DATA, COMPANY_INFO } from '../data/siteData';

export default function PriceCalculator({ preselectedService, preloadedFile }) {
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
  const [uploadedFile, setUploadedFile] = useState(preloadedFile || null);
  const [fileUploading, setFileUploading] = useState(false);
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
      // For banners: finish is often fixed per banner piece
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

  // File drop/upload handlers
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileUploading(true);
    // Simulate / execute server upload
    try {
      const formData = new FormData();
      formData.append('artwork', file);

      // Attempt to hit backend, fallback gracefully
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      }).catch(() => null);

      if (res && res.ok) {
        const data = await res.json();
        setUploadedFile({ name: file.name, size: file.size, serverUrl: data.file?.url });
      } else {
        setUploadedFile({ name: file.name, size: file.size });
      }
    } catch (err) {
      setUploadedFile({ name: file.name, size: file.size });
    } finally {
      setFileUploading(false);
    }
  };

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
${uploadedFile ? `*Artwork:* File Attached (${uploadedFile.name})` : '*Artwork:* Will provide via chat'}
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
        notes,
        uploadedFile: uploadedFile?.name || null
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
    <section id="calculator" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background CMYK Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mg-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mg-gold/10 text-mg-gold border border-mg-gold/20 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Instant <span className="text-gradient-cmyk">Price Calculator</span> & Online Order
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Configure paper stock, dimensions, premium coatings, and quantities. Get real-time factory rates with bulk discounts for Patna & Bihar delivery.
          </p>
        </div>

        {/* Success Banner if Quote Submitted */}
        {submittedQuote && (
          <div className="mt-8 max-w-2xl mx-auto p-6 rounded-3xl bg-emerald-950/90 border border-emerald-500/50 shadow-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Quote Request Registered! (ID: {submittedQuote.quoteId})
              </h3>
              <p className="text-sm text-emerald-200 mt-1">
                Estimated Total: ₹{submittedQuote.total.toLocaleString('en-IN')} • {submittedQuote.turnaround}
              </p>
              <p className="text-xs text-slate-300 mt-2">
                Our prepress engineer at Free Press Ln, Pirmuhani, Patna will review your specs and call you at {clientPhone} to confirm proofs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({COMPANY_INFO.formattedPhone})</span>
              </a>
              <button
                onClick={() => setSubmittedQuote(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Calculate Another Order
              </button>
            </div>
          </div>
        )}

        {/* Main Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Configurator Panel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-8">
            
            {/* 1. Product Selector */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">1</span>
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
                        ? 'bg-mg-cyan/20 border-mg-cyan text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span>{prod.name}</span>
                    {selectedProduct.id === prod.id && (
                      <Check className="w-3.5 h-3.5 text-mg-cyan self-end mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimensions & Size */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">2</span>
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
                        ? 'bg-mg-gold/20 border-mg-gold text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold">{size.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Paper Stock / Material */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">3</span>
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
                        ? 'bg-emerald-500/20 border-emerald-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold">{mat.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Coating / Finishing Options */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">4</span>
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
                        ? 'bg-mg-magenta/20 border-mg-magenta text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold">{finish.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {finish.cost > 0 ? `+ ₹${finish.cost}/unit` : 'Included'}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Quantity & Tier Stepper */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">5</span>
                  Order Quantity
                </label>
                {pricing.discountPercent > 0 && (
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
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
                  className="flex-1 accent-mg-gold h-2 bg-slate-700 rounded-lg cursor-pointer"
                />

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedProduct.minQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(selectedProduct.minQty, Number(e.target.value)))}
                    className="w-24 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-center text-sm focus:outline-none focus:border-mg-gold"
                  />
                  <span className="text-xs text-slate-400 font-semibold">
                    {selectedProduct.isAreaBased ? 'pieces' : 'units'}
                  </span>
                </div>
              </div>

              {/* Volume Discount Indicator chips */}
              <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-400 pt-1">
                <span>Bulk tiers:</span>
                <span className={`px-2 py-0.5 rounded ${quantity >= 500 ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900 text-slate-500'}`}>500 (5% off)</span>
                <span className={`px-2 py-0.5 rounded ${quantity >= 1000 ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900 text-slate-500'}`}>1,000 (12% off)</span>
                <span className={`px-2 py-0.5 rounded ${quantity >= 2000 ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900 text-slate-500'}`}>2,000 (18% off)</span>
                <span className={`px-2 py-0.5 rounded ${quantity >= 5000 ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900 text-slate-500'}`}>5,000+ (25% off)</span>
              </div>
            </div>

            {/* 6. Turnaround Speed (Standard vs Rush in Patna) */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">6</span>
                Turnaround Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsRush(false)}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all ${
                    !isRush
                      ? 'bg-slate-900 border-mg-cyan text-white shadow-md'
                      : 'bg-slate-900/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-white">
                    <span>Standard Production</span>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-slate-400 mt-1 text-[11px]">48 - 72 Hours standard queue</p>
                  <p className="text-emerald-400 font-bold mt-1 text-[11px]">Included (No extra charge)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setIsRush(true)}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all ${
                    isRush
                      ? 'bg-mg-magenta/20 border-mg-magenta text-white shadow-md'
                      : 'bg-slate-900/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-white">
                    <span className="flex items-center gap-1.5 text-rose-300">
                      ⚡ 24-Hour Express Rush
                    </span>
                    <span className="text-[10px] bg-rose-500/30 text-rose-300 px-2 py-0.5 rounded-full font-extrabold">Patna</span>
                  </div>
                  <p className="text-slate-300 mt-1 text-[11px]">Priority queue slot at Golambar workshop</p>
                  <p className="text-rose-400 font-bold mt-1 text-[11px]">+ ₹150 rush priority fee</p>
                </button>
              </div>
            </div>

            {/* 7. File Upload Section */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-mg-cyan text-slate-950 flex items-center justify-center text-[10px] font-black">7</span>
                  Upload Artwork File (Optional)
                </span>
                <span className="text-[10px] text-slate-400">PDF, CDR, AI, PSD, TIFF, JPG (Max 50MB)</span>
              </label>

              <div className="border-2 border-dashed border-slate-700 hover:border-mg-cyan rounded-2xl p-4 text-center bg-slate-900/60 relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.cdr,.ai,.eps,.psd,.tiff,.jpg,.jpeg,.png,.zip"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {uploadedFile ? (
                  <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl">
                    <div className="flex items-center gap-2.5 text-left">
                      <FileText className="w-6 h-6 text-mg-cyan" />
                      <div>
                        <p className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                          {uploadedFile.name}
                        </p>
                        <p className="text-[10px] text-emerald-400">
                          File ready for prepress verification
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFile(null);
                      }}
                      className="text-xs text-rose-400 hover:underline px-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-2">
                    <UploadCloud className="w-7 h-7 text-mg-cyan mb-1" />
                    <p className="text-xs font-bold text-slate-300">
                      {fileUploading ? 'Uploading artwork...' : 'Click to attach print artwork or drag here'}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      Don't have artwork yet? You can also send designs later via WhatsApp.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right / Live Quote Summary & Submission Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Price Summary Card */}
            <div className="bg-gradient-to-b from-slate-800 via-slate-900 to-mg-navy border-2 border-mg-gold/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-mg-gold">
                    Estimated Factory Price
                  </span>
                  <h3 className="text-lg font-black text-white">Order Summary</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-mg-cyan/20 text-mg-cyan border border-mg-cyan/30">
                  Patna Rates
                </span>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-700/80 pb-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Item:</span>
                  <span className="font-bold text-white text-right">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-200">{selectedSize.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Material Stock:</span>
                  <span className="font-semibold text-slate-200">{selectedMaterial.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Finishing:</span>
                  <span className="font-semibold text-slate-200">{selectedFinish.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantity:</span>
                  <span className="font-bold text-white">{quantity} units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Production Queue:</span>
                  <span className={isRush ? 'text-rose-400 font-bold' : 'text-emerald-400 font-semibold'}>
                    {isRush ? '⚡ 24-Hour Express' : 'Standard 48-72h'}
                  </span>
                </div>

                {pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold pt-1">
                    <span>Bulk Savings:</span>
                    <span>- ₹{pricing.discountAmount.toLocaleString('en-IN')} ({pricing.discountPercent}%)</span>
                  </div>
                )}
                {isRush && (
                  <div className="flex justify-between text-rose-400 font-semibold">
                    <span>Rush Priority Slot:</span>
                    <span>+ ₹{pricing.rushFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Big Price Display */}
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Estimated Total</span>
                  <p className="text-3xl sm:text-4xl font-black text-mg-gold">
                    ₹{pricing.estimatedTotal.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Approx. <span className="text-white font-bold">₹{pricing.estimatedUnitPrice}</span> per unit (incl. finish)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-extrabold">
                    Best Value
                  </span>
                </div>
              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-3 pt-1">
                {formError && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mg-cyan"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mg-cyan"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mg-cyan"
                  />
                </div>

                {/* Primary WhatsApp Action */}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp (+91 9386992015)</span>
                </a>

                {/* Secondary Server Quote Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-mg-gold" />
                  <span>{isSubmitting ? 'Registering...' : 'Register Formal Quote Online'}</span>
                </button>
              </form>

              {/* Patna Local Delivery Promise */}
              <div className="pt-2 text-center text-[11px] text-slate-400">
                <p>📍 Direct pickup at Golambar, Pirmuhani or fast dispatch across Patna & Bihar.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
