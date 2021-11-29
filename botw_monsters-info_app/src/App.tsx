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
  // Init language package 'EN' default
  i18next.init({
    lng: 'EN',
    resources: {
      EN: {
        common: common_en,
      },
      ES: {
        common: common_es,
      },
    },
  })

  return (
    <div className="App">
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <LanguageOptionsContainer />
          <Routing />
        </I18nextProvider>
      </Provider>
    </div>
  )
}

export default App
