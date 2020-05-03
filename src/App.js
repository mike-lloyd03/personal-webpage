import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import Nav from './Nav/Nav'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact'

import './App.css';

function App() {
  return (
    <div>
      <Nav />

      <main>
        <Switch>
          <Route exact path='/'><About /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;