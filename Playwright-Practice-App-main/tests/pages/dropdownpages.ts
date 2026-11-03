import {Page,Locator,expect  } from "@playwright/test";

export class DropDownPage {

    readonly page : Page;
    readonly dropdown : Locator;
    readonly customdropdown : Locator;
    //readonly drop : Locator;
    readonly stdresult : Locator;
    readonly customdropdownmenu : Locator;

    constructor (page :Page) {
        this.page = page ;

        this.dropdown = page.locator("#standard-dropdown");

        this.customdropdown = page.locator("#custom-dropdown-toggle");

        this.customdropdownmenu = page.locator("#custom-dropdown-menu");

        //this.drop = page.locator(".custom-option");

        this.stdresult = page.locator("#standard-result");
    }

    async goto(){
        await this.page.goto("/module-4/exercise-13");
    }

    async selectstandareddropdown(value : String){
        await this.dropdown.selectOption("Red");  // make value
    }

    async selectcustomdropdown(optionText : string){

       await this.customdropdown.click();
       
       const drop = this.customdropdownmenu.filter( {hasText: optionText});
        
      await drop.nth(2).click();
        
      console.log(drop); 
    }

    async verifystandaredselect(value : string){
        await expect(this.stdresult).toHaveText(`You selected: ${value}`);
    }

    async verifycustomselection(optionText : string){
        await expect(this.customdropdown).toHaveText(optionText);  //optionText
    }
}