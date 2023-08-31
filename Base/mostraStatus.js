const mostraStatus = (persona) => {
    for (let i in persona){
        let tipo = typeof persona[i]
        if(tipo !== 'function'){
            console.log(`${i} = ${persona[i]}`)
        }
    }
}

module.exports = mostraStatus;