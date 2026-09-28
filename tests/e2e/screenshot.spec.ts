import {test, expect} from '@playwright/test';
import path from "path";

test('Basic Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/basic.png'});
await expect(page).toHaveTitle(/Playwright/);

});


test('Full Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/fullpage.png', fullPage: true});
await expect(page).toHaveTitle(/Playwright/);

});

test('JPEG Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/homepage.jpg', type: 'jpeg', quality: 80});
await expect(page).toHaveTitle(/Playwright/);

});

test('Clipped Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/clipped.png', type: 'png', 
    clip: {
        x: 0,
        y: 0,
        width: 80,
        height: 600,
    }
});
await expect(page).toHaveTitle(/Playwright/);

});

test('Omit Background Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/fullpage1.png', omitBackground:true, fullPage:true 

});
await expect(page).toHaveTitle(/Playwright/);

});

test('Timeout Screenshot', async({page}) =>
{
await page.goto('https://playwright.dev/');

//Cpature screenshot
await page.screenshot({path: 'screenshots/timeout.png', timeout: 30000 

});
await expect(page).toHaveTitle(/Playwright/);

});