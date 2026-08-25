import { Page, Locator } from '@playwright/test';

export class MyLearningFilters {
    readonly page: Page;
    readonly All: Locator;
    readonly NotStarted: Locator;
    readonly InProgress: Locator;
    readonly Completed: Locator;

    constructor(page: Page) {
        this.page = page;
        this.All = page.getByRole('tab', { name: 'All', exact: true });
        this.NotStarted = page.getByRole('tab', { name: 'Not Started', exact: true });
        this.InProgress = page.getByRole('tab', { name: 'In Progress', exact: true });
        this.Completed = page.getByRole('tab', { name: 'Completed', exact: true });
    }
    async Mylearning(){
        await this.All.click();
        await this.page.waitForTimeout(6000);
        await this.NotStarted.click();
        await this.page.waitForTimeout(6000);
        await this.InProgress.click();
        await this.page.waitForTimeout(6000);
        await this.NotStarted.click();
         await this.page.waitForTimeout(6000);

    }

}