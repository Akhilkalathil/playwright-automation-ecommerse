
import {test,expect } from "@playwright/test"
test ("Exercise 12: Validate Order Summary" ,  async ({page})=>
    
    {
        await page.goto("/module-3/exercise-12");

        const subtotal = await page.locator("#summary-subtotal").textContent();
        const tax = await page.locator("#summary-tax").textContent();
        const total = await page.locator("#summary-total").textContent();

       console.log(subtotal,tax,total);

       const subtotalnum = parseFloat(subtotal?.replace("$","") || "0");
       const taxnum = parseFloat(tax?.replace("$","") || "0");
       const totalnum = parseFloat(total?.replace("$","") || "0");

       console.log(subtotalnum,taxnum,totalnum);

       expect(totalnum).toBeCloseTo(subtotalnum+taxnum, 2);

       expect(taxnum).toBeCloseTo(subtotal * .099 , 2);
    }

)