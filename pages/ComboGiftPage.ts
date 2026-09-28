import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export interface ProductInfo
{
    name: string;
    price: string;
}

export class ComboGiftPage extends BasePage
{
    readonly page: Page;
    readonly productName: Locator;

    constructor (page: Page)
    {
        super(page);
        this.page = page;
        this.productName = page.locator('.catalogueV2heading');

    }

    async goto(): Promise<void>
    {
        await this.page.goto('https://www.kapruka.com/online/combogifts');
        //await this.page.goto('/online/combogifts')
    }

    async isLoaded(): Promise<void> 
    {
        await this.productName.first().waitFor({state: 'visible', timeout: 200000});
    }

    //get first product name
    async getFirstProductName(): Promise<string>
    {
        const nameLocator = this.productName.first();
        await nameLocator.waitFor({state:'visible', timeout: 200000});
        const name = await nameLocator.textContent(); //textContent() read the actual text written inside the element
        return name?.trim() ||'';
    }
    //getfirstproductprice
    async getFirstProductPrice(): Promise<string>
    {
        const card = this.productName.first().locator('xpath=ancestor::div[contsins(@class,"catalogueV2textBlock")]');

        const priceLocator = card.locator('.lTitlePrice').first();
        await priceLocator.waitFor({state: 'visible', timeout: 200000});
        const price = await priceLocator.textContent();
        return price?.trim() || '';
    }

    //List all product 
    async listAllProducts(): Promise<ProductInfo[]>
    {
        //this function returns a productinfo - an array(list) of productinfo project
        await this.isLoaded();
        const count= await this.productName.count(); // How many element matched with given locator
        const results: ProductInfo[] = [];
            for (let i= 0; i< count; i++)
            {
                const nameLocator = this.productName.nth(i);
                const name=(await nameLocator.textContent())?.trim() || '';
                const card =nameLocator.locator('xpath=ancestor::div[contsins(@class,"catalogueV2textBlock")]');
                const priceLocator = card.locator('.lTitlePrice').nth(i);

                let price = '';
                if (await priceLocator.count()>0)
                {
                    price = (await priceLocator.textContent())?.trim() || '';

                }
                results.push({name, price});
            }
            return results;

    }
}