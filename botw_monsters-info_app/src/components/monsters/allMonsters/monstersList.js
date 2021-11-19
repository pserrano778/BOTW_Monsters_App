import React from "react";
import MonsterPreviewData from "../monster/monsterPreviewData.js"

// Function that controls all monsters
export default function MonstersList({monsters}) {
  console.log("s")
console.log(monsters)
  return (
    <ul>
      {monsters.map((monster) => <MonsterPreviewData key={monster.id} name={monster.name} src={monster.src} />)}
    </ul>
  )
}