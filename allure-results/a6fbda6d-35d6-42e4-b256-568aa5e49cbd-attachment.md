# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\08_RunTestBasedOnEnv.spec.ts >> Implement Fixture Playwright
- Location: tests\chapter5\08_RunTestBasedOnEnv.spec.ts:8:5

# Error details

```
TypeError: _JsonHelper.loadTestData is not a constructor
```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { ResultPage } from '../pages/ResultPage';
  4  | import { PlaylistPage } from '../pages/PlaylistPage';
  5  | import { TestData } from '../interface/Module1TestData.interface';
  6  | import { loadTestData } from '../utils/JsonHelper';
  7  | 
  8  | /**
  9  |  * author Testers Talk
  10 |  */
  11 | export const test = base.extend<{
  12 |     saveLogs: void;
  13 |     homePage:HomePage;
  14 |     resultPage:ResultPage;
  15 |     playlistPage:PlaylistPage;
  16 |     testData:TestData;
  17 | }>({
  18 |     saveLogs: [async ({ }, use) => {
  19 |         console.log('Global before is running...');
  20 | 
  21 |         await use();
  22 | 
  23 |         console.log('Global afterEach is running...');
  24 |     },
  25 |     { auto: true }],
  26 |     homePage:async ({page},use)=>{
  27 |         const homePage = new HomePage(page);
  28 |         await use(homePage);
  29 |     },
  30 | 
  31 |     resultPage:async ({page},use)=>{
  32 |         const resultPage = new ResultPage(page);
  33 |         await use(resultPage);
  34 |     },
  35 |     playlistPage:async ({page},use)=>{
  36 |         const playlistPage = new PlaylistPage(page);
  37 |         await use(playlistPage);
  38 |     },
  39 |     testData:async ({},use)=>{
> 40 |         const data = new loadTestData();
     |                      ^ TypeError: _JsonHelper.loadTestData is not a constructor
  41 |         await use(data);
  42 |     },
  43 | });
  44 |     export { expect } from '@playwright/test';
```