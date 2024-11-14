export default class Passive {
    private _name: string
    private _description: string
    private _ability: Function

    constructor(name: string, description: string, ability: Function) {
        this._name = name
        this._description = description
        this._ability = ability
    }

    public get name() {
        return this._name
    }

    public get description() {
        return this._description
    }

    public get ability() {
        return this._ability
    }
}