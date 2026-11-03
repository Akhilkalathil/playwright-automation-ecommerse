import {Page,Locator,expect  } from "@playwright/test";

export class loginPage {

    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly btn : Locator;
    readonly successmessage : Locator;

    constructor (page : Page)
    {
        this.page =page;
        this.username = page.getByTestId("username-input");
        this.password = page.getByTestId("password-input");
        this.btn = page.getByTestId("login-button");
        this.successmessage = page.locator("#welcome-message");
    }

     async goto(){
        await this.page.goto("/module-2/exercise-1");
    }

    async enterusernameandpassword(){
        await this.username.fill("admin");
        await this.password.fill("admin123");
        await this.btn.click();
    }

    async validatelogin(value : string){
        await expect(this.successmessage).toBeVisible();
        await expect(this.successmessage).toContainText("You have successfully logged in.");
    }

}
