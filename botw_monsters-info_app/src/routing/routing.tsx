import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MonstersContainer from '../containers/monsters/monsters.container'
import MonsterDataContainer from '../containers/monsters/monsterData.container'
import AddMonsterContainer from '../containers/monsters/addMonster.container'

const Routing = (): JSX.Element => {
  // Routing
  return (
    <div>
      <Router>
        <Routes>
          {/* All monster List route */}
          <Route path={'/'} element={<MonstersContainer />}></Route>
          {/* Specific monster info */}
          <Route path={'/:name'} element={<MonsterDataContainer />}></Route>
          {/* Add a new monster */}
          <Route path={'/addMonster'} element={<AddMonsterContainer />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
