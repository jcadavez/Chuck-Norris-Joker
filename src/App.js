import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './app/Navbar';

import { JokesList } from './features/jokes/JokesList';
import { AddJokeForm } from './features/jokes/AddJokeForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route 
            exact 
            path="/"
            render={() => (
              <React.Fragment>
                <AddJokeForm />
                <JokesList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
