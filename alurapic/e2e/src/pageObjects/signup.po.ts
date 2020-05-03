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
}