import { defineConfig } from 'cypress';

export default defineConfig({
  video: true, // Enable video recording
  e2e: {
    baseUrl: 'http://localhost:5173', // Adjust based on your Vite app URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Test file pattern
    supportFile: false, // Disable the default support file
  },
});