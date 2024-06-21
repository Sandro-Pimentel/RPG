import Enemy from "../models/enemy";
import findRace from "./races";
import findWeapon from "./weapons";
import EnemyController from "../controllers/enemyController";

const enemies: Enemy[] = []
enemies.push(new Enemy(1, 'Carl', 10, findWeapon('Shortsword'), null, findRace('Skeleton')))
enemies.push(new Enemy(1, 'Gary', 10, findWeapon('Battleaxe'), null, findRace('Skeleton')))
enemies.push(new Enemy(1, 'Frederick', 10, findWeapon('Shortsword'), null, findRace('Goblin')))

export const enemyController = new EnemyController(enemies)
