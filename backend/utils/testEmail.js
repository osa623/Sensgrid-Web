/**
 * Test script for validating email configuration
 * Run this script directly with: node utils/testEmail.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmailConnection() {
  console.log("Email Configuration Test");
  console.log("======================");
  console.log("Testing with the following configuration:");
  console.log(`- Service: ${process.env.EMAIL_SERVICE}`);
  console.log(`- Host: ${process.env.EMAIL_HOST}`);
  console.log(`- Port: ${process.env.EMAIL_PORT}`);
  console.log(`- Secure: ${process.env.EMAIL_SECURE}`);
  console.log(`- User: ${process.env.EMAIL_USER}`);
  console.log(`- Password: ${'*'.repeat(process.env.EMAIL_PASS?.length || 0)}`);
  console.log(`- Recipient: ${process.env.EMAIL_RECIPIENT}`);
  console.log("\nInitializing transporter...");

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true,
      logger: true
    });

    console.log("\nVerifying connection...");
    // Verify connection
    await new Promise((resolve, reject) => {
      transporter.verify(function(error, success) {
        if (error) {
          console.error("Verification failed:", error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    console.log("\nSending test email...");
    // Send test email
    const info = await transporter.sendMail({
      from: `"Test Script" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: "Test Email from Script",
      text: "Hello from the test script! If you're seeing this, the email configuration is working.",
      html: "<div style='padding: 20px; background-color: #f5f5f5; border-radius: 10px;'>" +
            "<h1 style='color: #3B82F6;'>Email Test Successful!</h1>" +
            "<p>Hello from the test script!</p>" +
            "<p>If you're seeing this, the email configuration is working correctly.</p>" +
            "<p>Timestamp: " + new Date().toISOString() + "</p>" +
            "</div>"
    });

    console.log("\nTest email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    console.log("\nTest completed successfully!");
  } catch (error) {
    console.error("\nTest failed with error:", error);
    process.exit(1);
  }
}

// Run the test
testEmailConnection();
