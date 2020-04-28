import React, {useState} from 'react'
import ProjectPage from './ProjectPage'

export default function ProjectDetail(props) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(i => i + 1)
  }

  const previous = () => {
    setIndex(i => i - 1)
  }

  const pageComponents = props.pages.map(p =>
    <ProjectPage
      key={p.title.toLowerCase().replace(/ /g,'')}
      page={p}
    />)

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={previous} disabled={index === 0}>Previous</button>
      <button onClick={next} disabled={index === (props.pages.length - 1)}>Next</button>
      {pageComponents[index]}
    </div>
  )
}
