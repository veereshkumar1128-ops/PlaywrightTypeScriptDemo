//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Dropdown Test',async({page})=>{

//navigate to url
await page.goto('https://x.com/');
await page.getByText("Create account").click();

//select dropdown using value
await page.locator("//*[@id='SELECTOR_1']").selectOption('3');
//select dropdown using visible text
await page.locator("//*[@id='SELECTOR_2']").selectOption('21');
//validate all options
await expect(page.locator("//*[@id='SELECTOR_1']")).toHaveText('JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember');
})