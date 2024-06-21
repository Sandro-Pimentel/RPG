"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stats {
    constructor(character, level) {
        this._level = level;
        this._life = character.life + level - 1;
        this._strength = character.race.strength + Math.floor(level / 3);
        this._inteligence = character.race.inteligence + Math.floor(level / 5);
        this._speed = character.race.speed + Math.floor(level / 10);
        this._damage = this._strength + 1;
        this._defense = 0;
        this._weight = 0;
        this._maxWeight = this._strength * 10 + 100;
        if (character.equipment !== null) {
            this._defense = character.equipment.defense;
            this._speed -= Math.floor(character.equipment.weight / 10);
            this._weight += character.equipment.weight;
        }
        if (character.weapon !== null) {
            this._damage = this._strength + character.weapon.damage;
            this._speed -= Math.floor(character.weapon.weight / 10) - 1;
            this._weight += character.weapon.weight;
        }
        this._evasion = this._inteligence + this._speed;
    }
    levelUp() {
        this._level++;
        this._life++;
        if (this._level % 3 == 0) {
            this._strength++;
            this._damage++;
            this._defense++;
            this._maxWeight += 10;
        }
        if (this._level % 5 == 0) {
            this._inteligence++;
        }
        if (this._level % 10 == 0) {
            this._speed++;
            this._evasion++;
        }
    }
}
exports.default = Stats;
