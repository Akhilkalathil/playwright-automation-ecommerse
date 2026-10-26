import { test, expect } from "@playwright/test";

test ("Exercise 15: Automate a Date Picker" ,  async ({page})=>
    
    {
        await page.goto("/module-4/exercise-15");
        const datein = page.locator("#appointment-date");
        await datein.fill("2025-05-12");

        await expect(page.locator("#selected-date-msg")).toContainText("2025-05-12");
    }
)