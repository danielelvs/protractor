import { browser, element, by } from "protractor";

export class SignUpPage {
    
    navegarParaSignup() {
        return browser.get('/#/home/signup');
    }

    registrarUsuario(formControlName: string, valor: string) {
        return element(by.formControlName(formControlName)).sendKeys(valor);
    }

    pegarBotaoRegister() {
        return element(by.buttonText('Register'));
    }

    // ELEMENT ALL 
    // imagine que você deseja tratar uma lista de elementos. Com ele, você não conseguiria tratar apenas com element, pois ele retornaria apenas um elemento. 
    // Com element.all, essa tratativa se torna fácil!
}