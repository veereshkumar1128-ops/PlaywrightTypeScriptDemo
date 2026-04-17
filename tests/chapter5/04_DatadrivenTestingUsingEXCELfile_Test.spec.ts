// //Import playwright module
// import { test, expect } from '@playwright/test';

// import path from 'path';
// import { readExcelFile } from '../../src/utils/ExcelHelper';

// const filepath=path.join(__dirname,'../../test-data/qa/testdata.xlsx')

// const records=readExcelFile(filepath);

// for (const record of records) {
//     //write a test
//     test(`Datadriven Test using EXCEL file : ${record.Skill2}`,async({page})=>{
//         console.log('Test Execution Started..');
//         //navigate to url
//         await page.goto(`${process.env.GOOGLE_URL}`);
//         //search with keywords
//         await page.getByLabel('Search', { exact: true }).fill(record.Skill2);
//         await page.getByLabel('Search', { exact: true }).press('Enter');
//         //click on playlist
//         await page.getByRole('link', { name: record.Skill2 }).first().click();
//         //validate webpage title
//         await expect(page).toHaveTitle(record.Skill2 +'✅ - YouTube');
//     })
// }
