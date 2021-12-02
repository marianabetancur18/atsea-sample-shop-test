import { ElementFinder, $ } from 'protractor';

export class continueShoppingPage {
  private continueShoppingButton: ElementFinder;

  constructor () {
    
    this.continueShoppingButton = $('body > div:nth-child(6) > div > div > div > div > div.successButton > button > div > span');
  }

  public async goToShopMenu(): Promise<void> {

    await this.continueShoppingButton.click();
  }
}