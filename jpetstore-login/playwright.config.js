// playwright.config.js
module.exports = {
    testDir: './tests',
    use: {
      headless: false, // Set to true for running in CI
      browserName: 'chromium', // You can choose 'firefox' or 'webkit' too
    },
  };
  