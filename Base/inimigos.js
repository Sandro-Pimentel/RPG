const listaInimigos = ["goblinG", "goblinA", "goblinM", "esqueletoG", "esqueletoA", "esqueletoM"]

const inimigos = {
    goblinG: {
        nome: "Goblin Guerreiro",
        vida: 10,
        dano: [0, 0, 1, 1, 2],
        vel: 1.5,
    },
    goblinA: {
        nome: "Goblin Arqueiro",
        vida: 9,
        dano: [0, 1, 1, 2],
        vel: 3.5,
    },
    goblinM: {
        nome: "Goblin Mago",
        vida: 8,
        dano: [0, 0, 1, 1, 3],
        vel: 2.5,
    },
    esqueletoG: {
        nome: "Esqueleto Guerreiro",
        vida: 9,
        dano: [0, 0, 1, 2, 2],
        vel: 2,
    },
    esqueletoA: {
        nome: "Esqueleto Arqueiro",
        vida: 8,
        dano: [0, 1, 1, 2],
        vel: 4,
    },
    esqueletoM: {
        nome: "Esqueleto Mago",
        vida: 7,
        dano: [0, 0, 1, 2, 3],
        vel: 3,
    },
}

module.exports = {listaInimigos, inimigos};
