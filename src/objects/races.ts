import Race from "../models/race";

const races: Race[] = []
races.push(new Race('Human', 3, 3, 3));
races.push(new Race('Skeleton', 1,4,0));
races.push(new Race('Goblin', 2, 5, 1));
races.push(new Race('Orc', 5, 1, 0));

export default function findRace(searchedRace: string): Race | null {
    let returnedRace = null
    races.forEach(race => {
        if(searchedRace.toLowerCase() === race.raceName.toLowerCase()) {
            returnedRace = race
        }
    })
    return returnedRace
}
