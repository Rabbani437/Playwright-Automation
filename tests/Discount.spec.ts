import { test, Page, Locator } from "@playwright/test";
import { Discount } from "../pages/DiscountcodePages";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../data/users";

test("Apply discount code", async ({ page }) => {
        const discount = new Discount(page);
        const loginPage = new LoginPage(page);
                 await page.goto('/signin');
                await loginPage.login(
                    users.user1.username,
                    users.user1.password
                );
                await discount.applyDiscountCode("Test 500");
});
