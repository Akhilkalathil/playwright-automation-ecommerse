import { test,expect  } from "@playwright/test";

test ("Exercise 22: Handle Pop-Up Windows", async ({page,context})=>
{
    await page.goto("/module-5/exercise-22");
    
    const popuppromise = context.waitForEvent("page");

    await page.locator("#open-popup-btn").click();

    const popup = await popuppromise;
    await popup.waitForLoadState();

    await expect(popup.locator("h2")).toHaveText("Exercise 22: Handle Pop-Up Windows");
    
    await popup.close();
    expect(popup.isClosed()).toBeTruthy();
}
)
