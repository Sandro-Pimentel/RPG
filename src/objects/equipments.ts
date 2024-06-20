import Equipment from "../models/static/equipment";

const equipments: Equipment[] = []
equipments.push(new Equipment('Basic Helmet', 1, 0, {bodyPart: "Head"}));
equipments.push(new Equipment('Basic Chestplate', 1, 0, {bodyPart: "Chest"}));
equipments.push(new Equipment('Basic Gloves', 1, 0, {bodyPart: "Arms"}));
equipments.push(new Equipment('Basic Pants', 1, 0, {bodyPart: "Legs"}));
equipments.push(new Equipment('Basic Boots', 1, 0, {bodyPart: "Feet"}));

export default function findEquipment(searchedEquipment: string): Equipment | null {
    let returnedEquipment = null
    equipments.forEach(equipment => {
        if(searchedEquipment.toLowerCase() === equipment.eqName.toLowerCase()) {
            returnedEquipment = equipment
        }
    })
    return returnedEquipment
}