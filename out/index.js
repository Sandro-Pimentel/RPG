"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./models/player"));
const races_1 = __importDefault(require("./objects/races"));
const weapons_1 = __importDefault(require("./objects/weapons"));
const enemies_1 = require("./objects/enemies");
const player = new player_1.default(1, 'Sandro', 10, (0, weapons_1.default)('shortsword'), null, (0, races_1.default)('Human'));
const enemy = enemies_1.enemyController.findEnemy('Carl', enemies_1.enemyController.enemies);
console.log(player.stats);
console.log(enemy === null || enemy === void 0 ? void 0 : enemy.stats);
