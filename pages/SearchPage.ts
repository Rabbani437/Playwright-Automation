import { test, expect, Page, Locator } from '@playwright/test';

export class search {
    readonly page: Page;
    readonly searchInput!: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByLabel('Search programmes')
        
    }
    async search() {
        await this.searchInput.click();
    }
}