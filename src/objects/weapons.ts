import Weapon from "../models/static/weapon";

const weapons: Weapon[] = []
weapons.push(new Weapon('Shortsword', 2, 10, {type: "Melee", arm: "Right-Handed"}))
weapons.push(new Weapon('Longsword', 4, 20, {type: "Melee", arm: "Right-Handed"}))
weapons.push(new Weapon('Battleaxe', 5, 25, {type: "Melee", arm: "Two-Handed"}))
weapons.push(new Weapon('Spear', 3, 15, {type: "Melee", arm: "Two-Handed"}))
weapons.push(new Weapon('Hammer', 10, 50, {type: "Melee", arm: "Two-Handed"}))

export default function findWeapon(searchedWeapon: string): Weapon | null {
    let returnedWeapon = null
    weapons.forEach(weapon => {
        if(searchedWeapon.toLowerCase() === weapon.wName.toLowerCase()) {
            returnedWeapon = weapon
        }
    })
    return returnedWeapon
}
