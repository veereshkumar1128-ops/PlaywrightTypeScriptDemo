import {test,expect} from '@playwright/test';
//write a test
test('Assertions Test',async({page})=>{

//navigate through Enter Key
await page.goto('https://www.youtube.com/');

//Visible,Editable,Enabled ,Empty
await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();

//Verify URL,Title,Text,Count
await page.getByPlaceholder('Search',{exact:true}).first().click();
await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');

await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

//await expect(page).toHaveTitle('playwright by testers talk - Youtube');

await expect(page.locator('[class="ytAttributedStringHost ytAttributedStringWhiteSpacePreWrap"]').first()).toHaveText('Playwright by Testers Talk ✅');
await expect(page.locator('[class="ytAttributedStringHost ytAttributedStringWhiteSpacePreWrap"]')).toHaveCount(38);

})