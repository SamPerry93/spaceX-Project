import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Launch from './components/Launch';
import Launches from './components/Launches';
import Nav from './components/Nav';
import Rocket from './components/Rocket';
import Rockets from './components/Rockets';
function App() {
  return (
    <Router>
    <div className="app">
      <Nav/>
    </div>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/launches" component={Launches}/>
    <Route exact path="/rockets" component={Rockets}/>
    <Route exact path="/rockets/:id" component={Rocket}/>
    <Route exact path="/launches/:id" component={Launch}/>
  </Switch>
</Router>
  );
}

export default App;
