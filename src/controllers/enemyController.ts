import Enemy from "../models/enemy";

export default class EnemyController {
    private _enemies: Enemy[]

    constructor(enemies: Enemy[]) {
        this._enemies = enemies
    }

    public addEnemy(enemy: Enemy): void {
        this._enemies.push(enemy)
    }

    public findEnemy(searchedEnemy: string): Enemy | null {
        let returnedEnemy: Enemy | null = null
        this._enemies.forEach(enemy => {
            if(searchedEnemy.toLowerCase() === enemy.name.toLowerCase()) {
                returnedEnemy = enemy
                return returnedEnemy
            }
        })
        return returnedEnemy
    }

    public get enemies(): ReadonlyArray<Enemy> {
        return this._enemies
    }
}