import Enemy from "./enemy"
import Player from "./player"

export default class Stats {
    private _level: number
    private _life: number
    private _damage: number
    private _defense: number
    private _strength: number
    private _speed: number
    private _inteligence: number
    private _weight: number
    private _evasion: number
    private _maxWeight: number

    constructor(character: Enemy | Player, level: number) {
        this._level = level
        this._life = character.life + level-1
        this._strength = character.race.strength + Math.floor(level/3)
        this._inteligence = character.race.inteligence + Math.floor(level/5)
        this._speed = character.race.speed + Math.floor(level/10)
        this._damage = this._strength + 1
        this._defense = 0
        this._weight = 0
        this._maxWeight = this._strength * 10 + 100
        
        if(character.equipment !== null) {
            this._defense = character.equipment.defense
            this._speed-= Math.floor(character.equipment.weight/10)
            this._weight+= character.equipment.weight
        }
        
        if(character.weapon !== null) {
            this._damage = this._strength + character.weapon.damage
            this._speed-= Math.floor(character.weapon.weight/10) - 1
            this._weight+= character.weapon.weight
        }
 
        this._evasion = this._inteligence + this._speed
    }

    public levelUp() {
        this._level++
        this._life++
        if(this._level % 3 == 0){
            this._strength++
            this._damage++
            this._defense++
            this._maxWeight+=10
        }

        if(this._level % 5 == 0) {
            this._inteligence++
        }
        
        if(this._level % 10 == 0){
            this._speed++
            this._evasion++
        }
    }

    public get level() {
        return this._level
    }

    public get life() {
        return this._life
    }

    public get damage() {
        return this._damage
    }

    public get strength() {
        return this._strength
    }

    public get speed() {
        return this._speed
    }

    public get inteligence() {
        return this._inteligence
    }

    public get weight() {
        return this._weight
    }

    public get evasion() {
        return this._evasion
    }

    public get maxWeight() {
        return this._maxWeight
    }
}
