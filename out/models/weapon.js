"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(wName, damage, weight) {
        this._wName = wName;
        this._damage = damage;
        this._weight = weight;
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
}
exports.default = Weapon;
