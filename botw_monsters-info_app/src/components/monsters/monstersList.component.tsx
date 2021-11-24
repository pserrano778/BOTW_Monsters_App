import React from "react";
import MonsterPreview from "./monsterPreview.component"

// Monster interface
interface Monster {
  id: number;
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

  if(!monsters || monsters.length === 0){
    return <p>There is no monster that matches the filter.</p>;
  }
  return (
      <ul>
          {monsters.map((monster) => <MonsterPreview key={monster.id} name={monster.name} src={monster.image} />)}
      </ul>
  )
}

export default MonstersList;