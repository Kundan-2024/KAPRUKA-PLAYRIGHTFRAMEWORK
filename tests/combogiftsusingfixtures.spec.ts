import { describe } from 'node:test';
import {test, expect} from '../fixtures/auth/pageFixtures';

test.describe('Combo gift page', () =>
{
    test('should get first product name', async ({comboPage}) =>
    {
        const name = await comboPage.getFirstProductName();
        console.log('First product name ', name);
        expect(name).toBeTruthy(); // How  to know this function
        expect(name.length).toBeGreaterThan(0); // How to know this function  

    });
    test('should get the first product price in USD format', async ({ comboPage }) => {
        const price = await comboPage.getFirstProductPrice();

        console.log('First product price:', price);

        expect(price).toBeTruthy();
        expect(price).toMatch(/^US\$/); // catches the ₹-vs-$ bug we found earlier

    });

    test('should list all products with name and price', async ({ comboPage }) => {
        const products = await comboPage.listAllProducts();

        console.log(`Found ${products.length} products:`);
        products.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name} — ${p.price}`);
    });
    expect(products.length).toBeGreaterThan(0);

        // Every product must have a non-empty name
        products.forEach(p => {
            expect(p.name).toBeTruthy();
        });
    });

    test('every listed product should have a valid USD price', async ({ comboPage }) => {
        const products = await comboPage.listAllProducts();

        expect(products.length).toBeGreaterThan(0);

        products.forEach(p => {
            expect(p.price).toMatch(/^US\$[\d,]+(\.\d{2})?$/);
        });
});
 test('the first product from listAllProducts should match getFirstProductName/Price', async ({ comboPage }) => {
        // Cross-check: two different methods reading the same first product
        // should agree with each other.
        const name = await comboPage.getFirstProductName();
        const price = await comboPage.getFirstProductPrice();

        const products = await comboPage.listAllProducts();
        const firstFromList = products[0];

        expect(firstFromList.name).toBe(name);
        expect(firstFromList.price).toBe(price);
    });

  
});