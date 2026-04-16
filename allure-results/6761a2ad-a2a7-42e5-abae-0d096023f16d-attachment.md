# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\04_DatadrivenTestingUsingEXCELfile_Test.spec.ts >> Datadriven Test using CSVfile : Playwright by Testers Talk
- Location: tests\chapter5\04_DatadrivenTestingUsingEXCELfile_Test.spec.ts:13:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Playwright by Testers Talk✅ - YouTube"
Received: "Playwright by Testers Talk ✅ - YouTube"

Call log:
  - Expect "toHaveTitle" with timeout 1000000ms
    4 × unexpected value ""
    72 × unexpected value "Playwright by Testers Talk ✅ - YouTube"

```

# Test source

```ts
  1  | //Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | import path from 'path';
  5  | import { readExcelFile } from '../../src/utils/ExcelHelper';
  6  | 
  7  | const filepath=path.join(__dirname,'../../test-data/qa/testdata.xlsx')
  8  | 
  9  | const records=readExcelFile(filepath);
  10 | 
  11 | for (const record of records) {
  12 |     //write a test
  13 |     test(`Datadriven Test using CSVfile : ${record.Skill1}`,async({page})=>{
  14 |         console.log('Test Execution Started..');
  15 |         //navigate to url
  16 |         await page.goto(`${process.env.GOOGLE_URL}`);
  17 |         //search with keywords
  18 |         await page.getByLabel('Search', { exact: true }).fill(record.Skill1);
  19 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  20 |         //click on playlist
  21 |         await page.getByRole('link', { name: record.Skill1 }).first().click();
  22 |         //validate webpage title
> 23 |         await expect(page).toHaveTitle(record.Skill1 +'✅ - YouTube');
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  24 |     })
  25 | }
  26 | 
```