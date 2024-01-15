const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = 'C:\\Users\\chaverma3\\Downloads\\okay.png';

const {fs} = require('fs');

class DDPage extends Page {
  

    get selectDD(){
        return $(`//select[@id='dropdown']`)
    }

    async selectDDown(){

        // assert the default option is selected
        let val = (await this.selectDD).getText();
        if (val === "Please select an option") {
            console.log("text is present");
        } else {
            console.log("absent");
        }

        // select by attribute, index and value
        let dd = await this.selectDD;
        dd.selectByAttribute('value', '2');
        await browser.pause(6000);
        dd.selectByIndex(1);
        await browser.pause(6000);
        dd.selectByVisibleText("Option 2");
        await browser.pause(6000);
}
open () {
    return super.open('dropdown');
}
}

module.exports = new DDPage();