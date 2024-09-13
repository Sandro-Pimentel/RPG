"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("../io/prompt"));
class Combat {
    constructor(attackActionPlayer, attackActionEnemy) {
        this._attackActionPlayer = attackActionPlayer;
        this._attackActionEnemy = attackActionEnemy;
        this.prompt = new prompt_1.default();
    }
    combat() {
        let turn = true;
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed;
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed;
        const playerGoesFirst = enemySpeed <= playerSpeed;
        if (playerGoesFirst) {
            console.log(`Player goes first`);
            let turn = true;
            while (turn) {
                turn = this.playerGoesFirst();
            }
        }
        else {
            console.log(`Enemy goes first`);
            let turn = true;
            while (turn) {
                turn = this.enemyGoesFirst();
            }
        }
    }
    playerGoesFirst() {
        console.log(`Player attacks`);
        const resultAttackPlayer = this._attackActionPlayer.attack();
        this.prompt.getText("");
        if (!resultAttackPlayer.wasSlain) {
            console.log(`Enemy attacks`);
            const resultAttackEnemy = this._attackActionEnemy.attack();
            this.prompt.getText("");
            if (resultAttackEnemy.wasSlain) {
                console.log(`END: YOU LOSE!`);
                return false;
            }
        }
        else {
            console.log(`END: YOU WIN!`);
            return false;
        }
        return true;
    }
    enemyGoesFirst() {
        console.log(`Enemy attacks`);
        const resultAttackEnemy = this._attackActionEnemy.attack();
        this.prompt.getText("");
        if (!resultAttackEnemy.wasSlain) {
            console.log(`Player attacks`);
            const resultAttackPlayer = this._attackActionPlayer.attack();
            this.prompt.getText("");
            if (resultAttackPlayer.wasSlain) {
                console.log(`END: YOU WIN!`);
                return false;
            }
        }
        else {
            console.log(`END: YOU LOSE!`);
            return false;
        }
        return true;
    }
    get attackActionPlayer() {
        return this._attackActionPlayer;
    }
    get attackActionEnemy() {
        return this._attackActionEnemy;
    }
}
exports.default = Combat;
