import { SignInPage } from './signin.po';

describe('O Signin (login) da home', () => {

    let signInPage: SignInPage;

    beforeEach(() => {
        signInPage = new SignInPage;
    });

    it('Deve ir para a home', () => {
        signInPage.acessarHome();
    });

    it('Deve verificar a url', () => {
        expect(signInPage.verificarUrl()).toBe('http://localhost:4200/#/home');
    })

});