import {test,expect} from "@playwright/test"


test ("Exercise 2: Validate Incorrect Login Credentials", async({page})=>
{
    // -ve Scenario 1
    await page.goto("/module-2/exercise-2");
    await page.locator("#login-btn").click();
    //message is visible
    await expect(page.getByTestId("login-error")).toBeVisible();
    //Verify exact text
    await expect(page.getByTestId("login-error")).toHaveText("Username and password are required.");

    //-ve scenario 2

    await page.locator("#username").fill("akhil");
    await page.locator("#password").fill("admin");
    await page.locator("#login-btn").click();
    await expect(page.locator("#error-message")).toHaveText("Invalid credentials. Please try again.");
})