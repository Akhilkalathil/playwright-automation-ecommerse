import {test,expect} from "@playwright/test"
test("Exercise 4: Work with Dynamic Elements" , async ({page})=>
{
    await page.goto("/module-2/exercise-4");
    // Dynamic weight
    const dynmicbtn = page.getByText("Click me! I appeared after delay");

    await dynmicbtn.click();
    // Assertion to verify text
    const succmsg = page.locator("#dynamic-message");
    await expect(succmsg).toBeVisible();
    await expect(succmsg).toHaveText("Dynamic button clicked!");
}
)