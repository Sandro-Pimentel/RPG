"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weapon_1 = __importDefault(require("../models/weapon"));
const weapons = [];
weapons.push(new weapon_1.default('Shortsword', 2, 10, { type: "Melee", arm: "Right-Handed" }));
weapons.push(new weapon_1.default('Longsword', 4, 20, { type: "Melee", arm: "Right-Handed" }));
weapons.push(new weapon_1.default('Battleaxe', 5, 25, { type: "Melee", arm: "Two-Handed" }));
weapons.push(new weapon_1.default('Spear', 3, 15, { type: "Melee", arm: "Two-Handed" }));
weapons.push(new weapon_1.default('Hammer', 10, 50, { type: "Melee", arm: "Two-Handed" }));
function findWeapon(searchedWeapon) {
    let returnedWeapon = null;
    weapons.forEach(weapon => {
        if (searchedWeapon.toLowerCase() === weapon.wName.toLowerCase()) {
            returnedWeapon = weapon;
        }
    });
    return returnedWeapon;
}
exports.default = findWeapon;
