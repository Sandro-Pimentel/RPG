import Prompt from "../io/prompt";
import Equipment from "../models/equipment";
import Player from "../models/player";
import Race from "../models/race";
import Weapon from "../models/weapon";

export default class PlayerCreation {
    private prompt: Prompt
    private weapons: Weapon[]
    private equipments: Equipment[]
    private races: Race[]

    constructor(weapons: Weapon[], equipments: Equipment[], races: Race[]) {
        this.weapons = weapons
        this.equipments = equipments
        this.races = races
        this.prompt = new Prompt()
    }

    createPlayer() {
        let creationDone = false
        while(!creationDone) {
            console.log(`CHARACTER CREATION\n`)
            let name = this.prompt.getText(`Character name: `)
            this.listWeapons()
            let weaponIndex = this.prompt.getNumber(`Choose your weapon: `)
            let weapon = this.weapons[weaponIndex-1]
            this.listEquipments()
            let equipmentIndex = this.prompt.getNumber(`Choose your equipment: `)
            let equipment = this.equipments[equipmentIndex-1]
            this.listRaces()
            let raceIndex = this.prompt.getNumber(`Choose your race: `)
            let race = this.races[raceIndex-1]
            let player = new Player(1, name, 10, weapon, equipment, race)
            return player
        }
    }

    listWeapons(): void {
        let weapons = this.weapons
        if(weapons.length > 0) {
            weapons.forEach((weapon, index) => {
                console.log(`------------------------------------`)
                console.log(`${index+1} - ${weapon.wName}`)
                console.log(`------------------------------------`)
                console.log(`Base damage | ${weapon.damage}`)
                console.log(`Variable damage | ${weapon.damage-2}-${weapon.damage+1}`)
                console.log(`Type | ${weapon.weaponType.type} - ${weapon.weaponType.arm}`)
                console.log(`Weight | ${weapon.weight}`)
                console.log(`------------------------------------\n`)
            })
        }
    }

    listEquipments(): void {
        let equipments = this.equipments
        if(equipments.length > 0) {
            equipments.forEach((equipment, index) => {
                console.log(`------------------------------------`)
                console.log(`${index+1} - ${equipment.eqName}`)
                console.log(`------------------------------------`)
                console.log(`Defense | ${equipment.defense}`)
                console.log(`Body part | ${equipment.equipmentType.bodyPart}`)
                console.log(`Weight | ${equipment.weight}`)
                console.log(`------------------------------------\n`)
            })
        }
    }

    listRaces(): void {
        let races = this.races
        if(races.length > 0) {
            races.forEach((race, index) => {
                console.log(`------------------------------------`)
                console.log(`${index+1} - ${race.raceName}`)
                console.log(`____________________________________`)
                console.log(`Strength | ${race.strength}`)
                console.log(`Speed | ${race.speed}`)
                console.log(`Intelligence | ${race.inteligence}`)
                console.log(`------------------------------------\n`)
            })
        }
    }
}