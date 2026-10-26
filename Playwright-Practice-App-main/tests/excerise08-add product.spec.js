import {test, expect} from "@playwright/test"

test ("Exercise 8: Add a Product to the Shopping Cart" ,  async ({page})=>
    
    {
        await page.goto("/module-3/exercise-8");

        const cart = page.getByTestId("cart-badge");
        // Verify initial cart

        await expect(cart).toHaveText("Cart: 0 items");
        // clicking add to cart
        await page.getByTestId("add-to-cart-1").click();

        //Verify cart after click
        await expect(cart).toHaveText("Cart: 1 items");

    }
)