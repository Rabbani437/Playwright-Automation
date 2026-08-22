import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { updateProfile } from '../pages/updateProfilePage';
test('Update profile', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new updateProfile(page);
  await page.goto('/signin');
  await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@12345'
  );
  await profilePage.updateProfile(
    'Rabbu876@gmail.com',
    '8143586142',
    'inkollu',
    'inkollu',
    '0000000',
    '37AABCA7350D1ZR'
  );
  

});