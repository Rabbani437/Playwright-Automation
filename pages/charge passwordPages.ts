import { Page, Locator } from '@playwright/test';
export class ChargePasswordPage {
    readonly page!: Page;
    readonly profileDropdown!: Locator;
    readonly profile!: Locator;
    readonly AccountInformation!: Locator;
     readonly changePasswordLink!: Locator;
     readonly currentPassword!: Locator;
     readonly newPassword!: Locator;
     readonly confirmNewPassword!: Locator;
     readonly updatePasswordButton!: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileDropdown = page.getByRole('button', { name: /Trainee/ });
        this.profile = page.getByRole('link', { name: 'Profile' });
        this.AccountInformation = page.getByRole('button', { name: 'Account Information' })
         this.changePasswordLink = page.getByRole('button', { name: 'Change Password' });
         this.currentPassword = page.getByRole('textbox', { name: 'Current password *', exact: true });
         this.newPassword = page.getByRole('textbox', { name: 'New password *', exact: true });
         this.confirmNewPassword = page.getByRole('textbox', { name: 'Confirm new password *', exact: true });
         this.updatePasswordButton = page.getByRole('button', { name: 'Update Password' });
    }
    async changePassword(currentPassword: string, newPassword: string, confirmNewPassword: string) {
        await this.profileDropdown.click();
        await this.profile.click();
        await this.AccountInformation.click();
         await this.changePasswordLink.click();
         await this.currentPassword.fill(currentPassword);
         await this.newPassword.fill(newPassword);
         await this.confirmNewPassword.fill(confirmNewPassword);
         await this.updatePasswordButton.click();
         await this.page.waitForTimeout(6000);
    }
}
