const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST route for contact form submission
router.post('/submit', contactController.submitContactForm);

// GET route to test email configuration
router.get('/test-email', contactController.testEmailConfig);

module.exports = router;
