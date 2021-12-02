import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class CheckOutForm {
  private createOrder: ElementFinder;
  private continueShopping: ElementFinder;

  constructor () {
    this.createOrder = $('#root > div > div > div.panel > div.formSection > div > form > div.infoButton > button > div > span');
    this.continueShopping = $('#root > div > div > div.successButton > a > div > span');
  }

  public async createOrderOption(): Promise<String> {
    await $('#firstName-FirstName-undefined-48558').sendKeys('Luisa');
    await $('#lastName-LastName-undefined-5530').sendKeys('Gomez');
    await $('#cardNumber-CardNumber-undefined-28902').sendKeys('236563255');
    await $('#cvv-CVV-undefined-61519').sendKeys('023');
    await $('#expirationDate-MMYY-undefined-21620').sendKeys('12/10');
    await $('#company-Company-undefined-52942').sendKeys('Las vegas company');
    await $('#title-Title-undefined-15845').sendKeys('CEO');
    await $('#address-Address-undefined-31264').sendKeys('Street 33 Rose avenue');
    await $('#city-City-undefined-43339').sendKeys('Los Angeles');
    await this.createOrder.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(this.continueShopping), 5000);
    return $('#root > div > div > div.successMessage').getText();
  }
}












