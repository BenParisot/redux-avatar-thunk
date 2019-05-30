import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetail from '../components/characters/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  ); 
}
