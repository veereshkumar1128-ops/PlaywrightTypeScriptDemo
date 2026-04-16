//Import playwright module
//import {test,expect} from '@playwright/test';
import {test} from '../../src/fixture/TestFixture';

//write a test
test('Implement Fixture Playwright',async({page,homePage,resultPage,playlistPage})=>{
console.log('Test Execution Startedd...');

await homePage.gotoURL();
await homePage.searchwithKeywords(`${process.env.SEARCH_KEYWORD}`);

//resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

//playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORD}`+' ✅ - YouTube')

console.log('Test Execution Endedd...');
})