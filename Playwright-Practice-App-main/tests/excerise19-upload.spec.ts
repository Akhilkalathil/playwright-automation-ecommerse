import { test,expect } from "@playwright/test";
import path  from "path";
import fs from "fs";

test ("Exercise 19: Upload and Validate a File", async ({page}, testInfo)=>
{
    await page.goto("/module-4/exercise-19");

    const filepath = path.join(__dirname, "..", "Upload", "sampleupload.txt");

    const fileinput = page.locator("#file-upload");

    await fileinput.setInputFiles(filepath);

    await page.locator("#upload-btn").click();

    const fileuploadmessage = page.locator("#upload-success");

    await expect(fileuploadmessage).toHaveText("File sampleupload.txt was successfully uploaded!");
}
)