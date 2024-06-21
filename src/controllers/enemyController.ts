import Enemy from "../models/enemy";

export default class EnemyController {
    private _enemies: Enemy[]

    constructor(enemies: Enemy[]) {
        this._enemies = enemies
    }

    public addEnemy(enemy: Enemy) {
        this._enemies.push(enemy)
    }

    public findEnemy(searchedEnemy: string, enemiesList: Enemy[]): Enemy | null {
        let returnedEnemy: Enemy | null = null
        enemiesList.forEach(enemy => {
            if(searchedEnemy.toLowerCase() === enemy.name.toLowerCase()) {
                returnedEnemy = enemy
            }
            return returnedEnemy
        })
        return returnedEnemy
    }

    public get enemies() {
        return this._enemies
    }
}