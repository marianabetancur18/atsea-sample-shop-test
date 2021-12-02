import { ElementFinder, $ } from 'protractor';

export class signUpPage {
  private signUpButton: ElementFinder;

  constructor () {
    
    this.signUpButton = $('#root > div > div:nth-child(2) > div > div.navUser > div.buttonSection > div > button:nth-child(1) > div > span');
  }

  public async goToSignUpMenu(): Promise<void> {

    await this.signUpButton.click();
  }
}