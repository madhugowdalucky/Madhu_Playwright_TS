import{test ,expect} from "@playwright/test";

test (" Intraction test " , async({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/simple-from-demo");
     const messageinput = page.locator("input#user-message");
     await messageinput.scrollIntoViewIfNeeded();
     await messageinput.fill("Madhu")
     expect(messageinput).toHaveAttribute("Madhu");

  });

  test ("sum ", async({page})=>{
     
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-from-demo");
    const sum1imput= page.locator("#sum1")
    const sum2imput= page.locator("#sum2")
    const getvaluebtn = page.locator("//button[text()='Get values']")
    const result =page.locator("#addmessage")


    let num1=121;
    let num2=546;
    let expectedresult = num1+num2;

    await sum1imput.fill(""+num1);
    await sum2imput.fill(""+num2);
    await getvaluebtn.click();
  
    console.log(await result.textContent());
    expect( result).toHaveText( "" +expectedresult);
  });

  test.only ("Checkbox ", async({page})=>{


    await page.goto("https://www.ironspider.ca/forms/checkradio.htm")
    const Redcheckbox = page.locator("(//input[@value='red'])")
    await expect(Redcheckbox).not.toBeChecked();
    await Redcheckbox.check();
    await expect(Redcheckbox).toBeChecked();


  });