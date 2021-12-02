import { browser, Config } from 'protractor';

const firefoxConfig = {
  browserName: 'firefox',
  firefoxOptions: {
    binay: "/usr/bin/firefox",
    args: ['--headless', '--window-size=1920,1080']
  },
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: {
    binary: "/usr/bin/google-chrome",
    args: ['--headless', '--window-size=1920,1080']
  },
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const multiCapabilities = [chromeConfig, firefoxConfig];


export const config: Config = {
  multiCapabilities,
  framework: "mocha",
  specs: ['../test/ui/**/*.js'],
  seleniumAddress: 'http://0.0.0.0:4444',
  SELENIUM_PROMISE_MANAGER: false,
  mochaOpts: {
    reporter: 'mochawesome-screenshots'
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};