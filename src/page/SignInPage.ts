import { ElementFinder, $ , browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class SignInPage {
  private signInButton: ElementFinder;
  

  constructor () {
    
    this.signInButton = $('.buttonSection > div > button:nth-child(1)');
  }

  public async goToSignInMenu(): Promise<void> {
    const EC = protractor.ExpectedConditions;
    await browser.wait(EC.elementToBeClickable($('.buttonSection > div > button:nth-child(1)')), 3000);
    await this.signInButton.click();
  }
}