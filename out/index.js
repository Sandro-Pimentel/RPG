"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./models/player"));
const equipmentController_1 = __importDefault(require("./controllers/equipmentController"));
const equipments_1 = require("./objects/equipments");
const raceController_1 = __importDefault(require("./controllers/raceController"));
const races_1 = require("./objects/races");
const weaponController_1 = __importDefault(require("./controllers/weaponController"));
const weapons_1 = require("./objects/weapons");
const enemyController_1 = __importDefault(require("./controllers/enemyController"));
const enemies_1 = require("./objects/enemies");
const combat_1 = __importDefault(require("./actions/combat"));
const equipmentController = new equipmentController_1.default(equipments_1.equipments);
const raceController = new raceController_1.default(races_1.races);
const weaponController = new weaponController_1.default(weapons_1.weapons);
const enemyController = new enemyController_1.default(enemies_1.enemies);
const player = new player_1.default(1, 'Sandro', 10, weaponController.findWeapon('shortsword'), null, raceController.findRace('Human'));
const enemy = enemyController.findEnemy('Carl');
if (enemy !== null) {
    const combat = new combat_1.default(player, enemy);
    combat.attack();
    console.log(combat.attack().avoid);
    console.log(combat.attack().wasSlain);
}
