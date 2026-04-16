# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter3\05_Parameterized_Test.spec.ts >> Parameter Testing Playwright by testers talk
- Location: tests\chapter3\05_Parameterized_Test.spec.ts:6:9

# Error details

```
Test timeout of 540000ms exceeded.
```

```
Error: locator.click: Test timeout of 540000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Playwright by testers talk' }).first()
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DPlaywright%2Bby%2Btesters%2Btalk%26sca_esv%3Db23efcb65468375a%26source%3Dhp%26ei%3DgJnfaZTKCMnl2roPgeP6-A0%26iflsig%3DA…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DPlaywright%2Bby%2Btesters%2Btalk%26sca_esv%3Db23efcb65468375a%26source%3Dhp%26ei%3DgJnfaZTKCMnl2roPgeP6-A0%26iflsig%3DA…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 2401:4900:1cb5:fc94:b86e:444a:bf0c:8ee5"
      - text: "Time: 2026-04-15T13:58:35Z"
      - text: "URL: https://www.google.com/search?q=Playwright+by+testers+talk&sca_esv=b23efcb65468375a&source=hp&ei=gJnfaZTKCMnl2roPgeP6-A0&iflsig=AFdpzrgAAAAAad-nkKSz8UCCk_ZobKMW8I0vqtRwwhNi&ved=0ahUKEwiUiu7fgfCTAxXJslYBHYGxHt8Q4dUDCBY&uact=5&oq=Playwright+by+testers+talk&gs_lp=Egdnd3Mtd2l6IhpQbGF5d3JpZ2h0IGJ5IHRlc3RlcnMgdGFsa0jOB1AAWABwAHgAkAEAmAH6AaAB-gGqAQMyLTG4AQPIAQD4AQGYAgCgAgCYAwCSBwCgB06yBwC4BwDCBwDIBwCACAA&sclient=gws-wiz&sei=iJnfaYLmLuaAhuMPm_nbiQw"
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
     |                                                                       ^ Error: locator.click: Test timeout of 540000ms exceeded.
  15 |         //validate webpage title
  16 |         await expect(page).toHaveTitle(searchKeyword + '✅ - YouTube');
  17 |     });
  18 | }   
```