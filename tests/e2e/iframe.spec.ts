import {test, expect} from '@playwright/test';

test('Handle iframe in Palywright', async ({page}) =>
{
// 1. open website
await page.goto('https://demo.automationtesting.in/Frames.html');

await page.locator('a[href="#Multiple"]').click();


//2. switch to outer frame
const outerframe = page.frameLocator('#Multipleiframe');

//3. Switch to inner frame
const innerframe = outerframe.frameLocator('iframe');


//3. inter text inside the 2nd frame
await innerframe.locator('input[type="text"]').fill('August 2026');


});
