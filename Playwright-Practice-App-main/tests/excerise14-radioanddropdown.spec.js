

import {test,expect  } from "@playwright/test";

test ("Exercise 14: Work with Checkboxes and Radio Buttons" ,  async ({page})=>
    
    {
        await page.goto("/module-4/exercise-14");

        const radiobutton = page.locator("#flavor-chocolate");
        await radiobutton.check();
        //await page.locator("#flavor-chocolate").click();
        const checkbox = page.locator("#topping-nuts");
        await checkbox.check();
        const seccheckbox = page.locator("#topping-sprinkles");
        await seccheckbox.check();
        //await page.locator("#topping-nuts").click();

        await expect(checkbox).toBeChecked();
        await expect(seccheckbox).toBeChecked();

        await expect(page.locator("#result-flavor")).toHaveText("Chocolate");

        await expect(page.locator("#result-toppings")).toHaveText("sprinkles, nuts");
        

    }
)