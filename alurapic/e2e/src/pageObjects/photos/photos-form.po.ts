import { browser, element, by } from 'protractor';
const path = require('path');
const image = '../../../../src/assets/img/home.jpg';

export class PhotoFormPage {

    navegarParaPhotoForm() {
        return browser.get('/#/p/add');
    }

    carregarImagem() {
        const dirImage = path.resolve(__dirname, image);
        return element(by.css('input[type="file"]')).sendKeys(dirImage);
    }

    comentarImagem(comentario: string){
        return element(by.formControlName('description')).sendKeys(comentario);
    }

    pegarBotaoUpload() {
        return element(by.buttonText('Upload'));
    }
}