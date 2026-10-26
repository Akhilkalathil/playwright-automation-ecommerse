import {test,expect} from "@playwright/test"

test ("Exercise 1: Automate a Login Form", async({page})=>
    {

        await page.goto("/module-2/exercise-1");
        //fill incorerect cred
        await page.getByTestId("username-input").fill("admin");
        await page.getByTestId("password-input").fill("admin123");
        await page.getByTestId("login-button").click();

// success message validation

        const successmessage = page.locator("#welcome-message");
        await expect(successmessage).toBeVisible();
        await expect(successmessage).toContainText("You have successfully logged in.");

    } )