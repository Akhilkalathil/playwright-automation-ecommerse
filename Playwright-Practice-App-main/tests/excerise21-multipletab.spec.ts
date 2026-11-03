import { test,expect } from "@playwright/test";
test ("Exercise 17: Work with Browser Dialogs", async ({page,context})=>
{
     await page.goto("/module-5/exercise-21");
    const popuppromise = context.waitForEvent("page");

    await page.locator("#new-tab-link").click();

    const newpage =await popuppromise;
    await newpage.waitForLoadState();

    await expect(newpage).toHaveTitle(/Playwright/)
    await newpage.close();

    await expect(page.locator("#new-tab-link")).toBeVisible();

}
)