"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.races = void 0;
const race_1 = __importDefault(require("../models/race"));
exports.races = [];
exports.races.push(new race_1.default('Human', 3, 3, 3));
exports.races.push(new race_1.default('Skeleton', 1, 4, 0));
exports.races.push(new race_1.default('Goblin', 2, 5, 1));
exports.races.push(new race_1.default('Orc', 5, 1, 0));
