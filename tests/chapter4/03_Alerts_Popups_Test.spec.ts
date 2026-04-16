//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Alert Popups Test',async({page})=>{
console.log('Test Execution Started..');

//navigate to url
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


page.once('dialog',dialog=>{
    dialog.accept();
    //dailog.dismiss();
    console.log('Alert message is : ${dialog.message()}');
    console.log('Dialog Type is : ${dialog.type()}');
    
})
//Alert
//await page.getByText('See an example alert',{exact:true}).click(); 

//Popup
await page.getByText('See a sample confirm',{exact:true}).click(); 

})

test('Prompt Popups Test',async({page})=>{
console.log('Test Execution Started..');

//navigate to url
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


page.on('dialog',async(dialog)=>{
    console.log('Dialog Type is : ${dialog.type()}');
    console.log('Alert message is : ${dialog.message()}');
    await dialog.accept("playwright");
    
})
//Prompt Popup
await page.getByText('See a sample prompt',{exact:true}).click(); 

})