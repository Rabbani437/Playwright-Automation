import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

test('Create account navigation', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/signin');//
    await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@12345'
  );

});