import { Page, Locator } from '@playwright/test';
export class RegisterPage{
        readonly page!: Page;
    readonly createAccountLink!: Locator;
        readonly continueWithEmailButton!: Locator;

 constructor(page: Page) {
        this.page = page;
        this.createAccountLink = page.locator('text=Create an account');
        this.continueWithEmailButton = page.locator('text=Continue with email');
    }
    async clickCreateAccountLink() {
        await this.createAccountLink.click();
    }
    async clickContinueWithEmailButton() {
        await this.continueWithEmailButton.click();
    }
}
