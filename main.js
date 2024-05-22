const { Builder, Browser, Key, By, Options } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options();

options.addArguments("user-data-dir=C:\\Users\\allan\\AppData\\Local\\Google\\Chrome\\User Data");
options.addArguments("profile-directory=Profile 5");


async function run(){
    navegador = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();

    navegador.get("https://www.youtube.com/"); 
}

run();