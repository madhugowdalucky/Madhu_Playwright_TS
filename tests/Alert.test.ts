import { test,expect } from "@playwright/test";

test(" handling alert",async ({page})=>{
      
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
     
   page.on("dialog",async(alert)=>{
      
    const text = alert.message();
    console.log(text);
    await alert.accept();
   })
    
    await page.locator("button:has-text('Click Me')").nth(0).click()
})

test("check msg alert",async ({page})=>{
      
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
     
   page.on("dialog",async(alert)=>{
      
    const text = alert.message();
    console.log(text);
    await alert.dismiss();
   })
    
    await page.locator("button:has-text('Click Me')").nth(1).click()
    const msg = page.locator("#confirm-demo");
    expect(msg).toContainText(" Cancel!");
})

test.only("Enter msg alert",async ({page})=>{
      
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
     
   page.on("dialog",async(alert)=>{
      
    const text = alert.message();
    console.log(text);
    await alert.accept("Madhu");
   })
    
    await page.locator("button:has-text('Click Me')").nth(2).click()
    const msg2 = page.locator("#prompt-demo");
    expect(msg2).toHaveText("You have entered 'Madhu' !");
})