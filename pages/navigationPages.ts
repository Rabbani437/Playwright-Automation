import { Page, Locator } from '@playwright/test';

export class NavigationPage {
    readonly page: Page;
    readonly myDashboard: Locator;
    readonly browseProgrammes: Locator;
    readonly analytics: Locator;
    readonly certificates: Locator;

    constructor(page: Page) {
        this.page = page;
        const sidebar = page.getByRole('navigation');
        this.myDashboard = sidebar.getByRole('link', { name: 'My Dashboard' });
        this.browseProgrammes = sidebar.getByRole('link', { name: 'Browse Programmes' });
        this.analytics = sidebar.getByRole('link', { name: 'Analytics' });
        this.certificates = sidebar.getByRole('link', { name: 'Certificates' });
    }
    async navigation() {
        await this.myDashboard.click();
        await this.page.waitForTimeout(6000);
        await this.browseProgrammes.click();
        await this.page.waitForTimeout(6000);
        await this.analytics.click();
        await this.page.waitForTimeout(6000);
        await this.certificates.click();
        await this.page.waitForTimeout(6000);
    }
}
