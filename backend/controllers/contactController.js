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

// Configure nodemailer transporter with more options
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Helps with self-signed certificates
  }
});

// Verify email connection on server start
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
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
      
      // Send email notification with enhanced HTML template
      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT || 'admin@sensgrid.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background-color: #3B82F6; padding: 10px 20px; border-radius: 5px 5px 0 0;">
              <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="padding: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Contact Number:</strong> ${contactNumber}</p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p style="margin-top: 0;"><strong>Solution:</strong></p>
                <p style="white-space: pre-line;">${solution}</p>
              </div>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p style="margin-top: 0;"><strong>Issue Report:</strong></p>
                <p style="white-space: pre-line;">${issueReport}</p>
              </div>
              ${req.file ? `<p><strong>Attachment:</strong> File uploaded (${req.file.originalname})</p>` : ''}
            </div>
            <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
              <p>This is an automated email from SensGrid Contact Form</p>
            </div>
          </div>
        `,
        attachments: req.file ? [
          {
            filename: req.file.originalname,
            path: req.file.path
          }
        ] : []
      };
      
      // Also send confirmation email to user
      const userConfirmationEmail = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting SensGrid',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background-color: #3B82F6; padding: 10px 20px; border-radius: 5px 5px 0 0;">
              <h2 style="color: white; margin: 0;">Thank You for Contacting SensGrid</h2>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to us. We have received your message regarding:</p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p style="white-space: pre-line;">${solution}</p>
              </div>
              <p>Our team will review your request and respond as soon as possible. Usually, we respond within 24-48 business hours.</p>
              <p>If you have any urgent matters, please contact us directly at support@sensgrid.com.</p>
              <p>Best regards,<br>The SensGrid Team</p>
            </div>
          </div>
        `
      };
      
      // Send the admin notification email
      await transporter.sendMail(mailOptions);
      
      // Send confirmation email to user
      await transporter.sendMail(userConfirmationEmail);
      
      // Save to database (optional - you already have the Contact model)
      // const newContact = new Contact({
      //   name,
      //   email,
      //   contactNumber,
      //   solution,
      //   issueReport,
      //   attachment: req.file ? req.file.path : null
      // });
      // await newContact.save();
      
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

// Add a new method to test email configuration
exports.testEmailConfig = async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'Email Configuration Test',
      html: '<p>This is a test email to verify the email configuration is working correctly.</p>'
    });
    return res.status(200).json({
      success: true,
      message: 'Test email sent successfully'
    });
  } catch (error) {
    console.error('Email test error:', error);
    return res.status(500).json({
      success: false,
      message: `Email test failed: ${error.message}`
    });
  }
};
