//RPG de alguma coisa não mto específica pq estou sem ideias

const {listaInimigos, inimigos} = require('./inimigos')
const statusClasses = require('./statusClasses')
const personagem = require('./personagem')
const combate = require('./combate')

console.log(statusClasses(personagem, personagem['classe']))
console.log(inimigos.goblinG,'\n')
//console.log(listaInimigos[Math.floor(Math.random() * listaInimigos.length)])

combate(personagem, inimigos[listaInimigos[Math.floor(Math.random() * listaInimigos.length)]])

//sistema de subir de nível
//mais iminigos
//alterar o sistema de esquiva/erro
//tentar colocar delay
