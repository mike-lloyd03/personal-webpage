import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import ProjectDetail from './ProjectDetail'
import projectsData from './projectsData'
import Calculator from './Calculator/Calculator'

export default function Projects() {
  const projectTitles = projectsData.map(p => 
    <Link
      to={'/projects/' + p.title.toLowerCase().replace(/ /g, '')}
      key={p.title.toLowerCase().replace(/ /g, '')}
    >
      {p.title}
    </Link>
    )
  
  // The page path and props should not be hard coded. Need to fix.
  return (
    <div>
      <h1>Projects</h1>
      {projectTitles}
      <Link to='/projects/Calculator'>Calculator</Link>
      <Switch>
        {/* <Route exact path='/projects/:projectID'><ProjectDetail pages={projectsData[0].pages}/></Route> */}
        <Route exact path='/projects/Calculator'><Calculator /></Route>
      </Switch>
    </div>
  )
}
