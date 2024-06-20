import Character from "./character";
import Equipment from "./equipment";
import Race from "./race";
import Stats from "./stats";
import Weapon from "./weapon";

export default class Enemy extends Character {
    private _weapon: Weapon | null
    private _equipment: Equipment | null
    private _race: Race
    private _level: number
    private _stats: Stats

    constructor(level: number, name: string, life: number, weapon: Weapon | null, equipment: Equipment | null, race: Race | null) {
        super(name, life)
        this._weapon = weapon
        this._equipment = equipment
        if(race === null) {
            this._race = new Race('Human', 3, 3, 3)
        } else {
            this._race = race
        }
        this._level = level
        this._stats = new Stats(this, this._level)
    }

    public get weapon() {
        return this._weapon
    }

    public get equipment() {
        return this._equipment
    }
    
    public get race() {
        return this._race
    }
    
    public get level() {
        return this._level
    }
    
    public get stats() {
        return this._stats
    }
}