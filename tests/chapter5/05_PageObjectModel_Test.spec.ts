//Import playwright module
import {test,expect} from '@playwright/test';
import { HomePage } from '../../src/pages/Homepage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
//write a test
test('Page Object Model Test',async({page})=>{
console.log('Test Execution Started...');

//create object of homepage
const homePage=new HomePage(page);
await homePage.gotoURL();
await homePage.searchwithKeywords(`${process.env.SEARCH_KEYWORD}`);

//create object of resultpage
const resultPage = new ResultPage(page);
resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

//create object of playlistpage
const playlistPage = new PlaylistPage(page);
playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORD}`+' ✅ - YouTube')
})