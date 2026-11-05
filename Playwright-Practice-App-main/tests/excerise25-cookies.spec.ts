import {test,expect  } from "@playwright/test";

test("Exercise 25: Use Cookies and Local Storage", async ({page})=>
    {
        await page.goto("/module-5/exercise-25");

        await page.locator("#save-storage-btn").click();
        await page.reload();

    }
)