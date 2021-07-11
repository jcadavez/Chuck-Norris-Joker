import './App.css';
import React from 'react';
import { SingleJokePage } from './features/jokes/SingleJokePage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SingleJokePage />
      </React.Fragment>
    </div>
  );
}

export default App;
