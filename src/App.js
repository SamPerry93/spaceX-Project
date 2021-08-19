import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Rocket from './components/Rocket';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Rockets/> */}
      <Switch>
        <Route exact path="/rockets" component={Rockets}/>
        <Route exact path="/:id" component={Rocket}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
