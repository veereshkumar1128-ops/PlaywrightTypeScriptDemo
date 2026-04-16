//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Mouse Actions Test',async({page})=>{

//navigate to url
await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
//left button click
//await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'left'});

//middle button click
//await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'middle'});

//right button click
//await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'right'});

//Mouse Hover
//await page.getByLabel('Search by voice').hover();

//Double click
await page.getByLabel('Search by voice').dblclick();
})