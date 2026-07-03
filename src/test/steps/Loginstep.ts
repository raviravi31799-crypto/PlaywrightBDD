// import { Given, Then } from "@cucumber/cucumber";
// import { When } from "@cucumber/cucumber";
// import {chromium,Page,Browser,expect} from "@playwright/test";

// let browser:Browser;
// let page:Page;

// Given('user navigates to the application', {timeout:30000},async function () {
//   browser=await chromium.launch({headless:false});
//   page=await browser.newPage();
//   await page.goto("https://bookcart.azurewebsites.net/");
// });

// Given('user click on the login link', async function () {
//   await page.locator("//button[@mattooltip='Login']").click();
// });

// Given('user enter the username as {string}', async function (username) {
//   await page.locator("input[formcontrolname='username']").fill(username);
// });

// Given('user enter the password as {string}', async function (password) {
//  await page.locator("input[formcontrolname='password']").fill(password);
// });

// When('user click on the login button', async function () {
//   await page.locator("(//button").nth(5).click();
// });

// Then('login should be success', async function () {
//   const expectedusername="Jo";
//   //create a dynamic path
//   const usernamelocator=page.locator(`//span[normalize-space(test())='${expectedusername}']`);
//   const usernametext=await usernamelocator.textContent();
//   console.log("username is:"+usernametext);
// });

// Then('login should fail', async function () {
  
// });



