"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipmentController_1 = __importDefault(require("./controllers/equipmentController"));
const equipments_1 = require("./objects/equipments");
const raceController_1 = __importDefault(require("./controllers/raceController"));
const races_1 = require("./objects/races");
const weaponController_1 = __importDefault(require("./controllers/weaponController"));
const weapons_1 = require("./objects/weapons");
const enemyController_1 = __importDefault(require("./controllers/enemyController"));
const enemies_1 = require("./objects/enemies");
const attackAction_1 = __importDefault(require("./actions/attackAction"));
const combat_1 = __importDefault(require("./actions/combat"));
const playerCreation_1 = __importDefault(require("./actions/playerCreation"));
const equipmentController = new equipmentController_1.default(equipments_1.equipments);
const raceController = new raceController_1.default(races_1.races);
const weaponController = new weaponController_1.default(weapons_1.weapons);
const enemyController = new enemyController_1.default(enemies_1.enemies);
const playerCreation = new playerCreation_1.default(weapons_1.weapons, equipments_1.equipments, races_1.races);
const player = playerCreation.createPlayer();
if (player !== undefined) {
    let wins = -1;
    while (player.life > 0) {
        const enemy = enemyController.randomEnemy();
        //console.log(player.life)
        //console.log(player.stats)
        //console.log(player.race.raceName)
        //console.log(player.weapon?.wName)
        //console.log(player.equipment?.eqName)
        const enemysTurn = new attackAction_1.default(player, enemy);
        const playersTurn = new attackAction_1.default(enemy, player);
        const combat = new combat_1.default(playersTurn, enemysTurn);
        combat.combat();
        wins++;
    }
    console.log(`WINS: ${wins}`);
}
