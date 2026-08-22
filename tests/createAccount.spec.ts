import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { CreateYourAccountPage } from '../pages/Create your accountPages';

test('Create account navigation', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const createYourAccountPage = new CreateYourAccountPage(page);

    await page.goto('/signin');
    await registerPage.clickCreateAccountLink();
    await registerPage.clickContinueWithEmailButton();
    await createYourAccountPage.createAccount(
      'Rabbani Shaik',
      'rabbani.test001@gmail.com',
      'Test@12345',
      'Test@12345',
      '9999999999'
    );
});
