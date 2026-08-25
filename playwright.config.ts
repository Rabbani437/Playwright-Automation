import { defineConfig, devices } from '@playwright/test';

const playwrightBaseUrl = (globalThis as typeof globalThis & {
  process?: { env?: { PLAYWRIGHT_BASE_URL?: string } };
}).process?.env?.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: './tests',

  use: {
    // Keep this to the site origin. Tests can then navigate to routes such as
    // `/signin` without accidentally building an invalid nested URL.
    // Override it in CI or locally with PLAYWRIGHT_BASE_URL when environments
    // use a different host.
    baseURL: playwrightBaseUrl ?? 'https://learn-dev.qubico.io',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport:{width:1536,height:864}
      },
    },
  ],
});
