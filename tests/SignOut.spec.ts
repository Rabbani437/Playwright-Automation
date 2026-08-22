import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignOutPage } from '../pages/SignOutPage';

test('signs the user out from the profile menu', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const profilePage = new SignOutPage(page);

    await page.goto('/signin');

    await loginPage.login(
        'shaikrabbani876@gmail.com',
        'Wml@12345'
    );
    await profilePage.signOutUser();
   
});
