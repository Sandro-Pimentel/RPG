"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaceController {
    constructor(races) {
        this._races = races;
    }
    addRace(race) {
        this._races.push(race);
    }
    findRace(searchedRace) {
        let returnedRace = null;
        this._races.forEach(race => {
            if (searchedRace.toLowerCase() === race.raceName.toLowerCase()) {
                returnedRace = race;
                return returnedRace;
            }
        });
        return returnedRace;
    }
    get races() {
        return this._races;
    }
}
exports.default = RaceController;
