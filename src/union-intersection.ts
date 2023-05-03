
// or | hole hobe union type ebong & and hole hobe intersection type


type NoobDeveloper = {
    name: string,
}


// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }


type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'Mid' | 'junior' | 'senior',
    // level: Level,
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Jerin Tasmim',
    expertise: 'Javascript',
    experience: 6,

}

const developer: NextLevelDeveloper = {
    name: 'Next Vai',
    expertise: 'Typescript',
    experience: 3,
    leadershipExperience: 1,
    level: 'Mid'
}

