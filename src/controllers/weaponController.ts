import Weapon from "../models/weapon";

export default class WeaponController {
    private _weapons: Weapon[]

    constructor(weapons: Weapon[]) {
        this._weapons = weapons
    }

    public addWeapon(weapon: Weapon): void {
        this._weapons.push(weapon)
    }

    public findWeapon(searchedWeapon: string): Weapon | null {
        let returnedWeapon: Weapon | null = null
        this._weapons.forEach(weapon => {
            if(searchedWeapon.toLowerCase() === weapon.wName.toLowerCase()) {
                returnedWeapon = weapon
                return returnedWeapon
            }
        })
        return returnedWeapon
    }

    public get weapons(): ReadonlyArray<Weapon> {
        return this._weapons
    }
}