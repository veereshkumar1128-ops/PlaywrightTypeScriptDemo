# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\05_PageObjectModel_Test.spec.ts >> Page Object Model Test
- Location: tests\chapter5\05_PageObjectModel_Test.spec.ts:7:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Playwright by Testers Talk ✅ - YouTube"
Received: "https://www.google.com/search?q=Playwright+by+Testers+Talk&sca_esv=b81e1b9584c528ab&source=hp&ei=bnzgac6_EPXm1e8PmIip2A8&iflsig=AFdpzrgAAAAAaeCKfttz7rljrjwBtDhpGZzbch1yIy1s&ved=0ahUKEwjOrqaV2vGTAxV1c_UHHRhECvsQ4dUDCBY&uact=5&oq=Playwright+by+Testers+Talk&gs_lp=Egdnd3Mtd2l6IhpQbGF5d3JpZ2h0IGJ5IFRlc3RlcnMgVGFsazIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEC4YAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPAUhDUDFYMXABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAg6oAgqYAw7xBQK1NAIIhhq_kgcBMaAHALIHALgHAMIHAzMtMcgHDIAIAA&sclient=gws-wiz&sei=b3zgaaywFfzf5OUPmf6RsAE"

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    4 × unexpected value "Google Search"
    - waiting for" https://www.google.com/search?q=Playwright+by+Testers+Talk&sca_esv=b81e1b9584c528ab&source=hp&ei=bnzgac6_EPXm1e8PmIip2A8&iflsig=AFdpzrgAAAAAaeCKfttz7rljrjwBtDhpGZzbch1yIy1s&ved=0ahUKEwjOrqaV2vGTAxV1c…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DPlaywright%2Bby%2BTesters%2BTalk%26sca_esv%3Db81e1b9584c528ab%26source%3Dhp%26ei%3Dbnzgac6_EPXm1e8PmIip2A8%26iflsig%3DA…"
    - unexpected value "https://www.google.com/search?q=Playwright+by+Testers+Talk&sca_esv=b81e1b9584c528ab&source=hp&ei=bnzgac6_EPXm1e8PmIip2A8&iflsig=AFdpzrgAAAAAaeCKfttz7rljrjwBtDhpGZzbch1yIy1s&ved=0ahUKEwjOrqaV2vGTAxV1c_UHHRhECvsQ4dUDCBY&uact=5&oq=Playwright+by+Testers+Talk&gs_lp=Egdnd3Mtd2l6IhpQbGF5d3JpZ2h0IGJ5IFRlc3RlcnMgVGFsazIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEC4YAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPAUhDUDFYMXABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAg6oAgqYAw7xBQK1NAIIhhq_kgcBMaAHALIHALgHAMIHAzMtMcgHDIAIAA&sclient=gws-wiz&sei=b3zgaaywFfzf5OUPmf6RsAE"

```

# Test source

```ts
  1  | import { expect,Locator, Page } from "@playwright/test";
  2  | export class PlaylistPage{
  3  |     readonly page:Page;
  4  |   
  5  |     
  6  |     constructor(page:Page){
  7  |         this.page=page;
  8  | 
  9  |         //Elements
  10 |     
  11 |     }
  12 | 
  13 |     //Methods
  14 |     
  15 |     async validatePageTitle(title:string){
> 16 |         await expect(this.page).toHaveTitle(title);
     |                                 ^ Error: expect(page).toHaveTitle(expected) failed
  17 |     }
  18 | }
```