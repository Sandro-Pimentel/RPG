import Player from "./models/player";
import findEquipment from "./objects/equipments";
import findRace from "./objects/races";
import findWeapon from "./objects/weapons";
import { enemyController } from "./objects/enemies";

const player = new Player(1, 'Sandro', 10, findWeapon('shortsword'), null, findRace('Human'));
const enemy = enemyController.findEnemy('Carl', enemyController.enemies);

console.log(player.stats)
console.log(enemy?.stats)
