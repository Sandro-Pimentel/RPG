import Player from "./models/static/player";
import { findEnemy } from "./objects/enemies";
import findEquipment from "./objects/equipments";
import findRace from "./objects/races";
import findWeapon from "./objects/weapons";

const player = new Player(1, 'Sandro', 10, findWeapon('shortsword'), null, findRace('Human'));
const enemy = findEnemy('Carl');

console.log(player.stats)
console.log(enemy?.stats)
