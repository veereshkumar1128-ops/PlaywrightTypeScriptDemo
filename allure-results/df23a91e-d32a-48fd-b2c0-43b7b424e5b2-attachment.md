# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter5\05_PageObjectModel_Test.spec.ts >> Page Object Model Test
- Location: tests\chapter5\05_PageObjectModel_Test.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('APjFqb')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Upload files or images" [ref=e37] [cursor=pointer]:
          - img [ref=e39]
        - combobox "Search" [active] [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e44]:
            - button "Search by voice" [ref=e45] [cursor=pointer]:
              - img [ref=e46]
            - button "Search by image" [ref=e48] [cursor=pointer]:
              - img [ref=e49]
          - link "AI Mode" [ref=e51] [cursor=pointer]:
            - generic [ref=e53]:
              - img [ref=e55]
              - generic [ref=e62]: AI Mode
      - generic [ref=e64]:
        - button "Google Search" [ref=e65] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e66] [cursor=pointer]
  - generic [ref=e69]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e70] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCA
    - link "বাংলা" [ref=e71] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCE
    - link "తెలుగు" [ref=e72] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCI
    - link "मराठी" [ref=e73] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCM
    - link "தமிழ்" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCQ
    - link "ગુજરાતી" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCU
    - link "ಕನ್ನಡ" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCY
    - link "മലയാളം" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCc
    - link "ਪੰਜਾਬੀ" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_3iHP07QVWsya-3Z3BOPSxVmfNrw%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiYn6Ol1vGTAxWSTGwGHQzAGqEQ2ZgBCCg
  - contentinfo [ref=e80]:
    - generic [ref=e81]: India
    - generic [ref=e82]:
      - generic [ref=e83]:
        - link "Advertising" [ref=e84] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e85] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e86] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e87]:
        - link "Privacy" [ref=e88] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e89] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e93] [cursor=pointer]:
          - generic [ref=e94]: Settings
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
  16 |         await this.page.goto(`${process.env.GOOGLE_URL}`);
  17 |     }
  18 |     async searchwithKeywords(keyword:string){
> 19 |         await this.searchTextbox.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |         await this.searchTextbox.fill(keyword);
  21 |         await this.searchTextbox.press('Enter');
  22 |     }
  23 | }
```