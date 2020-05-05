import React from 'react'
import {Link} from 'react-router-dom'

import projectsData from './projectsData'

export default function Projects() {
  const projectTitles = projectsData.map(p => 
    <li>
      <Link
        to={'/projects/' + p.title.toLowerCase().replace(/ /g, '')}
        key={p.title.toLowerCase().replace(/ /g, '')}
      >
        {p.title}
      </Link>
    </li>
    )
  
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectTitles}
        <li><Link to='/projects/Calculator'>Calculator</Link></li>
      </ul>
      
    </div>
  )
}
