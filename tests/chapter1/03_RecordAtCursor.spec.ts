//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Record At Cursor Test',async({page})=>{

//navigate to url
await page.goto('https://www.google.com/');
//search with keywords
await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//validate webpage title
await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

await expect(page.getByLabel('#1 Playwright Tutorial Full Course 2026').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
await expect(page.getByLabel('#2 Playwright API Testing Tutorial Crash Course 2024').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');

})