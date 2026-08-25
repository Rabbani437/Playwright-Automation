import test, { Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';

test('Login with User 1', async ({ page }) => {

    const loginPage = new LoginPage(page);
     await page.goto('/signin');
    await loginPage.login(
        users.user2.username,
        users.user2.password
    );
});
