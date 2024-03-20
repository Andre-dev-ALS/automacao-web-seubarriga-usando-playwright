
const url = 'https://seubarriga.wcaquino.me/'
let txtEmail = '#email';
let txtSenha = '[data-test=passwd]';
let btmEntrar = "//button[contains(text(), 'Entrar')]";
let lblMensagemBenvindo = "Bem vindo";


class LoginPage {

async     getUrl(){
return url;
    }

    async getTxtEmail(){
        return         txtEmail
    }
}

module.exports = { LoginPage }