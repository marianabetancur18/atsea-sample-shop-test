import { ElementFinder, $ } from 'protractor';

export class SignInPage {
  private signInButton: ElementFinder;

  constructor () {
    
    this.signInButton = $('#root > div > div:nth-child(2) > div > div.navUser > div.buttonSection > div > button:nth-child(2) > div > span:nth-child(2)');
  }

  public async goToSignInMenu(): Promise<void> {

    await this.signInButton.click();
  }
}