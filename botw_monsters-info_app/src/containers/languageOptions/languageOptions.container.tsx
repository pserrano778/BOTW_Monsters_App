import React from 'react'
import LanguageOptionsComponent from '../../components/LanguageOptions/languageOptions.component'

// Props interface
interface Props {
  value: string
  onChange: (value: string) => void
}

// Event interface
interface Event {
  target: { value: string }
}

const LanguageOptionsContainer: React.FC<Props> = (props) => {
  const { value, onChange } = props

  const handleChange = (e: React.SyntheticEvent<unknown>) => {
    onChange((e.target as HTMLInputElement).innerText)
    //onChange(e.target)
  }
  return <LanguageOptionsComponent value={value} handleChange={handleChange} />
}

export default LanguageOptionsContainer
