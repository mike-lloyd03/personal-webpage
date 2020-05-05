import React, {useState, useEffect} from 'react'
import marked from 'marked'
import './About.css'
import imgMe from '../../images/me_main.jpeg'

export default function About() {
  const [aboutText, setAboutText] = useState('')

  useEffect(() => {
    const aboutTextPath = require("./aboutText.md");

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
      <img id='aboutImg' src={imgMe} alt="me" />
      <article dangerouslySetInnerHTML={{__html: aboutText}} />
    </div>
  )
}

