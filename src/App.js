import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Leagues from './components/Leagues/Leagues';
import TeamDetails from './components/TeamDetails/TeamDetails'
import NotFound from './components/NotFound/NotFound'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Leagues></Leagues>
        </Route>
        <Route path='/leagues'>
          <Leagues></Leagues>
        </Route>
        <Route path='/team/:id'>
          <TeamDetails></TeamDetails>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
