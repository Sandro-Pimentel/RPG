"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name, life) {
        this._name = name;
        this._life = life;
    }
    get name() {
        return this._name;
    }
    get life() {
        return this._life;
    }
}
exports.default = Character;
