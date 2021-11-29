import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Routing from './routing/routing'
import store from '../src/redux/index'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import common_en from './translation/en.json'
import common_es from './translation/es.json'
import LanguageOptionsContainer from './containers/languageOptions/languageOptions.container'

function App(): JSX.Element {
  const [lng, setLng] = useState('EN')

  useEffect(() => {
    selectLanguage()
  }, [])
  const selectLanguage = () => {
    i18next.init({
      lng: lng,
      resources: {
        EN: {
          common: common_en,
        },
        ES: {
          common: common_es,
        },
      },
    })
  }

  selectLanguage()
  return (
    <div className="App">
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <LanguageOptionsContainer value={lng} onChange={setLng} />
          <Routing />
        </I18nextProvider>
      </Provider>
    </div>
  )
}

export default App
