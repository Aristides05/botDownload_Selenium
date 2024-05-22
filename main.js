const { Builder, Browser, Key, By, Options } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const DEFAULT_DIR = "user-data-dir=C:\\Users\\allan\\AppData\\Local\\Google\\Chrome\\User Data";
PROFILES = ["profile-directory=Profile 3", "profile-directory=Profile 4", "profile-directory=Profile 5", "profile-directory=Profile 7"];            
                //GOMES = Profile 3     /       MODAS = Profile 4       /       ROCCO = Profile 5       /       STORE = Profile 7



async function run(){
    //for (let i = 0; i < PROFILES.length; i++){
        //let i = 1; 
        var options = new chrome.Options();
        options.addArguments("user-data-dir=C:\\Users\\allan\\AppData\\Local\\Google\\Chrome\\User Data");
        options.addArguments("profile-directory=Profile 3");

        let navegador = await new Builder()
            .forBrowser(Browser.CHROME)
            //.setChromeOptions(options)
            .build();

        await navegador.get("https://sellercentral.amazon.com.br/home"); 
    
   // }
}

run();