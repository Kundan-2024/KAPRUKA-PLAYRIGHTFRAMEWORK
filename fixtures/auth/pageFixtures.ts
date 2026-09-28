import {test as base} from '@playwright/test';
import { CurrencyPage } from '../../pages/CurrencyPage';
import {ComboGiftPage } from '../../pages/ComboGiftPage';
import { SearchPage } from '../../pages/SearchPage';

//describe new fixtures will be created in this file addon to the top of your playwright

type PageFixtures = {
    currencyPage: CurrencyPage;
    comboGiftPage : ComboGiftPage;
    comboPage: ComboGiftPage;
    searchpage: SearchPage;
};

export const test = base.extend<PageFixtures>({
    //1. Step before pre-requisites 
    currencyPage: async ({page}, use)=>{

        const currencyPage = new CurrencyPage(page);
        await currencyPage.goto();
        await currencyPage.isLoaded();
        //2. HAND off - use() - give control to the test
        await use(currencyPage);
        //3. TEARDOWN (run after your test boady)
        //nothing to be added
        //delete a test account after test completes, delete some file after test completes

    },


});
export {expect} from '@playwright/test';
