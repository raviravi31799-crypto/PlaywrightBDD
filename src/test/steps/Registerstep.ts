// import { Given,When,Then } from "@cucumber/cucumber";
// import {expect} from "@playwright/test";
// import { CustomWorld } from "../../hooks/world";

// // let browser:Browser;
// // let page:Page;




// Given('the user launched the application', async function (this:CustomWorld) {
// //   browser=await chromium.launch({headless:false});
// //   page=await browser.newPage();
//   await this.page.goto("https://bookcart.azurewebsites.net/");
// });

// Given('clicks on Loginlink', async function (this:CustomWorld) {
//   await this.page.locator("//button[@mattooltip='Login']").click();
// });

// Given('clicks on Register', async function (this:CustomWorld) {
//    await this.page.getByText("Register").click();
// });

// Given('user enters fname as {string}, lastname as {string} ,username as {string}, password as {string} and confirmpassword as {string}', async function (this:CustomWorld,fname, lastname,username, password,confirmpassword) {
//       await this.page.locator("//input[@placeholder='First name']").fill(fname);
//       await this.page.locator("//input[@placeholder='Last Name']").fill(lastname);
//       await this.page.locator("//input[@placeholder='User name']").fill(username);
//       await this.page.locator("//input[@placeholder='Password']").fill(password);
//       await this.page.locator("//input[@placeholder='Confirm Password']").fill(confirmpassword);
//       await this.page.locator("//input[@value='Female']").check();
// });

// When('the user clicks on the register button',{timeout:50000}, async function (this:CustomWorld) {
//  //await this.page.locator("//span[@class='mat-focus-indicator']//preceding-sibling::span[text()='Register']").click();
//  await this.page.getByRole("button", { name: "Register" }).click();
// });

// Then('login form will be appeared', async function (this:CustomWorld) {
//   await expect(
//     this.page.locator("//h1[text()='Login']")).toBeVisible();
// });
