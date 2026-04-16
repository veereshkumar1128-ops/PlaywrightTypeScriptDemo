//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Capture Screenshots in Playwright',async({page})=>{

//navigate to url
await page.goto('https://www.youtube.com/@testerstalk');
//Element screenshot
await page.locator('#page-header-container').screenshot({path:'tests/screenshots/elementscreenshot.png'});

//page screenshot
//await page.screenshot({path:'tests/screenshots/page.png'});

//full page screenshot
//await page.screenshot({path:'tests/screenshots/fullpage.png',fullPage:true})
})