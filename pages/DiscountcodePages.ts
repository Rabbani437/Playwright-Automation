import test, { Page, Locator } from "@playwright/test";
export class Discount{
    readonly page:Page;
     readonly BrowseProgrammes!: Locator
    readonly coursename! : Locator
    readonly Enrollnowbutton! : Locator
    readonly Haveacodebutton!: Locator
    readonly Entercod! : Locator
    readonly Applybutton!: Locator

    constructor(page: Page) {
        this.page = page;
        this.BrowseProgrammes =page.getByRole('link', { name: 'Browse Programmes' })
        this.coursename = page.getByAltText('Testing2')
         this.Enrollnowbutton = page.getByRole('button', { name: 'Enroll now' })
         this.Haveacodebutton = page.getByRole('button', { name: 'Have a code?' })
         this.Entercod = page.getByRole('textbox')
         this.Applybutton = page.getByText('Apply')
    }
    async applyDiscountCode(code: string) {
        await this.BrowseProgrammes.click();
        await this.coursename.click();
        await this.page.waitForTimeout(6000);
        await this.Enrollnowbutton.click();
        await this.page.waitForTimeout(6000);
        await this.Haveacodebutton.click();
        await this.page.waitForTimeout(6000);
        await this.Entercod.fill('Test 500');
        //await this.page.waitForTimeout(6000);
        await this.Applybutton.click();
         //await this.page.waitForTimeout(6000);

    }
}

