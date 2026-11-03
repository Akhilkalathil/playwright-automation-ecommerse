import { test,expect } from "@playwright/test";
test ("Exercise 24: Test Browser Navigation", async ({page,context})=>
{
 await page.goto("/module-5/exercise-24");

 await page.locator("#navigate-btn").click();

 await expect(page).toHaveURL("/module-5/exercise-24/subpage");

 await expect(page.locator("#subpage-title")).toHaveText("You are on the Subpage!");

 await page.goBack();

  await expect(page).toHaveURL("/module-5/exercise-24");
  console.log(await page.locator("h2").allTextContents());

  await expect(page.locator("h2").first()).toHaveText("Exercise 24: Test Browser Navigation");

 await expect(page.locator(".card")).toContainText("Exercise 24: Test Browser Navigation");

 await page.goForward();
 await expect(page).toHaveURL("/module-5/exercise-24/subpage");

}
)