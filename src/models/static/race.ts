export default class Race {
    private _raceName: string
    private _strength: number
    private _speed: number
    private _inteligence: number

    constructor(raceName: string, strength: number, speed: number, inteligence: number) {
        this._raceName = raceName
        this._strength = strength
        this._speed = speed
        this._inteligence = inteligence
    }

    public get raceName() {
        return this._raceName
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
}