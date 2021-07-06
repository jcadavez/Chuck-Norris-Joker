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
import { SingleJokePage } from './features/jokes/SingleJokePage';
import { EditJokeForm } from './features/jokes/EditJokeForm';

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
          <Route exact path="/jokes/:jokeId" component={SingleJokePage} />
          <Route exact path="/editJoke/:jokeId" component={EditJokeForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
