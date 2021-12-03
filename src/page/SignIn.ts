import { $, ElementFinder, element, by } from 'protractor';

export class SignIn {
  private logInForm: ElementFinder;
  

  constructor () {
    this.logInForm = $('.ReactModalPortal > div> div > div > div > form > div:nth-child(2) > button');
  }

  public async logIn(user:Promise<string>): Promise<void>{
    await element(by.name("username")).sendKeys(user);
    await element(by.name("password")).sendKeys('FinalWork');
    await this.logInForm.click();
  }
}

