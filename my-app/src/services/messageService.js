// Message service for handling chat messages
import { fetchChatResponse } from './api.js';

// Read the base URL using import.meta.env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Check if the URL is defined
if (!API_BASE_URL) {
  console.error("Error: VITE_API_BASE_URL is not defined in your .env file or is missing the VITE_ prefix.");
  // Handle this appropriately
}

// Define the specific endpoint relative to the base URL
const CHAT_ENDPOINT = `${API_BASE_URL}/chat`; // Adjust path if needed

/**
 * Sends a message to the chat API endpoint
 * @param {string} message - The user message to send
 * @returns {Promise} - A promise that resolves with the formatted response
 */
const sendMessage = async (message) => {
  if (!API_BASE_URL) {
    throw new Error("API URL is not configured.");
  }
  try {
    const response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorBody}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in sendMessage service:', error);
    throw error;
  }
};

export { sendMessage }; 