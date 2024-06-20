import Enemy from "../models/static/enemy";
import findRace from "./races";
import findWeapon from "./weapons";

export const enemies: Enemy[] = []
enemies.push(new Enemy(1, 'Carl', 10, findWeapon('Shortsword'), null, findRace('Skeleton')))
enemies.push(new Enemy(1, 'Gary', 10, findWeapon('Battleaxe'), null, findRace('Skeleton')))
enemies.push(new Enemy(1, 'Frederick', 10, findWeapon('Shortsword'), null, findRace('Goblin')))

export function findEnemy(searchedEnemy: string): Enemy | null {
    let returnedEnemy = null
    enemies.forEach(enemy => {
        console.log(enemy.name)
        if(searchedEnemy.toLowerCase() === enemy.name.toLowerCase()) {
            returnedEnemy = enemy
        }
    })
    return returnedEnemy
}
