"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
class Player extends character_1.default {
    constructor(name, life, weapon, equipment, race) {
        super(name, life);
        this._weapon = weapon;
        this._equipment = equipment;
        this._race = race;
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
}
exports.default = Player;
