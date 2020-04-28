import React from 'react'

export default function ProjectPage(props) {
  return (
    <div>
      <h2>{props.page.title}</h2>
      <img src={props.page.image} alt="Page Project Image"/>
      <p>{props.page.content}</p>
    </div>
  )
}
