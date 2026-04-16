//Import playwright module
import {test,expect} from '@playwright/test';
//write a test
test('Iframes Drag And Drop Test',async({page})=>{

//navigate to url
await page.goto('https://jqueryui.com/droppable/');

//iframe locator
const iframe=page.frameLocator('[class="demo-frame"]');
//drag element , drop element
const dragElement= iframe.locator('[id="draggable"]');
const dropElement= iframe.locator('[id="droppable"]');
await dragElement.dragTo(dropElement);
})