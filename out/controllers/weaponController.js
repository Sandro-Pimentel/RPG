"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeaponController {
    constructor(weapons) {
        this._weapons = weapons;
    }
    addWeapon(weapon) {
        this._weapons.push(weapon);
    }
    findWeapon(searchedWeapon) {
        let returnedWeapon = null;
        this._weapons.forEach(weapon => {
            if (searchedWeapon.toLowerCase() === weapon.wName.toLowerCase()) {
                returnedWeapon = weapon;
                return returnedWeapon;
            }
        });
        return returnedWeapon;
    }
    get weapons() {
        return this._weapons;
    }
}
exports.default = WeaponController;
