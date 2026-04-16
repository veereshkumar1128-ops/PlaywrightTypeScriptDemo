//Import playwright module
//import {test,expect} from '@playwright/test';
import {test} from '../../src/fixture/TestFixture';
// import { HomePage } from '../../src/pages/Homepage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';
//write a test
test('Implement Fixture Playwright',async({page,homePage,resultPage,playlistPage,testData})=>{
console.log('Test Execution Startedd...');

//create object of homepage

await homePage.gotoURL();
await homePage.searchwithKeywords(String(testData.Module1TestData?.Skill1));

//create object of resultpage

//resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));

//create object of playlistpage

//playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1)+' ✅ - YouTube')

console.log(`Skill1 : ${String(testData.Module1TestData?.Skill1)}`);
console.log(`Skill2 : ${String(testData.Module1TestData?.Skill2)}`);
console.log(`Skill3 : ${String(testData.Module1TestData?.Skill3)}`);
})