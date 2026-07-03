//import { pageFixture } from './../../hooks/pageFixture';
import { Given,When,Then } from "@cucumber/cucumber";
import{expect} from "@playwright/test";
import { CustomWorld } from '../../hooks/world';

//let browser:Browser;
//let page:Page;



Given('the user launched the demoblaze application', async function (this:CustomWorld) {
//    browser=await chromium.launch({headless:false});
//    page=await browser.newPage();
      await this.page.goto("https://demoblaze.com/");
});
Given('clicks on Loginlink on homepage', async function (this:CustomWorld) {
  await this.page.locator("#login2").click();
});


Given('the user passes the username {string} and password {string}', async function (this:CustomWorld,username, password) {
      await this.page.locator("#loginusername").fill(username);
      await this.page.locator("#loginpassword").fill(password);
});

When('the user clicks loginbutton', async function (this:CustomWorld) {
 await this.page.locator("//button[@onclick='logIn()']").click();
});

Then('the user is able to see Welcome text with username',{timeout:30000} ,async function (this:CustomWorld) {
   await expect( this.page.locator("#nameofuser")).toHaveText("Welcome Admin@5");
 
  console.log("Logged in successful");
});
