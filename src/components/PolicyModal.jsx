import React from 'react';
import { X, Shield, RefreshCw, Truck, FileText } from 'lucide-react';

export default function PolicyModal({ policyType, onClose }) {
  if (!policyType) return null;

  const policies = {
    shipping: {
      title: "Shipping & Local Patna Delivery Policy",
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At <strong>Micro Graphics</strong>, we understand that deadlines for printing jobs are sacred.
          </p>
          <h4 className="font-bold text-slate-900">1. Local Patna Deliveries</h4>
          <p>
            We provide direct local delivery across Patna (including Boring Road, Kankarbagh, Fraser Road, Bailey Road, Patliputra, Danapur, and Gandhi Maidan) via dedicated riders or express delivery partners. Same-day delivery is available for eligible digital and 24-Hour Express rush orders.
          </p>
          <h4 className="font-bold text-slate-900">2. Rest of Bihar Courier Shipping</h4>
          <p>
            Orders for other districts in Bihar (Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Begusarai, etc.) are securely packaged in moisture-proof corrugated cartons and dispatched via trusted express couriers (DTDC, Blue Dart, or transport services for heavy bulk flex/paper pallets). Standard transit time is 24 to 48 hours.
          </p>
          <h4 className="font-bold text-slate-900">3. In-Store Workshop Pickup</h4>
          <p>
            Clients may pick up completed print orders directly from our Golambar facility at <em>Free Press Ln, Pirmuhani, Salimpur Ahra, Patna - 800001</em> during operational hours (9:30 AM – 8:30 PM).
          </p>
        </div>
      )
    },
    returns: {
      title: "Returns, Reprints & Quality Guarantee",
      icon: RefreshCw,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900">1. 100% Quality & Reprint Commitment</h4>
          <p>
            Because all print jobs are custom-manufactured to your exact specifications, we do not accept general merchandise returns. However, if there is a manufacturing defect, incorrect binding, wrong paper GSM, or noticeable print flaw caused by our equipment that deviates from your approved digital proof, we will <strong>reprint your job free of charge</strong> or issue a credit note.
          </p>
          <h4 className="font-bold text-slate-900">2. Reporting a Quality Discrepancy</h4>
          <p>
            Please inspect your prints within 48 hours of receipt. If you identify any defect, send clear photos or bring the batch to our workshop along with your Quote/Invoice ID. Our quality manager will inspect the batch and initiate a rush reprint.
          </p>
          <h4 className="font-bold text-slate-900">3. Artwork Approval Disclaimer</h4>
          <p>
            Micro Graphics is not liable for typographical errors, spelling mistakes, low image resolution (under 300 DPI), or color variance caused by RGB file submissions once the client gives final proof approval.
          </p>
        </div>
      )
    },
    privacy: {
      title: "Privacy & Data Protection Policy",
      icon: Shield,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Micro Graphics respects the confidentiality of your personal information, corporate branding files, and intellectual property.
          </p>
          <h4 className="font-bold text-slate-900">1. Client Artwork & Intellectual Property</h4>
          <p>
            All designs, logos, client databases, certificates, and confidential documents submitted to our servers or workshop remain the sole property of the client. We do not sell, license, or reuse client artworks. Files are securely archived for re-orders and deleted upon request.
          </p>
          <h4 className="font-bold text-slate-900">2. Contact Information</h4>
          <p>
            Your phone number, address, and email are solely used to update you on production status, dispatch courier tracking, and coordinate order delivery. We never sell contact information to third-party telemarketers.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service & Conditions",
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900">1. Quotations & Pricing Validity</h4>
          <p>
            Price quotes calculated on our website are estimates based on standard stock availability and current paper pulp indices. Quotes remain valid for 15 days from generation.
          </p>
          <h4 className="font-bold text-slate-900">2. Production Timelines</h4>
          <p>
            Turnaround times commence only after both: (a) print-ready artwork is approved by the client, and (b) required order advance payment is received.
          </p>
          <h4 className="font-bold text-slate-900">3. Color Reproduction</h4>
          <p>
            Commercial offset printing follows ISO standard CMYK profiles. Minor color variations (typically under 5-8%) across different paper stocks and coatings are normal in commercial lithography.
          </p>
        </div>
      )
    }
  };

  const active = policies[policyType] || policies.shipping;
  const Icon = active.icon;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-mg-cyan/10 text-mg-cyan flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-slate-900">{active.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6">
          {active.content}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
