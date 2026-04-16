//Import playwright module
import { test, expect } from '@playwright/test';

//write a test
test('Timeouts in Playwright', async ({ page }) => {
    test.setTimeout(60000); // Expected settimeout 
    console.log('Test Execution Started..');

    //navigate to url
    await page.goto('https://www.google.com/');
    //search with keywords
    await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
    await page.getByLabel('Search', { exact: true }).press('Enter');
    //click on playlist
    await page.getByRole('link', { name: 'Playwright Typescript by Testers Talk' }).first().click();
    //validate webpage title
    await expect(page).toHaveTitle('Playwright Typescript by Testers Talk ✅ - YouTube',{timeout : 5000});

    //await page.waitForTimeout(60000);
})