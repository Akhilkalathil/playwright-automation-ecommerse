import { test,expect } from "@playwright/test";


test ("Exercise 30: Build an End-to-End E-Commerce Test", async ({page} )=>
{
    //page navigation
    await page.goto("/module-7/exercise-30");

    //Credentials
    const userid = "Akhil";
    const password1 = "Akhil123";

    //Registeration
    await page.getByTestId("reg-username").fill(userid);
    await page.getByTestId("reg-password").fill(password1);
    await page.locator(".btn-primary").click();

    //Registeration success verification
    const regsuccessmsg = page.getByTestId("reg-success-msg");
    await expect(regsuccessmsg).toBeVisible();
    await expect(regsuccessmsg).toContainText("Account created! Please log in.");

    //Logoin
    await page.getByTestId("login-username").fill(userid);
    await page.getByTestId("login-password").fill(password1);
    await page.getByRole('button', { name: 'Login' }).click();

    //Add to cart
    await page.getByTestId("e2e-add-1").click();

    //Verify cart
    await expect(page.getByTestId("cart-item-name")).toHaveText("Playwright Mastery Course");
    await page.getByTestId("checkout-btn").click();

    //Check out
    await page.getByTestId("checkout-address").fill("Address12345");
    await page.getByTestId("checkout-card").fill("ASD123214235");
    await page.getByRole("button", { name: "Confirm Order" }).click();

    //orderconfirm confirmationj message

    const orderconfMsg = page.getByTestId("e2e-success-message");
    await expect(orderconfMsg).toContainText("Thank you for your purchase. Your order number is");

    //Start over

    await page.locator(".btn-primary").click();
}
)