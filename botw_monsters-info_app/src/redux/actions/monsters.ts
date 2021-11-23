import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import {
    ALL_MONSTERS,
    ADD_MONSTER,
    GET_MONSTER,
    RESET_MONSTER,
    FILTER_ALL_MONSTERS
} from '../types'

// Fetch all monsters from the API
export const getAllMonsters = (): ThunkAction<void, {}, {}, AnyAction> => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters');
        const json = await response.json();
        
        dispatch({
            type: ALL_MONSTERS,
            payload: json.data
        })
    }
}

// Set the name to filter by all the monsters
export const filterAllMonsters = (filter: string): ThunkAction<void, {}, {}, AnyAction> => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({
            type: FILTER_ALL_MONSTERS,
            payload: filter
        })
    }
}

// Add a new monster
export const addMonster = (): ThunkAction<void, {}, {}, AnyAction> => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters');
        const json = await response.json();

        dispatch({
            type: ADD_MONSTER,
            payload: json.data
        })
    }
}

// Fetch all the information about a Monster from the API
export const getMonster = (name: string): ThunkAction<void, {}, {}, AnyAction> => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/entry/' + name.replace("_", " "));
        const json = await response.json();

        dispatch({
            type: GET_MONSTER,
            payload: json.data
        })
    }
}

// Reset the state of the current monster
export const resetMonster = (): ThunkAction<void, {}, {}, AnyAction> => {
    return async(dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({
            type: RESET_MONSTER
        })
    }
}