import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact'

import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'><img src={require('./svgs/about.svg')} /><div>About</div></Link>
        <Link to='/projects'><img src={require('./svgs/projects.svg')} /></Link>
        <Link to='/contact'><img src={require('./svgs/contact.svg')} /></Link>
      </nav>

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
