import { ElementFinder, $} from 'protractor';

export class ContinueShoppingPage {
  private continueShoppingButton: ElementFinder;

  constructor () {
    this.continueShoppingButton = $('.successButton > button:nth-child(1)');
  }

  public async goToShopMenu(): Promise<void> {

    await this.continueShoppingButton.click();
  }


}

