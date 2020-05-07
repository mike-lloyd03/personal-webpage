import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

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
      page={p}
    />)

  return (
    <div>
      <h1>{thisProject.title}</h1>
      <button onClick={previous} disabled={index === 0}>Previous</button>
      <button onClick={next} disabled={index === (thisProject.pages.length - 1)}>Next</button>
      {pageComponents[index]}
    </div>
  )
}
