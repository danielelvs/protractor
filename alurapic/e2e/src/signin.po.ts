import { browser, element, by } from 'protractor';

export class SignInPage {

    acessarHome() {
        return browser.get(''); // Com o get() é possível informar a rota que desejar para realizar os testes.
    }

    verificarUrl() {
        return browser.getCurrentUrl()
    }

    validarLogin() {
        // ELEMENT pega os elementos do DOM. 
        // BY busca pelo o que queremos buscar o elemento
        // SendKeys envia algo para o campo
        element(by.css('input[formControlName="userName"]')).sendKeys(`flavio`);
    }

}