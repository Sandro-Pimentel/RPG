const mostraStatus = require('./mostraStatus')

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
}

module.exports = combate;
