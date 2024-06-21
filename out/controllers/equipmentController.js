"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EquipmentController {
    constructor(equipments) {
        this._equipments = equipments;
    }
    addEquipment(equipment) {
        this._equipments.push(equipment);
    }
    findEquipment(searchedEquipment) {
        let returnedEquipment = null;
        this._equipments.forEach(equipment => {
            if (searchedEquipment.toLowerCase() === equipment.eqName.toLowerCase()) {
                returnedEquipment = equipment;
                return returnedEquipment;
            }
        });
        return returnedEquipment;
    }
    get equipments() {
        return this._equipments;
    }
}
exports.default = EquipmentController;
