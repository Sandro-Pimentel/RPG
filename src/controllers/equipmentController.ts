import Equipment from "../models/equipment";

export default class EquipmentController {
    private _equipments: Equipment[]

    constructor(equipments: Equipment[]) {
        this._equipments = equipments
    }

    public addEquipment(equipment: Equipment): void {
        this._equipments.push(equipment)
    }

    public findEquipment(searchedEquipment: string): Equipment | null {
        let returnedEquipment: Equipment | null = null
        this._equipments.forEach(equipment => {
            if(searchedEquipment.toLowerCase() === equipment.eqName.toLowerCase()) {
                returnedEquipment = equipment
                return returnedEquipment
            }
        })
        return returnedEquipment
    }

    public get equipments(): ReadonlyArray<Equipment> {
        return this._equipments
    }
}