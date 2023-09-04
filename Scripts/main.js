const nome = document.querySelector("#name");
const archer = document.querySelector("#archer");
const knight = document.querySelector("#knight");
const mage = document.querySelector("#mage");
const btnStart = document.querySelector("#btnStart");
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

const vidaHero = document.querySelector("#vidaH")
const vidaVilan = document.querySelector("#vidaV")

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

const personagem = {
    nome: 'Jonas, o Brother',
    classe: 'mago',
    viraClasse: function () {
        switch (this.classe) {
            case 'mago':
                this.vida = mago.vida
                this.dano = mago.dano
                this.vel = mago.vel
                break;

            case 'arqueiro':
                this.vida = arqueiro.vida
                this.dano = arqueiro.dano
                this.vel = arqueiro.vel
                break;

            case 'cavaleiro':
                this.vida = cavaleiro.vida
                this.dano = cavaleiro.dano
                this.vel = cavaleiro.vel
                break;

            default:
                this.vida = cavaleiro.vida
                this.dano = cavaleiro.dano
                this.vel = cavaleiro.vel
                break;
        }
    },
    lvl: 1,
    xp: 0,
    nivel: function (lvl, vida, dano, vel) {
        vida = this.vida + lvl
        vel = this.vel + Math.round(lvl/3)
        dano = this.dano.map((danos) => danos + 1)
        dano.push(0, 0)
        dano.sort()
        return vida, vel, dano
    }

}

btnStart.addEventListener("click", () => {
    if(nome.value.length > 2){
        personagem['nome'] = nome.value
        if(archer.checked === true){
            personagem['classe'] = 'arqueiro'
        } else if(mage.checked === true){
            personagem['classe'] = 'mago'
        } else {
            personagem['classe'] = 'cavaleiro'
        }
        personagem.viraClasse()

        combate(personagem, inimigos.goblinG)
    }
})


const mostraStatus = (persona) => {
    for (let i in persona){
        let tipo = typeof persona[i]
        if(tipo !== 'function'){
            console.log(`${i} = ${persona[i]}`)
        }
    }
}

const ataque = (dano, atacante) => {
    if(dano == 0) {
        if(atacante == personagem) {
            console.log("Você errou o seu ataque!")
        } else {
            console.log("O adversário errou o ataque!")
        }
    }
    else {
        if(atacante == personagem) {
            console.log(`Você acerta seu adversário com ${dano} de dano`)
        } else {
            console.log(`O adversário te acerta com ${dano} de dano`)
        }
    }
}

const causaDano = (ataca, toma) => {
    let dano;
    dano = ataca['dano'][Math.floor(Math.random() * ataca['dano'].length)];
    toma['vida']-= dano;
    ataque(dano, ataca)

}

const combate = (persona, inimigo) => {
    const inicialPersona = persona['vida']
    const inicialInimigo = inimigo['vida']

    vidaHero.innerHTML = '❤' + persona['vida']
    vidaVilan.innerHTML = '❤' + inimigo['vida']

    console.log(`Você se depara com um ${inimigo['nome']}`)

    mostraStatus(persona)
    mostraStatus(inimigo)

    while (persona['vida'] > 0 && inimigo['vida'] > 0){
        if(persona['vel'] >= inimigo['vel']) {
            
            causaDano(persona, inimigo)
            
            if (inimigo['vida'] <= 0){
                console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)
                break;
            }
            
            causaDano(inimigo, persona)

            if (persona['vida'] <= 0){
                console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)
                break;
            }

            console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)
        } else {

            causaDano(inimigo, persona)

            if (persona['vida'] <= 0){
                console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)
                break;
            }

            causaDano(persona, inimigo)

            if (inimigo['vida'] <= 0){
                console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)
                break;
            }

            console.log(`Você: ${persona['vida']} de vida | Inimigo: ${inimigo['vida']} de vida\n`)        
        }
 
    }

    (persona['vida'] <= 0) ? console.log("Você perdeu, obrigado por jogar!") : console.log(`Parabéns ${persona['nome']}! Você venceu obrigado por jogar!`)
    
    persona['vida'] = inicialPersona
    inimigo['vida'] = inicialInimigo
}
