"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class Combat {
    constructor(attackActionPlayer, attackActionEnemy) {
        this._attackActionPlayer = attackActionPlayer;
        this._attackActionEnemy = attackActionEnemy;
        this.entrada = new entrada_1.default();
    }
    combat() {
        let turn = true;
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed;
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed;
        const playerGoesFirst = enemySpeed <= playerSpeed;
        if (playerGoesFirst) {
            console.log(`Player goes first`);
            while (turn) {
                console.log(`Player attacks`);
                const resultAttackPlayer = this._attackActionPlayer.attack();
                this.entrada.receberTexto(``);
                if (!resultAttackPlayer.wasSlain) {
                    console.log(`Enemy attacks`);
                    const resultAttackEnemy = this._attackActionEnemy.attack();
                    this.entrada.receberTexto(``);
                    if (resultAttackEnemy.wasSlain) {
                        turn = false;
                        console.log(`END: YOU LOSE!`);
                    }
                }
                else {
                    turn = false;
                    console.log(`END: YOU WIN!`);
                }
            }
        }
        else {
            console.log(`Enemy goes first`);
            while (turn) {
                console.log(`Enemy attacks`);
                const resultAttackEnemy = this._attackActionEnemy.attack();
                this.entrada.receberTexto(``);
                if (!resultAttackEnemy.wasSlain) {
                    console.log(`Player attacks`);
                    const resultAttackPlayer = this._attackActionPlayer.attack();
                    this.entrada.receberTexto(``);
                    if (resultAttackPlayer.wasSlain) {
                        turn = false;
                        console.log(`END: YOU WIN!`);
                    }
                }
                else {
                    turn = false;
                    console.log(`END: YOU LOSE!`);
                }
            }
        }
    }
    get attackActionPlayer() {
        return this._attackActionPlayer;
    }
    get attackActionEnemy() {
        return this._attackActionEnemy;
    }
}
exports.default = Combat;
