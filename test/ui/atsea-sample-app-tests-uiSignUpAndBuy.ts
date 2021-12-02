import { browser } from 'protractor';
// import { protractor } from 'protractor/built/ptor';
import * as Module from '../../src/page';

describe('Open the WebPage', () => {

  it('Then the main page of Atsea Shop was opened', async () => {
    await browser.get('http://localhost:8080/');
  });

  describe('Create user', () => {
    const singUpPage: Module.SignUpPage = new Module.SignUpPage();
    const createUser: Module.CreateUser = new Module.CreateUser();
    const continueShopping: Module.ContinueShoppingPage = new Module.ContinueShoppingPage();
    // const EC = protractor.ExpectedConditions;

    it('Then the user should be created', async () => {

      await singUpPage.goToSignUpMenu();
      // await browser.wait(EC.elementToBeClickable(createUser.getCreateUserForm()), 3000);
      await createUser.createUserOption();
      await expect(continueShopping.userCompleteness()).toBe('Congratulations! Your account has been created!');
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

          it('Then the order status should be successful', async () => {
            await expect(orderSummary.orderCompleteness()).toBe('You have successfully placed an order!');
          });
        });
      });
    });
  });
});