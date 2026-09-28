import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class SearchPage extends BasePage
{
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly firstCake: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartButton: Locator;
    readonly continuetoDeliveryButton: Locator;

    constructor (page: Page)
    {
        super(page);
       // this.searchBox = page.locator('input[name="SEARCH PRODUCTS.."]');
       // this.searchButton = page.locator('input[name="Search"]');   

        this.searchBox = page.getByPlaceholder('SEARCH PRODUCTS..');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.firstCake = page.getByText('Strawberry Green Gateaux Vanilla Delight Cake');
        this.addToCartButton = page.getByRole('button', { name: ' Add to Cart' });   
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
        this.continuetoDeliveryButton = page.getByRole('button', { name: '  Continue to Delivery' });
     }

async goto(): Promise<void>
{
    await this.navigate('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
}

async isLoaded(): Promise<void> 
    {
        await this.searchBox.first().waitFor({state: 'visible', timeout: 500000});
    }

async addFirstCake(searchText: string): Promise<void>
{
    await this.fill(this.searchBox, searchText);
    await this.click(this.searchButton);
    await this.firstCake.waitFor({ state: 'visible', timeout: 300000 });
    await this.click(this.firstCake);
    await this.addToCartButton.waitFor({ state: 'visible', timeout: 400000 });
    await this.click(this.addToCartButton);
    await this.viewCartButton.waitFor({ state: 'visible', timeout: 300000 });
    await this.click(this.viewCartButton);
    await this.continuetoDeliveryButton.waitFor({ state: 'visible', timeout: 300000 });
    await this.click(this.continuetoDeliveryButton);



}

}