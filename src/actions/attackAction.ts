import Enemy from "../models/enemy";
import Player from "../models/player";
import ResultAttackType from "../types/resultAttackType";

export default class AttackAction {
    private _attacked: Enemy | Player
    private _attacking: Enemy | Player

    constructor(attacked: Enemy | Player, attacking: Enemy | Player) {
        this._attacked = attacked
        this._attacking = attacking
    }

    //Combat doesn't consider the defense of the attacked
    public doDamage(): number {
        let baseDamage = this._attacking.stats.damage
        const variableDamage = []
        variableDamage.push(baseDamage, baseDamage+1, baseDamage-1, baseDamage-2)
        let index = Math.floor(Math.random() * variableDamage.length)
        let dealtDamage = variableDamage[index]
        return dealtDamage
    }

    public attack(): ResultAttackType {
        const avoidPct = this._attacked.stats.evasion
        let attackResult: ResultAttackType
        let willAvoid = Math.round(Math.random()*100) <= avoidPct
        if(!willAvoid){
            let damage = this.doDamage()
            console.log(`${this._attacking.name} dealt ${damage} damage to ${this._attacked.name}`)
            this._attacked.life-= damage
            if(this._attacked.life <= 0) {
                console.log(`${this._attacked.name} was slain`)
                attackResult = {avoid: false, wasSlain: true}
            } else {
                attackResult = {avoid: false, wasSlain: false}
            }
        } else {
            console.log(`${this._attacked.name} avoided the attack`)
            attackResult = {avoid: true, wasSlain: false}
        }
        return attackResult
    }

    public get attacked() {
        return this._attacked
    }

    public get attacking() {
        return this._attacking
    }
}