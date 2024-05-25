const { Builder, By } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const DEFAULT_DIR = "C:\\Users\\allan\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles";
const PROFILE = "wmtulw9d.STORE";

const CHECK_SPREADSHEET = ["#includeZeroImpressionEntities", 
                           "#includeSponsoredBrandsData",
                           "#includeSponsoredBrandsV4Data",
                           "#includeSponsoredDisplayData", 
                           "#includeSbSearchTermReportData"];

const SELECTORS_1 = ["span.sc-storm-ui-30041982__sc-may1nv-1:nth-child(4) > button:nth-child(1)",
                   ".sc-storm-ui-30041982__sc-amnlzo-2", 
                   "button.sc-storm-ui-30041982__sc-1a042f9-1:nth-child(1)", 
                   ".sc-pcLhl"];

const SELECTORS_2 = ["button.sc-storm-ui-20042007__sc-d3w8xm-0:nth-child(2)",
                     "button.sc-storm-ui-20042007__sc-1rm1drt-0:nth-child(5)", 
                     "button.dQwwDk:nth-child(2)", 
                     ".dQwwDk"];

async function main(){
     runAuto();
}

async function runAuto(){
    var options = new firefox.Options();
    options.setProfile(`${DEFAULT_DIR}\\${PROFILE}`);

    var navegador = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

    await navegador.get("https://advertising.amazon.com.br/bulksheet/HomePage");
    await pathAuto(SELECTORS_1);
    await checksSpreadsheet(CHECK_SPREADSHEET); 
    await pathAuto(SELECTORS_2);
    //await navegador.quit();

    async function checksSpreadsheet(selectors){
        for(let i = 0; i < selectors.length; i++){
            await clickComponent(selectors[i]);
        }
    }

    async function pathAuto(selectors){
        for (let i = 0; i < selectors.length; i++){
            await clickComponent(selectors[i]);
        }
    }

    async function clickComponent(className){
        let component = navegador.findElement(By.css(className));
        await component.click();
    } 
}


main();
