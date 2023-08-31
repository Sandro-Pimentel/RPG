personagem = {
    nome: 'Jonas, o Brother',
    classe: 'mago',
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

module.exports = personagem;