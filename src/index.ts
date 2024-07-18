import Player from "./models/player"
import EquipmentController from "./controllers/equipmentController"
import { equipments } from "./objects/equipments"
import RaceController from "./controllers/raceController"
import { races } from "./objects/races"
import WeaponController from "./controllers/weaponController"
import { weapons } from "./objects/weapons"
import EnemyController from "./controllers/enemyController"
import { enemies } from "./objects/enemies"
import AttackAction from "./actions/attackAction"
import Combat from "./actions/combat"
import PlayerCreation from "./actions/playerCreation"

const equipmentController = new EquipmentController(equipments)
const raceController = new RaceController(races)
const weaponController = new WeaponController(weapons)
const enemyController = new EnemyController(enemies)

const playerCreation = new PlayerCreation(weapons, equipments, races)
const player = playerCreation.createPlayer()
const enemy = enemyController.randomEnemy()

if(enemy !== null && player !== undefined) {
    console.log(player.stats)
    console.log(player.race.raceName)
    console.log(player.weapon?.wName)
    console.log(player.equipment?.eqName)
    const enemysTurn = new AttackAction(player, enemy)
    const playersTurn = new AttackAction(enemy, player)
    const combat = new Combat(playersTurn, enemysTurn)
    combat.combat()
}
