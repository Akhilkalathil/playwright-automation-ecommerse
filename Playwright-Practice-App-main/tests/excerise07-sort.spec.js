import { test, expect } from "@playwright/test";

test ("Exercise 7: Sort Products by Price", async ({page})=>
    {
        await page.goto("/module-3/exercise-7");

        const sortlist = page.getByTestId("sort-select");
        const pricelist = page.locator(".product-price");

        await sortlist.selectOption("asc");

        //To get the price list

        let price = await pricelist.allTextContents();
        console.log(price);

        // To remove $ from the price

        let numberprice = price.map(p=> parseFloat(p.replace('$','')));
        console.log(numberprice);

        let isSortedAsc = numberprice.every((val, i, arr) => !i || val >= arr[i - 1]);
    expect(isSortedAsc).toBeTruthy();

        // Low to high

        await sortlist.selectOption("desc");

        //To get the price list

        price = await pricelist.allTextContents();
        console.log(price);

        // To remove $ from the price

        numberprice = price.map(p=> parseFloat(p.replace('$','')));
        console.log(numberprice);

        let isSorteddesc= numberprice.every((val, i, arr) => !i || val <= arr[i - 1]);
    expect(isSortedAsc).toBeTruthy();

    }
)