import { createSlice } from "@reduxjs/toolkit";
import { MonsterState } from '../types'
import { getMonster } from "../actions/monster"
import { RootState } from "../index"

// Set the initial state
const initialState = {
    monster: {
        name: "",
        image: "",
        description: "",
        locations: [],
        drops: []
    },
    isLoading: false,
    hasError: false
} as MonsterState

// Create the slice
const monsterSlice = createSlice({
    name: "monsterDetails",
    initialState,
    // Clear Monster reducer
    reducers: { clearMonster: (state) => (state = initialState),},
    extraReducers: (builder) => {
        // Bulder callback to set the advanced Reducers
        builder.addCase(getMonster.fulfilled, (state, { payload }) => {
            state.monster = {
                name: payload.name,
                image: payload.image,
                description: payload.description,
                locations: payload.locations,
                drops: payload.drops
            };
            state.isLoading = false;
            state.hasError = false;
        })
        builder.addCase(getMonster.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
        builder.addCase(getMonster.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
      },
})

export const selectMonster = (state: RootState) => state.monsterDetails.monster;
export const { clearMonster } = monsterSlice.actions;
export const isLoadingMonster = (state: RootState) => state.monsterDetails.isLoading;


export default monsterSlice.reducer;