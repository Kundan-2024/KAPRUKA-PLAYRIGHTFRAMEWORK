import {test, expect} from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';


test.describe('Add Cake to Cart', () =>
{
    test('valid user can add cake to cart and proceed to checkout', async({page})=>
    {
        const searchPage = new SearchPage(page);

        await searchPage.goto();
        await searchPage.isLoaded();
        await searchPage.addFirstCake('cake');
        await searchPage.isLoaded();
        


    })
    
});