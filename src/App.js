import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Paper} from '@material-ui/core'
import 'remixicon/fonts/remixicon.css'

import Nav from './Nav/Nav'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/Projects/ProjectDetail'
import Calculator from './pages/Projects/Calculator/Calculator'

import './App.css';

function App() {
  

  return (
    <div>
      <Nav />

      <main>
        <Paper className='mainContent' elevation='3'>
          <Switch>
            <Route exact path='/'><About /></Route>
            <Route path='/projects/calculator'><Calculator /></Route>
            <Route path='/projects/:projectID'><ProjectDetail /></Route>
            <Route path='/projects'><Projects /></Route>
          </Switch>
        </Paper>
      </main>
    </div>
  );
}

export default App;