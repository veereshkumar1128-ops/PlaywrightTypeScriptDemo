import { test, expect } from '@playwright/test';

test('Codegen test', {tag:['@jenkins']},async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Testers Talk');
await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  //await page.getByRole('button', { name: 'Skip', exact: true }).click();
  //await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
});