"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipment {
    constructor(eqName, defense, weight) {
        this._eqName = eqName;
        this._defense = defense;
        this._weight = weight;
    }
    get eqName() {
        return this._eqName;
    }
    get defense() {
        return this._defense;
    }
    get weight() {
        return this._weight;
    }
}
exports.default = Equipment;
