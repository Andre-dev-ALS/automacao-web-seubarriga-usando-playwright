const { When, Then, Given } = require('@cucumber/cucumber');
const { LoginLogic } = require('../login/loginLogic');

let loginLogic = new LoginLogic();

Given('que o usuário acessa o site do seubarrigareact', async () => {
    await loginLogic.acessarAplicacao()
})


When('preencho o campo email', async () => {
    await loginLogic.preencherCampoEmail()
})

When('preencho o campo senha', async () => {
    await loginLogic.preencherCampoSenha()
})


When('clico em Entrar', async () => {
    await loginLogic.clicarEmEntrar()
})

Then('o usuário é redirecionado  a tela inicial já logado', async () => {
    await loginLogic.validarUsuarioLogado();
})
