import { ElementFinder, $, ExpectedConditions, browser } from 'protractor';

export class addItem {
  private addItemButton: ElementFinder;
  private checkOutButton: ElementFinder;

  constructor () {
    
    this.addItemButton = $('#root > div > div:nth-child(5) > div > div:nth-child(1) > div > div.titleBottom > div.tileAdd > button > div > span:nth-child(2)');
    this.checkOutButton = $('#root > div > div:nth-child(4) > div > div.checkout-button > a > div > span');
  }

  public async goToSignUpMenu(): Promise<void> {

    await this.addItemButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkOutButton), 5000);
    await this.checkOutButton.click();
  }
}

