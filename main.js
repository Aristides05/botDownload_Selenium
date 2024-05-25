const { Builder, By } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const DEFAULT_DIR = "C:\\Users\\allan\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles";
const PROFILE = "wmtulw9d.STORE";

const SELECTORS = ["span.sc-storm-ui-30041982__sc-may1nv-1:nth-child(4) > button:nth-child(1)", ".sc-storm-ui-30041982__sc-amnlzo-2", "button.sc-storm-ui-30041982__sc-1a042f9-1:nth-child(1)", ".sc-pcLhl", "#includeZeroImpressionEntities", "#includeSponsoredBrandsData", "#includeSponsoredBrandsV4Data", "#includeSponsoredDisplayData", "#includeSbSearchTermReportData", "button.sc-storm-ui-20042007__sc-d3w8xm-0:nth-child(2)", "button.sc-storm-ui-20042007__sc-1rm1drt-0:nth-child(5)", "button.dQwwDk:nth-child(2)", ".dQwwDk"];

async function main() {
    runAuto();
}

async function runAuto() {
    const options = new firefox.Options();
    options.setProfile(`${DEFAULT_DIR}\\${PROFILE}`);

    const browser = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

    await browser.get("https://advertising.amazon.com.br/bulksheet/HomePage");
    await pathAuto(SELECTORS);
    //await navegador.quit();

    async function pathAuto(selectors) {
        for (let i = 0; i < selectors.length; i++) {
            await clickComponent(selectors[i]);
        }
    }

    async function clickComponent(className) {
        await browser.findElement(By.css(className)).then(el => el.click());
    }
}

main();
