// Standalone script to test the API from the command line
import { testApiCall } from '../services/messageService.js';

// Get the API endpoint from command line arguments
const apiEndpoint = process.argv[2];

if (!apiEndpoint) {
  console.error('Please provide an API endpoint as an argument.');
  console.error('Example: node testApi.js https://your-api-endpoint.com/chat');
  process.exit(1);
}

// Test the API
console.log(`Testing API endpoint: ${apiEndpoint}`);
testApiCall(apiEndpoint)
  .then((result) => {
    console.log('Test completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Test failed:', error);
    process.exit(1);
  }); 