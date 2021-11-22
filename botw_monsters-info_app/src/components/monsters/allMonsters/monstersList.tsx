import React from "react";
import MonsterPreviewData from "../monster/monsterPreviewData"
import Monsters from "./monsters";

// Monster interface
interface Monster {
  name: string;
  image: string;
}


// Props interface
interface Props {
  monsters: Monster[];
}

// Function that controls all monsters
const MonstersList: React.FC<Props> = (props) => {
  const { monsters } = props
  return (
    <ul>
      {monsters.map((monster) => <MonsterPreviewData name={monster.name} src={monster.image} />)}
    </ul>
  )
}

export default MonstersList;