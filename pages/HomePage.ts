import { Page, Locator } from '@playwright/test';
export class Homepage{
    readonly page: Page;
    readonly profileDropdown!: Locator;
    readonly logoutButton!: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileDropdown = page.getByRole('button', { name: /Trainee$/ })
        this.logoutButton = page.getByText('Sign out')
    }

    async logout() {
        await this.profileDropdown.click();
        await this.logoutButton.click();

    }
}