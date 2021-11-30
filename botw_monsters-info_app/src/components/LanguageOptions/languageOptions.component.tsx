import React from 'react'
import '../../styles/css/searchBarStyle.css'
import Dropdown from 'react-bootstrap/Dropdown'

// Props interface
interface Props {
  value: string
  handleChange: (value: React.SyntheticEvent<unknown>) => void
}

// Event interface
interface Event {
  target: { value: string }
}

// Function that display the searchBar
const LanguageOptionsComponent: React.FC<Props> = (props) => {
  const { value, handleChange } = props

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-lng">
          {value}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleChange} value="EN">
            EN
          </Dropdown.Item>
          <Dropdown.Item onClick={handleChange} value="ES">
            ES
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default LanguageOptionsComponent
