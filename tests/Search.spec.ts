import test, { Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { search } from '../pages/SearchPage';
test('Search functionality', async ({ page }) => {
const loginPage = new LoginPage(page);
    await page.goto('/signin');//
    await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@12345'
  );

    const searchPage = new search(page);
    await searchPage.clickSearch();
});