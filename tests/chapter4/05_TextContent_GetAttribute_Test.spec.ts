//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Get Text and GetAttribute Test',async({page})=>{
console.log('Test Execution Started..');

//navigate to url
await page.goto('https://www.github.com/BakkappaN');
const name =await page.locator('[itemprop="name"]').textContent();
//const name =await page.locator('[itemprop="name"]').innerText();
const finalName=name?.trim();
console.log('name is : {$finalName}');
expect(finalName).toBe('Testers Talk');

const attributevalue=await page.getByTestId('repositories').first().getAttribute('data-selected-link');
console.log('Attribute value is : ${attributevalue}');
})