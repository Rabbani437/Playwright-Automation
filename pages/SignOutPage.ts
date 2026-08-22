import { Page, Locator } from '@playwright/test';

export class SignOutPage {
    readonly page: Page;
    readonly profileDropdown: Locator;
    readonly profile: Locator;
    readonly paymentHistory: Locator;
    readonly myWaitlist: Locator;
    readonly notificationPreferences: Locator;
    readonly signOutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.profileDropdown = page.getByRole('button', { name: /Trainee$/ });
        this.profile = page.getByRole('link', { name: 'Profile' });
        this.paymentHistory = page.getByText(/^Payment history$/i);
        this.myWaitlist = page.getByText(/^My waitlist$/i);
        this.notificationPreferences = page.getByText(/^Notification preferences$/i);
        this.signOutLink = page.getByText(/^Sign out$/i);
    }
    async openPaymentHistory() {
        await this.profileDropdown.click();
        await this.paymentHistory.click();
         await this.page.waitForTimeout(6000);
    }
    async openMyWaitlist() {
        await this.profileDropdown.click();
        await this.myWaitlist.click();
         await this.page.waitForTimeout(6000);
    }
    async openNotificationPreferences() {
        await this.profileDropdown.click();
        await this.notificationPreferences.click();
         await this.page.waitForTimeout(6000);
    }

    async signOutUser() {
        await this.profileDropdown.click();
        await this.signOutLink.click();
         await this.page.waitForTimeout(6000);
    }
}
