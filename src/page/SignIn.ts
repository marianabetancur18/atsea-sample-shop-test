import { $, ElementFinder } from 'protractor';

export class SignIn {
  private logInForm: ElementFinder;
  

  constructor () {
    this.logInForm = $('body > div:nth-child(8) > div > div > div > div > form > div.loginFormButton > button > div > span');
  }

  public async logIn(): Promise<void>{
    await $('#username-Username-undefined-38261').sendKeys('FinalWorkuser');
    await $('#password-Password-undefined-17342').sendKeys('FinalWork');
    await this.logInForm.click();
  }
}

