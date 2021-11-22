import React from 'react';
import {Link} from "react-router-dom";

// Props interface
interface Props {
  name: string;
  src: string;
}

// Function that display the monster Preview
const MonstersPeview: React.FC<Props> = (props) => {
  const {name, src} = props;
  //Return the preview with a link to the monster data
  return (
    <div>
        <figure>
        <Link to={"/"+name.replace(" ", "_")}><img src={src} alt={name}/></Link>
            <figcaption><Link to={"/"+name.replace(" ", "_")}>{name}</Link></figcaption>
        </figure>
        
    </div>
  )
}

export default MonstersPeview;