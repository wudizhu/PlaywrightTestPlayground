import { PlaywrightTestConfig, devices } from "@playwright/test";
const config: PlaywrightTestConfig = {
  reporter: 'list',
  projects: [
    {
      name: 'chromium',
      retries: 0,
      timeout: 30000,
      use: {
        //for creating page fixture in tests
        browserName: 'chromium',
      }
    },
    {
      name: 'iphone',
      use: { ...devices['iPhone 12 Pro'] }
    }
  ]
};

export default config;