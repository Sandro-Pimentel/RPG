"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEnemy = exports.enemies = void 0;
const enemy_1 = __importDefault(require("../models/static/enemy"));
const races_1 = __importDefault(require("./races"));
const weapons_1 = __importDefault(require("./weapons"));
exports.enemies = [];
exports.enemies.push(new enemy_1.default(1, 'Carl', 10, (0, weapons_1.default)('Shortsword'), null, (0, races_1.default)('Skeleton')));
exports.enemies.push(new enemy_1.default(1, 'Gary', 10, (0, weapons_1.default)('Battleaxe'), null, (0, races_1.default)('Skeleton')));
exports.enemies.push(new enemy_1.default(1, 'Frederick', 10, (0, weapons_1.default)('Shortsword'), null, (0, races_1.default)('Goblin')));
function findEnemy(searchedEnemy) {
    let returnedEnemy = null;
    exports.enemies.forEach(enemy => {
        console.log(enemy.name);
        if (searchedEnemy.toLowerCase() === enemy.name.toLowerCase()) {
            returnedEnemy = enemy;
        }
    });
    return returnedEnemy;
}
exports.findEnemy = findEnemy;
