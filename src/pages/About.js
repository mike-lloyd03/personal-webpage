import React from 'react'

export default function About() {
  return (
    <div style={container}>
      <img style={aboutImg} src={require("../images/me_main.jpeg")} alt="me" />
      <article>
        <p>I am <strong>Mike Lloyd</strong> and I created this page to tell a bit about myself and to showcase some of the projects I've done and I'm still working on.</p>
        <p>Professionally, I am a mechanical engineer working in the aerospace industry. My focus is on bearings and fasteners but I have picked up experiece in many areas as part of this focus.</p>
      </article>
    </div>
  )
}

const container = {
  maxWidth: 600,
  margin: 'auto',
  lineHeight: '1.5em',
  textIndent: '2em'
}

const aboutImg = {
  width: 200,
  float: 'right',
  padding: 5
}