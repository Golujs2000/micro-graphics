import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadDir));

// Multer Storage Configuration for Print Files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `mgfx-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = /pdf|cdr|ai|eps|psd|tiff|tif|jpg|jpeg|png|zip|rar/i;
  const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    return cb(null, true);
  }
  cb(new Error('Only print-ready files (PDF, CDR, AI, PSD, TIFF, JPG, PNG, ZIP) are allowed'));
};

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
  fileFilter
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Micro Graphics API Server',
    location: 'Patna, Bihar',
    time: new Date().toISOString()
  });
});

// File upload endpoint
app.post('/api/upload', upload.single('artwork'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    res.json({
      success: true,
      message: 'Artwork uploaded successfully for prepress inspection',
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        url: `/uploads/${req.file.filename}`
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Quote submission endpoint with server-side validation
app.post('/api/quote', (req, res) => {
  try {
    const {
      product,
      size,
      material,
      finish,
      quantity,
      isRush,
      clientName,
      clientPhone,
      clientEmail,
      notes,
      uploadedFile
    } = req.body;

    if (!product || !quantity || !clientPhone) {
      return res.status(400).json({
        success: false,
        message: 'Product, Quantity, and Client Phone number are required.'
      });
    }

    const quoteId = 'MG-' + Math.floor(100000 + Math.random() * 900000);

    // Build automated reply details
    res.json({
      success: true,
      quoteId,
      message: 'Your quote request has been registered with Micro Graphics Patna.',
      estimatedTurnaround: isRush ? '24 Hours (Express Rush)' : '48-72 Hours (Standard)',
      supportContact: '+91 9386992015',
      address: 'Free Press Ln, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001',
      details: {
        product,
        size,
        material,
        finish,
        quantity,
        isRush,
        clientName,
        clientPhone,
        clientEmail,
        notes,
        uploadedFile
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Contact inquiry endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and Phone Number are required.'
      });
    }

    const inquiryId = 'INQ-' + Date.now().toString().slice(-6);

    res.json({
      success: true,
      inquiryId,
      message: `Thank you ${name}! Our Patna workshop printing specialist will call you at ${phone} shortly.`,
      hotline: '9386992015'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`[Micro Graphics] API Server running on port ${PORT} (Patna HQ)`);
});
