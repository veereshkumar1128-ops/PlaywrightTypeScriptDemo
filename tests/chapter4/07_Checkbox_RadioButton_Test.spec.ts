import { test, expect } from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
    //navigate to url
    await page.goto('https://jqueryui.com/checkboxradio/');
    const iframe = page.frameLocator('[class="demo-frame"]')
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
     await iframe.locator('[for="radio-1"]').check();
     await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
});
test('Check box Test', async ({ page }) => {
    //navigate to url
    await page.goto('https://jqueryui.com/checkboxradio/');
    const iframe = page.frameLocator('[class="demo-frame"]')
    await expect(iframe.locator('[for="checkbox-2"]')).not.toBeChecked();
     await iframe.locator('[for="checkbox-2"]').check();
     await expect(iframe.locator('[for="checkbox-2"]')).toBeChecked();
});