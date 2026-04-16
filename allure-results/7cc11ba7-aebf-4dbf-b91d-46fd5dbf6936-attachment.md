# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\03_DatadrivenTestingUsingCSVfile_Test.spec.ts >> Datadriven Test using CSVfile : Playwright by Testers Talk
- Location: tests\chapter5\03_DatadrivenTestingUsingCSVfile_Test.spec.ts:22:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Playwright by Testers Talk✅ - YouTube"
Received: "Playwright by Testers Talk ✅ - YouTube"

Call log:
  - Expect "toHaveTitle" with timeout 1000000ms
    3 × unexpected value ""
    171 × unexpected value "Playwright by Testers Talk ✅ - YouTube"

```

# Test source

```ts
  1  | //Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | import { parse } from 'csv-parse/sync';
  4  | import fs from 'fs';
  5  | import path from 'path';
  6  | 
  7  | type TestRecords = {
  8  |     Skill1: string,
  9  |     Skill2: string,
  10 | }
  11 | 
  12 | const records = parse(
  13 |     fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
  14 |     {
  15 |         columns  :  true,
  16 |         skipEmptyLines  : true
  17 |     }
  18 | ) as TestRecords[];
  19 | 
  20 | for (const record of records) {
  21 |     //write a test
  22 |     test(`Datadriven Test using CSVfile : ${record.Skill1}`,async({page})=>{
  23 |         console.log('Test Execution Started..');
  24 |         //navigate to url
  25 |         await page.goto(`${process.env.GOOGLE_URL}`);
  26 |         //search with keywords
  27 |         await page.getByLabel('Search', { exact: true }).fill(record.Skill1);
  28 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  29 |         //click on playlist
  30 |         await page.getByRole('link', { name: record.Skill1 }).first().click();
  31 |         //validate webpage title
> 32 |         await expect(page).toHaveTitle(record.Skill1 +'✅ - YouTube');
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  33 |     })
  34 | }
  35 | 
```