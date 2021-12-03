import { $, ElementFinder, browser, element, by } from 'protractor';

export class CheckOutForm {
  private createOrder: ElementFinder;
  constructor () {
    this.createOrder = $('.infoButton > button:nth-child(2)');

  }

  public async createOrderOption(): Promise<void> {
    await element(by.name("firstName")).sendKeys('l');
    browser.sleep(5000);
    await element(by.name("lastName")).sendKeys('g');
    browser.sleep(5000);
    await element(by.name("cardNumber")).click();
    await element(by.name("cardNumber")).sendKeys('1234567890');
    browser.sleep(5000);
    await element(by.name("cvv")).click();
    await element(by.name("cvv")).sendKeys('654');
    browser.sleep(5000);
    await element(by.name("expirationDate")).click();
    await element(by.name("expirationDate")).sendKeys('22/22');
    browser.sleep(5000);
    await element(by.name("company")).click();
    await element(by.name("company")).sendKeys('Los angeles company');
    browser.sleep(5000);
    await element(by.name("title")).click();
    await element(by.name("title")).sendKeys('CEO');
    browser.sleep(5000);
    await element(by.name("address")).click();
    await element(by.name("address")).sendKeys('street 33 rose avenue');
    browser.sleep(5000);
    await element(by.name("city")).click();
    await element(by.name("city")).sendKeys('los angeles');
    browser.sleep(5000);
    await this.createOrder.click();
  }
}
