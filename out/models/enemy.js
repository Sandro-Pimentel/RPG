"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
const race_1 = __importDefault(require("./race"));
const stats_1 = __importDefault(require("./stats"));
class Enemy extends character_1.default {
    constructor(level, name, life, weapon, equipment, race) {
        super(name, life);
        this._weapon = weapon;
        this._equipment = equipment;
        if (race === null) {
            this._race = new race_1.default('Human', 3, 3, 3);
        }
        else {
            this._race = race;
        }
        this._level = level;
        this._stats = new stats_1.default(this, this._level);
    }
    get weapon() {
        return this._weapon;
    }
    get equipment() {
        return this._equipment;
    }
    get race() {
        return this._race;
    }
    get level() {
        return this._level;
    }
    get stats() {
        return this._stats;
    }
}
exports.default = Enemy;
