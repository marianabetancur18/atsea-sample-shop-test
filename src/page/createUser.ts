import { $, ElementFinder } from 'protractor';

export class createUser {
  private createUser: ElementFinder;
  

  constructor () {
    this.createUser = $('body > div:nth-child(6) > div > div > div > div > form > div.createFormButton > button > div > span');
  }

  public async createUserOption(): Promise<String> {
    await $('#username-ChooseauserID-undefined-48940').sendKeys('FinalWorkuser');
    await $('#password-Chooseapassword-undefined-47871').sendKeys('FinalWork');
    await this.createUser.click();
    return $('body > div:nth-child(6) > div > div > div > div > div.successMessage').getText();
  }
}

