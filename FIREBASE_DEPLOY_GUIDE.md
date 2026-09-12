# Micro Graphics Patna - Firebase Hosting & Deployment Guide

This guide walks you through deploying the **Micro Graphics** full-stack React & Tailwind web application to **Firebase Hosting**.

---

## 1. Prerequisites

1. **Node.js & npm** installed:
   ```bash
   node -v  # v18+ or v20+ recommended
   npm -v
   ```
2. A Google account to access the [Firebase Console](https://console.firebase.google.com/).

---

## 2. Step-by-Step Deployment Instructions

### Step A: Install Firebase CLI Tools
If you haven't installed `firebase-tools` globally on your computer, run:
```bash
npm install -g firebase-tools
```

Verify installation:
```bash
firebase --version
```

---

### Step B: Log into Firebase
Log in to your Google Account from your terminal:
```bash
firebase login
```
*A browser window will open asking you to sign in with your Google account. Grant permissions.*

---

### Step C: Create a Firebase Project (if not already done)
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"**.
3. Name your project (e.g. `micro-graphics-patna` or `micrographics-bihar`).
4. You can enable or skip Google Analytics, then click **Create Project**.

---

### Step D: Connect Workspace to Your Firebase Project
Link this folder to your newly created Firebase project:
```bash
firebase use --add
```
Select your project from the list and give it the alias `default`.

*(Or simply replace `"micro-graphics-patna"` inside `.firebaserc` with your exact Firebase Project ID).*

---

### Step E: Build the React Application
Compile the production-optimized bundle:
```bash
npm run build
```
This generates the ultra-fast, minified assets into the `dist/` directory.

---

### Step F: Test Locally Before Going Live (Optional)
You can test the production build locally using the Firebase emulator:
```bash
firebase emulators:start --only hosting
```
Or with `npm run preview`.

---

### Step G: Deploy Live to Firebase Hosting
Deploy your application to Google's global CDN:
```bash
firebase deploy --only hosting
```

Once completed, the terminal will output your live URL:
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/micro-graphics-patna/overview
Hosting URL: https://micro-graphics-patna.web.app
```

---

## 3. Connecting Your Custom Domain (e.g., `micrographics.in`)

1. Open your project in the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Build > Hosting**.
3. Click **"Add custom domain"**.
4. Enter your domain (e.g., `www.micrographics.in` or `micrographics.in`).
5. Firebase will provide you with **DNS TXT and A records**.
6. Go to your domain registrar (GoDaddy, Namecheap, Hostinger, etc.) and add these records to your DNS settings.
7. Firebase automatically issues and provisions a **Free SSL Certificate (HTTPS)** within 1 to 24 hours.

---

## 4. Local Development Workflow

To run the React frontend and Express backend during development:

- Run frontend dev server:
  ```bash
  npm run dev
  ```
  *(Runs Vite on `http://localhost:3000`)*

- Run Express API backend:
  ```bash
  npm run server
  ```
  *(Runs on `http://localhost:5000`)*

- Or run both concurrently:
  ```bash
  npm run dev:all
  ```
