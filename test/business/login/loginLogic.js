const { LoginPage } = require('../login/loginPage');
let loginPage = new LoginPage()
const { WebActions } = require('../../Utility/webActions');
let webAction = new WebActions();

class LoginLogic {

    async acessarAplicacao() {
        await global.page.goto(loginPage.getUrl())
    }

    async preencherCampoEmail() {
        await webAction.wright(loginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com', 2000);
    }

    async preencherCampoSenha() {
        await webAction.wright(loginPage.getTxtSenha(), 'automacaoteste', 2000);
    }

    async clicarEmEntrar() {
        await webAction.click(loginPage.getBtmEntrar());
    }

    async validarUsuarioLogado() {
        await webAction.validateText(loginPage.getLblMensagemBemVindo(), 'Bem vindo, André Automatizador!')
    }

}

module.exports = { LoginLogic }