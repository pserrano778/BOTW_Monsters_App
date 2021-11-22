import React, { useState, useEffect } from "react";
import MonsterView from './monsterView';
import {useParams} from "react-router-dom";

// Monster interface
interface Monster {
    name: string;
    common_locations: [];
    description: string;
    drops: [];
    image: string;
}  

const MonsterData = () => {

    // Use state for allMonsterInfo
    const[monsterInfo, setMonsterInfo] = useState({} as Monster);
    let name = useParams().name as string;

    // Use effect to get the info the first time
    useEffect(() => {
        const fetchMonsterInfo = async () => {
            // Fetch data and parse to JSON
            const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/entry/' + name.replace("_", " "));
            const json = await response.json();
            
            // Save data
            setMonsterInfo(json.data);
        };
        // Call the function
        fetchMonsterInfo();
    }, [])
    
    return (
        <MonsterView name={monsterInfo.name} locations={monsterInfo.common_locations} description={monsterInfo.description} drops={monsterInfo.drops} src={monsterInfo.image}/>
  );
}

export default MonsterData;