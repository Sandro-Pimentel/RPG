"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipment {
    constructor(eqName, defense, weight, equipmentType) {
        this._eqName = eqName;
        this._defense = defense;
        this._weight = weight;
        this._equipmentType = equipmentType;
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
    get equipmentType() {
        return this._equipmentType;
    }
}
exports.default = Equipment;
