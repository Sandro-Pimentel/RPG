"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipments = void 0;
const equipment_1 = __importDefault(require("../models/equipment"));
exports.equipments = [];
exports.equipments.push(new equipment_1.default('Basic Helmet', 1, 0, { bodyPart: "Head" }));
exports.equipments.push(new equipment_1.default('Basic Chestplate', 1, 0, { bodyPart: "Chest" }));
exports.equipments.push(new equipment_1.default('Basic Gloves', 1, 0, { bodyPart: "Arms" }));
exports.equipments.push(new equipment_1.default('Basic Pants', 1, 0, { bodyPart: "Legs" }));
exports.equipments.push(new equipment_1.default('Basic Boots', 1, 0, { bodyPart: "Feet" }));
