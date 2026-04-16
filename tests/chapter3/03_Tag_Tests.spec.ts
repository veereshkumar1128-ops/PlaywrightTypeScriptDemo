//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('My First Playwright Typrescript Test 1',{tag:['@smoke']},async({page})=>{
console.log('Test Esecution Started..');

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})

//write a test
test('My First Playwright Typrescript Test 2',{tag:['@smoke','@Regression']},async({page})=>{
console.log('Test Esecution Started..');

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})

//write a test
test('My First Playwright Typrescript Test 3',{tag:['@Regression']},async({page})=>{
console.log('Test Esecution Started..');

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})