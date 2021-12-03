import { $, ElementFinder, browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class CheckOutForm {
  private createOrder: ElementFinder;
  
 
  

  constructor () {
    this.createOrder = $('.infoButton > button:nth-child(2)');

  }

  public async createOrderOption(): Promise<void> {
    
    // await element(by.name("firstname")).sendkeys('l');
    // browser.sleep(5000);
    // const ec = protractor.expectedconditions;
    // await element(by.name("lastname")).sendkeys('g');
    // await browser.wait(ec.elementtobeclickable(element(by.name("cardnumber"))), 3000);
    // await element(by.name("cardnumber")).sendkeys('2');
    // //await element(by.name("cvv")).sendkeys('0');
    // //await $('.infosection > form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > input').sendkeys('12/10');
    // //await $('.infosection > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input').sendkeys('las vegas company');
    // //browser.sleep(5000);
    // //await element(by.name("title")).sendkeys('ceo');
    // //browser.sleep(5000);
    // //await element(by.name("address")).sendkeys('street 33 rose avenue');
    // //browser.sleep(5000);
    // //await element(by.name("city")).sendkeys('los angeles');
    // //browser.sleep(5000);
    await this.createOrder.click();
  }





  
}












