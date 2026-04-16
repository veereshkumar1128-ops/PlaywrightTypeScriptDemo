//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Multiple Browser/tabs Test',async({page,browser})=>{
console.log('Test Execution Started..');

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
//await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
//await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
const context2=await browser.newContext();
const page2 = await context2.newPage();
//navigate to url
await page2.goto('https://www.google.com/');
//search with keywords
await page2.getByLabel('Search',{exact:true}).fill("playwright javascript by testers talk");
await page2.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
//await page2.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
//await expect(page2).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

//create new tab
const newtab = await context2.newPage();
await newtab.goto('https://www.google.com/');
//search with keywords
await newtab.getByLabel('Search',{exact:true}).fill("playwright javascript by testers talk");
await newtab.getByLabel('Search',{exact:true}).press('Enter');
})