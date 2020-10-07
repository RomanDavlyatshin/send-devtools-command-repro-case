const { Builder, By, Key } = require("selenium-webdriver");
async function start() {
  let driver = await (new Builder).forBrowser("chrome").build();
  
  // try to obtain browser version
  const browserVersion = await driver.sendDevToolsCommand('Browser.getVersion', {});
  console.log('browserVersion', browserVersion); // null, but browser version expected

  // try to collect script coverage
  await driver.get("http://google.com");
  await driver.sendDevToolsCommand('Profiler.enable', {});
  await driver.sendDevToolsCommand('Profiler.startPreciseCoverage', {
    callCount: false,
    detailed: true,
  });

  //    do a search on google page, to trigger some JS execution
  const element = await driver.findElement(By.name("q"));
  await element.sendKeys("Selenium", Key.RETURN);

  const coverage = await driver.sendDevToolsCommand('Profiler.takePreciseCoverage', {});
  console.log('coverage', coverage); // null, but coverage data expected

  await driver.sendDevToolsCommand('Profiler.stopPreciseCoverage', {});
}
start();
