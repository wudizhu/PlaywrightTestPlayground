import { test, expect } from '@playwright/test';

//setup time zone per file
test.use({ locale: 'fr-FR', timezoneId: 'Europe/Paris' });

test('should work', async ({ page, isMobile }) => {
  await page.goto('https://playwright.dev');
  if (isMobile)
    await page.click('[aria-label="Navigation bar toggle"]')
  await page.click('a:visible:has-text("Docs")');
  expect(page.url()).toBe('https://playwright.dev/docs/intro');
})

// test.describe('light theme', () => {
//   test.use({ colorScheme: 'light' }); //per-suite configuration
//   test('should work', async ({ page }) => {
//     await page.goto('https://playwright.dev');
//     await page.click('a:visible:has-text("Docs")');
//     expect(page.url()).toBe('https://playwright.dev/docs/intro');
//   })
// })

//data driven
// const urls = require('../data/urls.json');
// for (const url of urls) {
//   test(`check ${url}`, async ({ page }) => {
//     await page.goto(url);
//   })
// }

