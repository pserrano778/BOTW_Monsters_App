import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Monsters from '../containers/monsters/monstersContainer'
import MonsterData from '../containers/monsters/monsterDataContainer'

const Routing = () => {
    // Routing
    return (
      <div>
          <Router>
            <div>
              <Routes>
                {/* All monster List route */}
                <Route path={"/"} element={<Monsters/>}></Route>
                {/* Specific monster info */}
                <Route path={"/:name" } element={<MonsterData/>}></Route>
              </Routes>
            </div>
          </Router>
      </div>
    )
}

export default Routing;