import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardContent, CardMedia, CardActionArea, Breadcrumbs} from '@material-ui/core'

import projectsData from './projectsData'
import './Projects.css'

export default function Projects() {

  const projectCards = projectsData.map(p => 
    <Card key={p.id}>
      <CardActionArea>
        <Link to={`/projects/${p.id}`}>
          <CardMedia
            component='img'
            image={require(`./images/${p.id}/main-img.jpg`)}
            height='200'
          />
        </Link>
      </CardActionArea>
        
      <CardContent>
        {p.description}
      </CardContent>
    </Card>
  )
  
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" component=''>
        <Link to="/projects"><h2>Projects</h2></Link>
      </Breadcrumbs>
      <div className='projectsContainer'>
        {projectCards}
      </div>
    </div>
  )
}
