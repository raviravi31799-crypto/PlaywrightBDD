import{Given,When,Then} from "@cucumber/cucumber";
import {expect }from "@playwright/test";
import { CustomWorld } from "../../hooks/world";




Given('the application is launched by the user', async function (this:CustomWorld) {
    await this.page.goto("https://tutorialsninja.com/demo/");
});

Given('the user clicks Myaccount and selects register', async function (this:CustomWorld) {
  await this.page.getByTitle("My Account").click();
  await this.page.getByRole('link',{name:"Register"}).click();
});

Given('the user enters firstname {string} ,lastname {string},email {string},phone {string},password {string} and cpassword {string}', async function (this:CustomWorld,fname,lname,email,phone,password,cpassword) {
    await this.page.locator("//input[@id='input-firstname']").fill(fname);
    await this.page.locator("//input[@id='input-lastname']").fill(lname);
    await this.page.locator("//input[@id='input-email']").fill(email);
    await this.page.locator("//input[@id='input-telephone']").fill(phone);
    await this.page.locator("//input[@id='input-password']").fill(password);
    await this.page.locator("//input[@id='input-confirm']").fill(cpassword);
    
});

When('continue button is clicked by the user', async function (this:CustomWorld) {
    await this.page.locator("//input[@name='agree']").click();
    await this.page.locator("//input[@value='Continue']").click();
});

Then('the account creation successful message will appear',{timeout:30000}, async function () {
  await expect(this.page.locator("//h1[text()='Your Account Has Been Created!']")).toBeVisible();
});



