const { Builder, By } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const DEFAULT_DIR = "C:\\Users\\allan\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles";
const PROFILE = ["gk7h5rvv.Gomes", "yfw7hgz1.Store", "j2pdj1er.Rocco", "vf7ve5gj.Modas"];           //PROFILES

const SELECTORS = ["span.sc-storm-ui-30041982__sc-may1nv-1:nth-child(4) > button:nth-child(1)",     //BOTAO PERFIL
                   ".sc-storm-ui-30041982__sc-amnlzo-2",                                            //BOTAO SELECIONAR LINGUA
                   "button.sc-storm-ui-30041982__sc-1a042f9-1:nth-child(1)",                        //ESCOLHER LINGUA
                   ".sc-pcLhl",                                                                     //BOTAO APLICAR MODIFICAÇÃO
                   "#includeZeroImpressionEntities",                                                //CHECK BOX
                   "#includeSponsoredBrandsData",                                                   //CHECK BOX 
                   "#includeSponsoredBrandsV4Data",                                                 //CHECK BOX        
                   "#includeSponsoredDisplayData",                                                  //CHECK BOX
                   "#includeSbSearchTermReportData",                                                //CHECK BOX
                   "button.sc-storm-ui-20042007__sc-d3w8xm-0:nth-child(2)",                         //BOTAO PARA ESCOLHER A DATA
                   "button.sc-storm-ui-20042007__sc-1rm1drt-0:nth-child(5)",                        //BOTAO PARA SALVARA DATA SEELCIONADA
                   "button.dQwwDk:nth-child(2)",                                                    //BOTAO SOLICITAR SPREADSHEET
                   ".dQwwDk"];

function main() {
    for(let i = 0; i < PROFILE.length; i++){
        runAuto(PROFILE[i]);
    }
}

async function runAuto(profile) {
    const options = new firefox.Options();
    options.setProfile(`${DEFAULT_DIR}\\${profile}`);

    const browser = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    await browser.manage().setTimeouts({ implicit: 2000 });

    await browser.get("https://advertising.amazon.com.br/bulksheet/HomePage");
    await pathAuto(SELECTORS);
    //await navegador.quit();

    async function pathAuto(selectors) {
        for (let i = 0; i < selectors.length; i++) {
            await clickComponent(selectors[i]);
        }
    }

    async function clickComponent(selectorCSS) {
        await browser.findElement(By.css(selectorCSS)).then(el => el.click());
    }
}

main();
