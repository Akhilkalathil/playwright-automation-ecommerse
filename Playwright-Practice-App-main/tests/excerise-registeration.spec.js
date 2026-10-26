import {test,expect} from "@playwright/test"

test("Exercise 3: Complete a Registration Form" , async ({page})=>
{
    await page.goto("/module-2/exercise-3");
    await page.locator("#firstName").fill("Hanu");
    await page.locator("#lastName").fill("man");
    await page.locator("#country").selectOption("uk");
    await page.locator("#newsletter").check();
    await page.locator("#terms").check();
    // clcik register button
    await page.locator("#register-btn").click();

    const successmsg = page.locator("#success-message");

    await expect(successmsg).toBeVisible();
    await expect(successmsg).toContainText("Thank you for registering");
}
)