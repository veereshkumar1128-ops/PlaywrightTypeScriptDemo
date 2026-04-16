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

Expected: "undefined ✅ - YouTube"
Received: "https://www.google.com/search?q=undefined&sca_esv=b81e1b9584c528ab&source=hp&ei=8nngaZLtD6-jseMPk4-_-Qk&iflsig=AFdpzrgAAAAAaeCIAoN_XEX1tPxBE9i8pJeGHs-esdZ7&ved=0ahUKEwiSroPm1_GTAxWvUWwGHZPHL58Q4dUDCBY&uact=5&oq=undefined&gs_lp=Egdnd3Mtd2l6Igl1bmRlZmluZWQyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwFI8AFQugFYugFwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAItqAIKmAMt8QUcahpgXNiyC5IHATGgBwCyBwC4BwDCBwM0LTHIByaACAA&sclient=gws-wiz&sei=83ngacz4L8Wo1sQP9NK6oQQ"

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dundefined%26sca_esv%3Db81e1b9584c528ab%26source%3Dhp%26ei%3D8nngaZLtD6-jseMPk4-_-Qk%26iflsig%3DAFdpzrgAAAAAaeCIAoN_XEX1…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dundefined%26sca_esv%3Db81e1b9584c528ab%26source%3Dhp%26ei%3D8nngaZLtD6-jseMPk4-_-Qk%26iflsig%3DAFdpzrgAAAAAaeCIAoN_XEX1…"
    3 × unexpected value "https://www.google.com/search?q=undefined&sca_esv=b81e1b9584c528ab&source=hp&ei=8nngaZLtD6-jseMPk4-_-Qk&iflsig=AFdpzrgAAAAAaeCIAoN_XEX1tPxBE9i8pJeGHs-esdZ7&ved=0ahUKEwiSroPm1_GTAxWvUWwGHZPHL58Q4dUDCBY&uact=5&oq=undefined&gs_lp=Egdnd3Mtd2l6Igl1bmRlZmluZWQyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAAGAMY6gIYjwEyChAuGAMY6gIYjwFI8AFQugFYugFwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAItqAIKmAMt8QUcahpgXNiyC5IHATGgBwCyBwC4BwDCBwM0LTHIByaACAA&sclient=gws-wiz&sei=83ngacz4L8Wo1sQP9NK6oQQ"

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