import { browser, $, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import * as Module from '../../src/page';
import { del } from 'superagent';
import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';

const host = `http://ec2-18-189-66-33.us-east-2.compute.amazonaws.com:8080`;

describe('Delete customers', () => {
  let response;
  before(async () => {
    response = await del(`${host}/api/customer/`)
      .set('User-Agent', 'agent')
  });
  it('Then the customers should be successfully delated ', () => {
    expect(response.status).to.equal(StatusCodes.NO_CONTENT);
  });
});

describe('Open the WebPage', () => {

  it('Then the main page of Atsea Shop was opened', async () => {
    await browser.get('http://ec2-18-189-66-33.us-east-2.compute.amazonaws.com:8080');
  });

  describe('Create user', () => {
    const singUpPage: Module.SignUpPage = new Module.SignUpPage();
    const createUser: Module.CreateUser = new Module.CreateUser();
    const continueShopping: Module.ContinueShoppingPage = new Module.ContinueShoppingPage();
    const EC = protractor.ExpectedConditions;

    it('Then the user should be created ', async () => {
      await singUpPage.goToSignUpMenu();
      // await browser.wait(EC.elementToBeClickable(createUser.getCreateUserForm()), 3000);
      await createUser.createUserOption();

      await browser.wait(EC.elementToBeClickable($('.successButton > button:nth-child(1)')), 3000);
      await continueShopping.goToShopMenu();
    });

    describe('Add an item to the shopping cart and proceed to checkout', () => {
      const addItem: Module.AddItem = new Module.AddItem();

      it("Then the item should be ready be bought", async () => {
        await addItem.addAndCheckout();
        // await browser.wait(EC.elementToBeClickable(createUser.getCreateUserForm()), 3000);
      });

      describe('Complete order and buy the selected item', () => {
        const checkOutForm: Module.CheckOutForm = new Module.CheckOutForm();

        it('Then the order should be set to be completed', async () => {
          await checkOutForm.createOrderOption();

        });

        describe('Verify correct status of the order placed', () => {
          const orderSummary: Module.OrderSummary = new Module.OrderSummary();

          it(`Then the order status should be successful`, async () => {
            browser.sleep(17000);
            ExpectedConditions.presenceOf(orderSummary.getOrderStatus());
          });
        });
      });
    });
  });
});
