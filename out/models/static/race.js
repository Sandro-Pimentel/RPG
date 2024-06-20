"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(raceName, strength, speed, inteligence) {
        this._raceName = raceName;
        this._strength = strength;
        this._speed = speed;
        this._inteligence = inteligence;
    }
    get raceName() {
        return this._raceName;
    }
    get strength() {
        return this._strength;
    }
    get speed() {
        return this._speed;
    }
    get inteligence() {
        return this._inteligence;
    }
}
exports.default = Race;
