# Reproduction: sendDevtoolsCommand always returns null

## Prerequisites

1. Selenium server (you can install <https://www.npmjs.com/package/webdriver-manager> globally);

2. Google Chrome version `86.0.4240.75 64 bit`

3. chromedriver.exe version `86.0.4240.22` (<http://chromedriver.storage.googleapis.com/index.html?path=86.0.4240.22/>) added to PATH

## Run

1. `npm install`

2. `npm run start`

3. look at console output

4. Browser version is expected, but only `browserVersion null` is logged

5. Profiler coverage object collected from <https://google.com> is expected, but only `coverage null` is logged
