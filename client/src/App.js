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
        <nav className="navbar justify-content-end m-0 p-0">
          <Link className="nav-item m-0 p-2" to="/">Notepad</Link>
          <Link className="nav-item m-0 p-2" to="/allNotes">Past Notes</Link>
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
