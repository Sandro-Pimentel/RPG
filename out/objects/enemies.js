"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enemyController = void 0;
const enemy_1 = __importDefault(require("../models/enemy"));
const races_1 = __importDefault(require("./races"));
const weapons_1 = __importDefault(require("./weapons"));
const enemyController_1 = __importDefault(require("../controllers/enemyController"));
const enemies = [];
enemies.push(new enemy_1.default(1, 'Carl', 10, (0, weapons_1.default)('Shortsword'), null, (0, races_1.default)('Skeleton')));
enemies.push(new enemy_1.default(1, 'Gary', 10, (0, weapons_1.default)('Battleaxe'), null, (0, races_1.default)('Skeleton')));
enemies.push(new enemy_1.default(1, 'Frederick', 10, (0, weapons_1.default)('Shortsword'), null, (0, races_1.default)('Goblin')));
exports.enemyController = new enemyController_1.default(enemies);
