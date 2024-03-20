const { expect } = require('@playwright/test');

class LoginLogic {

    async acessarAplicacao() {
        await global.page.goto('https://seubarriga.wcaquino.me/')
    }

    async preencherCampoEmail() {
        await global.page.locator('#email').fill('emailparatestesautomacao@gmail.com')
    }

    async preencherCampoSenha() {
        await global.page.locator('#senha').fill('automacaoteste')
    }

    async clicarEmEntrar() {
        await global.page.locator("//button[contains(text(), 'Entrar')]").click()
    }

    async validarUsuarioLogado() {
        let lblMensagemBenvindo = await global.page.locator("//*[starts-with(text(), 'Bem vindo')]")
        await expect(lblMensagemBenvindo).toBeVisible()
    }

}

module.exports = { LoginLogic }