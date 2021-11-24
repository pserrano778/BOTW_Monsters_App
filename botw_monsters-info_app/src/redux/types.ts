const ALL_MONSTERS = 'ALL_MONSTERS';
export const GET_ALL_MONSTERS = ALL_MONSTERS + '/GET_ALL_MONSTERS';
export const ADD_MONSTER = 'ADD_MONSTER';
export const GET_MONSTER = ALL_MONSTERS + 'GET_MONSTER';

// Monster
export type Monster = {
    id: number;
    name: string;
    image: string;
}

// MonsterDetails
export type MonsterDetails = {
    id: number;
    name: string;
    image: string;
    description: string;
    locations: [];
    drops: [];
}

export type MonsterState = {
    monster: MonsterDetails;
    isLoading: boolean;
    hasError: boolean;
}

// Monsters
export type Monsters = Monster[];

// State (all monster information and current monster loaded)
export type MonstersState =
{
    monsters: Monsters;
    isLoading: boolean;
    hasError: boolean;
}