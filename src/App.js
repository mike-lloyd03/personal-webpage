import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import Nav from './Nav/Nav'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import ProjectDetail from './pages/Projects/ProjectDetail'
import projectsData from './pages/Projects/projectsData'
import Calculator from './pages/Projects/Calculator/Calculator'

import './App.css';

function App() {
  

  return (
    <div>
      <Nav />

      <main>
        <Switch>
          <Route exact path='/'><About /></Route>
          <Route path='/projects/:projectID'><ProjectDetail pages={projectsData[0].pages}/></Route>
          <Route path='/projects/Calculator'><Calculator /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;