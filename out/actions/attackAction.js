"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttackAction {
    constructor(attacked, attacking) {
        this._attacked = attacked;
        this._attacking = attacking;
    }
    attack() {
        let attackResult;
        let willAvoid = Math.round(Math.random() * 100) <= 4;
        if (!willAvoid) {
            this._attacked.life -= this._attacking.stats.damage;
            if (this._attacked.life <= 0) {
                attackResult = { avoid: false, wasSlain: true };
            }
            else {
                attackResult = { avoid: false, wasSlain: false };
            }
        }
        else {
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
