import { useEffect } from "react";
import MonsterView from "../../components/monsters/monsterView.component";
import {useParams} from "react-router-dom";
import { getMonster } from "../../redux/actions/monster"
import { useDispatch, useSelector } from 'react-redux'
import {selectMonster, clearMonster, isLoadingMonster} from "../../redux/slices/monsterSlice"


const MonsterDataContainer = () => {

    // Get the monster info
    let name = useParams().name as string;
    const dispatch = useDispatch();
    const monsterDetails = useSelector(selectMonster);

    // Use effect to get the info
    useEffect(() => {
        //Dispatch the action
        dispatch(getMonster(name));
        return () => {
            // Clear when finish
            dispatch(clearMonster());
        };
    }, [name, dispatch])

    // Check if data has been loaded
    const isLoading  = useSelector(isLoadingMonster);
    if(isLoading) {
        return <p>Loading Data</p>
    }

    return (
        <MonsterView name={monsterDetails.name} locations={monsterDetails.locations} description={monsterDetails.description} drops={monsterDetails.drops} src={monsterDetails.image}/>
    )
}

export default MonsterDataContainer;