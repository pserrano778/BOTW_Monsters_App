import React, { useState, useEffect } from "react";
import MonstersList from "./monstersList"
import SearchBarContainer from "../../searchBar/searchBarContainer"

// Monster interface
interface Monster {
    id: number;
    name: string;
    image: string;
}

// Function that controls all monsters
const Monsters = () => {

    // Use state for allMonsters
    const[allMonsters, setAllMonsters] = useState([] as Monster[]);

    // Filter
    const[filter, setFilter] = useState("");

    // Use effect to get allMonster the first time
    useEffect(() => {
        const fetchMonsters = async () => {
            // Fetch data and parse to JSON
            const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters');
            const json = await response.json();

            // Save data
            setAllMonsters(json.data);
        };
        // Call the function
        fetchMonsters();
    }, [])

    return (
        <div>
            <SearchBarContainer value={filter} onChange={setFilter}/>
            <MonstersList monsters={allMonsters.map(monster => {
                return { id: monster.id, name: monster.name, image:monster.image}
                // Apply Filter and Sort the array
            }).filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => {

                // a < b
                if(a.name<b.name) return -1;

                // a > b
                else if(a.name>b.name) return 1;

                // Equal
                else return 0;
            })} />
        </div>
  );

}

export default Monsters;