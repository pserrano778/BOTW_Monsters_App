import React from "react";

// Props interface
interface Props {
    name: string;
    locations: [];
    description: string;
    drops: [];
    src: string;
}
// Cambiar con redux
const MonsterView: React.FC<Props> = (props) => {
    const name = props.name as string;
    const locations = props.locations as [];
    const description = props.description as string;
    const drops = props.drops as [];
    const src = props.src as string;
console.log(props.drops)
    return (
        <div>
        <figure>
            <figcaption><h2>{name}</h2></figcaption>
            <img src={src} alt={name}/>
        </figure>
        <p>{description}</p>
        <p>Locations: {locations.join(", ")}</p>
        {drops.length > 0 && <p>Drops: {drops.join(", ")}</p>}
    </div>
  );
    
}

export default MonsterView;