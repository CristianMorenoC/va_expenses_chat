# Chat API Test Application

This React application provides a simple interface to test your chat API and display the formatted responses.

## Features

- Test API endpoints by sending predefined messages
- Format and display API responses according to specified requirements
- Logs formatted responses to the console
- Includes both UI and command-line testing options

## API Response Format

The application expects an API response in the following format:

```json
{
  "messages": [
    {
      "role": "user",
      "content": "what is a pokemon?",
      "tool_call_id": null,
      "tool_name": null
    },
    {
      "role": "assistant",
      "content": "I apologize, but I cannot help you with information about Pokémon...",
      "tool_call_id": null,
      "tool_name": null
    }
  ],
  "session_id": "af6845fd-2e10-4307-9488-8fe312b34898",
  "error": null
}
```

And formats it to display:

1. User Message:
```json
{
  "role": "user",
  "message": "<userMessage>"
}
```

2. Assistant Message:
```json
{
  "role": "assistant",
  "message": "<assistantMessage>"
}
```

3. Session Info:
```json
{
  "sessionId": "<sessionID>",
  "toolName": "<toolName>"
}
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser at http://localhost:5173 (or the port displayed in your terminal)

## Testing the API

### Using the Web Interface

1. Open the application in your browser
2. Enter your API endpoint URL in the input field
3. Click "Test API"
4. View the formatted response on the page and in the browser console

### Using the Command Line

You can also test the API directly from the command line:

```bash
node src/scripts/testApi.js https://your-api-endpoint.com/chat
```

This will send a test message to the specified endpoint and display the formatted response in the console.

## Development

### Project Structure

- `src/services/api.js` - Core API service for making requests and formatting responses
- `src/services/messageService.js` - Service for handling messages and API calls
- `src/components/ApiTest.jsx` - React component for testing the API
- `src/scripts/testApi.js` - Standalone script for command-line testing

### Customizing the Test Message

To change the test message, modify the `testApiCall` function in `messageService.js`:

```javascript
const testApiCall = async (endpoint) => {
  // Change 'what is a pokemon?' to your desired test message
  const result = await sendMessage(endpoint, 'what is a pokemon?');
  return result;
};
```
