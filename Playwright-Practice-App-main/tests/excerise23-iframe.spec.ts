import IframeContent from "@/app/module-5/iframe-content/page";
import { test, expect } from "@playwright/test";

test("Exercise 23: Automate an Embedded iframe", async ({page})=>
    {
        await page.goto("/module-5/exercise-23");
        //Locate Iframe
        const iframe = page.frameLocator("#test-iframe");

        //Click on button inside frame

        await iframe.locator("#iframe-btn").click();

        const messageiframe = iframe.locator("#iframe-success-msg");

        await expect(messageiframe).toBeVisible();

        await expect(messageiframe).toHaveText("Button inside iframe clicked!");

    })