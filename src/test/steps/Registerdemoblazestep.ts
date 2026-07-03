// import { CustomWorld } from './../../hooks/world';

// import{Given,When,Then} from "@cucumber/cucumber";
// import{expect} from "@playwright/test";

// let message:string;
// Given('the user navigates to demoblaze application', async function (this:CustomWorld) {
//       await this.page.goto("https://demoblaze.com/");
// });

// Given('clicks on signup link', async function (this:CustomWorld) {
//   await this.page.locator("#signin2").click();
// });

// Given('the user inputs new username {string} and password as {string}', async function (this:CustomWorld,username, password) {
//       await this.page.locator("#sign-username").fill(username);
//       await this.page.locator("#sign-password").fill(password);
// });

// When('clicks on the signup button', async function (this:CustomWorld) {
//     this.page.on("dialog",async alert=>{
//        message=alert.message();
//         console.log(message);
//         await alert.accept();
        
//     });
//   await this.page.locator("//button[@onclick='register()']").click();
    
// });

// Then('the user receives an alert regarding successful registration',{timeout:30000}, async function (this:CustomWorld) {
//       await expect(message).toEqual("Sign up successful.")
// });

// Given('the user enters existing username  {string} and password {string}', async function (this:CustomWorld,existingusername,password) {
//         await this.page.locator("#sign-username").fill(existingusername);
//       await this.page.locator("#sign-password").fill(password);
// });


// Then('the user should get an warning alert', async function (this:CustomWorld) {
//      await expect(message).toEqual("This user already exist.");
// });





