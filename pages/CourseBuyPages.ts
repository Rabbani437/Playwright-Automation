import { Page, Locator } from "@playwright/test";
export class courseBuy{
    readonly page :Page;
    readonly BrowseProgrammes!: Locator
    readonly coursename! : Locator
    readonly Enrollnowbutton! : Locator
    readonly Chooseplan!: Locator
    readonly mobileNumber!: Locator
    readonly continueButton!: Locator
    readonly Netbanking! :Locator
    readonly HDFCBank! : Locator
    //readonly successButton! : Locator
    readonly failureButton!: Locator;
    constructor(page: Page) {
        this.page = page;
        this.BrowseProgrammes =page.getByRole('link', { name: 'Browse Programmes' })
        this.coursename = page.getByAltText('Testing2')
        this.Enrollnowbutton = page.getByRole('button', { name: 'Enroll now' })
        this.Chooseplan = page.getByText('Choose plan')
        const checkout = page.frameLocator('iframe')
        this.mobileNumber = checkout.getByRole('textbox', { name: 'Mobile number' })
        this.continueButton = checkout.getByRole('button', { name: 'Continue' })
        this.Netbanking = checkout.getByRole('radio', { name: /Netbanking/ })
        this.HDFCBank = checkout.getByRole('button', { name: /HDFC Bank/ }).first()
        //this.successButton = page.getByRole('button', { name: 'Success' })
        //this.failureButton = page.getByRole('button', { name: 'failure' })
        this.failureButton = checkout.getByRole('button', { name: /Failure/i })
    }
async buyCourse() {
    await this.BrowseProgrammes.click();
    await this.coursename.click();
    await this.Enrollnowbutton.click();
    await this.Chooseplan.click();
    await this.mobileNumber.fill('9876512345');
    if (await this.continueButton.isVisible()) {
        await this.continueButton.click();
    }
    await this.Netbanking.click({ force: true });
    await this.page.waitForTimeout(6000);
    await this.HDFCBank.click({ force: true });
    await this.page.waitForTimeout(6000);
    //await this.successButton.click();
    if (await this.failureButton.isVisible()) {
        await this.page.waitForTimeout(6000);
        await this.failureButton.click();
    }
    await this.page.waitForTimeout(6000);
}
}