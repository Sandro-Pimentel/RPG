import RaceController from "../controllers/raceController"
import Race from "../models/race"

export const races: Race[] = []
races.push(new Race('Human', 3, 3, 3))
races.push(new Race('Skeleton', 1,4,0))
races.push(new Race('Goblin', 2, 5, 1))
races.push(new Race('Orc', 5, 1, 0))
