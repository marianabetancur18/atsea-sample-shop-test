import { ElementFinder, $ } from 'protractor';

export class OrderSummary {
  private orderStatus: ElementFinder;

  constructor () {
    this.orderStatus = $('.successMessage');
  }
  public getOrderStatus(): ElementFinder {
    return this.orderStatus;
  }
}