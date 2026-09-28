import { test, expect, devices } from '@playwright/test';
// Solution 1: iPhone Emulation
test('iPhone emulation', async ({ browser }) => {
    const iPhone = devices['iPhone 13'];
    const context = await browser.newContext({
        ...iPhone,
    });
   
    const page = await context.newPage();
    await page.goto('https://playwright.dev');
   
    await expect(page).toHaveTitle(/Playwright/);
    await context.close();
});
//12,13, 14,15, 16
// Solution 2: Android Emulation
test('Android emulation', async ({ browser }) => {
    const pixel = devices['Pixel 10 Pro XL landscape']
    const context = await browser.newContext({
        ...pixel,
    });
   
    const page = await context.newPage();
    await page.goto('https://playwright.dev');
   
    await expect(page).toHaveTitle(/Playwright/);
    await context.close();
});
// Solution 3: iPad Emulation
test('iPad emulation', async ({ browser }) => {
    const iPad = devices['iPad Pro 11'];
    const context = await browser.newContext({
        ...iPad,
    });
   
    const page = await context.newPage();
    await page.goto('https://playwright.dev');
   
    await expect(page).toHaveTitle(/Playwright/);
    await context.close();
});