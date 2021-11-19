import React from 'react';

// Function that display the monster Preview
export default function MonstersPeview({name, src}) {

  return (
    <div>
        <img src={src} />
        <p>{name}</p>
    </div>
  )
}