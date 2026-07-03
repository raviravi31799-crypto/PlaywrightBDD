import {Before,After,Status} from "@cucumber/cucumber";
import { chromium,Browser,Page } from "@playwright/test";
//import {pageFixture} from "./pageFixture";
import { CustomWorld } from "./world";

let browser:Browser;
Before(async function(){
    this.browser=await chromium.launch({headless:false});
    this.context=await this.browser.newContext();
    this.page=await this.context.newPage();
    //pageFixture.page=page;
});
After(async function ({pickle,result}) {
    console.log(result?.status);
    //screenshot
    if(result?.status==Status.FAILED){
        const img=await this.page.screenshot({path:`./test-result/screenshot/${pickle.name}.png`,type:'png'});
        await this.attach(img,"image/png");
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();

})