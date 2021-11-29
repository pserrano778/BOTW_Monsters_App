import React from 'react'
import Button from 'react-bootstrap/Button'

// Props interface
interface Props {
  onClick: () => void
}

const AddMonsterButton: React.FC<Props> = (props) => {
  const { onClick } = props

  return <Button onClick={onClick}>Add Monster</Button>
}

export default AddMonsterButton
