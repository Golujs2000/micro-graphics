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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8545659830015!2d85.1449398!3d25.6097485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59dbf57b9897%3A0x42d955997c9e3328!2sMicro%20Graphics!5e0!3m2!1sen!2sin!4v1789202791856!5m2!1sen!2sin",
  logo: "/assets/micro graphics horizontal logo.png",
  favicon: "/assets/MICRO GRAPHICS FAVICON.png",
  coverPhoto: "/assets/micro graphics cover photo.jpg",
  establishedYear: "2005",
  experienceYears: "20+",
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
    detailedDescription: 'Commercial offset printing represents the pinnacle of cost efficiency and chromatic precision for high-volume corporate and institutional printing in Patna. Powered by German Heidelberg multi-color offset presses, each sheet is transferred with automated ink fountain control, ensuring zero color density variance from sheet 1 to sheet 100,000. Ideal for statewide distribution of catalogs, academic books, magazines, and commercial annual reports.',
    features: ['Heidelberg 4-Color Technology', 'Ultra-low per-unit bulk rates', 'Consistent CMYK calibration', 'Stock up to 450 GSM'],
    specs: {
      technology: 'Heidelberg Speedmaster 4-Color Offset Press',
      paperOptions: 'Gloss Art Paper, Matte Art Paper, Maplitho, Imported Board',
      gsmRange: '70 GSM to 400 GSM',
      finishesAvailable: 'Thermal Gloss/Matte, Spot UV, Drip-Off, Foil Stamping',
      minOrderQty: '1,000 Units',
      turnaroundStandard: '3 - 4 Days',
      turnaroundRush: '48 Hours Express in Patna'
    },
    applications: [
      'Publishing Houses & Educational Booklets',
      'Medical & Healthcare Product Catalogs',
      'Corporate Pitch Books & Annual Reports',
      'Retail Product Folders & Magazines'
    ],
    prepressChecklist: [
      'Ensure 3mm bleed margin outside the trim edge',
      'CMYK color space only (No RGB or spot pantone unless requested)',
      'Convert all typography to outlines/curves',
      'Image resolution strictly 300 DPI at 100% print scale'
    ],
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
    detailedDescription: 'Engineered to withstand the intense weather conditions of Bihar, our wide-format outdoor banners are printed using industrial Roland eco-solvent plotters. Whether you require promotional canopies for an event at Gandhi Maidan, roadside hoardings across Bailey Road, or roll-up retractable standees for an exhibition booth, our Star Flex and heavy-duty normal flex materials guarantee vivid, fade-resistant color vibrancy for months outdoors.',
    features: ['Heavy-duty Star Flex & Normal Flex', 'Fade-resistant UV & Solvent inks', 'Eyelets & pole pocket finishing', 'Up to 10ft seamless width'],
    specs: {
      technology: 'Roland 10ft & 6ft Eco-Solvent & UV Large-Format Plotters',
      paperOptions: 'Normal Flex (280-320 GSM), Star Flex (440 GSM), Backlit Flex, Vinyl on 5mm Sunboard',
      gsmRange: '280 GSM to 550 GSM',
      finishesAvailable: 'Heavy Brass Eyelets, Pole Pockets, Hemmed Edges, Standee Mount',
      minOrderQty: '1 Banner (Any size)',
      turnaroundStandard: '24 Hours',
      turnaroundRush: 'Same-Day Express (2-4 Hours in Patna)'
    },
    applications: [
      'Conference & Exhibition Roll-Up Standees',
      'Election Campaign & Political Outdoor Banners',
      'Retail Shop Front & Backlit Glow Signs',
      'Real Estate Project Hoardings & Construction Signboards'
    ],
    prepressChecklist: [
      'Scale files at 100% at 100-150 DPI (large format)',
      'CMYK color profile for accurate color reproduction',
      'Keep text 2 inches inside the outer edge for grommet eyelet punching',
      'Submit as high-res PDF or TIFF with LZW compression'
    ],
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
    detailedDescription: 'Elevate your FMCG, pharmaceutical, or artisanal product with industrial-grade self-adhesive labels produced with microscopic precision. Our computer-controlled digital kiss-cutting and die-cutting machinery delivers sharp, intricate shapes on waterproof vinyl, natural organic Kraft paper, transparent BOPP, and security holographic substrates. Ideal for pickle jars, cosmetic bottles, honey jars, and electronic seal packaging.',
    features: ['Waterproof & oil-proof vinyl', 'Custom shape kiss-cut / die-cut', 'Matte, Gloss or Holographic film', 'Supplied on rolls or flat sheets'],
    specs: {
      technology: 'Digital Precision Kiss-Cut & Contour Die Plotters',
      paperOptions: 'White Gloss Vinyl, Matte Vinyl, Clear Transparent, Brown Kraft, Silver/Gold Foil',
      gsmRange: 'Self-Adhesive 80-120 Micron with Permanent Glue',
      finishesAvailable: 'Anti-Scratch Gloss/Matte Lamination, Metallic Foil Stamping, Spot Gloss',
      minOrderQty: '100 Labels',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24-Hour Emergency Rush'
    },
    applications: [
      'Food & Beverage Bottles (Honey, Pickles, Sauces)',
      'Cosmetics & Healthcare Creams, Serums & Oils',
      'Custom Delivery Bag & Box Seal Stickers',
      'Asset Tracking, Barcode & Warranty Labels'
    ],
    prepressChecklist: [
      'Provide vector cut contour lines on a separate layer named "CutLine"',
      'Include 2mm bleed beyond the cut contour',
      'Convert all fonts to curves/outlines',
      'Set black text to 100% K only (not 4-color black)'
    ],
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
    detailedDescription: 'When time is of the essence and volume does not warrant offset plate making, our Japanese Konica Minolta AccurioPress digital presses deliver offset-matching quality in minutes. Perfect for on-demand restaurant menu updates, urgent conference presentation decks, corporate certificates, invitation card proofs, and limited-edition marketing collateral with zero setup delays.',
    features: ['Instant proofs & short runs', 'High-res 2400 DPI photographic grade', 'Art Paper, Textured & Metallic sheets', 'Zero plate cost'],
    specs: {
      technology: 'Konica Minolta AccurioPress 2400x2400 DPI Engine',
      paperOptions: 'Gloss/Matte Art Card, Metallic Sheen, Textured Felt, Non-Tear Synthetic',
      gsmRange: '100 GSM to 400 GSM',
      finishesAvailable: 'Thermal Velvet, Gloss, Matte, Creasing, Corner Rounding',
      minOrderQty: '1 Sheet (A4/A3/12x18")',
      turnaroundStandard: '4 - 12 Hours',
      turnaroundRush: '2-Hour Instant Collection at Golambar Press'
    },
    applications: [
      'Restaurant Menus & Table Tent Cards',
      'Conference Schedules & Delegate Pass Inserts',
      'School & College Certificates & Marksheets',
      'Short-Run Product Brochures & Portfolio Sheets'
    ],
    prepressChecklist: [
      'Configure file to exact trim size plus 3mm bleed',
      'Use 300 DPI images for photographic sharpness',
      'Embed or flatten all transparency layers',
      'Accepted formats: PDF/X-1a, TIFF, High-Res JPG'
    ],
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
    detailedDescription: 'Marketing brochures and leaflets are the front-line ambassadors of your enterprise. We combine premium imported European art paper with precision folding and creasing technology to produce marketing materials that demand attention. Whether for door-to-door distribution in residential societies or executive sales meetings, our brochures convey undeniable credibility.',
    features: ['130 GSM to 300 GSM Art Paper', 'Bi-Fold, Tri-Fold, Z-Fold creasing', 'Spot UV & Velvet lamination', 'Distribution-ready bundle packing'],
    specs: {
      technology: 'Combined 4-Color Offset & High-Speed Digital with Automated Creasing',
      paperOptions: '130 GSM Gloss Art Paper, 170 GSM Matte Art, 250-300 GSM Heavy Card',
      gsmRange: '100 GSM to 350 GSM',
      finishesAvailable: 'Bi-Fold, Tri-Fold, Z-Fold, Gate Fold, Gloss/Matte Film',
      minOrderQty: '250 Flyers',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24-Hour Express Rush in Patna'
    },
    applications: [
      'Real Estate Property Launch Pamphlets',
      'Hospital & Diagnostic Center Service Guides',
      'Coaching Institute & College Admission Leaflets',
      'Retail Supermarket Sale & Discount Circulars'
    ],
    prepressChecklist: [
      'Leave at least 4mm safe margin from every fold/crease line',
      'Include 3mm bleed on all external edges',
      'Check panel widths for tri-fold (e.g. inner fold panel 2mm narrower)',
      'CMYK color profile with high-res 300 DPI photography'
    ],
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
    detailedDescription: 'First impressions are non-negotiable. Our corporate stationery suite provides a cohesive brand experience across visiting cards, watermarked executive letterheads, branded envelopes, document folders, and employee ID access cards. Handcrafted with luxury finishes like soft-touch velvet lamination, raised Spot UV, and metallic gold hot foil stamping.',
    features: ['350-400 GSM imported art boards', 'Spot UV, Gold/Silver Hot Foil Stamping', 'Executive watermarked bond paper', 'Custom printed presentation folders'],
    specs: {
      technology: 'High-Precision Digital & Offset with Stamping & Thermal Foiling',
      paperOptions: '350 GSM Velvet Board, 400 GSM Rigid Art, 100 GSM Executive Bond Paper',
      gsmRange: '100 GSM (Letterheads) to 450 GSM (Cards)',
      finishesAvailable: 'Velvet Soft-Touch, Raised Spot UV, Gold/Silver Foil, Embossing, Round Corners',
      minOrderQty: '100 Cards / 500 Letterheads',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: 'Same-Day 24h Express in Patna'
    },
    applications: [
      'Executive Visiting Cards for C-Suite & Entrepreneurs',
      'Legal, Financial & Medical Watermarked Letterheads',
      'Official Corporate Communication Envelopes',
      'Custom Printed Presentation & Proposal Folders'
    ],
    prepressChecklist: [
      'Business card size standard: 3.5" x 2" (Canvas: 3.75" x 2.25" with bleed)',
      'Foil & Spot UV layers must be provided in 100% K vector artwork',
      'Keep text at least 3.5mm away from cutting edges',
      'Ensure fine lines are at least 0.25 pt stroke width'
    ],
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
    detailedDescription: 'Present your enterprise vision, balance sheets, and project portfolios with authoritative hardcover or softcover bound publications. We provide automatic saddle-stitching, PUR perfect binding, and wire-o binding with thermal velvet cover lamination and raised UV accents that command respect in bank loan submissions, government tenders, and investor summits.',
    features: ['Hardcover & Softcover options', 'Velvet thermal lamination', 'Spot gloss contrast effects', 'High-speed automatic saddle stitching'],
    specs: {
      technology: 'Combined Heidelberg Offset / High-Speed Digital with Automated Binder',
      paperOptions: 'Cover: 300-350 GSM Board / Hardboard; Interior: 130-170 GSM Art Paper',
      gsmRange: '100 GSM to 350 GSM',
      finishesAvailable: 'PUR Perfect Bound, Saddle Stitch, Hardcase Binding, Wire-O Spiral',
      minOrderQty: '25 Copies',
      turnaroundStandard: '2 - 3 Days',
      turnaroundRush: '48 Hours Rush in Patna'
    },
    applications: [
      'Company Profile & Capability Statements',
      'Annual Corporate Balance Sheet Reports',
      'Tender & Bid Presentation Portfolios',
      'Architecture & Real Estate Showcase Books'
    ],
    prepressChecklist: [
      'Submit pages as single page PDF in reading sequence (not spreads)',
      'Allow spine width for perfect binding (formula provided on request)',
      'Keep inner margin 10mm from spine for reading ease',
      'Include 3mm bleed on all outer edges'
    ],
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
    detailedDescription: 'Turn conferences, medical summits, and election meetings into unforgettable brand spectacles. Micro Graphics Patna produces all event collaterals under one roof: lightweight aluminum retractable roll-up standees (6x3 ft and 8x4 ft), seamless stage backdrops, custom printed satin lanyards with thermal PVC badges, and attendee folders.',
    features: ['Retractable aluminum standees', 'High-res seamless canvas & star flex', 'Custom printed lanyards & PVC badges', 'Same-day rush dispatch in Patna'],
    specs: {
      technology: 'Wide-Format Outdoor Plotters & Digital Pass Imprinting',
      paperOptions: 'Star Flex, Vinyl Mounted on Sunboard, Satin Ribbon Lanyards, PVC RFID Badges',
      gsmRange: 'Wide Variety of Structural Media',
      finishesAvailable: 'Aluminum Retractable Base, Custom Grommets, Hard Carry Bags',
      minOrderQty: '1 Standee / 50 Badges',
      turnaroundStandard: '24 Hours',
      turnaroundRush: 'Same-Day Emergency 4-Hour Service in Patna'
    },
    applications: [
      'Medical & Academic Seminars at Patna Venues',
      'Trade Fairs, Expos & Corporate Booth Setup',
      'Cultural & Sports Events Backdrops',
      'VIP Badges, Lanyards & Delegate Packs'
    ],
    prepressChecklist: [
      'Roll-up standee visible area: 33.5" x 78" (add 4" bottom bleed for roller)',
      'Resolution minimum 150 DPI at final print dimension',
      'Use CMYK profile for rich saturated stage lighting contrast',
      'Deliver files via PDF or TIFF with flattened layers'
    ],
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
    detailedDescription: 'Custom packaging is the silent salesperson on retail shelves. We engineer custom structural die-line cartons with food-grade paperboard, corrugated cartons for secure e-commerce shipping, and luxury rigid gift boxes with velvet inserts. Finished with metallic foil accents, spot UV varnish, and window cutouts that showcase your product with pride.',
    features: ['Custom structural die-line design', 'Food grade & rigid board stocks', 'Window punching & foil accents', 'Eco-friendly recyclable cardboard'],
    specs: {
      technology: 'Heidelberg Packaging Press with Automatic Platen Die-Cutter',
      paperOptions: 'Virgin FBB Board, Duplex Board, Kraft Cardboard, Rigid Hardboard',
      gsmRange: '250 GSM to 450 GSM Folding Cartons; 3-Ply / 5-Ply Corrugated',
      finishesAvailable: 'Window Lamination, Gold/Silver Hot Foil, Embossing, Thermal Matte',
      minOrderQty: '500 Cartons',
      turnaroundStandard: '4 - 6 Days',
      turnaroundRush: '3 Days Priority Slot'
    },
    applications: [
      'Pharmaceutical & Healthcare Medicine Cartons',
      'Cosmetics, Perfume & Herbal Skin Care Boxes',
      'Food & Confectionery Mithai / Sweet Boxes',
      'Electronic Gadgets & Mobile Accessory Boxes'
    ],
    prepressChecklist: [
      'Place die-lines (cut & crease) on dedicated spot color vector layers',
      'Allow 3mm bleed over all outer cut flaps and tuck-in panels',
      'Verify barcode dimensions comply with minimum scanner readability standards',
      'Export PDF with embedded CMYK and die-line vector paths'
    ],
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
