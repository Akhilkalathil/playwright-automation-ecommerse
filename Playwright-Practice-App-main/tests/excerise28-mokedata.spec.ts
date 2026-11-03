import { test,expect } from "@playwright/test";
import { Route } from "lucide-react";
test ("Exercise 24: Test Browser Navigation", async ({page})=>
{
    

     await page.route("/api/products", async route => {

        const mokedata = [ {
        id : 1111,
        name : "Akhils",
        price : 9999.12,
        stock : 55
        }]
    await route.fulfill({
        status : 200,
        contentType : 'application/json',
        body : JSON.stringify(mokedata)
    }

    )

     }
     
     )
      await page.goto("/module-6/exercise-28");

      const produclist = page.locator("#mocked-products-list");
      await expect(produclist).toBeVisible();
      await expect(produclist).toContainText("Akhil");

}
)