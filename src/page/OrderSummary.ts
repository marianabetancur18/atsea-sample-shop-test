import { ElementFinder, $ } from 'protractor';

export class OrderSummary {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('#root > div > div > div.successMessage');
  }

  public async orderCompleteness(): Promise<String> {
    return this.orderStatus.getText();
  }
}