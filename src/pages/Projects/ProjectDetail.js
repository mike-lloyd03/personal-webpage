import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Breadcrumbs, Button, ButtonGroup} from '@material-ui/core'

import ProjectPage from './ProjectPage'
import projectsData from './projectsData'

export default function ProjectDetail() {
  const [index, setIndex] = useState(0)
  const {projectID} = useParams()

  const thisProject = projectsData.find(project => project.id === projectID)

  const next = () => {
    setIndex(i => i + 1)
  }

  const previous = () => {
    setIndex(i => i - 1)
  }

  const pageComponents = thisProject.pages.map(p =>
    <ProjectPage
      key={p.id}
      id={thisProject.id}
      page={p}
    />)

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" component=''>
        <Link to="/projects"><h2>Projects</h2></Link>
        <Link to={`/projects/${thisProject.id}`}><h2>{thisProject.title}</h2></Link>
      </Breadcrumbs>
      
      {pageComponents[index]}

      <ButtonGroup color="primary" aria-label="outlined primary button group" className='centered'>
        <Button onClick={previous} disabled={index === 0}>Previous</Button>
        <Button onClick={next} disabled={index === (thisProject.pages.length - 1)}>Next</Button>
      </ButtonGroup>
    </div>
  )
}
