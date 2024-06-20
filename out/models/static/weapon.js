"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(wName, damage, weight, weaponType) {
        this._wName = wName;
        this._damage = damage;
        this._weight = weight;
        this._weaponType = weaponType;
    }
    get wName() {
        return this._wName;
    }
    get damage() {
        return this._damage;
    }
    get weight() {
        return this._weight;
    }
    get weaponType() {
        return this._weaponType;
    }
}
exports.default = Weapon;
