import {test,expect} from "@playwright/test";
import { loginPage } from "./pages/loginpage";

test ("Exercise 1: Automate a Login Form", async({page})=>
    {
        const loginpage = new loginPage(page);
        await loginpage.goto();
        await loginpage.enterusernameandpassword();
        await loginpage.validatelogin("You have successfully logged in.");

    } )