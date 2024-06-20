export default class Character {
    private _name: string
    private _life: number
    
    constructor(name: string, life: number) {
        this._name = name
        this._life = life
    }

    public get name() {
        return this._name
    }

    public get life() {
        return this._life
    }
}