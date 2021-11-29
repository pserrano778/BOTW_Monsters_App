import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Routing from './routing/routing'
import store from '../src/redux/index'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import common_en from './translation/en.json'
import common_es from './translation/es.json'

function App(): JSX.Element {
  useEffect(() => {
    selectLanguage()
  }, [])
  const selectLanguage = () => {
    i18next.init({
      lng: 'es',
      debug: true,
      resources: {
        en: {
          common: common_en,
        },
        es: {
          common: common_es,
        },
      },
    })
  }

  return (
    <div className="App">
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Routing />
        </I18nextProvider>
      </Provider>
    </div>
  )
}

export default App
