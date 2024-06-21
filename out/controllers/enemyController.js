"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnemyController {
    constructor(enemies) {
        this._enemies = enemies;
    }
    addEnemy(enemy) {
        this._enemies.push(enemy);
    }
    findEnemy(searchedEnemy) {
        let returnedEnemy = null;
        this._enemies.forEach(enemy => {
            if (searchedEnemy.toLowerCase() === enemy.name.toLowerCase()) {
                returnedEnemy = enemy;
                return returnedEnemy;
            }
        });
        return returnedEnemy;
    }
    get enemies() {
        return this._enemies;
    }
}
exports.default = EnemyController;
