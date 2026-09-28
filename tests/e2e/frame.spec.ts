import {test, expect} from '@playwright/test';

test('Handle frame in Palywright', async ({page}) =>
{
// 1. open website
await page.goto('https://demoqa.com/frames');

//2. Locating the frame
const frame = page.frameLocator('#frame1');

//3. Locate the element inside the frame
const headingText = frame.locator('#sampleHeading');
await expect(headingText).toHaveText('This is a sample page');

//validate the page

});


