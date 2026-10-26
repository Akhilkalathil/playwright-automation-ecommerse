import { test,expect } from "@playwright/test";

test ("Exercise 15: Automate a Date Picker" ,  async ({page})=>
    
    {
            await page.goto("/module-4/exercise-16");
            await page.locator("#open-modal-btn").click();

            const model = page.locator("#simple-modal");
            await expect(model).toContainText("Information Modal");
            await page.locator("#close-modal-btn").click();
            //verify popup is hidden
            await expect(model).toBeHidden();
    }

)