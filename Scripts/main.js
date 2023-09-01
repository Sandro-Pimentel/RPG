const nome = document.querySelector("#name");
const archer = document.querySelector("#archer");
const knight = document.querySelector("#knight");
const mage = document.querySelector("#mage");
const btnStart = document.querySelector("#btnStart");

class Classe {
    constructor(vida, dano, vel, evasao, lvl=1) {
        this.lvl = lvl
        this.vida = vida
        this.dano = dano
        this.vel = vel
        this.evasao = evasao
    }
    nivel(lvl) {
        this.vida = this.vida + (lvl-1)
        this.dano = this.dano.map((danos) => danos + (lvl-1))
        if(lvl > 1){
            this.dano.push(0, 0)
            this.dano.sort()
        }
        
        return `Parabéns, você atingiu o nível ${lvl}!\n Vida: ${this.vida}\n Dano: ${this.dano}\n Velocidade: ${this.vel}\n Evasão: ${this.evasao}`
    }
}

const mago = new Classe(13, [0, 0, 1, 1, 2, 3], 2, 7)
const arqueiro = new Classe(16, [0, 1, 1, 2, 2], 3, 10)
const cavaleiro = new Classe(20, [0, 0, 1, 2, 2], 1, 5)

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

function causaDano(e){
    let dano = e['dano'][Math.floor(Math.random * e['dano'].length)]
    return dano
}

btnStart.addEventListener("click", () => {
    console.log(inimigos['goblinG'])
    console.log(mago)
    let inimigo = inimigos['goblinG']
    while (mago['vida'] > 0 && inimigo['vida'] > 0){
        if(mago['vel'] >= inimigo['vel']){
            inimigo['vel'] -= causaDano(mago)
        } else {

        }
    }
})