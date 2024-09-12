"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttackAction {
    constructor(attacked, attacking) {
        this._attacked = attacked;
        this._attacking = attacking;
    }
    //Combat doesn't consider the defense of the attacked
    attack() {
        const avoidPct = this._attacked.stats.evasion;
        let attackResult;
        let willAvoid = Math.round(Math.random() * 100) <= avoidPct;
        if (!willAvoid) {
            let damage = this.doTrueDamage();
            console.log(`${this._attacking.name} dealt ${damage} damage to ${this._attacked.name}`);
            this._attacked.life -= damage;
            if (this._attacked.life <= 0) {
                console.log(`${this._attacked.name} was slain`);
                attackResult = { avoid: false, wasSlain: true };
            }
            else {
                attackResult = { avoid: false, wasSlain: false };
            }
        }
        else {
            console.log(`${this._attacked.name} avoided the attack`);
            attackResult = { avoid: true, wasSlain: false };
        }
        return attackResult;
    }
    get attacked() {
        return this._attacked;
    }
    get attacking() {
        return this._attacking;
    }
    doDamage() {
        let baseDamage = this._attacking.stats.damage;
        const variableDamage = [];
        variableDamage.push(baseDamage, baseDamage + 1, baseDamage - 1, baseDamage - 2);
        let index = Math.floor(Math.random() * variableDamage.length);
        let damageDealt = variableDamage[index];
        return damageDealt;
    }
    doTrueDamage() {
        let damageDealt = this.doDamage();
        let damageTaken = damageDealt - this.attacked.stats.defense;
        return damageTaken;
    }
}
exports.default = AttackAction;
