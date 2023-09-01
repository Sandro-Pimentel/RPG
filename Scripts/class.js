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

module.exports = {mago, arqueiro, cavaleiro}
// console.log(mago.nivel(2))
// console.log(arqueiro.nivel(2))
// console.log(guerreiro.nivel(2))
// console.log(mago)
// console.log(arqueiro)
// console.log(guerreiro)
