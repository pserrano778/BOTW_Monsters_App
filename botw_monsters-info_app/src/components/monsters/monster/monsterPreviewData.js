import React from "react";
import MonsterPreview from './monsterPreview.js'

// Function that controls information from mosterPreview
export default function MonstersPreviewData({key, name, src}) {
    
  return (
    <MonsterPreview name={name} src={src}/>
  )
}