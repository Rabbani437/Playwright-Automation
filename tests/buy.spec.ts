import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { courseBuy } from "../pages/CourseBuyPages";
import { users } from "../data/users";

test('User should be able to buy a course successfully', async ({ page }) => {
    const courseBuyPage = new courseBuy(page);
     const loginPage = new LoginPage(page);
         await page.goto('/signin');
        await loginPage.login(
            users.user2.username,
            users.user2.password
        );
    await courseBuyPage.buyCourse();
    });