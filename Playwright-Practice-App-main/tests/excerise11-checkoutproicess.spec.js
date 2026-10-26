import {test, expect} from "@playwright/test"

test ("Exercise 11: Update Product Quantity" ,  async ({page})=>
    
    {
        const zip = "123456";
        const name = "Akhil";

            await page.goto("/module-3/exercise-11");

            await page.locator("#name").fill(`${name}`);

            await page.locator("#city").fill("Kann");

            await page.locator("#address").fill("hgfeiufbijdvbjfidvb");

            await page.locator("#zip").fill(`${zip}`);

            await page.locator("#card").fill("2344435344665");

            await page.locator("#submit-order-btn").click();

            const successmessage = page.locator("#order-success");

            await expect(successmessage).toBeVisible();

            await expect(successmessage).toContainText("Thank you for your purchase, "+ name + "!");

            await expect(successmessage).toContainText(`Thank you for your purchase, ${name}!`);
    }
)