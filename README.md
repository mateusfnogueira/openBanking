Primeiro peço desculpas pela demora, tentei criar uma api que não deu muito isso me atrasou bastante, vou subir a api também caso queiram analisar o código.

Utilizei Vuex para manipulação de estado, utilizei router para cadastramento de rotas, utilizei SCSS para stylizar os componentes pois com ele consigo criar uma arvore e manter os estilos só dentro desse componente.


há dois usúarios cadastrados no db. 

usuario 1 : {
    login : mfn,
    password: 123456
},

usuario 2: {
    login: fn,
    password: 123456
}

para inicializar o db: {
    cd backend
        json-server --watch openBankingUsers.json
}

para inicializar o projeto: {
    cd open-banking
        npm install ou yarn install
            npm run serve
}

