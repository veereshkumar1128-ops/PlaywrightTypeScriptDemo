# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter3\05_Parameterized_Test.spec.ts >> Parameter Testing Playwright by testers talk
- Location: tests\chapter3\05_Parameterized_Test.spec.ts:6:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Playwright by testers talk' }).first()

```

# Test source

```ts
  1  | //Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | const searchKeywords = ['Playwright by testers talk', 'Cypress by testers talk', 'API testing by testers talk']
  4  | for (const searchKeyword of searchKeywords) {
  5  |     //write a test
  6  |     test(`Parameter Testing ${searchKeyword}`, async ({ page }) => {
  7  |         console.log('Test Execution Started..');
  8  |         //navigate to url
  9  |         await page.goto('https://www.google.com/');
  10 |         //search with keywords
  11 |         await page.getByLabel('Search', { exact: true }).fill(searchKeyword);
  12 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  13 |         //click on playlist
> 14 |         await page.getByRole('link', { name: searchKeyword }).first().click();
     |                                                                       ^ Error: locator.click: Target page, context or browser has been closed
  15 |         //validate webpage title
  16 |         await expect(page).toHaveTitle(searchKeyword + '✅ - YouTube');
  17 |     });
  18 | }   
```