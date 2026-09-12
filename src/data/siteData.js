export const COMPANY_INFO = {
  name: "Micro Graphics",
  tagline: "Printing Solution — Your Business, Our Printing Expertise",
  subTagline: "Quality Prints for a Stronger Brand",
  phone: "9386992015",
  formattedPhone: "+91 93869 92015",
  whatsapp: "919386992015",
  email: "micrographicspatna@gmail.com",
  address: "Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001",
  plusCode: "J45V+VXW",
  hours: "Monday – Saturday: 9:30 AM – 8:30 PM (Sunday: Prior Appointment)",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8769395276356!2d85.14818787595447!3d25.60906231491741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f705a76e73%3A0x8868ee3a44d18c99!2sFree%20Press%20Ln%2C%20Pirmuhani%2C%20Salimpur%20Ahra%2C%20Golambar%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  logo: "/assets/micro graphics logo.png",
  favicon: "/assets/MICRO GRAPHICS FAVICON.png",
  coverPhoto: "/assets/micro graphics cover photo.jpg",
  heroBanner: "/assets/ChatGPT Image Sep 12, 2026, 01_00_47 PM.png",
  experienceYears: "15+",
  projectsCompleted: "50,000+",
  clientSatisfaction: "99.4%",
  rushTurnaround: "24-Hour Rush"
};

export const SERVICES_CATEGORIES = [
  { id: 'all', name: 'All Solutions' },
  { id: 'commercial', name: 'Commercial & Offset' },
  { id: 'digital', name: 'Digital Express' },
  { id: 'signage', name: 'Flex & Signage' },
  { id: 'labels', name: 'Labels & Packaging' },
  { id: 'stationery', name: 'Corporate Stationery' },
  { id: 'events', name: 'Events & Apparel' }
];

export const POPULAR_SERVICES = [
  {
    id: 'offset-printing',
    title: 'Commercial Offset Printing',
    category: 'commercial',
    subtitle: 'Cost-Effective for High Volume Runs',
    image: '/assets/offset printing.png',
    description: 'High-speed 4-color Heidelberg offset printing for large runs of books, catalogs, magazines, and commercial publications with razor-sharp color consistency.',
    features: ['Heidelberg 4-Color Technology', 'Ultra-low per-unit bulk rates', 'Consistent CMYK calibration', 'Stock up to 450 GSM'],
    popular: true,
    startingPrice: '₹0.85 / unit',
    turnaround: '3-4 Days'
  },
  {
    id: 'flex-banner',
    title: 'Flex Banners & Outdoor Signage',
    category: 'signage',
    subtitle: 'Large Format Printing for Maximum Visibility',
    image: '/assets/flex banner.png',
    description: 'Bigger, brighter, and bolder outdoor flex banners, star flex, backlit glow signs, vinyl hoardings, and roll-up standees engineered for weather resistance.',
    features: ['Heavy-duty Star Flex & Normal Flex', 'Fade-resistant UV & Solvent inks', 'Eyelets & pole pocket finishing', 'Up to 10ft seamless width'],
    popular: true,
    startingPrice: '₹8 / sq.ft',
    turnaround: 'Same Day / 24h'
  },
  {
    id: 'product-labels',
    title: 'Product Labels & Custom Stickers',
    category: 'labels',
    subtitle: 'Custom Labels for Your Products',
    image: '/assets/product label.png',
    description: 'Precision die-cut adhesive stickers, waterproof jar labels, holographic seals, metallic foil labels, and Kraft paper branding for jars, cosmetics, and bottles.',
    features: ['Waterproof & oil-proof vinyl', 'Custom shape kiss-cut / die-cut', 'Matte, Gloss or Holographic film', 'Supplied on rolls or flat sheets'],
    popular: true,
    startingPrice: '₹0.60 / label',
    turnaround: '24-48 Hours'
  },
  {
    id: 'digital-printing',
    title: 'High-Speed Digital Printing',
    category: 'digital',
    subtitle: 'Fast, Flexible & High-Quality Prints',
    image: '/assets/digital printing.png',
    description: 'Same-day express printing on cutting-edge Konica Minolta & HP presses for quick turnaround menus, certificates, presentations, and short-run booklets.',
    features: ['Instant proofs & short runs', 'High-res 2400 DPI photographic grade', 'Art Paper, Textured & Metallic sheets', 'Zero plate cost'],
    popular: true,
    startingPrice: '₹4 / sheet (A4/A3)',
    turnaround: '2-4 Hours Express'
  },
  {
    id: 'flyers-brochures',
    title: 'Flyers, Leaflets & Brochures',
    category: 'commercial',
    subtitle: 'Promote Your Business Effectively',
    image: '/assets/flyers.png',
    description: 'Vibrant bi-fold, tri-fold, and multi-page marketing brochures designed to convert prospects into clients. Printed on glossy or silky matte art paper.',
    features: ['130 GSM to 300 GSM Art Paper', 'Bi-Fold, Tri-Fold, Z-Fold creasing', 'Spot UV & Velvet lamination', 'Distribution-ready bundle packing'],
    popular: true,
    startingPrice: '₹1.10 / flyer',
    turnaround: '24-48 Hours'
  },
  {
    id: 'corporate-stationery',
    title: 'Corporate Stationery & Business Cards',
    category: 'stationery',
    subtitle: 'Complete Branding for Your Business',
    image: '/assets/corporate stationery.png',
    description: 'Complete brand kits including velvet soft-touch business cards, golden foil visiting cards, executive letterheads, envelopes, employee ID cards, and lanyards.',
    features: ['350-400 GSM imported art boards', 'Spot UV, Gold/Silver Hot Foil Stamping', 'Executive watermarked bond paper', 'Custom printed presentation folders'],
    popular: true,
    startingPrice: '₹299 / 100 cards',
    turnaround: '24-48 Hours'
  },
  {
    id: 'company-profile',
    title: 'Company Profiles & Annual Reports',
    category: 'commercial',
    subtitle: 'Present Your Business Professionally',
    image: '/assets/company profile.png',
    description: 'Prestigious corporate pitch books, portfolio booklets, and company profiles with perfect binding, hardbound binding, or wire-o spirals.',
    features: ['Hardcover & Softcover options', 'Velvet thermal lamination', 'Spot gloss contrast effects', 'High-speed automatic saddle stitching'],
    popular: false,
    startingPrice: '₹45 / booklet',
    turnaround: '2-3 Days'
  },
  {
    id: 'event-printing',
    title: 'Event & Exhibition Printing',
    category: 'events',
    subtitle: 'Print Solutions for Events & Promotions',
    image: '/assets/event printing.png',
    description: 'Complete booth branding, aluminum roll-up standees, promotional promotional canopies, backdrop stages, delegate ID badges, and attendee kits.',
    features: ['Retractable aluminum standees', 'High-res seamless canvas & star flex', 'Custom printed lanyards & PVC badges', 'Same-day rush dispatch in Patna'],
    popular: false,
    startingPrice: '₹750 / standee',
    turnaround: '24-Hour Rush'
  },
  {
    id: 'packaging-boxes',
    title: 'Packaging & Custom Cartons',
    category: 'labels',
    subtitle: 'Rigid Boxes & Product Packaging',
    image: '/assets/commerical printing.png',
    description: 'Custom manufactured folding mono cartons, corrugated shipping boxes, food packaging containers, sweet boxes, and luxury gift boxes with custom inserts.',
    features: ['Custom structural die-line design', 'Food grade & rigid board stocks', 'Window punching & foil accents', 'Eco-friendly recyclable cardboard'],
    popular: false,
    startingPrice: '₹4.50 / box',
    turnaround: '4-6 Days'
  }
];

export const CALCULATOR_DATA = {
  products: [
    {
      id: 'visiting-cards',
      name: 'Business / Visiting Cards',
      category: 'stationery',
      defaultQty: 500,
      minQty: 100,
      step: 100,
      sizes: [
        { id: 'standard', name: 'Standard (3.5" x 2")', multiplier: 1.0 },
        { id: 'square', name: 'Square (2.5" x 2.5")', multiplier: 1.15 },
        { id: 'slim', name: 'Slim / European (3.3" x 2.1")', multiplier: 1.1 }
      ],
      materials: [
        { id: 'art-350', name: '350 GSM Premium Art Board', priceFactor: 1.0 },
        { id: 'art-400', name: '400 GSM Ultra Heavy Board', priceFactor: 1.25 },
        { id: 'textured', name: 'Imported Metallic / Textured Paper', priceFactor: 1.5 },
        { id: 'pvc-plastic', name: 'Tearproof Waterproof Plastic / PVC', priceFactor: 2.2 }
      ],
      finishes: [
        { id: 'matte', name: 'Matte Lamination (Both Sides)', cost: 0.2 },
        { id: 'gloss', name: 'High-Gloss Lamination', cost: 0.15 },
        { id: 'velvet', name: 'Velvet Soft-Touch Lamination', cost: 0.55 },
        { id: 'spot-uv', name: 'Velvet + Raised Spot UV', cost: 0.95 },
        { id: 'gold-foil', name: 'Matte + Gold Foil Stamping', cost: 1.2 }
      ],
      baseUnitPrice: 0.95
    },
    {
      id: 'flyers',
      name: 'Flyers & Pamphlets (A5 / A4)',
      category: 'commercial',
      defaultQty: 1000,
      minQty: 250,
      step: 250,
      sizes: [
        { id: 'a5', name: 'A5 (5.8" x 8.3")', multiplier: 1.0 },
        { id: 'a4', name: 'A4 (8.3" x 11.7")', multiplier: 1.7 },
        { id: 'dl', name: 'DL Flyer (4" x 8.5")', multiplier: 0.9 }
      ],
      materials: [
        { id: 'art-130', name: '130 GSM Gloss Art Paper (Economic)', priceFactor: 1.0 },
        { id: 'art-170', name: '170 GSM Premium Art Paper', priceFactor: 1.2 },
        { id: 'art-250', name: '250 GSM Cardstock (Sturdy Leaflet)', priceFactor: 1.55 }
      ],
      finishes: [
        { id: 'none', name: 'Standard Trim (No lamination)', cost: 0 },
        { id: 'gloss', name: 'Gloss Thermal Lamination', cost: 0.35 },
        { id: 'matte', name: 'Silky Matte Lamination', cost: 0.40 },
        { id: 'folded-bifold', name: 'Bi-Fold Creasing & Folding', cost: 0.20 },
        { id: 'folded-trifold', name: 'Tri-Fold Creasing & Folding', cost: 0.30 }
      ],
      baseUnitPrice: 1.15
    },
    {
      id: 'flex-banner',
      name: 'Flex Banner / Vinyl Board',
      category: 'signage',
      defaultQty: 1,
      minQty: 1,
      step: 1,
      isAreaBased: true,
      sizes: [
        { id: '6x3', name: '6 ft x 3 ft (18 sq.ft)', area: 18, multiplier: 18 },
        { id: '8x4', name: '8 ft x 4 ft (32 sq.ft)', area: 32, multiplier: 32 },
        { id: '10x5', name: '10 ft x 5 ft (50 sq.ft)', area: 50, multiplier: 50 },
        { id: '12x6', name: '12 ft x 6 ft (72 sq.ft)', area: 72, multiplier: 72 },
        { id: 'custom', name: 'Custom Dimensions (Specified in Notes)', area: 25, multiplier: 25 }
      ],
      materials: [
        { id: 'normal-flex', name: 'Regular Outdoor Flex (280 GSM)', priceFactor: 1.0 },
        { id: 'star-flex', name: 'Premium Star Flex (Thick & Vibrant)', priceFactor: 1.45 },
        { id: 'vinyl-sunboard', name: 'Vinyl Mounted on 5mm Sunboard', priceFactor: 3.2 },
        { id: 'backlit-flex', name: 'Backlit Glow-Sign Board Flex', priceFactor: 2.1 }
      ],
      finishes: [
        { id: 'eyelets', name: 'Brass Eyelets on all 4 corners + Hemming', cost: 30 },
        { id: 'pole-pocket', name: 'Pole Pockets (Top & Bottom)', cost: 50 },
        { id: 'standee-frame', name: 'Aluminum Roll-Up Standee Frame (6x3 ft)', cost: 550 },
        { id: 'cut-to-size', name: 'Flush Cut to Size Only', cost: 0 }
      ],
      baseUnitPrice: 8.5 // Per sq ft
    },
    {
      id: 'product-stickers',
      name: 'Product Labels & Die-Cut Stickers',
      category: 'labels',
      defaultQty: 500,
      minQty: 100,
      step: 100,
      sizes: [
        { id: '2x2', name: '2" x 2" (Circle / Square)', multiplier: 1.0 },
        { id: '3x3', name: '3" x 3" (Circle / Square)', multiplier: 1.4 },
        { id: '4x2', name: '4" x 2" (Rectangular Bottle Label)', multiplier: 1.35 },
        { id: 'custom-shape', name: 'Custom Die-Cut Contour Shape', multiplier: 1.6 }
      ],
      materials: [
        { id: 'gloss-paper', name: 'Chromopaper Sticker (Indoor/Dry)', priceFactor: 1.0 },
        { id: 'vinyl-waterproof', name: 'Waterproof Vinyl (White Base)', priceFactor: 1.45 },
        { id: 'transparent-vinyl', name: 'Clear Transparent Vinyl', priceFactor: 1.7 },
        { id: 'kraft-sticker', name: 'Natural Brown Kraft Sticker', priceFactor: 1.35 },
        { id: 'holographic', name: 'Holographic Rainbow Vinyl', priceFactor: 2.3 }
      ],
      finishes: [
        { id: 'gloss-lam', name: 'Gloss Protective Lamination', cost: 0.15 },
        { id: 'matte-lam', name: 'Matte Anti-Scratch Lamination', cost: 0.20 },
        { id: 'gold-hot-foil', name: 'Metallic Gold Foil Stamp', cost: 0.85 },
        { id: 'kiss-cut-sheet', name: 'Supplied on Kiss-Cut Sheets', cost: 0.05 }
      ],
      baseUnitPrice: 0.85
    }
  ]
};

export const PRICING_PACKAGES = [
  {
    name: "Startup Corporate Identity Kit",
    tag: "Best for New Companies in Patna",
    price: "₹2,499",
    regularPrice: "₹3,200",
    savings: "Save 22%",
    features: [
      "500 Velvet Matte Business Cards",
      "500 Executive Bond Letterheads",
      "200 Custom Printed Corporate Envelopes",
      "Free Prepress Art Verification & Bleed Check",
      "Priority 48-Hour Dispatch in Patna"
    ],
    highlight: false
  },
  {
    name: "Retail & Restaurant Promotion Pack",
    tag: "Most Popular",
    price: "₹4,999",
    regularPrice: "₹6,800",
    savings: "Save 26%",
    features: [
      "1,000 High-Gloss A5 Leaflets / Menu Flyers",
      "500 Waterproof Die-cut Product Labels",
      "1 Premium Aluminum Roll-Up Standee (6x3 ft)",
      "1 Large Star Flex Banner (8x4 ft) with Eyelets",
      "24-Hour Emergency Rush Printing Included"
    ],
    highlight: true
  },
  {
    name: "Exhibition & Mega Event Kit",
    tag: "Enterprise B2B Solution",
    price: "₹9,899",
    regularPrice: "₹13,500",
    savings: "Save 27%",
    features: [
      "2 Heavy Aluminum Retractable Roll-up Standees",
      "1 Large Backdrop Flex (10x8 ft) Seamless Print",
      "2,000 Tri-Fold Art Paper Brochures",
      "100 Custom Printed Satin Lanyards + ID Badges",
      "Free Delivery & Setup Support in Patna"
    ],
    highlight: false
  }
];

export const FAQS = [
  {
    q: "Where is Micro Graphics located, and can I visit your workshop in Patna?",
    a: "Yes, you are warmly invited to inspect physical paper samples and observe live printing at our facility: Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001 (Google Plus Code: J45V+VXW). We are open Monday to Saturday from 9:30 AM to 8:30 PM."
  },
  {
    q: "How fast can I receive emergency prints with your 24-Hour Rush service?",
    a: "For emergency conferences, election campaigns, exhibitions, or store openings in Patna, we offer our signature 24-Hour Express Rush Service for flex banners, standees, digital visiting cards, and flyers. Contact our emergency line at 9386992015 for immediate queueing."
  },
  {
    q: "What file formats and color modes are required for optimal print quality?",
    a: "We recommend submitting vector PDF, CorelDraw (.CDR with all fonts converted to curves/curves outlined), Adobe Illustrator (.AI), or Adobe Photoshop (.PSD/TIFF) files. Files should be configured in CMYK color mode at 300 DPI resolution with at least 3mm (0.125 inch) bleed around the trim lines."
  },
  {
    q: "Do you offer delivery to other districts across Bihar?",
    a: "Absolutely. In Patna, we provide same-day local dispatch via dedicated courier or rider. For all other districts in Bihar (Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Purnia, Begusarai, etc.), we ship safely via reliable express courier with tracking."
  },
  {
    q: "Can you assist with design adjustments if my artwork is not print-ready?",
    a: "Yes! Our in-house prepress design team will examine your file, adjust bleed margins, fix low-resolution graphics, convert RGB to CMYK without color shift, and send you a digital proof before pressing the print button."
  },
  {
    q: "What payment methods do you support?",
    a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm, BHIM), Net Banking, RTGS/NEFT for corporate accounts, Credit/Debit cards, and Cash at our Golambar workshop."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Alok Verma",
    role: "Director, Patna Health Clinic (Kankarbagh)",
    text: "Micro Graphics delivered 10,000 clinic brochures and doctors' prescription pads in less than 36 hours. The color accuracy and paper texture were top-notch. Best printing press in Patna without doubt.",
    rating: 5
  },
  {
    name: "Vikram Singhania",
    role: "Founder, Sweet Harvest Organic Foods (Boring Road)",
    text: "We needed waterproof custom die-cut jar labels for our honey and pickles. The metallic sheen and adhesive quality are indistinguishable from MNC brands. Mr. Sumit and the team are true masters of CMYK.",
    rating: 5
  },
  {
    name: "Pooja Srivastava",
    role: "Event Coordinator, Bihar Youth Summit (Gandhi Maidan)",
    text: "Ordered 6 roll-up standees, backdrop flex banners, and 500 ID cards on an emergency 24-hour deadline. They delivered right to the venue on time with perfect assembly. Highly recommended!",
    rating: 5
  }
];
