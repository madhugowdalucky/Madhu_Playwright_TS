import {chromium , test } from "@playwright/test"

test("login test demo", async ()=>{

      const brower = await chromium.launch();
      const context =  await brower.newContext();
      const page   =  await context.newPage();

      await page.goto("https://ecommerce-playground.lambdatest.io/")
      await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]")
      await page.click("'Login'")
     

      await page.locator("//input[@placeholder='E-Mail Address']").fill("Madhug@gmail.com")
      await page.locator("//input[@placeholder='Password']").fill("Pass@123")
      await page.locator("//input[@value='Login']").click()

     await page.waitForTimeout(5000)



});