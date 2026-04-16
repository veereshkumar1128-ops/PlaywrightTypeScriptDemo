# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\01_ReadEnvFile_Test.spec.ts >> Read ENV File Test
- Location: tests\chapter5\01_ReadEnvFile_Test.spec.ts:5:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "{process.ENV.GOOGLE_URL}", waiting until "load"

```

# Test source

```ts
  1  | //Import playwright module
  2  | import {test,expect} from '@playwright/test';
  3  | 
  4  | //write a test
  5  | test('Read ENV File Test',async({page})=>{
  6  | console.log('Test Execution Started..');
  7  | //navigate to url
> 8  | await page.goto(`{process.ENV.GOOGLE_URL}`);
     |            ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  9  | //search with keywords
  10 | await page.getByLabel('Search',{exact:true}).fill("playwright by testers talk");
  11 | await page.getByLabel('Search',{exact:true}).press('Enter');
  12 | //click on playlist
  13 | await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  14 | //validate webpage title
  15 | await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  16 | })
```