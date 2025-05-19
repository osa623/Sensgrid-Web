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

// Initialize multer upload with error handling
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
}).single('attachment');

// Configure nodemailer transporter with more robust settings
let transporter;
try {
  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // Helps with self-signed certificates
    },
    debug: true, // Enable debug output
    logger: true // Log information into the console
  });
  
  // Log email configuration for debugging
  console.log('Email configuration:');
  console.log('Service:', process.env.EMAIL_SERVICE);
  console.log('Host:', process.env.EMAIL_HOST);
  console.log('Port:', process.env.EMAIL_PORT);
  console.log('User:', process.env.EMAIL_USER ? 'Configured' : 'Missing');
  console.log('Password:', process.env.EMAIL_PASS ? 'Configured' : 'Missing');
  
  // Verify email connection on startup
  transporter.verify(function(error, success) {
    if (error) {
      console.error("Email server connection error:", error);
    } else {
      console.log("Email server connection verified and is ready to send messages");
    }
  });
} catch (error) {
  console.error('Failed to create email transporter:', error);
}

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
  console.log('Contact form submission received');
  
  // Handle file upload with explicit error handling
  upload(req, res, async (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`
      });
    }

    try {
      // Log the form data for debugging
      console.log('Form data received:', req.body);
      const { name, email, contactNumber, solution, issueReport } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: 'Name and email are required'
        });
      }
      
      console.log("Preparing to send email with the following data:");
      console.log("From:", process.env.EMAIL_USER);
      console.log("To:", process.env.EMAIL_RECIPIENT);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contactNumber);
      console.log("Attachment:", req.file ? req.file.originalname : "None");
      
      // Check if email transport is configured
      if (!transporter) {
        console.error('Email transporter not configured');
        return res.status(500).json({
          success: false,
          message: 'Email service not configured'
        });
      }
      
      // Send email notification with enhanced HTML template
      const mailOptions = {
        from: `"SensGrid Contact" <${process.env.EMAIL_USER}>`,
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
              <p><strong>Contact Number:</strong> ${contactNumber || 'Not provided'}</p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p style="margin-top: 0;"><strong>Solution:</strong></p>
                <p style="white-space: pre-line;">${solution || 'Not provided'}</p>
              </div>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p style="margin-top: 0;"><strong>Issue Report:</strong></p>
                <p style="white-space: pre-line;">${issueReport || 'Not provided'}</p>
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
            path: req.file.path,
            contentType: req.file.mimetype
          }
        ] : []
      };
      
      console.log("Attempting to send email...");
      
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        console.log("Message ID:", info.messageId);
        
        // Also send a confirmation email to the user
        const userConfirmationEmail = {
          from: `"SensGrid Support" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Thank you for contacting SensGrid",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <div style="background-color: #3B82F6; padding: 10px 20px; border-radius: 5px 5px 0 0;">
                <h2 style="color: white; margin: 0;">Thank You for Contacting SensGrid</h2>
              </div>
              <div style="padding: 20px;">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
                <p>Best regards,<br>The SensGrid Team</p>
              </div>
            </div>
          `
        };
        
        try {
          await transporter.sendMail(userConfirmationEmail);
          console.log("Confirmation email sent to user");
        } catch (confirmError) {
          console.error("Error sending confirmation email:", confirmError);
          // Continue with the process even if confirmation email fails
        }
        
        // Delete the file after sending the email
        if (req.file) {
          fs.unlink(req.file.path, (err) => {
            if (err) console.error('Error deleting file:', err);
            else console.log('File deleted successfully');
          });
        }
        
        return res.status(200).json({
          success: true,
          message: 'Contact form submitted successfully'
        });
      } catch (emailError) {
        console.error("Nodemailer Error:", emailError);
        return res.status(500).json({
          success: false,
          message: `Failed to send email: ${emailError.message}`,
          details: process.env.NODE_ENV === 'development' ? emailError : undefined
        });
      }
      
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({
        success: false,
        message: `Server error: ${error.message}`
      });
    }
  });
};

// Add a test route to check email configuration
exports.testEmailConfig = async (req, res) => {
  try {
    console.log("Testing email configuration...");
    
    // First verify the transport
    await new Promise((resolve, reject) => {
      transporter.verify(function(error, success) {
        if (error) {
          console.error("Email verification failed:", error);
          reject(error);
        } else {
          console.log("Email server is ready");
          resolve(success);
        }
      });
    });
    
    // Then send a test email
    const testInfo = await transporter.sendMail({
      from: `"SensGrid Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: "Email Configuration Test",
      text: "This is a test email to verify the email configuration is working correctly.",
      html: "<p>This is a test email to verify the email configuration is working correctly.</p>"
    });
    
    console.log("Test email sent successfully:", testInfo.response);
    console.log("Test Message ID:", testInfo.messageId);
    
    return res.status(200).json({
      success: true,
      message: 'Test email sent successfully',
      details: {
        messageId: testInfo.messageId,
        response: testInfo.response
      }
    });
  } catch (error) {
    console.error("Email test failed:", error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Function to test email service
exports.testEmailService = async (req, res) => {
  try {
    // Get test email recipient from request or use default
    const testRecipient = req.body.testEmail || process.env.EMAIL_RECIPIENT;
    
    if (!testRecipient) {
      return res.status(400).json({
        success: false,
        message: 'No recipient email provided for testing'
      });
    }
    
    console.log(`Testing email service with recipient: ${testRecipient}`);
    
    // First verify the connection
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error("Email verification failed:", error);
          reject(error);
        } else {
          console.log("Email server connection verified");
          resolve(success);
        }
      });
    });
    
    // Send a test email
    const testMailOptions = {
      from: `"SensGrid Test" <${process.env.EMAIL_USER}>`,
      to: testRecipient,
      subject: "SensGrid Email Service Test",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background-color: #3B82F6; padding: 10px 20px; border-radius: 5px 5px 0 0;">
            <h2 style="color: white; margin: 0;">SensGrid Email Test</h2>
          </div>
          <div style="padding: 20px;">
            <p>This is a test email to verify that the SensGrid email service is working correctly.</p>
            <p>Time sent: ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
            <p>SensGrid Email Service Test</p>
          </div>
        </div>
      `
    };
    
    const info = await transporter.sendMail(testMailOptions);
    
    console.log("Test email sent successfully:", info.response);
    console.log("Message ID:", info.messageId);
    
    return res.status(200).json({
      success: true,
      message: `Test email sent successfully to ${testRecipient}`,
      details: {
        messageId: info.messageId,
        response: info.response
      }
    });
  } catch (error) {
    console.error("Email test failed:", error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
