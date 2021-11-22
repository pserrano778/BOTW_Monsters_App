import React from "react";
import MonsterPreview from './monsterPreview'

// Props interface
interface Props {
  name: string;
  src: string;
}

// Function that controls information from mosterPreview
const MonstersPreviewData: React.FC<Props> = (props) => {
  const {name, src} = props;

  return (
    <MonsterPreview name={name} src={src}/>
  )
}

export default MonstersPreviewData;