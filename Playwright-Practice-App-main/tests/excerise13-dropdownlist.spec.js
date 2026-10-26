
import {test,expect  } from "@playwright/test";

test ("Exercise 13: Handle Dropdown Lists" ,  async ({page})=>
    
    {
        await page.goto("/module-4/exercise-13");
        const dropdown = page.locator("#standard-dropdown");
        await dropdown.selectOption("Red");
        await expect(dropdown).toHaveValue("red");

        await expect(page.locator("#standard-result")).toHaveText("You selected: red");

        const customdropdown =page.locator("#custom-dropdown-toggle");

        await customdropdown.click();

        const drop = page.locator(".custom-option" , {hasText: "Option C"});

        await drop.click();

        await expect(customdropdown).toHaveText("Option C");
    }
)
