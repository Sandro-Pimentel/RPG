import AttackAction from "./attackAction";

export default class Combat {
    private _attackActionPlayer: AttackAction
    private _attackActionEnemy: AttackAction

    constructor(attackActionPlayer: AttackAction, attackActionEnemy: AttackAction) {
        this._attackActionPlayer = attackActionPlayer
        this._attackActionEnemy = attackActionEnemy
    }

    public combat() {
        let turn = true
        //importar entrada com ts
        //entrada.recebeNumero()
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed 
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed 
        const playerGoesFirst = enemySpeed <= playerSpeed
        
        if(playerGoesFirst) {
            console.log(`Player goes first`)
            while(turn) {
                console.log(`Player attacks`)
                const resultAttackPlayer = this._attackActionPlayer.attack()
                console.log(resultAttackPlayer)
                if(!resultAttackPlayer.wasSlain){
                    console.log(`Enemy attacks`)
                    const resultAttackEnemy = this._attackActionEnemy.attack()
                    console.log(resultAttackEnemy)
                    if(resultAttackEnemy.wasSlain) {
                        turn = false
                        console.log(`END: YOU LOSE!`)
                    }
                } else {
                    turn = false
                    console.log(`END: YOU WIN!`)
                }
            }
        } else {
            console.log(`Enemy goes first`)
            while(turn) {
                console.log(`Enemy attacks`)
                const resultAttackEnemy = this._attackActionEnemy.attack()
                console.log(resultAttackEnemy)
                if(!resultAttackEnemy.wasSlain) {
                    console.log(`Player attacks`)
                    const resultAttackPlayer = this._attackActionPlayer.attack()
                    console.log(resultAttackPlayer)
                    if(resultAttackPlayer.wasSlain) {
                        turn = false
                        console.log(`END: YOU WIN!`)
                    }
                } else {
                    turn = false
                    console.log(`END: YOU LOSE!`)
                }
            }
        }
    }

    public get attackActionPlayer() {
        return this._attackActionPlayer
    }

    public get attackActionEnemy() {
        return this._attackActionEnemy
    }
}