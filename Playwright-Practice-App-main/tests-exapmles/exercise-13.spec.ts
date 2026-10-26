import { test, expect } from "@playwright/test";

test("Exercise 13: Handle Dropdown Lists", async ({page}) => {
    await page.goto("/module-4/exercise-13");

    //Standard Dropdown (HTML <select>)
    const standardSelect = page.locator("#standard-dropdown");
    await standardSelect.selectOption("red");
    await expect(standardSelect).toHaveValue("red");
    await expect(page.locator("#standard-result")).toHaveText
    ("You selected: red");

    //Custom Dropdown
    const customDropdownBtn = page.locator
    ("#custom-dropdown-toggle");
    await customDropdownBtn.click();

    //Wait for dropdown to open and click an option
    const option = page.locator(".custom-option", {hasText:
        "Option B"});
    await option.click();

    //Verify selected Text
    await expect(customDropdownBtn).toHaveText("Option B");
})
