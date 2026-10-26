import { test,expect } from "@playwright/test";
import fs  from "fs";

test ("Exercise 20: Download and Verify a File", async ({page}, testInfo)=>
{
    await page.goto("/module-4/exercise-20");

    const downloadweight = page.waitForEvent("download");

    await page.locator("#download-btn").click();

    const Download = await downloadweight;

    // downloading and verifying file name

    const filename = Download.suggestedFilename();
    expect(filename).toBe("sample-document.txt");

    // Saving the file tp+o path
    const downloadpath = testInfo.outputPath(filename);
    await Download.saveAs(downloadpath);
    expect(fs.existsSync(downloadpath)).toBeTruthy();

}
)