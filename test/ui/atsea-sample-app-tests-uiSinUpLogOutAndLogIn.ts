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