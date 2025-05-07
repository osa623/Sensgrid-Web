const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename with original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter to accept supported formats
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    'image/jpeg', 
    'image/jpg', 
    'image/png', 
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, PDF, DOC, DOCX files are allowed.'), false);
  }
};

// Initialize multer upload
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
}).single('attachment');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
  // Handle file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`
      });
    }

    try {
      const { name, email, contactNumber, solution, issueReport } = req.body;
      
      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT || 'admin@sensgrid.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Solution:</strong> ${solution}</p>
          <p><strong>Issue Report:</strong> ${issueReport}</p>
          ${req.file ? `<p><strong>Attachment:</strong> File uploaded</p>` : ''}
        `,
        attachments: req.file ? [
          {
            filename: req.file.originalname,
            path: req.file.path
          }
        ] : []
      };
      
      await transporter.sendMail(mailOptions);
      
      // Delete the file after sending the email (optional)
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully'
      });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({
        success: false,
        message: `Server error: ${error.message}`
      });
    }
  });
};
