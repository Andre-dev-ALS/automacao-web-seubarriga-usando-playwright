const { expect } = require('@playwright/test');
const { LoginPage } = require('../login/loginPage');
let loginPage = new LoginPage()
class LoginLogic {

    async acessarAplicacao() {
        await global.page.goto( loginPage.getUrl())
    }

    async preencherCampoEmail() {
        await global.page.locator(loginPage.getTxtEmail()).fill('emailparatestesautomacao@gmail.com')
    }

    async preencherCampoSenha() {
        await global.page.locator(loginPage.getTxtSenha()).fill('automacaoteste')
    }

    async clicarEmEntrar() {
        await global.page.locator(loginPage.getBtmEntrar()).click()
    }

    async validarUsuarioLogado() {
        let lblMensagemBenvindo = await global.page.locator(loginPage.getLblMensagemBemVindo())
        await expect(lblMensagemBenvindo).toBeVisible()
    }

}

module.exports = { LoginLogic }