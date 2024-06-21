import Weapon from "../models/weapon";

export const weapons: Weapon[] = []
weapons.push(new Weapon('Shortsword', 2, 10, {type: "Melee", arm: "Right-Handed"}))
weapons.push(new Weapon('Longsword', 4, 20, {type: "Melee", arm: "Right-Handed"}))
weapons.push(new Weapon('Battleaxe', 5, 25, {type: "Melee", arm: "Two-Handed"}))
weapons.push(new Weapon('Spear', 3, 15, {type: "Melee", arm: "Two-Handed"}))
weapons.push(new Weapon('Hammer', 10, 50, {type: "Melee", arm: "Two-Handed"}))
