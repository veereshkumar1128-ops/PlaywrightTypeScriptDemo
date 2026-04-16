//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Test 1',async({page})=>{
console.log('Test Execution Started..');

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
})

//write a test
test('Test 2',async({page})=>{
expect(true).toBe(false);
})

//write a test
test('Test 3',async({page})=>{
expect(true).toBe(false);
})