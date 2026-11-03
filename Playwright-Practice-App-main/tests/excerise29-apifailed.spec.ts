import { test,expect } from "@playwright/test";
test ("Exercise 24: Test Browser Navigation", async ({page})=>
{
    await page.goto("/module-6/exercise-28");

    await page.getByText("Ex 29: API Errors").click();

    //await page.locator(".btn-primary").click();

    // await page.getByText("Fetch Data").click();

    await page.getByRole("button", { name: "Fetch Data" }).click();

    const errorAPImessage = page.locator("#error-message-container");

    await expect(errorAPImessage).toBeVisible();

    await expect(errorAPImessage).toHaveText("Error: Database connection failed");


}
)