import Race from "../models/race";

export default class RaceController {
    private _races: Race[]

    constructor(races: Race[]) {
        this._races = races
    }

    public addRace(race: Race): void {
        this._races.push(race)
    }

    public findRace(searchedRace: string): Race | null {
        let returnedRace: Race | null = null
        this._races.forEach(race => {
            if(searchedRace.toLowerCase() === race.raceName.toLowerCase()) {
                returnedRace = race
                return returnedRace
            }
        })
        return returnedRace
    }

    public get races(): ReadonlyArray<Race> {
        return this._races
    }
}