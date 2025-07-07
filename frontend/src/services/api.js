import axios from 'axios';

/**
 * API service for handling all API calls to the backend
 */

const API_URL = 'http://localhost:5001/api';

// Create a configured axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to submit contact form data
export const submitContactForm = async (formData) => {
  try {
    // Don't manually set Content-Type with FormData - axios will set it with boundary
    const response = await axios.post(`${API_URL}/contact/submit`, formData, {
      // Remove the explicit Content-Type header to let axios set it properly for FormData
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : { success: false, message: error.message };
  }
};

// Health check
export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return { status: 'error', message: 'Cannot connect to server' };
  }
};

// Test email service
export const testEmailService = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact/test-email`);
    return response.data;
  } catch (error) {
    console.error('Email test error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : { success: false, message: error.message };
  }
};

export default apiClient;
