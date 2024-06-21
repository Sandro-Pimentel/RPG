import Player from "./models/player"
import EquipmentController from "./controllers/equipmentController"
import { equipments } from "./objects/equipments"
import RaceController from "./controllers/raceController"
import { races } from "./objects/races"
import WeaponController from "./controllers/weaponController"
import { weapons } from "./objects/weapons"
import EnemyController from "./controllers/enemyController"
import { enemies } from "./objects/enemies"
import Combat from "./actions/combat"

const equipmentController = new EquipmentController(equipments)
const raceController = new RaceController(races)
const weaponController = new WeaponController(weapons)
const enemyController = new EnemyController(enemies)

const player = new Player(1, 'Sandro', 10, weaponController.findWeapon('shortsword'), null, raceController.findRace('Human'))
const enemy = enemyController.findEnemy('Carl')

if(enemy !== null) {
    const combat = new Combat(player, enemy)
    combat.attack()
    console.log(combat.attack().avoid)
    console.log(combat.attack().wasSlain)
}
