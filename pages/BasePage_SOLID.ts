import{Page, Locator, expect} from '@playwright/test'

export abstract class BasePage{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page; // Store this.page
    }
    async click(locator : Locator) : Promise<void>
    {
    await locator.waitFor({state:'visible'});
    await locator.click();
    }
    async navigate(url : string) : Promise<void>
    {
    await this.page.goto(url, {waitUntil: 'load'});
    }
    async fill(locator : Locator, value: string) : Promise<void>
    {
    await locator.waitFor({state: 'visible'});
    await locator.fill(value);
    }
//option1 -scroll
    async scrollToElenent(locator: Locator): Promise<void>
    {
        await this.page.mouse.wheel(0, 1500);
        await this.page.waitForTimeout(1000);
    }
    abstract isLoaded(): Promise<void>;
//option2-scroll
    async scrollDirectlyToElenent(locator: Locator): Promise<void>
    {
        await locator.scrollIntoViewIfNeeded();
    }

// option3- scroll using java script
    async scrollUsingJavaScript(): Promise<void>
    {
        await this.page.evaluate(() => window.scrollBy(0, 1500)
    
    )};


}
