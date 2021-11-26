import { createAsyncThunk} from "@reduxjs/toolkit";
import {
    GET_MONSTER,
} from '../types'

// Action created with createAyncThunk that get a Monster
export const getMonster = createAsyncThunk(
    GET_MONSTER,
    async (name: string) => {
        const response = await fetch('http://192.168.1.39:4000/getMonster/' + name.replace(" ", "_"));
        const json = await response.json();
        return json;
    }
);