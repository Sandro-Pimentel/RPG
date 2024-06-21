import Enemy from "../models/enemy"
import RaceController from "../controllers/raceController"
import { races } from "./races"
import EquipmentController from "../controllers/equipmentController"
import { equipments } from "./equipments"
import WeaponController from "../controllers/weaponController"
import { weapons } from "./weapons"

const raceController = new RaceController(races)
const equipmentController = new EquipmentController(equipments)
const weaponController = new WeaponController(weapons)

export const enemies: Enemy[] = []
enemies.push(new Enemy(1, 'Carl', 10, weaponController.findWeapon('Shortsword'), null, raceController.findRace('Skeleton')))
enemies.push(new Enemy(1, 'Gary', 10, weaponController.findWeapon('Battleaxe'), null, raceController.findRace('Skeleton')))
enemies.push(new Enemy(1, 'Frederick', 10, weaponController.findWeapon('Shortsword'), null, raceController.findRace('Goblin')))
