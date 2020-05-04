import { PhotoFormPage } from './pageObjects/photos/photos-form.po';
import { PhotoListPage } from './pageObjects/photos/photo-list.po';

describe('A funcionalidade de Photos', () => {

    let photoListPage: PhotoListPage;
    let photoFormPage: PhotoFormPage;
    let comentario: string = 'Foto bonita';

    beforeEach(() => {
        photoListPage = new PhotoListPage;
        photoFormPage = new PhotoFormPage;
    });

    it('Deve navegar para /p/add', () => {
        photoFormPage.navegarParaPhotoForm();
    });

    it('Deve cadastrar imagem', () => {
        photoFormPage.carregarImagem();
        photoFormPage.comentarImagem(comentario);
        photoFormPage.pegarBotaoUpload().click();
    });

    it('Deve buscar a imagem', () => {
        photoListPage.navegarParaPhotoList();
        photoListPage.buscarImagem(comentario);
        photoListPage.pegarImage();
    });


    // Agora sua vez!!!
    // Agora que finalizamos os testes de login, cadastro de usuário, cadastro e busca de imagem, crie seu método referente à tela de detalhes de imagem. Nela, você deverá comentar e excluir uma imagem!

});