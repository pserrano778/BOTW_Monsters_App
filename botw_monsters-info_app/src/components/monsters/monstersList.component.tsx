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
  let display = <p>There is no monster that matches the filter.</p>

  if(monsters && monsters.length>0){
    display = <ul>
                  {monsters.map((monster) => <MonsterPreview key={monster.id} name={monster.name} src={monster.image} />)}
              </ul>
  }
  return (
    display
  )
}

export default MonstersList;