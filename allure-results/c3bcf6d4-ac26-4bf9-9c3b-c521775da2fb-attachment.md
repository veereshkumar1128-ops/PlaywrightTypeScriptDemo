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

Expected: "Cypress by Testers ✅ - YouTube"
Received: "https://www.google.com/search?q=Cypress+by+Testers&sca_esv=b81e1b9584c528ab&source=hp&ei=_n7gaZb2F6aRseMP2dv_-Ak&iflsig=AFdpzrgAAAAAaeCNDu-2OuGjfYNIk_eeaPpIn6ixDmGO&ved=0ahUKEwiW7ZTO3PGTAxWmSGwGHdntH58Q4dUDCBY&uact=5&oq=Cypress+by+Testers&gs_lp=Egdnd3Mtd2l6IhJDeXByZXNzIGJ5IFRlc3RlcnMyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwFI-AFQwQFYwQFwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAJGqAIKmANG8QVBn43SLxlDcJIHATGgBwCyBwC4BwDCBwM1LTHIB0CACAA&sclient=gws-wiz&sei=AH_gabK7JuWW5OUP-qmvYQ"

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    4 × unexpected value "Google Search"
    - waiting for" https://www.google.com/search?q=Cypress+by+Testers&sca_esv=b81e1b9584c528ab&source=hp&ei=_n7gaZb2F6aRseMP2dv_-Ak&iflsig=AFdpzrgAAAAAaeCNDu-2OuGjfYNIk_eeaPpIn6ixDmGO&ved=0ahUKEwiW7ZTO3PGTAxWmSGwGHdntH…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DCypress%2Bby%2BTesters%26sca_esv%3Db81e1b9584c528ab%26source%3Dhp%26ei%3D_n7gaZb2F6aRseMP2dv_-Ak%26iflsig%3DAFdpzrgAAAA…"
    - unexpected value "https://www.google.com/search?q=Cypress+by+Testers&sca_esv=b81e1b9584c528ab&source=hp&ei=_n7gaZb2F6aRseMP2dv_-Ak&iflsig=AFdpzrgAAAAAaeCNDu-2OuGjfYNIk_eeaPpIn6ixDmGO&ved=0ahUKEwiW7ZTO3PGTAxWmSGwGHdntH58Q4dUDCBY&uact=5&oq=Cypress+by+Testers&gs_lp=Egdnd3Mtd2l6IhJDeXByZXNzIGJ5IFRlc3RlcnMyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwFI-AFQwQFYwQFwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAJGqAIKmANG8QVBn43SLxlDcJIHATGgBwCyBwC4BwDCBwM1LTHIB0CACAA&sclient=gws-wiz&sei=AH_gabK7JuWW5OUP-qmvYQ"

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