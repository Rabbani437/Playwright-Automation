import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page!: Page;
    readonly continueWithEmailButton!: Locator;
    readonly emailInput!: Locator;
    readonly passwordInput!: Locator;
    readonly signInButton!: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueWithEmailButton = page.getByRole('button', { name: 'Continue with email' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.signInButton = page.locator('button[type="submit"]');
    }
    async login(email: string, password: string) {
        await this.continueWithEmailButton.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.page.waitForTimeout(6000);
    }
}
