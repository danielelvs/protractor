import { SignInPage } from './signin.po';

describe('O Signin (login) da home', () => {

    let signInPage: SignInPage;

    beforeEach(() => {
        signInPage = new SignInPage;
    });

    it('Deve ir para a home', () => {
        signInPage.acessarHome();
    });

});