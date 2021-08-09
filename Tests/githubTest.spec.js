const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://github.com/
  await page.goto('https://github.com/');

  // Click [placeholder="Search GitHub"]
  await page.click('[placeholder="Search GitHub"]');

  // Fill [placeholder="Search GitHub"]
  await page.fill('[placeholder="Search GitHub"]', 'playwright');

  // Press Enter
  await page.press('[placeholder="Search GitHub"]', 'Enter');
  expect(page.url()).toBe('https://github.com/search?q=playwright');

  // Click text=playwright
  await page.click('text=playwright');
  expect(page.url()).toBe('https://github.com/microsoft/playwright');

  // Click span:has-text("Issues")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://github.com/microsoft/playwright/issues' }*/),
    page.click('span:has-text("Issues")')
  ]);

  // Click text=[Question]: Is there a way to check which page/tab is currently active/visible o
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://github.com/microsoft/playwright/issues/8090' }*/),
    page.click('text=[Question]: Is there a way to check which page/tab is currently active/visible o')
  ]);

});