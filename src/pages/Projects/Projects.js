import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import projectsData from './projectsData'

export default function Projects() {
  const projectTitles = projectsData.map(p => 
    <li key={p.id}>
      <Link
        to={'/projects/' + p.id}
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
        <li><Link to='/projects/calculator'>Calculator</Link></li>
      </ul>
      <Card>
        <CardMedia
          image='src/pages/Projects/images/bass-body-main.jpg'
        />
        
        <CardContent>
          I built a guitar
        </CardContent>

      </Card>
      
    </div>
  )
}
