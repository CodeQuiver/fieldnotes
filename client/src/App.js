import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Home from './components/Home';
import AllNotes from './components/AllNotes';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <ul className="nav">
            <li className="nav-item">
                <Link to="/">Notepad</Link>
            </li>
            <li className="nav-item">
                <Link to="/allNotes">Past Notes</Link>
            </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/allNotes">
                <AllNotes />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
