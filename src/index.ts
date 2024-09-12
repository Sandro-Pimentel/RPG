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

if(player !== undefined) {
    let wins = -1
    while(player.life > 0) {
        const enemy = enemyController.randomEnemy()
        console.log(player.life)
        console.log(player.stats)
        console.log(player.race.raceName)
        console.log(player.weapon?.wName)
        //console.log(player.equipment?.eqName)
        const enemysTurn = new AttackAction(player, enemy)
        const playersTurn = new AttackAction(enemy, player)
        const combat = new Combat(playersTurn, enemysTurn)
        combat.combat()
        wins++
    }
    console.log(`WINS: ${wins}`)
}
