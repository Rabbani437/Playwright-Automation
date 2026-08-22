import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NavigationPage } from '../pages/navigationPages';

test('navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navPage = new NavigationPage(page);

    await page.goto('/signin');
    await loginPage.login(
        'shaikrabbani876@gmail.com',
        'Wml@12345'
    );

    await expect(navPage.myDashboard).toBeVisible();
    await navPage.navigation();
});
