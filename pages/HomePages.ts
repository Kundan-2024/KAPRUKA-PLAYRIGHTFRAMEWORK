import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class HomePage extends BasePage
{
    readonly kitchenAppliances: Locator;
    constructor (page: Page)
    {
        super(page);
        this.kitchenAppliances = page.getByRole('link', {name:/Kitchen Appliances/});
    }
    async goto(): Promise<void>
    {
        //await this.navigate('/online/electronics');
        await this.navigate('https://www.kapruka.com/online/electronics');
    }
    async isLoaded(): Promise<void> {

        await expect(this.kitchenAppliances).toBeVisible();
    }
    async hoverKitchenAppliances(): Promise<void>
    {
        await this.kitchenAppliances.hover();
    }
    async getKitchenAppliancesTooltip(): Promise<string  | null>
    {
        return await this.kitchenAppliances.getAttribute('title');
    }
    async verifyKitchenAppliancesTooltip(): Promise<void>
    {
        await expect(this.kitchenAppliances).toHaveAttribute('title', 'Shop For Kitchen Appliances b(636)b')
        //await expect(this.kitechenAppliances).toContainText('Shop For Kitchen Appliances');
    }
    async printTooltip(): Promise<void>
    {
         // Get the page title
        const title = await this.page.title();

        // Print the title to the console
        console.log('Page Title:', title);

         // Optionally, verify the title
        expect(title).toBe('Electronic Shop In Sri Lanka: 20 Categories | Kapruka');
    }
}
