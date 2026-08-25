import test, { Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import{ ChargePasswordPage } from '../pages/charge passwordPages';
test('Charge password navigation', async ({ page }) => {
    const chargePasswordPage = new ChargePasswordPage(page);
    const loginPage = new LoginPage(page);
await page.goto('/signin');
await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@123456'
  );
  await chargePasswordPage.changePassword(
    'Wml@123456',
    'Wml@12345',
    'Wml@12345'
  );
});
