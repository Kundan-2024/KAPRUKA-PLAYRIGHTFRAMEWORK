import{test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage_SOLID';
/*Error: Cannot find module '../pages/LoginPage'
Required Stack: 
    -tests\e2e\login_SOLID.spec.ts
    -node_modules_\playwitght\lib\common\indexedDB.js
    -node_modules_\playwitght\lib\loader\loaderProcessEntery.js playwright
    cannot find module '../pages/LoginPage' ot its corresponding type declearation. */

    
const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

if(!TEST_EMAIL || !TEST_PASSWORD) {
    throw new Error(
    'Missing TEST_EMAIL or TEST_PASSWORD environment veriable' +
    'set these in your .env file or CI/CD secret before running test'
    );
}
    
test.describe('Kapruka Login Test' , () =>
{
    test('Valid user should Login successful', async({page})=>
    {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.isLoaded();
        await loginPage.login(TEST_EMAIL, TEST_PASSWORD);
        await loginPage.verifyLoginSuccess();

    })
});