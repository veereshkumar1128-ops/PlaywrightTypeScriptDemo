# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter4\07_Checkbox_RadioButton_Test.spec.ts >> Check box Test
- Location: tests\chapter4\07_Checkbox_RadioButton_Test.spec.ts:11:5

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('[class="demo-frame"]').contentFrame().locator('[for="checkbox-2"]')
Expected: checked
Received: unchecked

Call log:
  - Expect "toBeChecked" with timeout 1000000ms
  - waiting for locator('[class="demo-frame"]').contentFrame().locator('[for="checkbox-2"]')
    25 × locator resolved to <label for="checkbox-2" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget">…</label>
       - unexpected value "unchecked"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Radio Button Test', async ({ page }) => {
  4  |     //navigate to url
  5  |     await page.goto('https://jqueryui.com/checkboxradio/');
  6  |     const iframe = page.frameLocator('[class="demo-frame"]')
  7  |     await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
  8  |      await iframe.locator('[for="radio-1"]').check();
  9  |      await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
  10 | });
  11 | test('Check box Test', async ({ page }) => {
  12 |     //navigate to url
  13 |     await page.goto('https://jqueryui.com/checkboxradio/');
  14 |     const iframe = page.frameLocator('[class="demo-frame"]')
  15 |     await expect(iframe.locator('[for="checkbox-2"]')).not.toBeChecked();
  16 |      await iframe.locator('[for="radio-1"]').check();
> 17 |      await expect(iframe.locator('[for="checkbox-2"]')).toBeChecked();
     |                                                         ^ Error: expect(locator).toBeChecked() failed
  18 | });
```