import React, {useState, useEffect} from 'react'
import marked from 'marked'
import './About.css'

export default function About() {
  const [aboutText, setAboutText] = useState('')  

  useEffect(() => {
    const aboutTextPath = require("./About.md");

  fetch(aboutTextPath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      setAboutText(marked(text))
    })
  }, [])

  return (
    <div id='container'>
      <img id='aboutImg' src={require("../../images/me_main.jpeg")} alt="me" />
      <article dangerouslySetInnerHTML={{__html: aboutText}} >
      </article>
    </div>
  )
}

