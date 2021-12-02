import { ElementFinder, $ } from 'protractor';

export class ContinueShoppingPage {
  private continueShoppingButton: ElementFinder;
  private continueShoppingStatus: ElementFinder;

  constructor () {
    this.continueShoppingStatus = $('body > div:nth-child(7) > div > div > div > div > div.successMessage');
    this.continueShoppingButton = $('body > div:nth-child(6) > div > div > div > div > div.successButton > button > div > span');
  }

  public async goToShopMenu(): Promise<void> {

    await this.continueShoppingButton.click();
  }

  public async userCompleteness(): Promise<String> {
    return this.continueShoppingStatus.getText();
  }
}