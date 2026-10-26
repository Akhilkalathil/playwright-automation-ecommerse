import {test, expect} from "@playwright/test"

test ("Exercise 9: Update Product Quantity" ,  async ({page})=>
    
    {

        await page.goto("/module-3/exercise-9");

        const pricetotal = page.getByTestId("total-price");
        const quantity =page.getByTestId("quantity-input");

        // verify initail quantity

        await expect(quantity).toHaveValue("1");
        await expect(pricetotal).toHaveText("$49.99");

        //change the quantity

        await quantity.fill("4");
        await expect(pricetotal).toHaveText("$199.96");
    }
)