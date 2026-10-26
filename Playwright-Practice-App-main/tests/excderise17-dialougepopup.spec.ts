import { test,expect } from "@playwright/test";
import { exitCode } from "process";

test ("Exercise 17: Work with Browser Dialogs", async ({page})=>
{
    await page.goto("/module-4/exercise-17");
    // await page.locator("#alert-btn").click();
    // Handling alerts

    page.once("dialog", async dialog => 
    {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("This is a simple alert message!");
        await dialog.accept();
    }
    )
    await page.locator("#alert-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Alert was triggered");


    //await page.locator("#confirm-btn").click();
    page.once("dialog", async dialog =>
    {
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Do you accept the terms?");
        await dialog.dismiss();
    })

    await page.locator("#confirm-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Confirm dismissed");

    
    page.once("dialog", async dialog =>
    {
        expect(dialog.type()).toBe("prompt");
       //expect(dialog.message).toBe("Please enter your name:");
        await dialog.accept("Playwright");
    }
    )
    await page.locator("#prompt-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Prompt returned: Playwright");
}



)