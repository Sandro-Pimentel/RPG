const classes = require('./classes')

const statusClasses = (persona, classe) => {
    persona.vida = classes[classe].vida
    persona.dano = classes[classe].dano
    persona.vel = classes[classe].vel

    return persona
}

module.exports = statusClasses;
