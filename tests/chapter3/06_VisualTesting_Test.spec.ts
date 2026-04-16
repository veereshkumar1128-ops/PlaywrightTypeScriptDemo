//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Visual Comparison in Playwright',async({page})=>{

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GithubLoginPage.png');

    await page.locator('#login_field').fill('playwright with typescript');

    await expect(page).toHaveScreenshot('GithubLoginPage.png');

})
test('Element Visual Comparison in Playwright',async({page})=>{

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GithubLoginPage.png');

    const element =page.locator('[class="auth-form-body mt-3"]');
    await expect(element).toHaveScreenshot('GithubLoginForm.png');

    await page.locator('#login_field').fill('playwright with typescript');
    await expect(element).toHaveScreenshot('GithubLoginForm.png');

})