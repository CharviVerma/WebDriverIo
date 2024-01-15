const { $ } = require('@wdio/globals')
const Page = require('./page');
const path = 'C:\\Users\\chaverma3\\Downloads\\okay.png';

const {fs} = require('fs');

class LoginPage extends Page {

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
  open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();