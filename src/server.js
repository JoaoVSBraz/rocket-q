// constantes criadas para armazenar a função require() que serve para importar módulos fundamentais para o funcionamento do servidor
const express = require('express')
const route = require('./route')
const path = require('path')

//constante criada para armazenar a função express() que dá início no servidor
const server = express()

//função que define o ejs como o mecanismo de renderização das páginas
server.set('view engine', 'ejs')

//defindo para o express usar o contéudo da pasta "public" como estático
server.use(express.static("public"))

//por padrão o express procura a pasta views no diretório raiz do projeto, ou seja, irá procurar em .../nlw-together/views
//mas realocamos a pasta views para dentro da pasta src. A função abaixo, portanto, define o caminho que o express deve serguir até chegar a pasta views
//Assim, .set é uma função que define configurações do servidor
//path é uma variável que representa o caminho do projejo enquanto que .join é uma função que unirá diretórios
//__dirname é uma variável global que representa o diretório atual (src)
//Dessa forma, o caminho completo construído fica: ../nlw-together/src/views
server.set('views', path.join(__dirname, 'views'))

//Configurando middleware que fará a ponte do envio dos dados do form para o QuestionController
server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))