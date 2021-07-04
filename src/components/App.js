import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterById from '../containers/CharacterById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/characters/:_id" component={CharacterById} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  ); 
}
