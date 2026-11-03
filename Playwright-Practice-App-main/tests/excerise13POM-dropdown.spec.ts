import {test,expect  } from "@playwright/test";
import { DropDownPage } from "./pages/dropdownpages";

test ("Exercise 13: Handle Dropdown Lists" ,  async ({page})=>
    
    {
        const dropdownpage = new DropDownPage(page);

        await dropdownpage.goto();
        await dropdownpage.selectstandareddropdown("Red");
        await dropdownpage.selectcustomdropdown("Option C");
        await dropdownpage.verifystandaredselect("red")
        await dropdownpage.verifycustomselection("Option C")

    }
)