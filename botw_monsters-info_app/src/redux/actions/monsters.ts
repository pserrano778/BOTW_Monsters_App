import { createAsyncThunk} from "@reduxjs/toolkit";
import {
    GET_ALL_MONSTERS,
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