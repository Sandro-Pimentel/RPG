"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const race_1 = __importDefault(require("../models/race"));
const races = [];
races.push(new race_1.default('Human', 3, 3, 3));
races.push(new race_1.default('Skeleton', 1, 4, 0));
races.push(new race_1.default('Goblin', 2, 5, 1));
races.push(new race_1.default('Orc', 5, 1, 0));
function findRace(searchedRace) {
    let returnedRace = null;
    races.forEach(race => {
        if (searchedRace.toLowerCase() === race.raceName.toLowerCase()) {
            returnedRace = race;
        }
    });
    return returnedRace;
}
exports.default = findRace;
