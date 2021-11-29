import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_ALL_MONSTERS, ADD_MONSTER, MonsterDetailsStr } from '../types'

// Action created with createAsyncThunk that get all the Monsters
export const getAllMonsters = createAsyncThunk(GET_ALL_MONSTERS, async () => {
  const response = await fetch('http://192.168.1.39:4000/getAllMonsters')
  const json = await response.json()
  return json
})

// Action created with createAsyncThunk that post a new monster
export const addMonster = createAsyncThunk(
  ADD_MONSTER,
  async (monster: MonsterDetailsStr) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(monster as MonsterDetailsStr),
    }

    const response = await fetch(
      'http://192.168.1.39:4000/addMonster',
      requestOptions
    )
    const json = await response.json()
    return json.data
  }
)
