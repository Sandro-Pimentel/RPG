import WeaponType from "../types/armType"

export default class Weapon {
    private _wName: string
    private _damage: number
    private _weight: number
    private _weaponType: WeaponType

    constructor(wName: string, damage: number, weight: number, weaponType: WeaponType) {
        this._wName = wName
        this._damage = damage
        this._weight = weight
        this._weaponType = weaponType
    }

    public get wName() {
        return this._wName
    }

    public get damage() {
        return this._damage
    }

    public get weight() {
        return this._weight
    }

    public get weaponType() {
        return this._weaponType
    }
}