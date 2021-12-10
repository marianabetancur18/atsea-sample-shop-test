import { browser, $ } from 'protractor';
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
  const EC = protractor.ExpectedConditions;

  it('Then the main page of Atsea Shop was opened', async () => {
    await browser.get('http://ec2-18-189-66-33.us-east-2.compute.amazonaws.com:8080');
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
      await browser.wait(EC.elementToBeClickable($('.successButton > button:nth-child(1)')), 3000);
      await continueShopping.goToShopMenu();
    });

    describe('Sign out of the webpage', () => {
      const signOut: Module.SignOut = new Module.SignOut();

      it("Then the user should be logged out", async () => {
        await signOut.logOut();
        
      });

      describe('Sign in of the webpage', () => {
        const signInPage: Module.SignInPage = new Module.SignInPage();
        const singIn: Module.SignIn = new Module.SignIn();

        it('Then the customer should be sign in', async () => {
          
          await signInPage.goToSignInMenu();
          browser.sleep(5000);
          await singIn.logIn(createUser.userget());
        });
      });
    });
  });
});
