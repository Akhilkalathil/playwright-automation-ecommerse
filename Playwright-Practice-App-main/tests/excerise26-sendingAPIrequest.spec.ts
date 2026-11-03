import { test,expect } from "@playwright/test";
test ("Exercise 24: Test Browser Navigation", async ({page,request})=>
{
    const response = await request.post("/api/users", {

        data : {
            name : "Akhil",
            email : "akhiltesting@testing.com"
        }
    }
    );

    expect(response.ok()).toBeTruthy();
    const userdata = await response.json();
    expect(userdata.name).toBe("Akhil");
    expect(userdata.email).toBe("akhiltesting@testing.com");

    await page.goto("/module-6/exercise-26");
    const userlist =page.locator("#users-list");
    await expect(userlist).toBeVisible();

    await expect(userlist).toContainText("Akhil");
    await expect(userlist).toContainText("akhiltesting@testing.com");
}
)