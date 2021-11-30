import React, { useEffect, useState } from 'react'
import LanguageOptionsComponent from '../../components/LanguageOptions/languageOptions.component'
import i18next from 'i18next'

const LanguageOptionsContainer: React.FC = () => {
  // Use state to track current language
  const [lng, setLng] = useState('EN')

  // Set use effect to change the language when it changes
  useEffect(() => {
    i18next.changeLanguage(lng)
  }, [lng])

  // handle change
  const handleChange = (e: React.SyntheticEvent<unknown>) => {
    setLng((e.target as HTMLInputElement).innerText)
  }
  return <LanguageOptionsComponent value={lng} handleChange={handleChange} />
}

export default LanguageOptionsContainer
