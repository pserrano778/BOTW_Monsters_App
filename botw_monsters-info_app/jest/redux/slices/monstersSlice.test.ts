import reducer, { addNewMonster } from '../../../src/redux/slices/monstersSlice'
import store from '../../../src/redux/index'
import {Monster, Monsters, MonstersState, ADD_MONSTER} from '../../../src/redux/types'
import { getAllMonsters, addMonster } from '../../../src/redux/actions/monsters'
import monstersSlice from '../../../src/redux/slices/monstersSlice'

// Initial State
const initialState = {monsters:[] as Monsters,
    isLoading: false,
    hasError: false,
    isSending: false,
    hasSendingError: false
}

describe('All monsters redux state tests', () => {

  // Test to return initial state
  test('Should initially set monster to an empty Monsters[]', () => {
    const state = store.getState().allMonsters
    expect(state).toEqual(initialState)
  })

  test('Should be able to fetch the games list for a specific user', async () => {
    
    // Create the new Monster
    const monster = {
        name: "Lynel",
        image: "https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image"
    } as Monster

      // Call reducir to add the monster
      expect(reducer({...initialState}, {type:addMonster.fulfilled, payload: monster})).toEqual({...initialState, monsters: [monster]})
    })
    
})
