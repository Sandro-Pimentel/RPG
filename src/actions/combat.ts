import Prompt from "../io/prompt";
import AttackAction from "./attackAction";

export default class Combat {
    private _attackActionPlayer: AttackAction
    private _attackActionEnemy: AttackAction
    private prompt: Prompt

    constructor(attackActionPlayer: AttackAction, attackActionEnemy: AttackAction) {
        this._attackActionPlayer = attackActionPlayer
        this._attackActionEnemy = attackActionEnemy
        this.prompt = new Prompt()
    }

    public combat() {
        let turn = true
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed 
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed 
        const playerGoesFirst = enemySpeed <= playerSpeed
        
        if(playerGoesFirst) {
            console.log(`Player goes first`)
            let turn = true
            while(turn) {
                turn = this.playerGoesFirst();
            } 
        } else {
            console.log(`Enemy goes first`)
            let turn = true
            while(turn) {
                turn = this.enemyGoesFirst();
            }
        }
    }
    
    private playerGoesFirst(): boolean {
            console.log(`Player attacks`)
            const resultAttackPlayer = this._attackActionPlayer.attack()
            this.prompt.getText("");
            if(!resultAttackPlayer.wasSlain){
                console.log(`Enemy attacks`)
                const resultAttackEnemy = this._attackActionEnemy.attack()
                this.prompt.getText("");
                if(resultAttackEnemy.wasSlain) {
                    console.log(`END: YOU LOSE!`)
                    return false
                    }
            } else {
                    console.log(`END: YOU WIN!`)
                    return false
            }
            return true
        }
        
        private enemyGoesFirst(): boolean {
            console.log(`Enemy attacks`)
            const resultAttackEnemy = this._attackActionEnemy.attack()
            this.prompt.getText("");
            if(!resultAttackEnemy.wasSlain) {
                console.log(`Player attacks`)
                const resultAttackPlayer = this._attackActionPlayer.attack()
                this.prompt.getText("");
                if(resultAttackPlayer.wasSlain) {
                    console.log(`END: YOU WIN!`)
                    return false
                }
            } else {
                console.log(`END: YOU LOSE!`)
                return false
            }
            return true
        }
        
        public get attackActionPlayer() {
            return this._attackActionPlayer
        }
        
        public get attackActionEnemy() {
            return this._attackActionEnemy
        }
}