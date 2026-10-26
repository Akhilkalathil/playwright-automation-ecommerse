import { test,expect } from "@playwright/test";


test ("Exercise 17: Work with Browser Dialogs", async ({page})=>
{
    await page.goto("/module-4/exercise-18");

    const dradanddrop = page.locator("#drag-item-item-b");
    const targetarea = page.locator("#target-area");

    await dradanddrop.dragTo(targetarea);

    const dropverify = page.locator(".dropped-item");

    await expect(dropverify).toContainText("Item B");
}
)