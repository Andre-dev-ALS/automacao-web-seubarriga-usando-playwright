
 #language: pt
 
Funcionalidade: login 

@login
    Cenário: Realizar login com sucesso
        Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
        Quando clico em Entrar
        Então o usuário é redirecionado  a tela inicial já logado