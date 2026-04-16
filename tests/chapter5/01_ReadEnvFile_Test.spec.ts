//Import playwright module
import {test,expect} from '@playwright/test';

//write a test
test('Read ENV File Test',async({page})=>{
console.log('Test Execution Started..');
//navigate to url
await page.goto(`${process.env.GOOGLE_URL}`);
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})