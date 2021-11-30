import reducer, { clearMonster } from '../../../src/redux/slices/monsterSlice'

import {MonsterDetails, MonsterState} from '../../../src/redux/types'

// Initial State
const initialState = {
  monster: {
    name: '',
    image: '',
    description: '',
    locations: [],
    drops: [],
  },
  isLoading: false,
  hasError: false,
} as MonsterState

// Check if reducer return initialState
test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        initialState
    )
})

// Check monsterDetails Reset
test('should handle new monsters details', () => {
  const monster = {
    name: "Lynel",
    description: "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
    image: "https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image",
    locations: ["Lanayru Great Spring", "Hyrule Field"],
    drops: ["lynel horn", "lynel hoof", "lynel guts"]
  } as MonsterDetails

  const state = {
    monster: monster,
    isLoading: false,
    hasError: false,
  } as MonsterState
  
    expect(reducer(state, clearMonster())).toEqual(
        initialState
    )
})