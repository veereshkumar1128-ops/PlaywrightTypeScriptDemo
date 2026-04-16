# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter3\05_Parameterized_Test.spec.ts >> Parameter Testing Cypress by testers talk
- Location: tests\chapter3\05_Parameterized_Test.spec.ts:6:9

# Error details

```
Test timeout of 540000ms exceeded.
```

```
Error: locator.click: Test timeout of 540000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Cypress by testers talk' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f30e2]:
      - generic [ref=f30e3]:
        - checkbox "I'm not a robot" [ref=f30e7]
        - generic [ref=f30e11]: I'm not a robot
      - generic [ref=f30e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 2401:4900:1cb5:fc94:b86e:444a:bf0c:8ee5"
      - text: "Time: 2026-04-15T14:34:32Z"
      - text: "URL: https://www.google.com/search?q=Cypress+by+testers+talk&sca_esv=55e9f3c856495c1e&source=hp&ei=86HfadmRJ_a4qtsPwIvygAY&iflsig=AFdpzrgAAAAAad-wA4touu6vj_a3quOJMv_dYK4gxJpP&ved=0ahUKEwiZ17_nifCTAxV2nGoFHcCFHGAQ4dUDCBo&uact=5&oq=Cypress+by+testers+talk&gs_lp=Egdnd3Mtd2l6IhdDeXByZXNzIGJ5IHRlc3RlcnMgdGFsa0gpUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=9qHfae7tDt2G7NYPnt-24Qk"
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