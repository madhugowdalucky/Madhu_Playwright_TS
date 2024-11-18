import { test,expect } from "@playwright/test";

test(" handling drodown",async ({page})=>{
      
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    const multdrodown = page.locator("//select[@id='multi-select']")
   await  multdrodown.selectOption([
    {
        label:"New York"
    },

    {
        index: 4
    },
    {
        value:"Washington"
    }
])
     
})