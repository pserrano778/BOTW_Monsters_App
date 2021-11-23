import React, { useEffect } from "react";
import SearchBarContainer from "../searchBar/searchBarContainer";
import MonstersList from "../../components/monsters/monstersList.component";
import { getAllMonsters, filterAllMonsters } from "../../redux/actions/monsters";
import { Monsters } from '../../redux/types'
import { connect, ConnectedProps } from 'react-redux'

// Props interface
interface Props extends PropsFromRedux {
    monsters: Monsters
    filter: string
    getAllMonsters: () => void
    filterAllMonsters: (filter: string) => void
}

// State interface
interface State {
    monsters: Monsters,
    filter: string
}

// Function that controls all monsters
const MonstersContainer: React.FC<Props> = (props) => {

    // allMonsters
    const { monsters, getAllMonsters, filter, filterAllMonsters } = props


    // Use effect to get allMonster the first time
    useEffect(() => {
        getAllMonsters();
    }, [getAllMonsters])

    // Check if data has been loaded
    let display = <p>Loading Data</p>;
    if(monsters && monsters.length>0) {
        display = <MonstersList monsters={monsters.map(monster => {
                return { id: monster.id, name: monster.name, image:monster.image}
                // Apply Filter and Sort the array
            }).filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => {

                // a < b
                if(a.name<b.name) return -1;

                // a > b
                else if(a.name>b.name) return 1;

                // Equal
                else return 0;
            })} />;
    }

    return (
        <div>
            <SearchBarContainer value={filter} onChange={filterAllMonsters}/>
            {display}
        </div>
  );

}

// Map the current state to props
const mapStateToProps = (state: State) => ({
    monsters: state.monsters,
    filter: state.filter
})

// Connect
const connector = connect(mapStateToProps, { getAllMonsters, filterAllMonsters })
type PropsFromRedux = ConnectedProps<typeof connector>

// Export the connector
export default connector(MonstersContainer);