const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = 'C:\\Users\\chaverma3\\Downloads\\okay.png';

const {fs} = require('fs');
// import chai from 'chai';

// chai.use(chaiWebdriver);

// Your test code here...


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

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

get checkbox1() {
    return $(`//input[@type='checkbox'][1]`);
}

get checkbox2() {
    return $(`//input[@type='checkbox'][2]`);
}

async checkboxes(){
    let val = (await this.checkbox1).click();
    await browser.pause(3000);
    (await this.checkbox2).click();
    await browser.pause(3000);


    if((await this.checkbox1).isSelected()){
        console.log("is selected");
    }else{
        console.log("not selected");
    }

    await browser.pause(3000);


    if((await this.checkbox2).isSelected()){
        console.log("is selected");
    }else{
        console.log("not selected");
    }

    await browser.pause(3000);
}

get radioButton1() {
    return $(`//input[@type='radio'][1]`);
}
get radioButton2() {
    return $(`//input[@type='radio'][2]`);
}

async radiobtn(){
    (await this.radioButton1).click();
//    if ((await this.radioButton2).isSelected()){
//     console.log("is selected");
//    }else{
//     console.log("not selected");
//    }
    await browser.pause(5000);
    (await this.radioButton1).click();
    await browser.pause(5000);
    (await this.radioButton2).click();
    await browser.pause(5000);

    (await this.radioButton2).scrollIntoView();
}

get alert1(){
    return $(`//button[contains(text(),'Click for JS Alert')]`)
}

async firstPopup(){ 
    await browser.pause(6000);
    var al = (await this.alert1).click()
  //  await al.click();
    await browser.pause(6000);
    if(await browser.isAlertOpen()){
        await browser.sendAlertText("4viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        browser.acceptAlert();
    }else{
        console.log("no alert present");
    }
}


get FileUp(){
    return $(`//input[@id='file-upload']`)
}

async FileUpload(){
    let upload = await this.FileUp;
    await upload.setValue(`${process.cwd()}/charvi.txt`);
    await browser.pause(6000);
}

get UploadBtn(){
    return $(`//input[@id='file-submit']`)
}

async UploadButton(){
    let btn = this.UploadBtn;
    if(btn.isDisplayed()){
        btn.click();
    }else{
        console.log("btn not enabled");
    }

}

get frame(){
    return $(`//iframe[@id='mce_0_ifr']`);
}

get content(){
    return $(`//body[@id='tinymce']`)
}

async IFrame(){
    let f = await this.frame;
    await browser.switchToFrame(f);
    await browser.pause(7000);
}

async contentt(){
    let val = await this.content;
    await val.setValue("vermaa");
    await browser.pause(7000);
}

get windowe(){
    return $(`//a[contains(text(),'Click Here')]`)
}

async windows(){
    let window=await this.windowe;

    await browser.pause(8000);
    await window.click();
    await browser.pause(8000);
    let single=  await browser.getWindowHandle();
  let mul=  await browser.getWindowHandles();
    for(let i=0;i< mul.length;i++){
        await browser.switchToWindow(mul[i]);
        let currentTitle= await browser.getTitle();
        await browser.pause(8000);
    if( await currentTitle=="New Window"){
        await browser.switchToWindow(mul[i]);
        await browser.pause(8000);
        let head=(await $(`//h3[contains(text(),'New Window')]`)).getText();
        break;
    }
}
await browser.switchToWindow(single);
await browser.pause(8000);
// await window.click();
// await browser.pause(8000);
}

get DLoadFile(){
    return $(`//a[contains(text(),'ThisIsMyFilename.textfile')]`);
}

async DownloadFile(){
    let file = await this.DLoadFile;
    await file.click();
    await browser.pause(4000);
    try{
        if(FileSystem.existssync(path)){
            console.log("success");
        }
    }catch(err){
    console.log(err);
}
}

async screenshot(){
    await browser.url("https://the-internet.herokuapp.com/typos");
    await browser.saveScreenshot(path);
}

get date(){
    return $(`//i[@class="glyphicon glyphicon-th"]`);
}

async datePicker(){
    let dp = this.date;
    (await dp).click();
    await browser.pause(4000);
    (await dp).click();
    await browser.pause(4000);
   await browser.back();
   await browser.pause(4000);
   await browser.forward();
   await browser.pause(4000);
   await browser.refresh();
   await browser.pause(4000);
}

get mouse(){
    return $(`//div[@class="figure"][3]`)
}


async MouseHover(){ 
    let mhover=await this.mouse; 
    await browser.pause(2000); 
    mhover.moveTo(); 
    await browser.pause(2000); 
}




    /**
     * overwrite specific options to adapt it to page object
     */

    open () {
        return super.open('hovers');
    }
}

module.exports = new LoginPage();
