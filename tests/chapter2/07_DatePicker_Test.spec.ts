//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Date Picker Test',async({page})=>{

//navigate through Enter Key
await page.goto('https://jqueryui.com/datepicker/');
const iframe=page.frameLocator('[class="demo-frame"]');

//Hard coded Date
//iframe.locator('[id="datepicker"]').fill('12/11/2025');

//Select Dynamic Date
//await iframe.locator('[id="datepicker"]').click();
//await iframe.locator('[class=" ui-datepicker-days-cell-over  ui-datepicker-today"]').click();

//Select past date
// await iframe.locator('[id="datepicker"]').click();
// await iframe.getByTitle('Prev').click();
// await iframe.locator('text="15"').click();

//Select Next Date
await iframe.locator('[id="datepicker"]').click();
await iframe.getByTitle('Next').click();
await iframe.locator('text="20"').click();
})