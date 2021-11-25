import { createAsyncThunk} from "@reduxjs/toolkit";
import {
    GET_ALL_MONSTERS,
    ADD_MONSTER,
    MonsterDetails
} from '../types'

// Action created with createAsyncThunk that get all the Monsters
export const getAllMonsters = createAsyncThunk(
    GET_ALL_MONSTERS,
    async () => {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters');
        const json = await response.json();
        return json.data;
    }
);

// Action created with createAsyncThunk that post a new monster
export const addMonster = createAsyncThunk(
    ADD_MONSTER,
    async (monster: MonsterDetails) => {
        const requestOptions = {
            method: 'POST',
            mode: 'no-cors' as RequestMode,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(monster)
        }

        const response = await fetch('http://192.168.1.39:4000/addMonster', requestOptions);
        const json = await response.json();
        return json.data;
    }
);