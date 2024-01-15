const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = 'C:\\Users\\chaverma3\\Downloads\\okay.png';

const {fs} = require('fs');


class InputPage extends Page {


    get inputText(){
        return $(`//input[@type='number']`);
    }

    async setInput(input){
        await this.inputText.click();
        await browser.pause(4000);
        (await this.inputText).setValue(input);
        await browser.pause(3000);
        (await this.inputText).clearValue();
        
    }

     
    open () {
        return super.open('inputs');
    }
}

module.exports = new InputPage();