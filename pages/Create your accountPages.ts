import { Page, Locator } from '@playwright/test';

export class CreateYourAccountPage {
    readonly page!: Page;
    readonly fullNameInput!: Locator;
    readonly emailInput!: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput!: Locator;
    readonly phoneNumberInput!: Locator;
    readonly createAccountButton!: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByRole('textbox', { name: 'Full name' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password' });
        this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone' });
        this.createAccountButton = page.getByRole('button', { name: 'Create account→' })
    }
    async createAccount(fullName: string, email: string, password: string, confirmPassword: string, phoneNumber: string) {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.page.getByRole('button', { name: 'Create account' }).click();
        await this.page.waitForTimeout(6000);
    }
}
