import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    // Keep this to the site origin. Tests can then navigate to routes such as
    // `/signin` without accidentally building an invalid nested URL.
    // Override it in CI or locally with PLAYWRIGHT_BASE_URL when environments
    // use a different host.
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'https://learn-dev.qubico.io',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
