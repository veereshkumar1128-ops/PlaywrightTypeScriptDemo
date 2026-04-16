# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\05_PageObjectModel_Test.spec.ts >> Page Object Model Test
- Location: tests\chapter5\05_PageObjectModel_Test.spec.ts:7:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

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
  10 |         this.searchTextbox=page.locator('APjFqb');
  11 | 
  12 |     }
  13 | 
  14 |     //Methods
  15 |     async gotoURL(){
> 16 |         await this.page.goto(`${process.env.GOOGLEURL}`);
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  17 |     }
  18 |     async searchwithKeywords(keyword:string){
  19 |         await this.searchTextbox.click();
  20 |         await this.searchTextbox.fill(keyword);
  21 |         await this.searchTextbox.press('Enter');
  22 |     }
  23 | }
```