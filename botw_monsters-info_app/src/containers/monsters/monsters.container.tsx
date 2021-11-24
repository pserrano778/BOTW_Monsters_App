import { useEffect } from "react";
import SearchBarContainer from "../searchBar/searchBar.container";
import MonstersList from "../../components/monsters/monstersList.component";
import { getAllMonsters } from "../../redux/actions/monsters";
import {selectAllMonstersFiltered, isLoadingAllMonsters} from "../../redux/slices/monstersSlice"
import { useDispatch, useSelector } from "react-redux";

// Function that controls all monsters
export const MonstersContainer = () => {
    const dispatch = useDispatch();
    const allMonstersFiltered = useSelector(selectAllMonstersFiltered);

    // Use effect to get allMonster the first time
    useEffect(() => { 
        dispatch(getAllMonsters());
    }, [dispatch])

    // Check if data has been loaded
    const isLoading  = useSelector(isLoadingAllMonsters);
    if(isLoading) {
        return <p>Loading Data</p>
    }

    return (
        <div>
            <SearchBarContainer/>
            <MonstersList monsters={allMonstersFiltered.map(monster => {
                return { id: monster.id, name: monster.name, image:monster.image}
                // Apply Filter and Sort the array
            }).sort((a, b) => {

                // a < b
                if(a.name<b.name) return -1;

                // a > b
                else if(a.name>b.name) return 1;

                // Equal
                else return 0;
            })} />;
        </div>
  );

}


