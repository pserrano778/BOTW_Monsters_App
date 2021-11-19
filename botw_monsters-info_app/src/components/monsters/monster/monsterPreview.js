import React from 'react';

// Function that display the monster Preview
export default function MonstersPeview({name, src}) {

  return (
    <div>
        <figure>
            <img src={src} alt={name}/>
            <figcaption><a href="#">{name}</a></figcaption>
        </figure>
    </div>
  )
}