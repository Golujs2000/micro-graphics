export const COMPANY_INFO = {
  name: "Micro Graphics",
  tagline: "Printing Solution — Your Business, Our Printing Expertise",
  subTagline: "Quality Prints for a Stronger Brand",
  owner: "Dhananjay Kumar",
  founder: "Dhananjay Kumar",
  phone: "9386992015",
  secondaryPhone: "9304097965",
  formattedPhone: "+91 93869 92015",
  formattedPhones: "+91 93869 92015 / +91 93040 97965",
  allPhones: ["9386992015", "9304097965"],
  whatsapp: "919386992015",
  email: "micrographicspatna@gmail.com",
  address: "Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001",
  plusCode: "J45V+VXW",
  hours: "Monday – Saturday: 9:30 AM – 8:30 PM (Sunday: Prior Appointment)",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8545659830015!2d85.1449398!3d25.6097485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59dbf57b9897%3A0x42d955997c9e3328!2sMicro%20Graphics!5e0!3m2!1sen!2sin!4v1789202791856!5m2!1sen!2sin",
  logo: "/assets/micro graphics horizontal logo.png",
  favicon: "/assets/MICRO GRAPHICS FAVICON.png",
  coverPhoto: "/assets/micro graphics cover photo.jpg",
  establishedYear: "2011",
  experienceYears: "15+",
  projectsCompleted: "50,000+",
  clientSatisfaction: "99.4%",
  rushTurnaround: "24-Hour Rush"
};

export const TRUSTED_CLIENTS = [
  { name: "UltraTech Cement", category: "Infrastructure & Cement", tag: "UltraTech", logoText: "UltraTech" },
  { name: "Monaco (Parle)", category: "FMCG & Biscuits", tag: "Monaco", logoText: "MONACO" },
  { name: "Raymond", category: "Apparel & Suiting", tag: "Raymond", logoText: "Raymond" },
  { name: "State Bank of India", category: "Banking & Financial Services", tag: "SBI", logoText: "SBI" },
  { name: "KSB Pumps", category: "Industrial Pumps & Valves", tag: "KSB", logoText: "KSB" },
  { name: "Bajaj", category: "Automotive & Consumer Electricals", tag: "Bajaj", logoText: "BAJAJ" },
  { name: "BPCL / BPCC", category: "Bharat Petroleum Corporation", tag: "BPCL", logoText: "Bharat Petroleum" },
  { name: "MPCC", category: "Infrastructure & Engineering", tag: "MPCC", logoText: "MPCC" },
  { name: "Food Corporation of India", category: "Central Government PSU", tag: "FCI", logoText: "FCI" },
  { name: "Kasturi Jewellers", category: "Precious Jewellery & Gold", tag: "Kasturi", logoText: "KASTURI" },
  { name: "TBZ Jewellers", category: "Luxury Diamonds & Zaveri", tag: "TBZ", logoText: "TBZ - The Original" },
  { name: "Senco Gold & Diamonds", category: "National Jewellery Brand", tag: "Senco", logoText: "SENCO" },
  { name: "Kisna Diamond", category: "Real Diamond & Gold Jewellery", tag: "Kisna", logoText: "KISNA" }
];

export const SERVICES_CATEGORIES = [
  { id: 'all', name: 'All Solutions' },
  { id: 'flex-hoardings', name: 'Flex & Hoardings' },
  { id: 'vinyl-films', name: 'Vinyl & Glass Films' },
  { id: 'letter-signage', name: '2D & 3D Letters & Signage' },
  { id: 'wall-branding', name: 'Wall Branding & Wraps' },
  { id: 'boards-displays', name: 'ACP, Clip-On & Display Boards' },
  { id: 'promo-events', name: 'Canopy, Standees & Promo' },
  { id: 'apparel', name: 'T-Shirts, Caps & Apparel' },
  { id: 'commercial-branding', name: 'Retail, Office & OOH' },
  { id: 'commercial-offset', name: 'Commercial & Offset' }
];

export const POPULAR_SERVICES = [
  // 1. Flex & Hoardings
  {
    id: 'flex-printing',
    title: 'Flex Printing',
    category: 'flex-hoardings',
    subtitle: 'Frontlit & Star Flex for High-Impact Visibility',
    image: '/assets/Frontlit & Backlit Flex Banner.jpg',
    description: 'High-speed wide-format printing on durable Star Flex and normal flex substrates with rich fade-resistant UV and solvent inks.',
    detailedDescription: 'Engineered for outdoor durability in Bihar, our flex banner printing is executed on industrial 10ft wide eco-solvent and solvent plotters. We provide heavy-duty Star Flex (440 GSM) and standard frontlit flex with reinforced hems, eyelets, and pole pockets for quick installation across Patna events, political rallies, commercial storefronts, and road promotions.',
    features: ['Heavy-duty Star Flex & Normal Flex (280-440 GSM)', 'Fade-resistant UV solvent inks', 'Seamless width up to 10 feet', 'Heavy brass eyelets & pole pocket finishing'],
    specs: {
      technology: 'Roland 10ft Eco-Solvent & UV Large-Format Plotters',
      mediaOptions: 'Normal Flex (280-320 GSM), Star Flex (440 GSM), Blackout Flex',
      finishesAvailable: 'Brass Eyelets, Heat Welded Hems, Pole Pockets, Rope Stitching',
      minOrderQty: '1 Banner (Any custom dimension)',
      turnaroundStandard: '24 Hours',
      turnaroundRush: '2 - 4 Hours Express in Patna'
    },
    applications: ['Outdoor Roadside Banners & Event Promotions', 'Shop Front Facias & Temporary Hoardings', 'Rally & Political Campaign Backdrops', 'Construction & Real Estate Project Fencing'],
    prepressChecklist: ['Artwork scale: 100% scale at 100-150 DPI or 10% scale at 720 DPI', 'CMYK color profile only', 'Keep important text 2 inches away from edges for eyelet punching'],
    popular: true,
    turnaround: 'Same Day / 24h'
  },
  {
    id: 'flex-with-frame',
    title: 'Flex with Frame',
    category: 'flex-hoardings',
    subtitle: 'Durable MS Iron Welded Frame Flex Signs',
    image: '/assets/Flex Banner with MS Iron Frame.jpg',
    description: 'Rigid MS square iron pipe fabrication with tension-mounted flex printing, anti-rust coating, and full on-site installation.',
    detailedDescription: 'When a standalone flex sheet is not enough, our Flex with Frame solution combines heavy-gauge MS iron square hollow pipe fabrication with wrinkle-free tension-mounted flex. Coated with anti-rust zinc chromate primer and synthetic enamel paint, these frames can be wall-mounted or rooftop-anchored to withstand severe monsoon winds and Patna storms.',
    features: ['Heavy-gauge MS square pipe fabrication', 'Tension-stretched wrinkle-free mounting', 'Anti-rust primer and enamel paint coating', 'Turnkey site measurement and on-site welding/installation'],
    specs: {
      technology: 'MIG Welded MS Hollow Section Framework + UV Flex Print',
      mediaOptions: 'Star Flex (440 GSM) / Backlit Heavy Banner with 1" or 1.5" MS Pipe',
      finishesAvailable: 'Flush Wall Mount, Cantilever Brackets, Anti-Rust Primer Coating',
      minOrderQty: '1 Framed Unit',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours Rush Service in Patna'
    },
    applications: ['Shopfront Brand Signboards', 'Rooftop & Terrace Commercial Signs', 'Factory & Warehouse Boundary Wall Signage', 'Highway Roadside Directional Boards'],
    prepressChecklist: ['Provide 2 inches extra bleed for frame wrap and stapling', 'CMYK vector or high-resolution raster files', 'Specify frame outer dimensions clearly in millimeters or feet'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'flex-hoarding',
    title: 'Flex Hoarding & Hoarding Printing',
    category: 'flex-hoardings',
    subtitle: 'Massive Scale Highway & Rooftop Hoardings',
    image: '/assets/Outdoor Flex Hoardings & Billboards (OOH).jfif',
    description: 'Giant outdoor advertising hoardings printed on heavy-duty 550 GSM blackout flex with industrial seam welding.',
    detailedDescription: 'Capture the attention of millions of commuters across Patna and major national highways in Bihar. Our hoarding printing facility handles massive billboard formats (20x10 ft, 30x15 ft, 40x20 ft, and larger) using industrial heavy-duty 550 GSM blackout flex that blocks all backlighting shadows. Panels are heat-welded with high-tensile seams designed to endure high wind loads.',
    features: ['Heavy-duty 550 GSM Blackout Flex', 'High-tensile heat welded seams', 'Vivid colors engineered for long-distance viewing', 'Extreme weather & monsoon resilience'],
    specs: {
      technology: 'Industrial Multi-Head Solvent Plotter with Thermal Seaming',
      mediaOptions: '550 GSM Blackout Flex / Heavy Frontlit',
      finishesAvailable: 'Continuous Hemming with 10mm Nylon Rope, Heavy Grommets',
      minOrderQty: '1 Hoarding Sheet',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: 'Same-Day Emergency Dispatch in Patna'
    },
    applications: ['Highway Billboards & City Gantry Displays', 'Commercial Mall Facade Wraps', 'Real Estate Mega-Project Launches', 'State-Level Political & Consumer Brand Campaigns'],
    prepressChecklist: ['File resolution: 50-72 DPI at 100% final size (billboards do not require 300 DPI)', 'CMYK color profile with rich black (C40 M40 Y40 K100)', 'Keep text bold and legible from 100+ meters distance'],
    popular: true,
    turnaround: '24-48 Hours'
  },

  // 2. Vinyl & Glass Films
  {
    id: 'vinyl-printing',
    title: 'Vinyl Printing',
    category: 'vinyl-films',
    subtitle: 'Eco-Solvent & UV High-Resolution Vinyl Graphics',
    image: '/assets/vinayl_sticker.jfif',
    description: 'Ultra-high-definition self-adhesive vinyl printing with gloss or matte thermal lamination for indoor and outdoor branding.',
    detailedDescription: 'Our vinyl printing capabilities utilize premium polymeric self-adhesive vinyl sheets paired with photographic Japanese printheads delivering 1440x1440 DPI resolution. Finished with UV-protective clear gloss or satin matte overlaminate films that guard against scuffs, sunlight fading, water damage, and chemical cleaning agents.',
    features: ['1440 DPI photographic grade clarity', 'Removable and high-tack permanent adhesive options', 'Thermal gloss & matte protective lamination', 'Scratch, moisture, and UV resistant'],
    specs: {
      technology: 'Japanese Eco-Solvent & UV Flatbed/Roll Printers',
      mediaOptions: 'Monomeric & Polymeric White Vinyl, Grey-Back Blockout Vinyl',
      finishesAvailable: 'Cold/Thermal Gloss Lamination, Matte Lamination, Die-Cut',
      minOrderQty: '1 Sq.Ft',
      turnaroundStandard: '24 Hours',
      turnaroundRush: '4 Hours Express in Patna'
    },
    applications: ['Product Display Counters & Kiosks', 'Showroom Wall & Pillar Murals', 'Fleet Vehicle Branding & Auto Wraps', 'Point-of-Sale Brand Graphics & Floor Stickers'],
    prepressChecklist: ['300 DPI resolution at 100% scale', 'CMYK color mode with high contrast', 'Include cut contour paths on a separate vector layer if custom shape is required'],
    popular: true,
    turnaround: 'Same Day / 24h'
  },
  {
    id: 'clear-vinyl',
    title: 'Clear Vinyl',
    category: 'vinyl-films',
    subtitle: 'Transparent & Ultra-Clear Window Graphics',
    image: '/assets/Clear & Transparent Vinyl Graphics.avif',
    description: 'Optically clear transparent vinyl graphics with white ink underprint for glass partitions, windows, and product displays.',
    detailedDescription: 'Clear vinyl graphics deliver seamless integration onto glass surfaces without obstructive opaque backgrounds. Featuring advanced multi-layer UV printing with opaque white ink underprinting, your graphics retain vivid, opaque color brilliance while non-printed areas remain completely transparent. Ideal for corporate glass conference rooms, retail window displays, and luxury branding.',
    features: ['Optically clear film with near-invisible background', 'White ink underprint technology for opaque colors', 'Reverse print option for internal glass application', 'Residue-free clean removal'],
    specs: {
      technology: 'UV Flatbed / Roll-to-Roll with Dual White Ink Channels',
      mediaOptions: 'Optically Clear Polymeric Vinyl (80 - 100 Micron)',
      finishesAvailable: 'Reverse Mirrored Print, Spot White Mask, Ultra-Clear Adhesive',
      minOrderQty: '5 Sq.Ft',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours Rush'
    },
    applications: ['Showroom Glass Entrance Doors', 'Corporate Conference Room Glass Decals', 'Retail Window Promotional Graphics', 'Transparent Product Showcase Panels'],
    prepressChecklist: ['Define white ink areas as a 100% Spot Color layer named "Spot1"', 'Vector typography and illustrations recommended', 'Mirrored artwork required if adhering from inside looking out'],
    popular: false,
    turnaround: '24-48 Hours'
  },
  {
    id: 'one-way-vision',
    title: 'One-Way Vision',
    category: 'vinyl-films',
    subtitle: 'Perforated Window Film for Showrooms & Vehicles',
    image: '/assets/One-Way Vision & Frosted Glass Film.jpg',
    description: 'Micro-perforated film showing full vibrant graphics from the outside while retaining full see-through visibility from the inside.',
    detailedDescription: 'One-Way Vision film transforms clear exterior glass windows into massive vibrant billboards without blocking daylight or interior visibility. Featuring a precision 60/40 micro-perforation pattern with black adhesive backing, it reflects external light to reveal graphics to passersby while allowing occupants inside to see outside clearly. Also cuts down interior heat and solar glare.',
    features: ['Full exterior graphic impact with interior transparency', '60/40 micro-perforated pattern', 'Cuts interior solar heat and glare by up to 40%', 'Certified architectural & automotive glass grade'],
    specs: {
      technology: 'Eco-Solvent & Latex Perforated Film Printing',
      mediaOptions: '140 Micron Perforated PVC with Black Adhesive Backing',
      finishesAvailable: 'Trim to Size, Optional Optically Clear Edge Seal',
      minOrderQty: '1 Window Panel',
      turnaroundStandard: '24 Hours',
      turnaroundRush: 'Same-Day 6 Hours in Patna'
    },
    applications: ['Retail Storefront Glass Windows', 'Commercial Office Glass Facades', 'Bus, Cab & Commercial Fleet Vehicle Windows', 'Bank & ATM Kiosk Glass Enclosures'],
    prepressChecklist: ['Avoid tiny text smaller than 14pt due to micro-perforations', 'High-contrast imagery ensures maximum optical pop', 'Supply artwork with 1 inch extra border for on-site glass trimming'],
    popular: true,
    turnaround: 'Same Day / 24h'
  },
  {
    id: 'backlit-vinyl-fabric',
    title: 'Backlit Vinyl & Fabric',
    category: 'vinyl-films',
    subtitle: 'Translucent Media for Ultra-Bright Lightboxes',
    image: '/assets/backlit banner.jfif',
    description: 'Translucent backlit vinyl and silicone-edge SEG tension fabric prints for slim LED light boxes and glowing signage.',
    detailedDescription: 'Designed for internal illumination, our backlit vinyl and tension fabric prints feature high-pigment double-strike printing that prevents washed-out colors when LEDs illuminate from behind. Our SEG (Silicone Edge Graphic) tension fabrics snap seamlessly into aluminum light box frames for smooth, borderless illuminated display walls with zero wrinkles.',
    features: ['High-density double-strike print for rich illuminated colors', 'Even light diffusion without LED pixelation', 'SEG silicone welt finishing for tension fabric boxes', 'Wrinkle-resistant foldable textile option'],
    specs: {
      technology: 'Dual-Strike UV & Latex Translucent Printing',
      mediaOptions: 'Translucent Cast Backlit Film, 210 GSM Woven SEG Backlit Fabric',
      finishesAvailable: '14mm Silicone Keder Welt Stitched, Gloss/Matte Clear Coat',
      minOrderQty: '1 Lightbox Panel',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours Rush in Patna'
    },
    applications: ['Airport & Metro Station Lightbox Displays', 'Jewellery & Luxury Showroom Glowing Posters', 'Hospital & Corporate Reception Illuminated Boards', 'Cinema & Entertainment Backlit Menu Boards'],
    prepressChecklist: ['CMYK double-strike calibrated file', 'Verify silicone welt perimeter margin (12mm excess)', 'High-resolution photographic imagery (300 DPI)'],
    popular: false,
    turnaround: '24-48 Hours'
  },
  {
    id: 'vinyl-for-inshop-branding',
    title: 'Vinyl for In-Shop Branding',
    category: 'vinyl-films',
    subtitle: 'Floor Graphics, Counter Wraps & Shelf Strips',
    image: '/assets/In-Shop & Retail Store Branding.jfif',
    description: 'Comprehensive retail store interior branding including slip-resistant floor graphics, cash counter wraps, and pillar branding.',
    detailedDescription: 'Maximize point-of-sale customer engagement inside dealerships, supermarkets, and specialty retail stores in Patna. We supply and install heavy-duty high-tack vinyl prints engineered specifically for high-traffic retail environments, complete with R9-certified anti-slip floor laminates, scuff-proof counter wraps, and contour-cut shelf talker strips.',
    features: ['R9-certified textured anti-slip floor laminate', 'High-tack adhesion onto tiles, wood, and metal', 'Scuff and alcohol cleaning resistant', 'Custom contour die-cut shapes'],
    specs: {
      technology: 'High-Resolution UV & Eco-Solvent with Digital Die-Cutting',
      mediaOptions: 'High-Tack Polymeric Vinyl, Anti-Slip Textured Floor Film',
      finishesAvailable: 'Heavy Embossed Matte Floor Laminate, Contour Cut-to-Shape',
      minOrderQty: 'Custom Store Package',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours in Patna'
    },
    applications: ['Directional Supermarket Floor Footprints & Arrows', 'Billing Counter & POS Desk Wraps', 'Structural Pillar Wraps in Malls & Showrooms', 'Product Display Shelf Strips & Danglers'],
    prepressChecklist: ['Provide contour cut line in 100% Magenta named "CutContour"', 'CMYK color profile', 'High contrast graphics for floor readability'],
    popular: true,
    turnaround: '24-48 Hours'
  },

  // 3. 2D & 3D Letters & Signage
  {
    id: '3d-acrylic-letters',
    title: '3D Acrylic Letters',
    category: 'letter-signage',
    subtitle: 'Laser-Cut Raised Acrylic Letters & LED Logos',
    image: '/assets/Glossy LED Acrylic 3D Letters.jfif',
    description: 'Glossy cast acrylic letters with CNC laser cutting, raised side returns, and Samsung LED backlighting for luxury storefronts.',
    detailedDescription: 'Crafted using imported 100% virgin cast acrylic, our 3D acrylic letters deliver striking dimensional depth and glowing elegance. Each letter is precision laser-cut to exact typography specifications and assembled with acrylic side returns (depths from 25mm to 100mm). Equipped with waterproof Samsung LED modules for front-lit, backlit halo, or side-glowing illumination.',
    features: ['Imported cast acrylic (3mm to 25mm solid or fabricated box letters)', 'Samsung IP67 waterproof internal LED modules', 'Laser-cut sharp contours with zero burn marks', 'Front-lit, halo backlit, and full glowing profile variants'],
    specs: {
      technology: 'Industrial CO2 CNC Laser Cutting + Acrylic Heat Bending',
      mediaOptions: 'Cast Acrylic Sheets (Opal White, Black, Red, Golden Mirror, Custom)',
      finishesAvailable: 'High Gloss, Frosted, Titanium Gold Mirror Acrylic, Dual Glow',
      minOrderQty: '1 Signboard / Letter Set',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Express in Patna'
    },
    applications: ['Jewellery Showroom Main Facias (TBZ, Senco, Kasturi style)', 'Hospital & Hotel Reception Lobby Feature Walls', 'Corporate Office Brand Walls & Boardrooms', 'Shopping Mall Retail Store Entrances'],
    prepressChecklist: ['Vector artwork strictly required (CDR, AI, or vector PDF)', 'All fonts converted to outlines/curves', 'Specify letter height and desired return depth'],
    popular: true,
    turnaround: '3-5 Days'
  },
  {
    id: '2d-3d-letters',
    title: '2D & 3D Letters',
    category: 'letter-signage',
    subtitle: 'Flat Cut 2D & Raised 3D Dimensional Sign Letters',
    image: '/assets/Glossy LED Acrylic 3D Letters.jfif',
    description: 'Precision flat-cut 2D letters and fabricated 3D dimensional lettering across acrylic, metal, MDF, and PVC foam boards.',
    detailedDescription: 'Choose from sleek flat-cut 2D profile letters for interior reception panels or deep 3D dimensional fabricated letters for exterior commercial facades. We process acrylic, stainless steel, brass, titanium, aluminium composite, and high-density foam boards with computerized router and laser cutting tools, followed by professional hand-finishing and studs mounting.',
    features: ['Both flat 2D profile and deep 3D box letters available', 'Acrylic, Stainless Steel, Brass, MDF & PVC substrates', 'Concealed rear stud mounts with wall spacers', 'Durable powder coat, PU paint, and metallic mirror finishes'],
    specs: {
      technology: 'CNC Laser, Plasma & CNC Waterjet/Router Cutting',
      mediaOptions: 'Cast Acrylic, SS 304 Grade, Titanium Sheet, HDHMR MDF, PVC Board',
      finishesAvailable: 'Mirror Gold, Rose Gold, Brush Silver, Matt Black, Custom PU Colors',
      minOrderQty: '1 Word / Logo Set',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours in Patna'
    },
    applications: ['Office Reception Brand Identity Walls', 'Architectural Building Identification Signage', 'Conference Room Entrance Plaque Lettering', 'Retail Store Accent Displays'],
    prepressChecklist: ['Submit 1:1 vector outline artwork with dimensions', 'Indicate wall substrate (drywall, brick, ACP, glass)', 'Mention if floating stud mounting with spacer is required'],
    popular: true,
    turnaround: '3-5 Days'
  },
  {
    id: 'letter-signage',
    title: 'Letter Signage',
    category: 'letter-signage',
    subtitle: 'Architectural Channel Letters & Metal Lettering',
    image: '/assets/Stainless Steel Sign Board (Outdoor).jpeg',
    description: 'Stainless steel 304 grade, titanium, and brass channel letters built for lifelong corrosion-free outdoor prestige.',
    detailedDescription: 'Our architectural metal letter signage is engineered for organizations demanding eternal durability and distinguished prestige. Fabricated from premium marine-grade stainless steel 304 with laser-welded seams, these channel letters will never rust, fade, or degrade under Patna monsoon or intense summer heat. Available in hairline brushed steel, mirror chrome, titanium gold, and rose gold.',
    features: ['Grade 304 stainless steel, brass, and titanium alloy', 'Precision laser welding with seamless corners', 'Completely weatherproof & rust-proof exterior rating', 'Warm white or cool white halo LED backlighting option'],
    specs: {
      technology: 'Fiber Laser Cutting & Automatic Channel Letter Bending',
      mediaOptions: 'SS 304 Grade (0.8mm to 1.5mm Gauge), Pure Brass, Titanium PVD',
      finishesAvailable: 'Hairline Brushed, Mirror Polish, Electroplated Gold, Halo Glow',
      minOrderQty: '1 Set',
      turnaroundStandard: '4 - 6 Days',
      turnaroundRush: '3 Days Rush'
    },
    applications: ['Bank Head Offices (SBI, PNB style) & Government Buildings', 'Jewellery Showrooms & Luxury Boutiques', '5-Star Hotels & Premium Hospitals', 'Corporate Headquarters & Industrial Factory Gates'],
    prepressChecklist: ['Supply 1:1 vector outlines (CorelDraw CDR / Illustrator AI)', 'Minimum stroke thickness 15mm for internal LED fitting', 'Specify front-lit or halo back-lit preference'],
    popular: false,
    turnaround: '4-6 Days'
  },
  {
    id: '3d-letter-boards',
    title: '3D Letter Boards',
    category: 'letter-signage',
    subtitle: 'Integrated ACP Backer with Raised 3D Letters',
    image: '/assets/LED Glow Sign Board & Box.avif',
    description: 'Complete turnkey signboards combining structural ACP sheet panelling with raised illuminated 3D letters and power supplies.',
    detailedDescription: 'The gold standard for modern retail storefronts and corporate building facias across Bihar. We design, fabricate, and install turnkey 3D letter boards featuring an aluminum composite panel (ACP) base with CNC-routed wire-routing, mounted 3D acrylic or metal letters, and industrial MeanWell LED power supplies with auto-timer controllers.',
    features: ['Rigid exterior grade ACP tray base panel', 'Flush or floating mounted 3D illuminated letters', 'Concealed internal electrical wiring and power supplies', 'Turnkey site survey, fabrication, scaffold mounting in Patna'],
    specs: {
      technology: 'CNC Router Grooving + Laser Letter Fabrication + LED Assembly',
      mediaOptions: '3mm/4mm Exterior Grade ACP + Cast Acrylic 3D Letters',
      finishesAvailable: 'Matte ACP, Gloss ACP, Wooden Texture ACP, Sparkling Metallic',
      minOrderQty: '1 Complete Board',
      turnaroundStandard: '4 - 6 Days',
      turnaroundRush: '3 Days Rush in Patna'
    },
    applications: ['Retail Storefront Main Fascia (Patna Main Road, Boring Road)', 'Automobile Dealership Showrooms (Bajaj, Maruti style)', 'Private Hospital & Clinic Entrances', 'Educational Institute Gate & Campus Signage'],
    prepressChecklist: ['Elevation drawing or high-res photo of shopfront with tape measurements', 'Brand vector logo file', 'Electricity point location details'],
    popular: true,
    turnaround: '4-6 Days'
  },

  // 4. Wall Branding & Wraps
  {
    id: 'wall-wraps',
    title: 'Wall Wraps',
    category: 'wall-branding',
    subtitle: 'Seamless Floor-to-Ceiling Interior Wall Wraps',
    image: '/assets/High-Tack Vinyl Wall Wraps & Media Fabrication.jpg',
    description: 'Transform bare office, gym, and retail walls with high-tack seamless wallpaper wraps and non-reflective matte lamination.',
    detailedDescription: 'Turn ordinary painted plaster walls into breathtaking panoramic brand environments. Our wall wrap system uses heavy-tack self-adhesive wall vinyl that adheres tenaciously to smooth painted drywall, cement plaster, and wooden paneling. Finished with an anti-glare matte protective shield that eliminates harsh light reflections while remaining completely washable.',
    features: ['High-tack specialized wall adhesive formulation', 'Non-reflective matte scratch-proof protective laminate', 'Photographic color fidelity up to 2400 DPI', 'Seamless panel overlap alignment with invisible joints'],
    specs: {
      technology: 'Wide-Format Photographic Eco-Solvent / Latex Printing',
      mediaOptions: 'Polymeric Wall Vinyl with High-Tack Adhesive Layer',
      finishesAvailable: 'Deep Velvet Matte, Textured Canvas, Satin Lamination',
      minOrderQty: '50 Sq.Ft',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours in Patna'
    },
    applications: ['Corporate Office Boardrooms & Reception Feature Walls', 'Fitness Gyms & Sports Club Motivational Murals', 'Children Clinics & School Activity Rooms', 'Restaurant & Cafe Theme Dining Spaces'],
    prepressChecklist: ['Measure wall height and width at three different spots', 'Add 3 inches extra bleed on all 4 sides for wall skew adjustments', 'Ensure wall is smooth, clean, and primed before installation date'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'wall-media',
    title: 'Wall Media',
    category: 'wall-branding',
    subtitle: 'Textured Wallpaper, Canvas & Wall Graphics',
    image: '/assets/3D Wallpaper Printing for Interiors.avif',
    description: 'Custom textured wallpaper printing with canvas, linen, and leather finishes for bespoke interior decorating.',
    detailedDescription: 'Elevate interior aesthetics beyond standard flat vinyl with our architectural-grade textured wall media. Printed with odorless water-based inks on European non-woven textured wallpaper, artists canvas, and embossed vinyl substrates. Resistant to mold, humidity, and fading, these bespoke murals are customized precisely to your interior architectural blueprints.',
    features: ['Authentic textured leather, linen, and artistic canvas finishes', 'Water-based odorless eco-safe inks (hospital & nursery safe)', 'Fire-retardant and moisture-resistant breathable substrates', 'Custom scaled precisely to room dimensions'],
    specs: {
      technology: 'Eco-Solvent / Latex Odor-Free Architectural Printing',
      mediaOptions: 'Textured Non-Woven Wallpaper, Canvas Media, Leatherette Film',
      finishesAvailable: 'Embossed Linen, Stucco, Fine Art Matte Canvas',
      minOrderQty: '30 Sq.Ft',
      turnaroundStandard: '2 - 3 Days',
      turnaroundRush: '24 Hours Rush'
    },
    applications: ['Luxury Residential Living Rooms & Master Bedrooms', 'Hotel Lobbies & Executive Suites', 'Executive Director Cabins & Conference Spaces', 'Boutique Showroom Interior Backdrops'],
    prepressChecklist: ['Supply 300 DPI high-resolution artwork or vector pattern', 'Specify exact wall height and width in inches', 'Allow 50mm bleed on all sides'],
    popular: false,
    turnaround: '2-3 Days'
  },
  {
    id: 'digital-wall-painting',
    title: 'Digital Wall Painting',
    category: 'wall-branding',
    subtitle: 'Massive Stencil & Direct Wall Advertising Across Bihar',
    image: '/assets/Outdoor Digital Wall Painting & Stencil Signage.avif',
    description: 'Direct digital wall painting and high-opacity outdoor stenciling across highway roadside walls, rural markets, and tier-2 towns.',
    detailedDescription: 'Digital Wall Painting has revolutionized outdoor mass advertising across Bihar, replacing slow manual hand-painting with rapid digital canvas application and weather-sealed exterior pigments. Trusted by national cement brands (like UltraTech), FMCG leaders, and telecom giants to achieve massive brand saturation along national highways, rural market hubs, and roadside residential walls.',
    features: ['High-opacity weatherproof pigments resistant to rain and sun', 'Rapid deployment across hundreds of wall locations in Bihar', 'Precision brand logo, typography, and color reproduction', 'Long-lasting 12 to 24 month outdoor color retention'],
    specs: {
      technology: 'Digital Wall Canvas Transfer & Precision Stencil Application',
      mediaOptions: 'Exterior Weatherproof Poly-Cotton Canvas / Direct Pigment Stencil',
      finishesAvailable: 'Water-Sealed Exterior Topcoat',
      minOrderQty: '10 Wall Locations / 1,000 Sq.Ft',
      turnaroundStandard: '3 - 7 Days (Campaign Scale Dependent)',
      turnaroundRush: 'Priority Team Deployment Available'
    },
    applications: ['Cement, Steel & Construction Brand Mass Awareness (UltraTech, Tata)', 'FMCG & Fertilizer Rural Campaigns across Bihar districts', 'Banking & Insurance Mass Reach Campaigns (SBI)', 'Automobile & Two-Wheeler Dealership Roadside Signage (Bajaj)'],
    prepressChecklist: ['Simple bold vector artwork with high contrast colors', 'Local language (Hindi & English) typography verification', 'Pre-identified wall site coordinates across Bihar'],
    popular: true,
    turnaround: '3-7 Days'
  },
  {
    id: 'wall-branding',
    title: 'Wall Branding',
    category: 'wall-branding',
    subtitle: 'Corporate & Commercial Interior Wall Art',
    image: '/assets/customized_wall_stickers.jfif',
    description: 'Tailored company vision walls, milestone timeline graphics, contour-cut vinyl decals, and layered acrylic accents.',
    detailedDescription: 'Infuse your workplace with brand pride, enterprise milestones, and high visual energy. Our corporate wall branding solutions integrate layered media: matte vinyl prints, acrylic raised lettering, brushed metal logos, and modular fabric panels. Tailored for corporate offices in Patna to reflect company heritage and elevate customer perception.',
    features: ['Multi-layered media: vinyl, acrylic, wood, and metal accents', 'Custom plotted contour decals with application transfer tape', 'Odor-free, clean, dust-free installation process', 'Custom designs reflecting company values, mission & history'],
    specs: {
      technology: 'Precision Vinyl Plotting & UV Flatbed Printing',
      mediaOptions: 'Cast Plotter Vinyl, Frosted Film, Raised Acrylic Logos',
      finishesAvailable: 'Matte Vinyl, Gloss Accents, 3D Laser Cut Wood/Acrylic',
      minOrderQty: '1 Feature Wall',
      turnaroundStandard: '2 - 3 Days',
      turnaroundRush: '24 Hours in Patna'
    },
    applications: ['Office Reception & Waiting Lounge Feature Walls', 'Company History, Founder Timeline & Vision Walls', 'Coworking Spaces & Tech Startup Hubs in Patna', 'School & College Motivational Corridors'],
    prepressChecklist: ['Vector files preferred for lettering and icons', 'Verify wall paint type (emulsion vs enamel)', 'Ensure surface is cured and free of dampness'],
    popular: false,
    turnaround: '2-3 Days'
  },
  {
    id: 'wall-wraps-with-fabrication',
    title: 'Wall Wraps with Fabrication',
    category: 'wall-branding',
    subtitle: 'Sunboard & MDF Paneling with Structural Framework',
    image: '/assets/sunboard_printing.jfif',
    description: 'Rigid 5mm-10mm Sunboard and MDF panel fabrication layered over subframes for uneven walls and architectural depth.',
    detailedDescription: 'When walls have uneven plaster, dampness, exposed conduits, or structural columns, direct vinyl application is not feasible. Our Wall Wraps with Fabrication solution constructs an aluminium or wooden sub-framework upon which 5mm-10mm high-density Sunboards or MDF panels are mounted, followed by seamless laminated vinyl graphics and aluminium edge trims for a flawless architectural facade.',
    features: ['Solves uneven, damp, or conduit-covered wall surfaces', '3mm to 10mm high-density Sunboard & MDF rigid panelling', 'Aluminium edge beadings and seamless concealed joint splices', 'Permits integrated LED strip cove lighting and raised logos'],
    specs: {
      technology: 'Sunboard Direct UV Printing or Vinyl Mounting + Fabrication',
      mediaOptions: '5mm / 8mm / 10mm High-Density PVC Foam Sunboard, 6mm MDF',
      finishesAvailable: 'Satin Matte Lamination, Aluminum Corner Trims, Backlit Coving',
      minOrderQty: '50 Sq.Ft',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '48 Hours Rush'
    },
    applications: ['Trade Fair Stalls & Exhibition Booth Internal Walls', 'Uneven Commercial Showroom Walls & Pillar Boxing', 'Hospital Diagnostic Centers & Clinic Interiors', 'Retail Franchise Outlet Standardization'],
    prepressChecklist: ['Accurate on-site elevation measurement', 'Identify switchboard, AC duct, and obstacle cutouts', 'Provide high-res 300 DPI graphics with 20mm panel bleed'],
    popular: true,
    turnaround: '2-4 Days'
  },

  // 5. ACP, Clip-On & Display Boards
  {
    id: 'clipon-board',
    title: 'Clip-On Board',
    category: 'boards-displays',
    subtitle: 'Ultra-Slim LED Clip-On Poster Light Boxes',
    image: '/assets/LED Slim Light Box Poster Panels.jfif',
    description: 'Sleek anodized aluminum snap-frame lightboxes with ultra-thin profile, bright LED edge-lighting, and instant poster changeover.',
    detailedDescription: 'Our Clip-On LED Light Boxes (Slim Snap Frames) represent the ultimate in sleek, modern illuminated poster displays. Featuring a slim anodized aluminum profile with four-sided spring-loaded snap edges, you can flip open the frame and replace high-resolution backlit graphics in under 30 seconds without tools. Equipped with an optical light guide plate (LGP) for 100% uniform edge-to-edge illumination.',
    features: ['Ultra-slim profile (under 20mm total thickness)', 'Four-sided snap-open clip mechanism for 30-second poster changes', 'Optical dot-matrix acrylic LGP for perfectly even illumination', 'Energy-saving edge-lit LED strips with 50,000+ hour lifespan'],
    specs: {
      technology: 'Laser-Etched Optical LGP + Anodized Snap Aluminum Frame',
      mediaOptions: 'Backlit Translucent PET Film / High-Gloss Film',
      finishesAvailable: 'Silver Anodized, Matte Black Anodized, Golden Frame',
      sizesAvailable: 'A4, A3, A2, A1, A0, 2x3 ft, 2x4 ft, Custom',
      minOrderQty: '1 Unit',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours in Patna'
    },
    applications: ['Restaurant & Fast Food QSR Illuminated Menu Boards', 'Jewellery & Fashion Showroom Wall Lightboxes', 'Cinema Theaters, Multiplexes & Mall Lobbies', 'Hospital Reception Displays & Corporate Lobbies'],
    prepressChecklist: ['Size artwork to exact poster insert dimension', 'Keep key text 12mm inside edges due to snap frame lip overlap', '300 DPI high-contrast CMYK artwork'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'acp-board',
    title: 'ACP Board Signage',
    category: 'boards-displays',
    subtitle: 'Aluminium Composite Panel Exterior Signages',
    image: '/assets/LED Glow Sign Board & Box.avif',
    description: 'Heavy-duty 3mm/4mm exterior grade ACP sheet panelling with CNC V-groove bending, structural MS framing, and long-term weather warranty.',
    detailedDescription: 'Aluminium Composite Panel (ACP) signboards are the architectural foundation of premium commercial exteriors across Patna. We fabricate rigid structural MS frames, clad them with top-tier ACP sheets (brands like Aludecor, Eurobond), and CNC router-groove the corners for seamless folded edges. Waterproof, fire-retardant, and immune to rust, termites, or fading.',
    features: ['3mm / 4mm exterior grade PVDF coated ACP panels', 'CNC V-groove folding for clean seamless box edges', 'Heavy-duty welded MS iron sub-frame with anti-rust coating', 'Ideal substrate for 3D acrylic letters and LED glow logos'],
    specs: {
      technology: 'CNC Router V-Grooving & Routing + MIG Structural Welding',
      mediaOptions: '3mm / 4mm Exterior PVDF Grade ACP Sheets',
      finishesAvailable: 'Solid Colors, Metallic Silver/Copper, Wooden Texture, Marble Pattern',
      minOrderQty: '1 Board (Custom Dimensions)',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Rush'
    },
    applications: ['Commercial Showroom Main Facade Signboards', 'Bank Branch Facias (SBI, HDFC style) across Bihar', 'Hospital & Nursing Home Entrance Gateways', 'Petrol Pump Canopy Signage & Dealership Fascias'],
    prepressChecklist: ['Provide exact facade width, height, and depth measurements', 'Specify ACP color shade code', 'Include architectural elevation or CAD layout'],
    popular: true,
    turnaround: '3-5 Days'
  },
  {
    id: 'mdf-board',
    title: 'MDF Board',
    category: 'boards-displays',
    subtitle: 'CNC Routed MDF Grills, Letters & Cutout Displays',
    image: '/assets/mdf_glowing_designer_photo_frame.jpg',
    description: 'Computerized CNC jaali cutouts, custom routed MDF logos, back-lit partitions, and precision architectural display panels.',
    detailedDescription: 'Our computerized CNC router carving services transform high-density moisture-resistant (HDHMR) MDF boards into intricate geometric patterns, ornamental jaalis, corporate logos, and layered decorative backdrops. Sprayed with multi-coat automotive-grade PU paints or metallic duco finishes, these boards add rich warmth and refined elegance to interiors.',
    features: ['High-density moisture-resistant (HDHMR) green MDF board', 'Intricate 2D and 3D CNC carving with 0.1mm router precision', 'Automotive grade PU paint, duco spray, and wood polish finishing', 'Perfect for back-lit ambient lighting integration'],
    specs: {
      technology: 'Heavy-Duty 3-Axis CNC Router Milling & 2D/3D Carving',
      mediaOptions: '6mm, 12mm, 18mm, 25mm Action TESA / Century HDHMR MDF',
      finishesAvailable: 'Raw Routed, PU Matte Spray, High-Gloss Duco, Wood Veneer',
      minOrderQty: '1 Sheet (8x4 ft)',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '48 Hours in Patna'
    },
    applications: ['Interior Mandir & Living Room Decorative Jaali Partitions', 'Showroom Feature Wall Panels & Product Racks', 'Corporate Office Reception Feature Walls', 'Exhibition Stall Thematic Backdrops'],
    prepressChecklist: ['Provide closed vector curves in DXF, DWG, AI, or CDR format', 'Ensure minimum tool path width matches router bit (minimum 3mm)', 'Specify sheet thickness and paint code'],
    popular: false,
    turnaround: '2-4 Days'
  },
  {
    id: 'letter-board',
    title: 'Letter Board',
    category: 'boards-displays',
    subtitle: 'Interchangeable Grooved Letter Boards & Directory Panels',
    image: '/assets/boarding_signs.jfif',
    description: 'Changeable felt-grooved directory boards with snap-in plastic letters and aluminum extruded frames for lobbies and menus.',
    detailedDescription: 'Essential for hospital doctor duty rosters, multi-tenant corporate floor directories, conference schedules, and daily cafe pricing boards. Built with precision-grooved velvet felt or magnetic surfaces encased in anodized aluminium frames, accompanied by complete font assortments of interchangeable letters and numbers for instant text revisions.',
    features: ['Anodized aluminum frame with lockable clear acrylic door option', 'Horizontal grooved felt or magnetic dry-erase surface', 'Complete assorted font kit (letters, numbers, currency symbols)', 'Wall-mounted or freestanding adjustable pedestal stand'],
    specs: {
      technology: 'Precision Extruded Aluminum Assembly with Grooved Face',
      mediaOptions: 'Felt Grooved Backing (Black, Maroon, Blue), Magnetic Metal Sheet',
      finishesAvailable: 'Silver Satin Frame, Matte Gold, Black Powder Coated',
      sizesAvailable: '1.5x2 ft, 2x3 ft, 3x4 ft, 4x6 ft, Custom Sizes',
      minOrderQty: '1 Unit',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours Rush'
    },
    applications: ['Hospital OPD Timetable & Doctor On-Duty Boards', 'Corporate Multi-Storey Floor Directory Displays', 'Hotel & Banquet Daily Conference Welcome Panels', 'School & College Notice Board Information Panels'],
    prepressChecklist: ['Specify frame outer size and felt color preference', 'Choose letter font height (1/2", 3/4", 1", 1.5", 2")', 'Indicate wall mount or standing tripod base requirement'],
    popular: false,
    turnaround: '24-48 Hours'
  },
  {
    id: 'digital-display-board',
    title: 'Digital Display Board',
    category: 'boards-displays',
    subtitle: 'LED Scrolling & Digital Video Sign Boards',
    image: '/assets/LED Slim Light Box Poster Panels.jfif',
    description: 'High-brightness programmable electronic LED scrolling text boards and full-color SMD video walls with Wi-Fi/Cloud control.',
    detailedDescription: 'Engage audiences with dynamic moving messages and vibrant digital displays. We supply, configure, and install indoor and outdoor electronic LED scrolling message boards (single color red/green/amber or full RGB color) as well as seamless SMD LED video walls. Programmed easily via mobile app, Wi-Fi, USB, or cloud networks to display notices, offers, and announcements.',
    features: ['Ultra-bright P4, P6, P10 indoor and outdoor LED modules', 'Easy mobile app and Wi-Fi programming without complicated software', 'Weatherproof IP65 outdoor grade cabinetry with cooling fans', 'High refresh rate with smooth text animation effects'],
    specs: {
      technology: 'SMD LED Modular Tile Technology with NovaStar / Huidu Controllers',
      mediaOptions: 'P10 Outdoor LED Modules (Red, Green, Full Color RGB), P4/P5 Indoor',
      finishesAvailable: 'Powder Coated Metal Cabinet, Waterproof Front Service Door',
      minOrderQty: '1 Display Board',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '48 Hours Rush in Patna'
    },
    applications: ['Commercial Retail Shops (Daily Special Offers, Discounts)', 'Hospitals & Diagnostic Centers (Token Numbers, Emergency Announcements)', 'Schools & Universities (Campus Notice & Event Announcements)', 'Petrol Pumps & Bus/Railway Transit Centers'],
    prepressChecklist: ['Specify required board size (height x length in feet or module count)', 'Indicate viewing distance and indoor vs outdoor usage', 'Power source connection details'],
    popular: true,
    turnaround: '2-4 Days'
  },
  {
    id: 'backlit-boards',
    title: 'Backlit Boards',
    category: 'boards-displays',
    subtitle: 'Custom Fabricated LED Backlit Glow Sign Boxes',
    image: '/assets/backlit banner.jfif',
    description: 'Heavy GI box fabrication with internal high-lumen waterproof LED modules and vibrant translucent front flex/acrylic graphics.',
    detailedDescription: 'A classic and highly cost-effective 24-hour storefront solution across Patna and Bihar markets. We fabricate deep GI / MS sheet boxes coated with anti-rust enamel, fit them with energy-efficient waterproof LED tube lights or module clusters, and front-mount high-tension translucent backlit flex or 3mm acrylic with UV-printed vinyl for maximum nighttime illumination.',
    features: ['Galvanized iron (GI) sheet box with internal reflective coating', 'Waterproof IP67 LED lighting system with low power draw', 'High-tension flex stretching or acrylic slide-in face', 'Complete 360-degree weather sealing against rain & insects'],
    specs: {
      technology: 'GI Sheet Bending & Spot Welding + UV Backlit Printing',
      mediaOptions: 'Translucent Backlit Flex (510 GSM), 3mm Cast Acrylic Sheet',
      finishesAvailable: 'Single Sided Wall Mounted, Double Sided Cantilever Projecting',
      minOrderQty: '1 Board',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours in Patna'
    },
    applications: ['Chemist & Pharmacy 24-Hour Glow Signs', 'Grocery & Kirana Storefront Nameboards', 'Restaurant & Sweet Shop Illuminated Canopies', 'Cantilever Perpendicular Street Walkway Signs'],
    prepressChecklist: ['Provide 2 inches border margin for frame wrap-around', 'High-saturation CMYK artwork with bold typography', 'Specify single-sided or double-sided projecting bracket'],
    popular: true,
    turnaround: '24-48 Hours'
  },

  // 6. Canopy, Standees & Promo
  {
    id: 'canopy',
    title: 'Canopy',
    category: 'promo-events',
    subtitle: 'Pop-Up Promotional Canopies & Event Tents',
    image: '/assets/promotional_banner.jpg',
    description: 'Heavy-duty foldable steel promotional kiosks (6x6 ft, 4x4 ft) with waterproof full-color printed roof and back walls.',
    detailedDescription: 'The ultimate portable sales and brand activation kiosk for roadshows, weekly haats, exhibition grounds, and rural market promotions. Featuring an accordion-style foldable powder-coated steel frame that expands and locks in under 3 minutes without tools. Clad with 100% waterproof Tetron/Oxford fabric with photographic dye-sublimation or solvent printing.',
    features: ['Heavy-duty foldable accordion steel frame', '100% waterproof UV-coated Tetron/Oxford fabric', 'Compact carry bag for effortless transport in auto or car boot', 'Sets up in less than 3 minutes without tools'],
    specs: {
      technology: 'Sublimation / Eco-Solvent Heavy Fabric Printing',
      mediaOptions: '600D Waterproof Tetron / Heavy Oxford Fabric',
      sizesAvailable: '4x4 ft, 6x6 ft, 10x10 ft (Hexagonal or Square Pipe)',
      finishesAvailable: 'Top Canopy Roof Only, or Complete with 3 Half-Walls / 1 Back Wall',
      minOrderQty: '1 Canopy Unit',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: '24 Hours Rush in Patna'
    },
    applications: ['Telecom & Banking Roadside Customer Onboarding Booths', 'Automobile & Two-Wheeler Test Drive Kiosks', 'FMCG Sampling & Product Tasting Stalls in Patna Markets', 'Political Campaign Information Help Desks'],
    prepressChecklist: ['Request our exact canopy die-line template for roof and valance flaps', 'CMYK color profile at 150 DPI resolution', 'Ensure logos on slope are scaled for eye-level viewing'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'standee',
    title: 'Standee',
    category: 'promo-events',
    subtitle: 'Roll-Up Retractable Aluminium Exhibition Standees',
    image: '/assets/exibition_roll_up_standees.jfif',
    description: 'Lightweight retractable roll-up banner stands with heavy aluminum cassette base, non-curl PET film, and zippered carry bag.',
    detailedDescription: 'Our retractable roll-up standees are the quintessential marketing asset for conferences, medical summits, hotel seminars, and retail promotions in Patna. Built with heavy-gauge extruded aluminium bases featuring twin rotating stabilizing feet and an internal spring tension roller mechanism. The banner is printed on premium non-curl PET grey-back film that stays perfectly flat.',
    features: ['Heavy-gauge extruded aluminium cassette base with twin feet', 'Premium non-curl grey-back PET film (eliminates side curling)', 'Padded zippered canvas carry bag included with every unit', 'Sets up in 15 seconds by a single person'],
    specs: {
      technology: '1440 DPI Photographic Eco-Solvent / UV Printing',
      mediaOptions: 'Non-Curl Grey-Back PET Film (220 Micron), Star Flex',
      sizesAvailable: '6x3 ft (Standard), 6x2.5 ft, 6x4 ft, Luxury Teardrop Base',
      finishesAvailable: 'Standard Aluminum, Heavy Broad Base Luxury, Matte Laminated',
      minOrderQty: '1 Standee',
      turnaroundStandard: '24 Hours',
      turnaroundRush: 'Same-Day 2 - 4 Hours in Patna'
    },
    applications: ['Medical Seminars & Corporate Conferences (Hotel Maurya, Lemon Tree)', 'Educational Coaching Admissions & Career Fair Stalls', 'Jewellery & Retail Product Launch Showrooms', 'Exhibition Booths & Trade Expo Displays'],
    prepressChecklist: ['Standard size: 33.5" wide x 78" high (Canvas 33.5" x 82" with 4" bottom roller lead)', 'Keep text 1.5 inches away from top and 4 inches away from bottom', '150-300 DPI high-resolution CMYK PDF or TIFF'],
    popular: true,
    turnaround: 'Same Day / 24h'
  },
  {
    id: 'umbrella-branding',
    title: 'Umbrella Branding',
    category: 'promo-events',
    subtitle: 'Promotional Garden, Golf & Street Vendor Umbrellas',
    image: '/assets/customized_umbrella.jfif',
    description: 'Heavy-duty 6ft-8ft promotional garden and vendor umbrellas with fiberglass ribs, cast-iron bases, and vibrant multi-panel printing.',
    detailedDescription: 'Dominate street markets and outdoor public spaces across Bihar. Our promotional branded umbrellas feature heavy-duty 8-rib powder-coated metal or fiberglass frames anchored by weighted water/sand-fillable or cast-iron bases. The heavy polyester canopy is printed across multiple panels with vivid, UV-fast colors that stay vibrant under scorching summer sun and torrential rain.',
    features: ['Heavy-duty 6ft, 7ft, and 8ft diameter canopy options', 'UV-treated water-repellent thick polyester fabric', 'Sturdy powder-coated pole with heavy cast iron / water-fill base', 'Multi-panel alternating color branding for 360-degree visibility'],
    specs: {
      technology: 'Screen Printing & Dye-Sublimation Fabric Printing',
      mediaOptions: 'Heavy Polyester Fabric with Silver UV Inner Coating',
      sizesAvailable: '6 ft, 7 ft, 8 ft Diameter with 2-Piece Telescopic MS Pole',
      finishesAvailable: 'Flapped Valance Edges, Tilting Mechanism, Weighted Base',
      minOrderQty: '5 Units',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Rush'
    },
    applications: ['Street Vendor & Kiosk Brand Partnerships (Tea stalls, fruit vendors)', 'Tea, Beverage & Dairy Brand Retail Saturation', 'Bank & Microfinance Rural Information Stalls', 'Outdoor Cafe & Restaurant Garden Seating'],
    prepressChecklist: ['Provide logo vector file for triangular panel placement', 'Specify panel color sequence (e.g. Red / White alternating)', 'Mention valance text if needed'],
    popular: true,
    turnaround: '3-5 Days'
  },
  {
    id: 'flag',
    title: 'Flag & Flag Cards',
    category: 'promo-events',
    subtitle: 'Teardrop, Feather Flags & Handheld Flag Cards',
    image: '/assets/promotional_flags.jfif',
    description: 'Dynamic aerodynamic feather and teardrop flags with telescopic carbon fiber poles, plus handheld paper/cloth flag cards.',
    detailedDescription: 'Catch the moving eye from hundreds of feet away. Our promotional flying flags (feather, teardrop, and blade shapes) flutter gracefully with the breeze, constantly generating visual motion that draws immediate attention. Crafted from lightweight knitted polyester with vibrant double-sided dye-sublimation print, paired with flexible carbon-composite poles and indoor/outdoor bases.',
    features: ['Aerodynamic shape that flutters with wind to attract attention', 'Vibrant dye-sublimation print with 95% reverse bleed penetration', 'Lightweight carbon-fiber telescopic pole system', 'Ground spike for soil/grass or heavy cross base with water donut ring'],
    specs: {
      technology: 'Dye-Sublimation Digital Textile Printing',
      mediaOptions: '110 GSM Warp-Knitted Polyester Fabric, Paper Flag Cards',
      sizesAvailable: '8 ft, 10 ft, 12 ft, 15 ft Total Height; Handheld Flag Cards',
      finishesAvailable: 'Teardrop, Feather, Blade Rectangular, Cross Base, Spike',
      minOrderQty: '2 Flags / 100 Flag Cards',
      turnaroundStandard: '2 - 3 Days',
      turnaroundRush: '24 Hours Rush in Patna'
    },
    applications: ['Automobile Showroom Forecourts & Petrol Stations', 'Sports Events, Marathons & University Tournaments', 'Real Estate Site Entrances & Sample Flat Walkways', 'Political Rallies & Handheld Flag Card Distributions'],
    prepressChecklist: ['Use our flag shape contour vector template', 'Keep graphics bold and centered along curve', 'CMYK color mode for high saturation'],
    popular: false,
    turnaround: '2-3 Days'
  },
  {
    id: 'gazebo',
    title: 'Gazebo',
    category: 'promo-events',
    subtitle: 'Deluxe Heavy-Duty Outdoor Promotional Gazebos',
    image: '/assets/promotional_flags.jfif',
    description: 'Spacious 10x10 ft deluxe event tents with reinforced hexagonal aluminum legs, custom printed roof canopy, and full-color sidewalls.',
    detailedDescription: 'For premium brand activations, trade expos, and outdoor luxury displays where standard canopies are not enough, our Deluxe Promotional Gazebo provides unmatched presence and stability. Built with robust 40mm hexagonal extruded aluminum frame legs and 600D polyurethane-coated waterproof fabric that shields personnel and products from sun and storms.',
    features: ['Heavy-duty 40mm hexagonal anodized aluminum framework', '600D PU-coated waterproof and fire-resistant fabric canopy', 'Detachable full back wall and half-side walls with heavy zip closures', 'Spacious 10x10 ft (3x3 m) footprint accommodates product displays & team'],
    specs: {
      technology: 'Full-Color Dye-Sublimation Fabric Printing',
      mediaOptions: '600D Commercial Grade Waterproof Polyester',
      sizesAvailable: '10x10 ft (3x3 m), 10x15 ft, 10x20 ft',
      finishesAvailable: 'Canopy Only, with Half Walls, with Full Panoramic Enclosure',
      minOrderQty: '1 Gazebo',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Rush'
    },
    applications: ['Automobile Expos & Outdoor Car Displays', 'Government Exhibition Pavilions & Agro Expos in Patna', 'Corporate Brand Roadshows & Music Festivals', 'Luxury Real Estate On-Site Customer Lounges'],
    prepressChecklist: ['Obtain our 3D gazebo panel template', 'Include high-resolution imagery for walls (150 DPI minimum)', 'CMYK color profile with rich blacks'],
    popular: false,
    turnaround: '3-5 Days'
  },
  {
    id: 'banners',
    title: 'Banners',
    category: 'promo-events',
    subtitle: 'Satin Fabric, Digital Cloth & PVC Event Banners',
    image: '/assets/Digital Cloth & Satin Fabric Banner.jfif',
    description: 'Eco-friendly satin cloth banners, digital fabric backdrops, and heavy PVC banners with brass eyelets and hanging loops.',
    detailedDescription: 'From high-sheen satin cloth banners for stage decorum to weather-resistant outdoor vinyl banners, Micro Graphics offers the widest material selection in Patna. Our digital fabric banners eliminate plastic reflection, fold compactly into a briefcase without creasing, and display photographic color richness that looks magnificent under stage spotlights.',
    features: ['Wrinkle-free polyester satin, digital cloth, and heavy PVC', 'Zero light reflection on fabric (ideal for photography & video)', 'Ultra-lightweight, foldable, and reusable for multiple tours', 'Finished with brass eyelets, pole loops, or hemmed borders'],
    specs: {
      technology: 'Dye-Sublimation & Wide-Format Eco-Solvent Printing',
      mediaOptions: 'Satin Cloth, Knitted Polyester Fabric, 380 GSM Normal/Star Flex',
      finishesAvailable: 'Brass Grommets, Hemmed Edges, Pole Sleeves, Velcro Backing',
      minOrderQty: '1 Banner (Any Custom Size)',
      turnaroundStandard: '24 Hours',
      turnaroundRush: '2 - 4 Hours Express in Patna'
    },
    applications: ['Academic Seminar & College Convocation Stage Backdrops', 'Medical Conferences & Research Poster Displays', 'Temple & Religious Festival Decorative Banners', 'Indoor Retail Mall Hanging Fabric Banners'],
    prepressChecklist: ['Scale to 100% at 150 DPI', 'CMYK color profile', 'Keep text 2 inches away from grommet borders'],
    popular: true,
    turnaround: 'Same Day / 24h'
  },

  // 7. T-Shirts, Caps & Apparel
  {
    id: 't-shirt-printing',
    title: 'T-Shirt Printing',
    category: 'apparel',
    subtitle: 'Custom Corporate Polo, Round Neck & Promotional Tees',
    image: '/assets/custom_polo_t_shirt.jfif',
    description: 'Premium bio-wash cotton and dry-fit sports polyester t-shirts with high-definition DTF, screen printing, and computerized embroidery.',
    detailedDescription: 'Unite your workforce and spread brand awareness with custom corporate t-shirts from Micro Graphics Patna. We supply 180 to 240 GSM 100% combed bio-wash cotton collars and round necks, alongside breathable moisture-wicking Dri-Fit jerseys. Customized using cutting-edge Direct-to-Film (DTF) full-color printing, automated screen printing, or precision multi-color embroidery.',
    features: ['180 to 240 GSM 100% bio-wash combed cotton & Dri-Fit sports poly', 'High-definition DTF printing for multi-color gradients & photos', 'Precision Japanese computerized embroidery on chest and sleeve', 'Tested to withstand 50+ industrial washes without cracking or fading'],
    specs: {
      technology: 'Direct-to-Film (DTF), Automated Screen Print, Multi-Head Embroidery',
      mediaOptions: '100% Combed Cotton, Cotton-Poly Matty, Dri-Fit Poly Interlock',
      stylesAvailable: 'Polo Collar with Buttons, Classic Round Neck, V-Neck, Hoodies',
      sizesAvailable: 'S, M, L, XL, XXL, 3XL, Kids Sizes (Custom Size Sets)',
      minOrderQty: '10 T-Shirts (Samples on Request)',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '24 - 48 Hours in Patna'
    },
    applications: ['Corporate Staff Uniforms & Office Casual Wear', 'Event Volunteers & Exhibition Organizing Teams', 'College Fests, Marathons & Sports Tournaments', 'Political Campaign & Promotional Mass Distribution T-Shirts'],
    prepressChecklist: ['Supply transparent PNG or vector (AI/CDR) at 300 DPI', 'Indicate print positions (Left Chest, Center Front, Back, Sleeve)', 'Specify t-shirt base fabric color'],
    popular: true,
    turnaround: '2-4 Days'
  },
  {
    id: 'cap-printing',
    title: 'Cap Printing',
    category: 'apparel',
    subtitle: 'Branded Baseball Caps, Sun Visors & Event Headwear',
    image: '/assets/women_custom_t-shirts.jfif',
    description: 'Custom embroidered and vinyl heat-pressed baseball caps, mesh trucker caps, and sun visors for roadshows and corporate events.',
    detailedDescription: 'Put your brand at eye-level everywhere your team travels. We supply heavy cotton twill baseball caps, breathable mesh trucker caps, and sports visors with adjustable brass buckle or velcro straps. Customized with high-density 3D puff embroidery or vibrant heat-transfer vinyl graphics for a sharp, executive appearance.',
    features: ['Heavy cotton twill & breathable mesh trucker cap options', '3D puff embroidery and crisp multi-color heat-press vinyl', 'Pre-curved sturdy visor with reinforced interior sweatband', 'Adjustable brass clasp, velcro, or snapback closures'],
    specs: {
      technology: 'Precision Cap Embroidery & High-Pressure Heat Seal Transfer',
      mediaOptions: 'Heavy Brushed Cotton Twill, Polyester Mesh, Dri-Fit Fabric',
      stylesAvailable: '6-Panel Baseball Cap, 5-Panel Trucker, Visor, Sun Bucket Hat',
      colorsAvailable: 'Navy Blue, Black, White, Red, Royal Blue, Green, Two-Tone',
      minOrderQty: '25 Caps',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Rush in Patna'
    },
    applications: ['Political Rally Mass Merchandising & Campaign Volunteers', 'Corporate Sports Days, Cricket Tournaments & Marathons', 'Delivery Fleet Driver & Warehouse Logistics Uniforms', 'Outdoor Brand Roadshow & Promotional Activations'],
    prepressChecklist: ['Maximum front embroidery height: 2.2 inches (55mm)', 'Vector format required for computerized embroidery digitization', 'Simple bold outlines produce cleanest 3D puff stitch'],
    popular: false,
    turnaround: '3-5 Days'
  },

  // 8. Retail, Office & OOH
  {
    id: 'ooh-advertising',
    title: 'OOH Advertising',
    category: 'commercial-branding',
    subtitle: 'Strategic Out-Of-Home Hoardings & Outdoor Campaigns',
    image: '/assets/Outdoor Flex Hoardings & Billboards (OOH).jfif',
    description: 'End-to-end out-of-home advertising management: prime hoarding printing, heavy structural fabrication, and site mounting across Bihar.',
    detailedDescription: 'Deliver overwhelming brand recall across high-density commuter corridors in Bihar. Micro Graphics provides complete OOH execution: printing massive 550 GSM blockout banners, fabricating heavy iron angle frameworks, safely erecting hoardings at elevated heights, and installing nighttime LED halogen floodlights. We handle turnkey campaign printing across Patna, Muzaffarpur, Gaya, and Bhagalpur.',
    features: ['High-impact billboard printing up to 40x20 ft seamless sections', 'Structural iron angle framework and certified safety rigging', 'High-illumination outdoor LED floodlight integration', 'Proven execution for FMCG, cement, and banking leaders'],
    specs: {
      technology: 'Grand-Format Heavy Industrial Solvent Plotters',
      mediaOptions: '550 GSM Blockout Heavy Flex, Frontlit Star Banner',
      finishesAvailable: 'Rope Edge Hemming, Wind-Slit Reliefs, Grommet Lacing',
      minOrderQty: '1 OOH Site',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '24 - 48 Hours in Patna'
    },
    applications: ['National Brand Regional Launches Across Bihar', 'Statewide Election Campaigns & Political Messaging', 'Real Estate Mega Township & Commercial Mall Unveilings', 'Major Festival Consumer Durable Sales Blitzes (Diwali, Chhath)'],
    prepressChecklist: ['Format at 10% scale at 600 DPI or 100% scale at 60 DPI', 'Rich CMYK black formulation', 'Keep essential message elements in upper two-thirds of billboard'],
    popular: true,
    turnaround: '2-4 Days'
  },
  {
    id: 'digital-ooh',
    title: 'Digital OOH',
    category: 'commercial-branding',
    subtitle: 'Dynamic High-Resolution Outdoor Digital Screens',
    image: '/assets/LED Slim Light Box Poster Panels.jfif',
    description: 'Ultra-bright outdoor LED digital billboard displays with video capability, cloud scheduling, and high daytime visibility.',
    detailedDescription: 'Step into the modern era of dynamic advertising with Digital Out-Of-Home (DOOH). We fabricate and supply IP65-rated outdoor LED video screens featuring high-brightness SMD diodes (6000+ nits) that remain clearly visible even under direct noon sunlight. Managed via cloud platforms to schedule time-targeted video commercials and animated promotions.',
    features: ['High-brightness 6000+ nits sunlight-readable SMD LED tiles', 'Weather-sealed IP65 waterproof outdoor cabinetry', 'Remote cloud-based video playlist and schedule management', 'Energy-efficient automated day/night ambient sensor dimming'],
    specs: {
      technology: 'Outdoor SMD LED P4/P6/P8/P10 Video Wall Displays',
      cabinetType: 'Die-Cast Aluminum / Iron Weatherproof Cabinet with Fan Cooling',
      controlSystem: 'NovaStar Cloud / Async Video Controllers with 4G/Wi-Fi',
      minOrderQty: 'Custom Screen Dimension',
      turnaroundStandard: '5 - 10 Days',
      turnaroundRush: 'Priority Engineering Available'
    },
    applications: ['City Landmark Commercial Video Billboards (Dak Bungalow, Bailey Rd)', 'Shopping Mall External Facade Video Walls', 'Transit Hubs, Bus Terminals & Public Plaza Information Displays', 'Stadium & Sports Arena Live Video Scoreboards'],
    prepressChecklist: ['Provide video content formatted to exact pixel resolution of LED screen (e.g. 1920x1080 or custom)', 'MP4 (H.264) video codec at 30/60 FPS', 'High-contrast vibrant color palettes'],
    popular: false,
    turnaround: '5-10 Days'
  },
  {
    id: 'in-shop-branding',
    title: 'In-Shop Branding',
    category: 'commercial-branding',
    subtitle: 'Turnkey Retail Store & Dealership Visual Merchandising',
    image: '/assets/In-Shop & Retail Store Branding.jfif',
    description: 'Complete interior showroom transformations: pillar wraps, product glorifiers, branded counters, wall graphics, and hanging danglers.',
    detailedDescription: 'Transform ordinary retail dealer shops into branded flagship experiences. We partner with national brands to execute standardized retail in-shop branding rollouts across Bihar: from cash counter lamination and structural pillar wraps to acrylic product glorifier displays, illuminated backdrops, and hanging ceiling danglers.',
    features: ['Complete retail transformation: counters, pillars, walls, and ceiling', 'Durable high-tack vinyl with protective anti-scratch lamination', 'Custom acrylic display stands and illuminated product glorifiers', 'Standardized multi-store rollout teams covering all Bihar districts'],
    specs: {
      technology: 'UV Flatbed Printing + Eco-Solvent Vinyl + Acrylic Fabrication',
      mediaOptions: 'Polymeric High-Tack Vinyl, Sunboard 5mm, Cast Acrylic, Clip-on Boxes',
      finishesAvailable: 'Matte, Gloss, Backlit, Metallic Trim Borders',
      minOrderQty: '1 Showroom / Multi-Store Rollout',
      turnaroundStandard: '2 - 4 Days per Store',
      turnaroundRush: '48 Hours Express Rollout'
    },
    applications: ['Automobile & Two-Wheeler Dealership Showrooms (Bajaj, Hero)', 'Electronics & Mobile Phone Retail Outlets', 'Paint, Cement & Hardware Dealer Counters (UltraTech style)', 'Jewellery & FMCG Exclusive Brand Outlets'],
    prepressChecklist: ['Provide showroom layout plan or store photography with dimensions', 'Brand guidelines and standardized corporate color codes', 'Identify surface materials (plywood, glass, tile, cement)'],
    popular: true,
    turnaround: '2-4 Days'
  },
  {
    id: 'office-branding',
    title: 'Office Branding',
    category: 'commercial-branding',
    subtitle: 'Corporate Interior Graphics, Reception Signs & Wall Decals',
    image: '/assets/photo-1497366216548-37526070297c.jfif',
    description: 'Modern corporate workplace aesthetics: frosted glass manifestation, brushed metal logos, vision walls, and directional signs.',
    detailedDescription: 'Create a sophisticated, inspiring workplace that leaves a lasting impression on visiting clients and energizes employees. Our corporate office branding solutions include plotter-cut frosted glass films for glass cabin privacy, 3D backlit metal/acrylic reception logos, motivational wall graphics, and modular executive directional signage.',
    features: ['Dusted crystal frosted glass films with custom plotted logo patterns', 'Backlit 3D reception lobby logos in brushed metal and acrylic', 'Inspirational vision walls, milestone murals, and wayfinding signage', 'Clean, dust-free installation during or after office hours'],
    specs: {
      technology: 'Digital Vinyl Cutting + UV Flatbed Printing + Acrylic Laser Fabrication',
      mediaOptions: '3M Frosted Window Film, 3D Acrylic, SS 304 Metal Letters, Matte Vinyl',
      finishesAvailable: 'Dusted Crystal, Brushed Gold, Mirror Chrome, Velvet Matte',
      minOrderQty: 'Custom Office Package',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '48 Hours in Patna'
    },
    applications: ['Corporate Head Offices & Regional Branches in Patna', 'Software Companies, BPO & Tech Startup Workspaces', 'Law Firms, Financial Consultants & Chartered Accountant Suites', 'Hospital Administrative Floors & Executive Cabins'],
    prepressChecklist: ['Provide architectural CAD floor plan or glass elevation dimensions', 'Vector logos and branding color palette', 'Specify whether installation is during working hours or weekend'],
    popular: false,
    turnaround: '2-4 Days'
  },
  {
    id: 'retail-branding',
    title: 'Retail Branding',
    category: 'commercial-branding',
    subtitle: 'Storefront Facades, Window Graphics & POP Displays',
    image: '/assets/Turnkey Commercial Branding Fabrication.jfif',
    description: 'Attract footfall with dynamic storefront makeovers, illuminated fascia signs, promotional window graphics, and point-of-purchase units.',
    detailedDescription: 'In competitive retail markets like Boring Road, Kankarbagh, and Fraser Road, your storefront must demand attention. We provide complete retail exterior and interior visual merchandising: from exterior ACP facade panelling with glowing 3D letters to vibrant seasonal window graphics and point-of-purchase promotional product display units.',
    features: ['Exterior ACP facade panelling with 3D LED glow signage', 'Promotional seasonal window graphics and one-way vision wraps', 'Hanging ceiling danglers, shelf talkers, and standees', 'Designed to drive footfall and boost in-store purchase conversion'],
    specs: {
      technology: 'Large-Format UV, Latex & Eco-Solvent + Structural Cladding',
      mediaOptions: 'ACP Sheets, Cast Acrylic, Perforated Window Film, Sunboard',
      finishesAvailable: 'Weatherproof Gloss/Matte, LED Backlit, CNC Routed Accents',
      minOrderQty: '1 Storefront',
      turnaroundStandard: '3 - 5 Days',
      turnaroundRush: '48 Hours Rush'
    },
    applications: ['Fashion & Apparel Showrooms (Raymond, Manyavar style)', 'Jewellery Boutiques (TBZ, Senco, Kasturi style)', 'Supermarkets, Kirana Stores & Gourmet Food Outlets', 'Optical Stores, Footwear Brands & Pharmacy Chains'],
    prepressChecklist: ['Submit exterior facade photographs and tape dimensions', 'Vector logo artwork and seasonal campaign key visuals', 'Electricity load availability for illuminated elements'],
    popular: true,
    turnaround: '3-5 Days'
  },
  {
    id: 'promotional-branding',
    title: 'Promotional Branding',
    category: 'commercial-branding',
    subtitle: 'End-to-End Brand Activation Collaterals & Roadshows',
    image: '/assets/promotional_banner.jpg',
    description: 'Integrated activation kits: promotional canopies, roll-up standees, teardrop flags, custom printed caps, and branded t-shirts.',
    detailedDescription: 'Launching a new product, consumer campaign, or political roadshow in Bihar? Micro Graphics delivers complete bundled promotional activation kits under one roof. We coordinate identical brand color fidelity across diverse substrates: canopies, roll-up standees, flying flags, customized t-shirts, baseball caps, promotional umbrellas, and distribution flyers.',
    features: ['Integrated activation kits: canopies, standees, flags, caps, and t-shirts', 'Rapid production and bulk deployment for marketing events', 'Uniform color fidelity across all substrates and media', 'Proven track record managing major political and brand launches in Bihar'],
    specs: {
      technology: 'Multi-Disciplinary Print Technologies (Textile, Flex, Vinyl, Apparel)',
      mediaOptions: 'Steel Canopies, Aluminium Standees, Cotton T-Shirts, Sublimation Flags',
      finishesAvailable: 'Turnkey Bundled Kit Packed in Heavy Protective Carry Bags',
      minOrderQty: 'Custom Activation Package',
      turnaroundStandard: '2 - 4 Days',
      turnaroundRush: '24 Hours Emergency Service in Patna'
    },
    applications: ['Statewide Brand Product Launches across Bihar', 'Political Party Campaign Caravans & Ground Deployments', 'Festival Activations (Diwali Mela, Chhath Puja, Durga Puja)', 'Consumer Electronics & FMCG Ground Sampling Roadshows'],
    prepressChecklist: ['Provide master brand design kit and Pantone/CMYK values', 'Quantity breakdown per kit component', 'Delivery timeline and regional dispatch addresses'],
    popular: true,
    turnaround: '2-4 Days'
  },
  {
    id: 'branding-fabrication',
    title: 'Branding Fabrication',
    category: 'commercial-branding',
    subtitle: 'Heavy Structural Metal, Wood, Acrylic & ACP Fabrication',
    image: '/assets/Turnkey Commercial Branding Fabrication.jpeg',
    description: 'Turnkey structural workshop fabrication: MIG welding, CNC router cutting, laser profiling, cantilever trusses, and certified site installation.',
    detailedDescription: 'Backing our printing expertise is our dedicated industrial fabrication workshop in Patna. We cut, weld, bend, and assemble heavy MS iron frames, stainless steel trusses, wooden display fixtures, CNC-milled acrylic shapes, and ACP structural claddings. Handled by experienced structural welders and certified electrical technicians.',
    features: ['In-house structural welding, CNC router cutting, laser engraving, and bending', 'Structural MS iron frames, trusses, and cantilever supports', 'Certified electrical safety cabling and LED driver housings', 'Turnkey site survey, fabrication, transport, and structural installation'],
    specs: {
      technology: 'MIG/TIG Welding, CNC Router 3-Axis, Fiber Laser Sheet Cutting',
      mediaOptions: 'MS Hollow Pipe, Iron Angles, SS 304, Cast Acrylic, Exterior ACP, Wood',
      finishesAvailable: 'Zinc Chromate Anti-Rust Primer, Polyurethane Enamel, Powder Coating',
      minOrderQty: '1 Project',
      turnaroundStandard: '3 - 7 Days (Project Dependent)',
      turnaroundRush: 'Priority Engineering Support'
    },
    applications: ['Cantilever Rooftop Heavy Billboard Frameworks', 'Commercial Building Elevation Cladding & Facias', 'Exhibition Stall Architectural Heavy Frameworks', 'Industrial Factory Directional Gantry Signs & Safety Boards'],
    prepressChecklist: ['Site inspection report and architectural structural drawings', 'Wind load considerations for elevated rooftop installations', 'Electrical connection load requirements'],
    popular: true,
    turnaround: '3-7 Days'
  },

  // 9. Commercial & Offset
  {
    id: 'offset-printing',
    title: 'Commercial Offset Printing',
    category: 'commercial-offset',
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
    applications: ['Publishing Houses & Educational Booklets', 'Medical & Healthcare Product Catalogs', 'Corporate Pitch Books & Annual Reports', 'Retail Product Folders & Magazines'],
    prepressChecklist: ['Ensure 3mm bleed margin outside the trim edge', 'CMYK color space only (No RGB or spot pantone unless requested)', 'Convert all typography to outlines/curves', 'Image resolution strictly 300 DPI at 100% print scale'],
    popular: true,
    turnaround: '3-4 Days'
  },
  {
    id: 'digital-printing',
    title: 'High-Speed Digital Printing',
    category: 'commercial-offset',
    subtitle: 'Fast, Flexible & Photographic Quality Prints',
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
    applications: ['Restaurant Menus & Table Tent Cards', 'Conference Schedules & Delegate Pass Inserts', 'School & College Certificates & Marksheets', 'Short-Run Product Brochures & Portfolio Sheets'],
    prepressChecklist: ['Configure file to exact trim size plus 3mm bleed', 'Use 300 DPI images for photographic sharpness', 'Embed or flatten all transparency layers', 'Accepted formats: PDF/X-1a, TIFF, High-Res JPG'],
    popular: true,
    turnaround: '2-4 Hours Express'
  },
  {
    id: 'product-labels',
    title: 'Die-Cut Product Labels',
    category: 'commercial-offset',
    subtitle: 'Waterproof & Premium Finish Stickers',
    image: '/assets/product label.png',
    description: 'Custom shaped metallic foil, holographic, waterproof vinyl, and paper labels for food jars, cosmetics, pharma bottles, and FMCG packaging.',
    detailedDescription: 'Product packaging labels demand adhesive permanence and shelf-appeal vibrancy. We print high-definition product labels on waterproof white vinyl, metallic gold/silver foil stock, holographic films, and transparent media. Automated computerized kiss-cutting cuts precisely to custom oval, circular, or irregular brand shapes ready for easy peel-and-apply application.',
    features: ['Waterproof & oil-resistant vinyl', 'Custom shape digital kiss-cutting', 'Metallic foil & holographic options', 'Supplied on convenient sheets or rolls'],
    specs: {
      technology: 'High-Speed Digital Label Press with Integrated Optical Die-Cutter',
      paperOptions: 'Waterproof Polypropylene (PP), White Vinyl, Clear Film, Gold/Silver Foil',
      gsmRange: '80 Micron to 150 Micron Adhesive Stocks',
      finishesAvailable: 'Gloss Lamination, Soft-Touch Matte, Gold Foil, Spot UV',
      minOrderQty: '100 Labels',
      turnaroundStandard: '24 - 48 Hours',
      turnaroundRush: 'Same-Day 24h Express in Patna'
    },
    applications: ['Honey, Spices, Pickles & Organic Food Jars', 'Ayurvedic, Pharma & Cosmetics Bottle Labels', 'E-Commerce Packaging Box Branding Seals', 'Handmade Soaps, Candles & Artisanal Goods'],
    prepressChecklist: ['Supply cut path as a 100% Magenta vector stroke named "CutContour"', 'Add 2mm bleed beyond the cut contour line', 'CMYK color profile with 300 DPI imagery', 'Keep critical text 2mm inside the cut line'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'packaging-boxes',
    title: 'Packaging & Custom Cartons',
    category: 'commercial-offset',
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
    applications: ['Pharmaceutical & Healthcare Medicine Cartons', 'Cosmetics, Perfume & Herbal Skin Care Boxes', 'Food & Confectionery Mithai / Sweet Boxes', 'Electronic Gadgets & Mobile Accessory Boxes'],
    prepressChecklist: ['Place die-lines (cut & crease) on dedicated spot color vector layers', 'Allow 3mm bleed over all outer cut flaps and tuck-in panels', 'Verify barcode dimensions comply with minimum scanner readability standards', 'Export PDF with embedded CMYK and die-line vector paths'],
    popular: false,
    turnaround: '4-6 Days'
  },
  {
    id: 'corporate-stationery',
    title: 'Corporate Stationery & Business Cards',
    category: 'commercial-offset',
    subtitle: 'Complete Branding for Your Business',
    image: '/assets/corporate stationery.png',
    description: 'Complete brand kits including velvet soft-touch business cards, golden foil visiting cards, executive letterheads, envelopes, and employee ID cards.',
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
    applications: ['Executive Visiting Cards for C-Suite & Entrepreneurs', 'Legal, Financial & Medical Watermarked Letterheads', 'Official Corporate Communication Envelopes', 'Custom Printed Presentation & Proposal Folders'],
    prepressChecklist: ['Business card size standard: 3.5" x 2" (Canvas: 3.75" x 2.25" with bleed)', 'Foil & Spot UV layers must be provided in 100% K vector artwork', 'Keep text at least 3.5mm away from cutting edges', 'Ensure fine lines are at least 0.25 pt stroke width'],
    popular: true,
    turnaround: '24-48 Hours'
  },
  {
    id: 'flyers-brochures',
    title: 'Flyers, Leaflets & Brochures',
    category: 'commercial-offset',
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
    applications: ['Real Estate Property Launch Pamphlets', 'Hospital & Diagnostic Center Service Guides', 'Coaching Institute & College Admission Leaflets', 'Retail Supermarket Sale & Discount Circulars'],
    prepressChecklist: ['Leave at least 4mm safe margin from every fold/crease line', 'Include 3mm bleed on all external edges', 'Check panel widths for tri-fold (e.g. inner fold panel 2mm narrower)', 'CMYK color profile with high-res 300 DPI photography'],
    popular: true,
    turnaround: '24-48 Hours'
  }
];

export const CALCULATOR_DATA = {
  products: []
};

export const PRICING_PACKAGES = [];

export const FAQS = [
  {
    q: "Where is Micro Graphics located, and can I visit your workshop in Patna?",
    a: "Yes, you are warmly invited to inspect physical material samples, paper stocks, and observe live printing and fabrication at our facility: Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001 (Google Plus Code: J45V+VXW). We are open Monday to Saturday from 9:30 AM to 8:30 PM. Owned and managed by Dhananjay Kumar."
  },
  {
    q: "How fast can I receive emergency prints with your 24-Hour Rush service?",
    a: "For urgent conferences, election campaigns, exhibitions, or store openings in Patna, we offer our signature 24-Hour Express Rush Service for flex banners, standees, digital visiting cards, clip-on boards, and flyers. Contact our emergency helplines at 9386992015 or 9304097965 for immediate queueing."
  },
  {
    q: "What file formats and color modes are required for optimal print quality?",
    a: "We recommend submitting vector PDF, CorelDraw (.CDR with all fonts converted to curves/curves outlined), Adobe Illustrator (.AI), or Adobe Photoshop (.PSD/TIFF) files. Files should be configured in CMYK color mode at 300 DPI resolution (or 100-150 DPI for large format flex/hoardings) with at least 3mm (0.125 inch) bleed around the trim lines."
  },
  {
    q: "Do you offer on-site installation and delivery across Bihar?",
    a: "Yes! In Patna, we provide on-site installation for ACP boards, 3D letters, flex frames, and wall wraps, along with same-day local delivery. For all other districts in Bihar (Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Purnia, Begusarai, etc.), we ship safely via reliable express courier and transport services with tracking."
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
    text: "Micro Graphics delivered clinic brochures and doctors' prescription pads in less than 36 hours. The color accuracy and paper texture were top-notch. Best printing press in Patna without doubt.",
    rating: 5
  },
  {
    name: "Vikram Singhania",
    role: "Founder, Sweet Harvest Organic Foods (Boring Road)",
    text: "We needed waterproof custom die-cut jar labels for our honey and pickles. The metallic sheen and adhesive quality are indistinguishable from MNC brands. Dhananjay Kumar and his team are true masters of CMYK.",
    rating: 5
  },
  {
    name: "Pooja Srivastava",
    role: "Event Coordinator, Bihar Youth Summit (Gandhi Maidan)",
    text: "Ordered 6 roll-up standees, backdrop flex banners, and 500 ID cards on an emergency 24-hour deadline. They delivered right to the venue on time with perfect assembly. Highly recommended!",
    rating: 5
  }
];
