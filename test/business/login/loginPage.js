const url = 'https://seubarriga.wcaquino.me/'
let txtEmail = '#email';
let txtSenha = '#senha';
let btmEntrar = "//button[contains(text(), 'Entrar')]";
let lblMensagemBenvindo = "Bem vindo";

class LoginPage {

 getUrl(){
return url;
    }

     getTxtEmail(){
        return         txtEmail
    }

    getTxtSenha(){
        return txtSenha;
    }

    getBtmEntrar() {
        return btmEntrar
    }

    getLblMensagemBemVindo(){
        return"//*[starts-with(text(), '" + lblMensagemBenvindo + "')]";
    }

}

module.exports = { LoginPage }