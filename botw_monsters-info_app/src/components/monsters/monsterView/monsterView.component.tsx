import React from 'react'
import Figure from 'react-bootstrap/Figure'
// Props interface
interface Props {
  name: string
  locations: string[]
  description: string
  drops: string[]
  src: string
}
// Cambiar con redux
const MonsterView: React.FC<Props> = (props) => {
  const name = props.name as string
  const locations = props.locations as []
  const description = props.description as string
  const drops = props.drops as []
  const src = props.src as string

  return (
    <div>
      <Figure>
        <Figure.Caption>
          <h2>{name}</h2>
        </Figure.Caption>
        <Figure.Image src={src} alt={name} />
      </Figure>
      <p>{description}</p>
      {locations && locations.length > 0 && (
        <p>Locations: {locations.join(', ')}</p>
      )}
      {drops && drops.length > 0 && <p>Drops: {drops.join(', ')}</p>}
    </div>
  )
}

export default MonsterView
