import { test , expect } from "@playwright/test";

test("Exercise 5: Automate a Search Feature" , async ({page})=>
{
    await page.goto("/module-2/exercise-5");

    await page.locator("#search-input").fill("Coffee");
    await page.locator("#search-btn").click();

    const products = page.locator("#search-results");

    await expect(products).toHaveCount(1);

    await expect(products.first().locator(".product-item")).toContainText("Coffee Mug");

}

)