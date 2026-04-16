//Import playwright module
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Skill1: string,
    Skill2: string,
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns  :  true,
        skipEmptyLines  : true
    }
) as TestRecords[];

for (const record of records) {
    //write a test
    test(`Datadriven Test using CSVfile : ${record.Skill1}`,async({page})=>{
        console.log('Test Execution Started..');
        //navigate to url
        await page.goto(`${process.env.GOOGLE_URL}`);
        //search with keywords
        await page.getByLabel('Search', { exact: true }).fill(record.Skill1);
        await page.getByLabel('Search', { exact: true }).press('Enter');
        //click on playlist
        await page.getByRole('link', { name: record.Skill1 }).first().click();
        //validate webpage title
        await expect(page).toHaveTitle(record.Skill1 +' ✅ - YouTube');
    })
}
