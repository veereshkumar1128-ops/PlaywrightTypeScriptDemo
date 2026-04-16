import {test,expect} from '@playwright/test';
//write a test
test('Locators in Playwright Test',async({page})=>{
await page.goto('https://github.com/BakkappaN');
//getByRole
//await page.getByRole('link',{name:'Sign in'}).click();

//getByLabel
//await page.getByLabel('Homepage',{exact:true}).first().click();

//getByAltText
//await page.getByAltText("View BakkappaN's full-sized avatar").click();

//getByTestId
await page.getByTestId("Repositories").first().click();

//getByText
//await page.getByText("Sign Up").click();

//getByPlaceHolder,Xpath, CSSSelector
//await page.goto("https://www.youtube.com/@testerstalk");
//await page.getByPlaceholder("Search").fill("Testers Talk");
//await page.locator("//input[@name='search_query']").fill("Testers Talk");
//await page.locator("input[name='search_query']").fill("Testerss Talk");

//getByTitle
await page.goto("https://www.google.com/");
await page.getByTitle("Search").fill("Testers Talkk");
})