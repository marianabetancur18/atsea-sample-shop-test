import { ElementFinder, $ } from 'protractor';

export class SignOut {
  private signOutButton: ElementFinder;

  constructor () {
    this.signOutButton = $('.buttonSection > div:nth-child(1) > button:nth-child(2)');
  }

  public async logOut(): Promise<void> {

    await this.signOutButton.click();
  }

}