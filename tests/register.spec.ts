import test, { Page, Locator } from '@playwright/test';
import{ RegisterPage } from '../pages/RegisterPage';
test('Create account navigation', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await page.goto('/signin');
    await page.waitForTimeout(3000);

    await registerPage.clickCreateAccountLink();
    await page.waitForTimeout(3000);
    await registerPage.clickContinueWithEmailButton();
    await page.waitForTimeout(3000);

    
});