import EquipmentController from "../controllers/equipmentController"
import Equipment from "../models/equipment"

export const equipments: Equipment[] = []
equipments.push(new Equipment('Basic Helmet', 1, 0, {bodyPart: "Head"}))
equipments.push(new Equipment('Basic Chestplate', 1, 0, {bodyPart: "Chest"}))
equipments.push(new Equipment('Basic Gloves', 1, 0, {bodyPart: "Arms"}))
equipments.push(new Equipment('Basic Pants', 1, 0, {bodyPart: "Legs"}))
equipments.push(new Equipment('Basic Boots', 1, 0, {bodyPart: "Feet"}))
