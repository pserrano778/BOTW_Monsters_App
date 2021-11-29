import { createSlice } from '@reduxjs/toolkit'
import { MonstersState, Monster } from '../types'
import { addMonster, getAllMonsters } from '../actions/monsters'
import { RootState } from '../index'
import { selectSearchFilter } from './searchFilterSlice'

// Set the initial state
const initialState = {
  monsters: [],
  isLoading: false,
  hasError: false,
  isSending: false,
  hasSendingError: false,
} as MonstersState

// Create the slice
export const monstersSlice = createSlice({
  name: 'allMonsters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Bulder callback to set the advanced Reducers
    builder.addCase(getAllMonsters.fulfilled, (state, { payload }) => {
      state.monsters = payload
      state.isLoading = false
      state.hasError = false
    })
    builder.addCase(getAllMonsters.rejected, (state, action) => {
      state.isLoading = false
      state.hasError = true
    })
    builder.addCase(getAllMonsters.pending, (state, action) => {
      state.isLoading = true
      state.hasError = false
    })
    builder.addCase(addMonster.fulfilled, (state, { payload }) => {
      state.isSending = false
      state.hasSendingError = false
    })
    builder.addCase(addMonster.rejected, (state, action) => {
      state.isSending = false
      state.hasSendingError = true
    })
    builder.addCase(addMonster.pending, (state, action) => {
      state.isSending = true
      state.hasSendingError = false
    })
  },
})

export const selectAllMonsters = (state: RootState) =>
  state.allMonsters.monsters
export const isLoadingAllMonsters = (state: RootState) =>
  state.allMonsters.isLoading

export const selectAllMonstersFiltered = (state: RootState) => {
  const allMonsters = selectAllMonsters(state)
  const searchFilter = selectSearchFilter(state)

  return allMonsters.filter((monster: Monster) =>
    monster.name.toLowerCase().includes(searchFilter.toLowerCase())
  )
}

export const addNewMonster = (state: RootState) => {
  return null
}

export default monstersSlice.reducer
