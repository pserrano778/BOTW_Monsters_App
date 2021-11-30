import React, { useEffect } from 'react'
import SearchBarContainer from '../searchBar/searchBar.container'
import AddMonsterButtonContainer from './addMonsterButton.container'
import MonstersList from '../../components/monsters/monstersList/monstersList.component'
import { getAllMonsters } from '../../redux/actions/monsters'
import {
  selectAllMonstersFiltered,
  isLoadingAllMonsters,
  hasError,
} from '../../redux/slices/monstersSlice'
import { useDispatch, useSelector } from 'react-redux'

// Function that controls all monsters
const MonstersContainer = (): JSX.Element => {
  const dispatch = useDispatch()
  const allMonstersFiltered = useSelector(selectAllMonstersFiltered)

  // Use effect to get allMonster the first time
  useEffect(() => {
    dispatch(getAllMonsters())
  }, [dispatch])

  // Check if data has been loaded
  const isLoading = useSelector(isLoadingAllMonsters)
  const error = useSelector(hasError)
  if (isLoading && allMonstersFiltered.length === 0) {
    return <p>Loading Data</p>
  } else if (error) {
    return <p>Error Loading Data</p>
  }

  return (
    <div>
      <AddMonsterButtonContainer />
      <SearchBarContainer />
      <MonstersList
        monsters={allMonstersFiltered
          .map((monster) => {
            return { name: monster.name, image: monster.image }
            // Apply Filter and Sort the array
          })
          .sort((a, b) => {
            // Compare using lowerCase
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()
            // a < b
            if (aName < bName) return -1
            // a > b
            else if (aName > bName) return 1
            // Equal
            else return 0
          })}
      />
    </div>
  )
}

export default MonstersContainer
