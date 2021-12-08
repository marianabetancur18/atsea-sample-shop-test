import { browser, Config } from 'protractor';


const firefoxConfig = {
  browserName: 'firefox',
  //marionette: true,
  'moz:firefoxOptions': {
    args: ['--headless', '--window-size=1920,1080'],
    //binary: "/usr/bin/firefox",
  },
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
  
};


const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--window-size=1920,1080']
  },
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const multiCapabilities = [firefoxConfig, chromeConfig] ;


export const config: Config = {
  multiCapabilities,
  //geckoDriver: '../../node_modules/webdriver-manager/selenium/geckodriver-v0.30.0',
  framework: "mocha",
  specs: ['../test/ui/**/*.js'],
  // seleniumAddress: 'http://0.0.0.0:4444',
  SELENIUM_PROMISE_MANAGER: false,
  //directConnect: true,
  mochaOpts: {
    timeout: 18000,
    reporter: 'mochawesome-screenshots',
    reporterOptions: {
      reportName: "report",
      multiReport: true,
    }
  },
  getPageTimeout: 30000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};