import { ElementFinder, $ } from 'protractor';

export class SignOut {
  private signOutButton: ElementFinder;

  constructor () {
    this.signOutButton = $('#root > div > div:nth-child(2) > div > div.navUser > div.buttonSection > div > button > div > span:nth-child(2)');
  }

  public async logOut(): Promise<void> {

    await this.signOutButton.click();
  }

}