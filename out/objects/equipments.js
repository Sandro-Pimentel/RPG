"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __importDefault(require("../models/static/equipment"));
const equipments = [];
equipments.push(new equipment_1.default('Basic Helmet', 1, 0, { bodyPart: "Head" }));
equipments.push(new equipment_1.default('Basic Chestplate', 1, 0, { bodyPart: "Chest" }));
equipments.push(new equipment_1.default('Basic Gloves', 1, 0, { bodyPart: "Arms" }));
equipments.push(new equipment_1.default('Basic Pants', 1, 0, { bodyPart: "Legs" }));
equipments.push(new equipment_1.default('Basic Boots', 1, 0, { bodyPart: "Feet" }));
function findEquipment(searchedEquipment) {
    let returnedEquipment = null;
    equipments.forEach(equipment => {
        if (searchedEquipment.toLowerCase() === equipment.eqName.toLowerCase()) {
            returnedEquipment = equipment;
        }
    });
    return returnedEquipment;
}
exports.default = findEquipment;
