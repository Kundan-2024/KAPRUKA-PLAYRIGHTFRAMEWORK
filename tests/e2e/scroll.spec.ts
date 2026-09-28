import{test, expect} from '@playwright/test';
import{ScrollPage} from '../../pages/ScrollPage'

test.describe('Kapruka scroll to Event screen', ()=>
{
    test('scroll to Popular Search Today', async({page})=>
    {
        const scrollPage = new ScrollPage(page);
         await scrollPage.goto();
         await scrollPage.scrolltoBestSellingGift();
         //Take screen shot after scroll
         await page.screenshot({path:'dist/afterscroll.png'}); // Manually taking screenshot
         await page.screenshot({path: 'dist/02-full-page.png', fullPage:true}); //Manually taking screenshot
         

    });
});