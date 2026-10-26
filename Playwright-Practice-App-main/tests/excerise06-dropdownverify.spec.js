import {test, expect} from "@playwright/test"

test ("Exercise 6: Filter Products by Category" ,  async ({page})=>
    
    {
        await page.goto("module-3/exercise-6");
        const catagoryfilter = page.getByTestId("category-filter");
        const productcard = page.getByTestId("product-card");
        const productcardinfo = page.locator(".product-category");

        // Verify total cards
        await expect(productcard).toHaveCount(6);

        // select dropdown and verify

        await catagoryfilter.selectOption("Gaming");

        await expect(productcard).toHaveCount(2);

        const countcard = await productcardinfo.count();
         for (let i=0; i<countcard ; i++) 
         {
            await expect(productcardinfo.nth(i)).toHaveText("Gaming");
         }

    }
)