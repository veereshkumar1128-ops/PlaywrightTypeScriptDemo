# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\06_Fixture_Test.spec.ts >> Implement Fixture Playwright
- Location: tests\chapter5\06_Fixture_Test.spec.ts:8:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Cypress by Testers ✅ - YouTube"
Received: "https://www.google.com/search?q=Cypress+by+Testers&sca_esv=66df0cea068f4c14&source=hp&ei=QZDgadubLc2PosUP0rWGgAw&iflsig=AFdpzrgAAAAAaeCeUZWbvdKjPXXUiGWERUcTk8k3J-4-&ved=0ahUKEwibwLyJ7fGTAxXNh6gCHdKaAcAQ4dUDCBY&uact=5&oq=Cypress+by+Testers&gs_lp=Egdnd3Mtd2l6IhJDeXByZXNzIGJ5IFRlc3RlcnNI5wRQpwNYpwNwAXgAkAEAmAGDAaABgwGqAQMwLjG4AQPIAQD4AQGYAgGgAlOoAgrCAgoQABgDGI8BGOoCwgIKEC4YAxiPARjqApgDU_EFKQYGO1LRNueSBwExoAcksgcAuAcAwgcDNS0xyAdCgAgB&sclient=gws-wiz&sei=SZDgacq8JI-i1sQPt7uMoAc"

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DCypress%2Bby%2BTesters%26sca_esv%3D66df0cea068f4c14%26source%3Dhp%26ei%3DQZDgadubLc2PosUP0rWGgAw%26iflsig%3DAFdpzrgAAAA…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DCypress%2Bby%2BTesters%26sca_esv%3D66df0cea068f4c14%26source%3Dhp%26ei%3DQZDgadubLc2PosUP0rWGgAw%26iflsig%3DAFdpzrgAAAA…"
    3 × unexpected value "https://www.google.com/search?q=Cypress+by+Testers&sca_esv=66df0cea068f4c14&source=hp&ei=QZDgadubLc2PosUP0rWGgAw&iflsig=AFdpzrgAAAAAaeCeUZWbvdKjPXXUiGWERUcTk8k3J-4-&ved=0ahUKEwibwLyJ7fGTAxXNh6gCHdKaAcAQ4dUDCBY&uact=5&oq=Cypress+by+Testers&gs_lp=Egdnd3Mtd2l6IhJDeXByZXNzIGJ5IFRlc3RlcnNI5wRQpwNYpwNwAXgAkAEAmAGDAaABgwGqAQMwLjG4AQPIAQD4AQGYAgGgAlOoAgrCAgoQABgDGI8BGOoCwgIKEC4YAxiPARjqApgDU_EFKQYGO1LRNueSBwExoAcksgcAuAcAwgcDNS0xyAdCgAgB&sclient=gws-wiz&sei=SZDgacq8JI-i1sQPt7uMoAc"

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