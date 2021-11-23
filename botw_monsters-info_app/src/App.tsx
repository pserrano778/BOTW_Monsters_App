import './App.css';
import Routing from './routing/routing'
import store from '../src/redux/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routing />
      </Provider>
    </div>
  );
}

export default App;
