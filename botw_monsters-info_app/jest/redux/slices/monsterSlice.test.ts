import reducer from '../../../src/redux/slices/monsterSlice'

import {MonsterState} from '../../../src/redux/types'

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

test('should return initial state', () => {
    expect(reducer(undefined, undefined)).toEqual([
        initialState
    ])
})