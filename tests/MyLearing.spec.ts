import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyLearningFilters } from '../pages/MyLearningFiltersPages';

test('Verify MyLearing', async ({ page }) => {
    const MyLearning = new MyLearningFilters(page);
    const loginPage = new LoginPage(page);
    await page.goto('/signin');//
    await loginPage.login(
    'shaikrabbani876@gmail.com',
    'Wml@12345'
    );
    await MyLearning.Mylearning();
});