"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttackAction {
    constructor(attacked, attacking) {
        this._attacked = attacked;
        this._attacking = attacking;
    }
    attack() {
        const avoidPct = this._attacked.stats.evasion;
        let attackResult;
        let willAvoid = Math.round(Math.random() * 100) <= avoidPct;
        if (!willAvoid) {
            console.log(`${this._attacking.name} dealt ${this.attacking.stats.damage} damage to ${this._attacked.name}`);
            this._attacked.life -= this._attacking.stats.damage;
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
}
exports.default = AttackAction;
