import { cpuUsage } from 'node:process';
import {test, expect} from '../../fixtures/auth/pageFixtures';

test.describe('Kapruka currency dropdown', ()=>
{
    test('swith from USD to INR', async ({currencyPage}) =>
    {
        await currencyPage.selectCurrency('USD');
        await currencyPage.verifyCurrency('USD');
    
        
        await currencyPage.selectCurrency('INR');
        await currencyPage.verifyCurrency('INR');
    
    });

    test('swith from INR to USD', async ({currencyPage}) =>
    {
        await currencyPage.selectCurrency('INR');
        await currencyPage.verifyCurrency('INR');
        
        await currencyPage.selectCurrency('USD');
        await currencyPage.verifyCurrency('USD');
    });

});