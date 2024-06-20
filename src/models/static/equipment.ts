import EquipmentType from "./equipmentType"

export default class Equipment {
    private _eqName: string
    private _defense: number
    private _weight: number
    private _equipmentType: EquipmentType

    constructor(eqName: string, defense: number, weight: number, equipmentType: EquipmentType) {
        this._eqName = eqName
        this._defense = defense
        this._weight = weight
        this._equipmentType = equipmentType
    }

    public get eqName() {
        return this._eqName
    }

    public get defense() {
        return this._defense
    }

    public get weight() {
        return this._weight
    }

    public get equipmentType() {
        return this._equipmentType
    }
}