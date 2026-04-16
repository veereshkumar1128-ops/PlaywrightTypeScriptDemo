//Import playwright module
import {test,expect} from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1:{
        "Skill1":string,
        "Skill2":string
    },
    TestDataSet2:{
         "Skill1":string,
         "Skill2":string
    },
} 
const typedtestdata=testData as TestData;

for(const dataSetName in typedtestdata){
    const skill=typedtestdata[dataSetName as keyof TestData];
    //write a test
test(`Datadriven Test using JSON file : ${skill.Skill1}`,async({page})=>{
console.log('Test Execution Started..');
//navigate to url
await page.goto(`${process.env.GOOGLE_URL}`);
//search with keywords
await page.getByLabel('Search',{exact:true}).fill(skill.Skill1);
await page.getByLabel('Search',{exact:true}).press('Enter');
//click on playlist
await page.getByRole('link', { name: skill.Skill1 }).first().click();
//validate webpage title
await expect(page).toHaveTitle(skill.Skill1+'✅ - YouTube');
})
}
