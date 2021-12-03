import { ElementFinder, $ } from 'protractor';

export class OrderSummary {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('.successMessage');
  }

  public async orderCompleteness(): Promise<String> {
    return this.orderStatus.getText();
  }
}