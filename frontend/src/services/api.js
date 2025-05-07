/**
 * API service for handling all API calls to the backend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    // Ensure we're using the correct endpoint URL
    const url = `${API_BASE_URL}/contact/submit`;
    console.log('Submitting form to:', url); // Debug log
    
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header when sending FormData
    });
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw new Error('Failed to connect to the server');
  }
};

// Health check
export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return { status: 'error', message: 'Cannot connect to server' };
  }
};
