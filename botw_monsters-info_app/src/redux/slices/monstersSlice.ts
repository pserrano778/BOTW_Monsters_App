import { createSlice } from "@reduxjs/toolkit";
import { MonstersState, Monster } from '../types'
import { getAllMonsters } from "../actions/monsters"
import { RootState } from "../index"
import { selectSearchFilter } from "./searchFilterSlice";

// Set the initial state
const initialState =  {
    monsters: [],
    isLoading: false,
    hasError: false
} as MonstersState

// Create the slice
export const monstersSlice = createSlice({
    name: 'allMonsters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    // Bulder callback to set the advanced Reducers
    builder.addCase(getAllMonsters.fulfilled, (state, { payload }) => {
        state.monsters = payload;
        state.isLoading = false;
        state.hasError = false;
    })
    builder.addCase(getAllMonsters.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
    })
    builder.addCase(getAllMonsters.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
    })
  },
})

export const selectAllMonsters = (state: RootState) => state.allMonsters.monsters;
export const isLoadingAllMonsters = (state: RootState) => state.allMonsters.isLoading;

export const selectAllMonstersFiltered = (state: RootState) => {
    const allMonsters = selectAllMonsters(state);
    const searchFilter = selectSearchFilter(state);

    return allMonsters.filter((monster: Monster) => monster.name.toLowerCase().includes(searchFilter.toLowerCase()));
};

export default monstersSlice.reducer;