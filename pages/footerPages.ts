import { Page, Locator } from '@playwright/test';

export class Footer {
    readonly page!: Page;
    readonly programs!: Locator;
    readonly privacy! : Locator;
    readonly Terms! : Locator
    readonly Refunds!:Locator

    constructor(page: Page) {
        this.page = page;
        this.programs = page.getByRole('link', { name: 'Programmes', exact: true });
        this.privacy = page.getByRole('link', { name: 'Privacy', exact: true });
        this.Terms = page.getByRole('link', { name: 'Terms', exact: true });
        this.Refunds = page.getByRole('link', { name: 'Refunds', exact: true });

    }
    async footer() {
    await this.page.locator('footer').scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(6000);
    await this.programs.click();
    await this.page.waitForTimeout(6000);
    await this.privacy.click();
    await this.page.waitForTimeout(6000);
    await this.Terms.click();
    await this.page.waitForTimeout(6000);
    await this.Refunds.click();
    await this.page.waitForTimeout(6000);
    
}

}