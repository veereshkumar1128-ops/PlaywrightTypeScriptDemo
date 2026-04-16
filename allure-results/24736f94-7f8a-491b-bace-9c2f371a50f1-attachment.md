# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\DatadrivenTestingUsingJSONfile_Test.spec.ts >> Datadriven Test using JSON file : Javascript by Testers Talk
- Location: tests\chapter5\DatadrivenTestingUsingJSONfile_Test.spec.ts:20:5

# Error details

```
Test timeout of 540000ms exceeded.
```

```
Error: locator.click: Test timeout of 540000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Javascript by Testers Talk' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f14e2]:
      - generic [ref=f14e3]:
        - checkbox "I'm not a robot" [ref=f14e7]
        - generic [ref=f14e11]: I'm not a robot
      - generic [ref=f14e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 2401:4900:1cb5:fc94:8b:c584:71e3:bdf7"
      - text: "Time: 2026-04-16T03:36:58Z"
      - text: "URL: https://www.google.com/search?q=Javascript+by+Testers+Talk&sca_esv=81a3370c8de2f367&source=hp&ei=VVngaZqoCaegnesPr4P68Ao&iflsig=AFdpzrgAAAAAaeBnZd7lMMVpBt7bzr5ejS0whoU-LGWq&ved=0ahUKEwjapu7YuPGTAxUnUGcHHa-BHq4Q4dUDCBY&uact=5&oq=Javascript+by+Testers+Talk&gs_lp=Egdnd3Mtd2l6IhpKYXZhc2NyaXB0IGJ5IFRlc3RlcnMgVGFsa0hiUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=V1ngaczQN9aL9u8P7PrO6AQ"
```

# Test source

```ts
  1  | //Import playwright module
  2  | import {test,expect} from '@playwright/test';
  3  | import testData from '../../test-data/qa/testdata.json';
  4  | 
  5  | type TestData = {
  6  |     TestDataSet1:{
  7  |         "Skill1":string,
  8  |         "Skill2":string
  9  |     },
  10 |     TestDataSet2:{
  11 |          "Skill1":string,
  12 |          "Skill2":string
  13 |     },
  14 | } 
  15 | const typedtestdata=testData as TestData;
  16 | 
  17 | for(const dataSetName in typedtestdata){
  18 |     const skill=typedtestdata[dataSetName as keyof TestData];
  19 |     //write a test
  20 | test(`Datadriven Test using JSON file : ${skill.Skill1}`,async({page})=>{
  21 | console.log('Test Execution Started..');
  22 | //navigate to url
  23 | await page.goto(`${process.env.GOOGLE_URL}`);
  24 | //search with keywords
  25 | await page.getByLabel('Search',{exact:true}).fill(skill.Skill1);
  26 | await page.getByLabel('Search',{exact:true}).press('Enter');
  27 | //click on playlist
> 28 | await page.getByRole('link', { name: skill.Skill1 }).first().click();
     |                                                              ^ Error: locator.click: Test timeout of 540000ms exceeded.
  29 | //validate webpage title
  30 | await expect(page).toHaveTitle(skill.Skill1+'✅ - YouTube');
  31 | })
  32 | }
  33 | 
```