import { $, ElementFinder } from 'protractor';

export class CreateUser {
  private createUser: ElementFinder;
  private username : string;
  

  constructor () {
    this.createUser = $('.createFormButton > button:nth-child(1)');
    this.username = Math.random().toString(36).substring(7).charAt(0)
  }

  public async createUserOption(): Promise<void> {
    await $('.createFormRow > div:nth-child(1) > div > input').sendKeys(this.username);
    await $('.createFormRow > div:nth-child(2) > div > input').sendKeys('FinalWork');
    await this.createUser.click();
  }

  public async userget(): Promise<string>{
    return this.username;
  }


}

