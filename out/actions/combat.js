"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Combat {
    constructor(attackActionPlayer, attackActionEnemy) {
        this._attackActionPlayer = attackActionPlayer;
        this._attackActionEnemy = attackActionEnemy;
    }
    combat() {
        let turn = true;
        //importar entrada com ts
        //entrada.recebeNumero()
        const enemySpeed = this._attackActionEnemy.attacking.stats.speed;
        const playerSpeed = this._attackActionPlayer.attacking.stats.speed;
        const playerGoesFirst = enemySpeed <= playerSpeed;
        if (playerGoesFirst) {
            console.log(`Player goes first`);
            while (turn) {
                console.log(`Player attacks`);
                const resultAttackPlayer = this._attackActionPlayer.attack();
                console.log(resultAttackPlayer);
                if (!resultAttackPlayer.wasSlain) {
                    console.log(`Enemy attacks`);
                    const resultAttackEnemy = this._attackActionEnemy.attack();
                    console.log(resultAttackEnemy);
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
                console.log(resultAttackEnemy);
                if (!resultAttackEnemy.wasSlain) {
                    console.log(`Player attacks`);
                    const resultAttackPlayer = this._attackActionPlayer.attack();
                    console.log(resultAttackPlayer);
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
