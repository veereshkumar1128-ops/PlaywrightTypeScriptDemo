//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Keyboard Actions Test',async({page})=>{

//navigate through Enter Key
await page.goto('https://www.google.com/');
await page.getByLabel('Search',{exact:true}).first().click();
await page.getByLabel('Search',{exact:true}).first().fill('playwright by testers talk');
//await page.getByLabel('Search',{exact:true}).first().press('Digit6');
await page.getByLabel('Search',{exact:true}).first().press('Enter');

//Select Control+A and Delete
// await page.getByLabel('Search',{exact:true}).first().click();
// await page.keyboard.press('Control+A')
// await page.keyboard.press('Delete');

//Press Tab and Enter
await page.getByLabel('Search',{exact:true}).first().click();
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');
})