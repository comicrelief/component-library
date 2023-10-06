// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './playwright-tests',
  /* Fail the build on CI if you accidentally left test
  .only in the source code. */
  forbidOnly: !!process.env.CI,
  // TODO: uncomment below retries once all tests are have been added
  // retries: 2,
  workers: 2,
  timeout: 60 * 1000,
  expect: {
    timeout: 60 * 1000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    actionTimeout: 0,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'yarn styleguide',
    port: '6060',
    timeout: 120000,
    reuseExistingServer: true,
  },
});
