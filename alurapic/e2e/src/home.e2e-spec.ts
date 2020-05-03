import { SignUpPage } from './pageObjects/signup.po';
import { SignInPage } from './pageObjects/signin.po';

describe('A tela home', () => {

    let signInPage: SignInPage;
    let signUpPage: SignUpPage;
    let informacoesUsuario = [
        {
            campo: 'email',
            valor: 'daniele@leite.com'
        },
        {
            campo: 'fullName',
            valor: 'Daniele Leite'
        },
        {
            campo: 'userName',
            valor: 'daniele'
        },
        {
            campo: 'password',
            valor: '1234567890'
        }
    ];

    beforeEach(() => {
        signInPage = new SignInPage;
        signUpPage = new SignUpPage;
    });

    it('Deve navegar para o Signup', () => {
        signUpPage.navegarParaSignup();
    });

    it('Deve cadastrar usuario', () => {
        informacoesUsuario.forEach(usuario => {
            signUpPage.registrarUsuario(usuario.campo, usuario.valor);
        });
        expect(signUpPage.pegarBotaoRegister().click());
    });

    // nao mais necessario pois apos cadastro, ele deve ir pra home
    // it('Deve ir para a home', () => {
    //     signInPage.acessarHome();
    // });

    it('Deve verificar a url', () => {
        expect(signInPage.verificarUrl()).toBe('http://localhost:4200/#/home');
    });

    it('Deve fazer login', () => {
        expect(signInPage.pegarInput('userName', 'flavio'));
        expect(signInPage.pegarInput('password', '123'));
        expect(signInPage.pegarBotaoLogin().click());
    });

});