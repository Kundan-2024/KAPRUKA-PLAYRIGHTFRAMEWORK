import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Kapruka Login Test', () =>
{
    test('valid user login successful', async({page})=>
    {
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.login(process.env.TEST_EMAIL || 'user2402@gmail.com', process.env.TEST_PASSWORD || 'Admin@123');
        await loginpage.verifyLoginSuccess();

    })
    
});

//run the script
//npx playwright test tests/e2e/login.spec.ts -- headed