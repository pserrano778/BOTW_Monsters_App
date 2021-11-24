import { createAsyncThunk} from "@reduxjs/toolkit";
import {
    GET_MONSTER,
} from '../types'

// Action created with createAyncThunk that get a Monster
export const getMonster = createAsyncThunk(
    GET_MONSTER,
    async (name: string) => {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/entry/' + name.replace("_", " "));
        const json = await response.json();
        return json.data;
    }
);