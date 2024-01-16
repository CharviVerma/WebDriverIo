const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page.js');
const SecurePage = require('../pageobjects/secure.page');
const loginPage = require('../pageobjects/login.page.js');
const inputPage = require('../pageobjects/input.js');
const dropdownPage = require('../pageobjects/dropdown.js');
const login = require('../pageobjects/login.js')
const tablePage = require('../pageobjects/table.js')
const fetchData = require('../pageobjects/fetchdataTable.js')


const pages = {
    login: login,
    input: inputPage,
    dropdown: dropdownPage,
    table: tablePage,
    datatable: fetchData

}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await login.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then (/^I enter the input text (\d+)$/, async(text)=>{
    await inputPage.setInput(text);
    
})

Then (/^I select the dropdown text$/, async() =>{
    await dropdownPage.selectDDown();
})

Then (/^I select the checkbox option$/, async() =>{
    await loginPage.checkboxes();
})

Then (/^I select the radio button$/, async() =>{
    await loginPage.radiobtn();
})



Then (/^I check for different alerts$/, async() =>{
    await loginPage.firstPopup();
})

Then (/^I upload the file$/, async() =>{
    await loginPage.FileUpload();
})

Then (/^I click on the upload button$/, async() =>{
    await loginPage.UploadButton();
})


Then (/^I upload the content in the iframe$/, async() =>{
    await loginPage.IFrame();
})

Then (/^I add the content$/, async() =>{
    await loginPage.contentt();
})
 
Then (/^I click on 'click here' and switch to the new window$/, async() =>{
    await loginPage.windows();
})

Then (/^I download the file$/, async() =>{
    await loginPage.DownloadFile();
})

Then (/^I take screenshot$/, async() =>{
    await loginPage.screenshot();
})

Then (/^I set date$/, async() =>{
    await loginPage.datePicker();
})

Then(/^Inventory page should list the (\w+)$/, async(NoOfProducts) =>{
    await tablePage.iterateTable(NoOfProducts);
})

Then(/^Validate all products have valid price$/, async() =>{
    await tablePage.getPrice();
})


Then(/^validate the table cell value$/, async() =>{
    await fetchData.noOfRows();
})