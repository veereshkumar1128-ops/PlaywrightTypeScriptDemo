//Import playwright module
import { test, expect } from '@playwright/test';
//write a test
test('Iterating matching elements', async ({ page }) => {
    console.log('Test Execution Started..');

    //navigate to url
    await page.goto('https://www.github.com/BakkappaN');
    const repolinks = await page.$$('.repo');
    for (const repolink of repolinks) {
        const text = await repolink.textContent();
        console.log(`Text name from 1st loop : ${text}`);
    }
    console.log(`=================================================`)
    for (let index = 0; index < repolinks.length; index++) {
        const text = await repolinks[index].textContent();
        console.log(`Text name from 2nd loop : ${text}`);
    }
    console.log(`=================================================`)
    const repolinks2 = await page.locator('.repo');
    const count = await repolinks2.count();
    for (let index = 0; index < count; index++) {
        const text = await repolinks2.nth(index).textContent();
        console.log(`Text name from 3rd loop : ${text}`);
    }
})