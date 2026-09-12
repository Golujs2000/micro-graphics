# micro-graphics

> **Micro Graphics — Printing Solution**
> Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001  
> 📞 **Phone:** +91 9386992015 | 💬 **WhatsApp:** [Chat Now](https://wa.me/919386992015)  
> 🌐 **Google Plus Code:** `J45V+VXW, Patna`

A state-of-the-art full-stack web platform for Patna's premier printing press, built with **React (Vite)**, **Tailwind CSS v3**, **Node.js & Express API**, and configured for **Firebase Hosting**.

---

## 🌟 Key Features

1. **Brand Theme**: Tailored CMYK (Electric Cyan, Royal Amber Gold, Magenta) and Deep Executive Navy color palette matching official Micro Graphics branding.
2. **Hero Banner & Fast Upload**: Quick stats (15+ Years, 50,000+ Orders) and an interactive "Upload & Print" artwork dropzone.
3. **Filterable Services Grid**: 7 categories covering Heidelberg Commercial Offset, Digital Same-Day Express, Flex Banners & Star Flex, Product Labels & Stickers, Rigid Packaging Boxes, Corporate Stationery, and Events & Apparel.
4. **Live Instant Price Calculator**: Real-time pricing math based on product type, custom dimensions, paper stock (GSM), premium coatings (Spot UV, Velvet, Gold Foil), turnaround (Standard vs 24h Rush in Patna), and bulk tier discount savings.
5. **Direct WhatsApp Integration**: Generates itemized order breakdown links directly to WhatsApp (+91 9386992015).
6. **Pre-Press Guide & FAQ**: Visual Bleed/Safe Zone interactive simulator (3mm bleed, 300 DPI, CMYK) and FAQ accordion.
7. **Patna Location & Google Map**: Interactive map centered on Golambar / Pirmuhani with direct click-to-call and store hours.
8. **Express Backend API**: Endpoints for artwork uploads, quote registration, and contact inquiries.
9. **Advanced & Local SEO**: Schema.org JSON-LD (`PrintingService`, `LocalBusiness`, `FAQPage`), OpenGraph, `robots.txt`, and `sitemap.xml`.
10. **Firebase Hosting Ready**: Complete `firebase.json` with caching headers and step-by-step deployment guide.

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
- **Frontend Dev Server** (Vite on `http://localhost:3000`):
  ```bash
  npm run dev
  ```
- **Backend API Server** (Express on `http://localhost:5000`):
  ```bash
  npm run server
  ```
- **Run Both Concurrently**:
  ```bash
  npm run dev:all
  ```

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Firebase Hosting Deployment

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Google:
   ```bash
   firebase login
   ```
3. Deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```
See [FIREBASE_DEPLOY_GUIDE.md](./FIREBASE_DEPLOY_GUIDE.md) for full instructions.

---

## 📄 License & Ownership
Copyright © 2026 Micro Graphics Patna. All rights reserved.
