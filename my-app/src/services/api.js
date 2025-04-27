// API service for making requests to the chat API

/**
 * Makes a request to the chat API and formats the response as specified
 * @param {string} endpoint - The API endpoint URL
 * @param {object} data - The data to send in the request
 * @returns {Promise} - A promise that resolves with the formatted response
 */
const fetchChatResponse = async (endpoint, data = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    
    // Format the response as specified
    if (result.messages && result.messages.length >= 2) {
      const userMessage = result.messages.find(msg => msg.role === 'user');
      const assistantMessage = result.messages.find(msg => msg.role === 'assistant');
      
      // Format and log the user message
      console.log({
        role: 'user',
        message: userMessage?.content || ''
      });
      
      // Format and log the assistant message
      console.log({
        role: 'assistant',
        message: assistantMessage?.content || ''
      });
      
      // Format and log session and tool info
      console.log({
        sessionId: result.session_id || '',
        toolName: assistantMessage?.tool_name || null
      });
      
      return {
        user: { role: 'user', message: userMessage?.content || '' },
        assistant: { role: 'assistant', message: assistantMessage?.content || '' },
        meta: { sessionId: result.session_id || '', toolName: assistantMessage?.tool_name || null }
      };
    } else {
      console.error('Invalid response format:', result);
      return null;
    }
  } catch (error) {
    console.error('Error fetching chat response:', error);
    throw error;
  }
};

export { fetchChatResponse }; 