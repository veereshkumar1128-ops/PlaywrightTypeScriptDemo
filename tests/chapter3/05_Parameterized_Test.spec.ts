//Import playwright module
import { test, expect } from '@playwright/test';
const searchKeywords = ['Playwright by testers talk', 'Cypress by testers talk', 'API testing by testers talk']
for (const searchKeyword of searchKeywords) {
    //write a test
    test(`Parameter Testing ${searchKeyword}`, async ({ page }) => {
        console.log('Test Execution Started..');
        //navigate to url
        await page.goto('https://www.google.com/');
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill(searchKeyword);
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: searchKeyword }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle(searchKeyword + '✅ - YouTube');
    });
}   