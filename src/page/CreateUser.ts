import { $, ElementFinder } from 'protractor';

export class CreateUser {
  private createUser: ElementFinder;
  

  constructor () {
    this.createUser = $('.createFormButton > button:nth-child(1)');
  }

  public async createUserOption(): Promise<void> {
    await $('.createFormRow > div:nth-child(1) > div > input').sendKeys(Math.random().toString(36).substring(7).charAt(0));
    await $('.createFormRow > div:nth-child(2) > div > input').sendKeys('FinalWork');
    await this.createUser.click();
  }
}

