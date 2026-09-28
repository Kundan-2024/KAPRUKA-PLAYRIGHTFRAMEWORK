import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';



const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

if(!TEST_EMAIL || !TEST_PASSWORD)
{
    throw new Error(
        'Missing TEST_EMAIL or TEST_PASSWORD environment variable.' +
        'Set this in config/.env.qa (copy from config/.env.example) before running test.' +
        'You need an account that already exists on kapruka.com - ' +
        'Create one via signup.spec.ts or manually first '
    );
}

test.describe('Login using Data Driven Testing', () =>
{
    //one parameterize test, 4 set of data

    const cases = [
        {lable: 'wrong password', email: 'TEST_EMAIL', password: 'wrong password', ShouldSucceed: false},
        {lable: 'wrong email', email: 'wrong@user.com', password: 'TEST_PASSWORD', ShouldSucceed: false},
        {lable: 'empty field', email: '', password: '', ShouldSucceed: false},
        {lable: 'valid credential', email: TEST_EMAIL, password: 'TEST_PASSWORD', ShouldSucceed: false}
        
    ];
    //loop -25-27. Increment/decremeny - XX, no candition associate here
    for ( const {lable, email, password, ShouldSucceed} of cases)
    {
        test(`login:${lable}`, async ({page}) =>
        {

            const loginpage = new LoginPage(page);
            await loginpage.goto(); 
            await loginpage.isLoaded();
            await loginpage.login(email, password);
        })

    }

});