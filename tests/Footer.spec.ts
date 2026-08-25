import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {Footer } from '../pages/footerPages';

test('Verify Footer', async ({ page }) => {
    const footerPage = new Footer(page);
     const loginPage = new LoginPage(page);
    await page.goto('/signin');//
    await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@12345'
    );
    await footerPage.footer();
});