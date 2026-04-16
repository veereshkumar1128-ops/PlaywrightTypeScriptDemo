//Import playwright module
import {test,expect} from '@playwright/test';
test.beforeAll(async() =>{
    console.log("Running before all tests...");
})
test.afterAll(async() => {
    console.log("Running after all tests");
})
test.beforeEach(async({page}) =>{
    console.log("Running before each test");
    await page.goto("https://www.google.com/");
})
test.afterEach(async()=>{
    console.log("Running after each test");
})
//write a test
test('Test 1',async({page})=>{
console.log("Running  test 1");
//await page.goto("https://www.google.com/")
})

test('Test 2',async({page})=>{
console.log("Running  test 2"); 
//await page.goto("https://www.google.com/")
})