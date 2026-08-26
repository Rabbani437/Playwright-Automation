import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Homepage } from "../pages/HomePage";
import { users } from "../data/users";

test("Login logout for multiple users", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new Homepage(page);

    for (const user of Object.values(users)) {
        await page.goto('/signin');
        await loginPage.login(
            user.username,
            user.password
        );
        await homePage.logout();

    }
});