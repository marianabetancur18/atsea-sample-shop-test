import { ElementFinder, $ } from 'protractor';

export class SignUpPage {
  private signUpButton: ElementFinder;

  constructor () {
    
    this.signUpButton = $('.buttonSection > div > button:nth-child(1)');
  }

  public async goToSignUpMenu(): Promise<void> {

    await this.signUpButton.click();
  }
}