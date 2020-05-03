import { browser } from 'protractor';

export class SignInPage {

    acessarHome() {
        return browser.get(''); // Com o get() é possível informar a rota que desejar para realizar os testes.
    }

}