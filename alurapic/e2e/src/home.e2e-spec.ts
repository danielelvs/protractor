import { SignUpPage } from './pageObjects/signup.po';
import { SignInPage } from './pageObjects/signin.po';

describe('O Signin (login) da home', () => {

    let signInPage: SignInPage, signUpPage: SignUpPage;

    beforeEach(() => {
        signInPage = new SignInPage;
        signUpPage = new SignUpPage;
    });

    it('Deve ir para a home', () => {
        signInPage.acessarHome();
    });

    it('Deve verificar a url', () => {
        expect(signInPage.verificarUrl()).toBe('http://localhost:4200/#/home');
    });

    it('Deve fazer login', () => {
        expect(signInPage.pegarInput('userName', 'flavio'));
        expect(signInPage.pegarInput('password', '123'));
        expect(signInPage.pegarBotaoLogin().click());
    });

});