const { Builder, By } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const DEFAULT_DIR = "C:\\Users\\allan\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles";
const PROFILE = "wmtulw9d.STORE";

async function run() {
    var options = new firefox.Options();
    options.setProfile(`${DEFAULT_DIR}\\${PROFILE}`);

    var navegador = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

        await navegador.manage().setTimeouts({ implicit: 2000 });
        
    await navegador.get("https://sellercentral.amazon.com.br/home");
    const actions = navegador.actions({async: true});
    clickComponent("nav-button-icon sc-nav-kat-icon sc-nav-kat-icon-hamburger sc-nav-kat-icon-small"); //menu
    let anuncios = navegador.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/div[3]/div[3]/div/div[1]/div[2]/div/div[4]"));
    await actions.move({origin: anuncios}).perform();
    let campaing = navegador.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/div[3]/div[3]/div/div[1]/div[2]/div/div[4]/div[2]/div[2]"))
    await actions.move({origin: campaing}).click().perform();
    test("/html/body/div[1]/div[4]/div/div/div[1]/div[3]/div[1]/span/button"); //icon
    let buk_operations = navegador.findElement(By.xpath("/html/body/div[1]/div[4]/div[1]/div/div[1]/div[3]/div[2]/div[2]/div[2]"));
    await buk_operations.click();
    let language = navegador.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/div/div[2]/header/div[3]/span[4]/button"));
    await language.click();
    let select = navegador.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div/div/div[2]/div/div/div[2]/div/button"));
    await select.click();
    //await navegador.quit();

    function clickComponent(className){
        let component = navegador.findElement(By.className(className));
        component.click();
    }

    function moveMouse(){
        
    }
}

run();
