import {Page, Locator, expect} from '@playwright/test';
import {BasePage } from './BasePage';

export class ScrollPage extends BasePage
{
    readonly bestsellingGifts: Locator;
    constructor(page: Page)
    {
        super(page);
        this.bestsellingGifts = page.getByText('Popular Search Today:', {exact: true});
    }
    async goto(): Promise<void>
    {
        await this.navigate('/shops/events_home.jsp');
    }
    async isLoaded(): Promise<void> {
        await expect(this.bestsellingGifts).toBeVisible();
    }

    async scrolltoBestSellingGift(): Promise<void>
    {
        await this.scrollToElenent(this.bestsellingGifts); //option1
        //await this.scrollDirectlyToElenent(this.bestsellingGifts); //option2
    }
}