import Entrada from "../io/entrada";
import AttackAction from "./attackAction";

export default class Combat {
    private _attackActionPlayer: AttackAction
    private _attackActionEnemy: AttackAction
    private entrada: Entrada

    constructor(attackActionPlayer: AttackAction, attackActionEnemy: AttackAction) {
        this._attackActionPlayer = attackActionPlayer
        this._attackActionEnemy = attackActionEnemy
        this.entrada = new Entrada()
    }

    public combat() {
        let turn = true
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed 
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed 
        const playerGoesFirst = enemySpeed <= playerSpeed
        
        if(playerGoesFirst) {
            console.log(`Player goes first`)
            while(turn) {
                console.log(`Player attacks`)
                const resultAttackPlayer = this._attackActionPlayer.attack()
                this.entrada.receberTexto(``)
                if(!resultAttackPlayer.wasSlain){
                    console.log(`Enemy attacks`)
                    const resultAttackEnemy = this._attackActionEnemy.attack()
                    this.entrada.receberTexto(``)
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
                this.entrada.receberTexto(``)
                if(!resultAttackEnemy.wasSlain) {
                    console.log(`Player attacks`)
                    const resultAttackPlayer = this._attackActionPlayer.attack()
                    this.entrada.receberTexto(``)
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