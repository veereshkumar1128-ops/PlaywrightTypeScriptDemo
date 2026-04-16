# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\08_RunTestBasedOnEnv.spec.ts >> Implement Fixture Playwright
- Location: tests\chapter5\08_RunTestBasedOnEnv.spec.ts:8:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | export class HomePage{
  3  |     readonly page:Page;
  4  |     readonly searchTextbox: Locator;
  5  |     
  6  |     constructor(page:Page){
  7  |         this.page=page;
  8  | 
  9  |         //Elements
  10 |         this.searchTextbox=page.getByTitle('Search')
  11 | 
  12 |     }
  13 | 
  14 |     //Methods
  15 |     async gotoURL(){
  16 |          if (process.env.TEST_EXECUTION_ENV == 'qa') {
> 17 |             await this.page.goto(`${process.env.GOOGLE_URL}`);
     |                             ^ Error: page.goto: Target page, context or browser has been closed
  18 |             console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
  19 |         } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
  20 |             await this.page.goto(`${process.env.GOOGLE_URL}`);
  21 |             console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
  22 |         }
  23 |     }
  24 |     async searchwithKeywords(keyword:string){
  25 |         await this.searchTextbox.click();
  26 |         await this.searchTextbox.fill(keyword);
  27 |         await this.searchTextbox.press('Enter');
  28 |     }
  29 | }
```