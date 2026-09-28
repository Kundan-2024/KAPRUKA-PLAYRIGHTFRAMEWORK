import {test, expect} from '@playwright/test';
import {HomePage} from '../../pages/HomePages';

test.describe('Kapruka Electronics Page', ()=>
{
    test('Verify kitchen appliances tooltip on hover', async ({page})=>
    {
        const homepage = new HomePage(page);
        await homepage.goto();
        await homepage.isLoaded();
        await homepage.hoverKitchenAppliances();
        await homepage.verifyKitchenAppliancesTooltip();
        await homepage.printTooltip();



    })
})