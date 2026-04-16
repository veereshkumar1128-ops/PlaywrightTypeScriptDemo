//Import playwright module
import { test, expect } from '@playwright/test';
//write a test
test.describe('smoke', () => {
    test('Test 1 - Annotations Test', async ({ page }) => {
        console.log('Test Esecution Started..');

        //navigate to url
        await page.goto('https://www.google.com/');
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })
});
test.describe('regression', () => {
    test('Test 2 - Annotations Test', async ({ page }) => {
        console.log('Test Esecution Started..');

        //navigate to url
        await page.goto('https://www.google.com/');
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })
    test('Test 3 - Annotations Test', async ({ page }) => {
        console.log('Test Esecution Started..');

        //navigate to url
        await page.goto('https://www.google.com/');
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })
   test('Test 4 - Annotations Test', async ({ page }) => {
        console.log('Test Esecution Started..');

        //navigate to url
        await page.goto('https://www.google.com/');
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle('Playwright Typescript by Testers Talk ✅ - YouTube');
    }) 
})


