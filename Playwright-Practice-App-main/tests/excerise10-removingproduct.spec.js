import {test, expect} from "@playwright/test"

test ("Exercise 9: Update Product Quantity" ,  async ({page})=>
    
    {
        await page.goto("/module-3/exercise-10");

        const removebuttoniteam = page.getByTestId(/remove-btn-.*/);
        const productiteam = page.locator(".cart-item");

        //verify number of catis initialy

        await expect(productiteam).toHaveCount(2);

        //await removebuttoniteam.first().click();

         await removebuttoniteam.nth(1).click();

         await expect(productiteam).toHaveCount(1);
    }
)