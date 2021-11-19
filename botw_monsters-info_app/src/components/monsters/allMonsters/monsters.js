import React, { useState, useEffect } from "react";
import MonstersList from "./monstersList.js"
import SearchBar from "../../searchBar/searchBar.js"
// Function that controls all monsters
export default function Monsters() {

    // Use state for allMonsters
    const[allMonsters, setAllMonsters] = useState([]);

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
            <SearchBar value={filter} onChange={setFilter}/>
            <MonstersList monsters={allMonsters.map(monster => {
                return {name: monster.name, src:monster.image}
            }).filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => { // Sort array

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