import React from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>I can be reached through one of the following mediums:</p>
      <div className='contactLink'><a href='http://www.linkedin.com/in/mikelloyd03' target="_blank">
        <i className="ri-linkedin-box-fill"></i> LinkedIn
        </a></div>
      <div className='contactLink'><a href='https://github.com/mike-lloyd03' target="_blank">
        <i className="ri-github-fill"></i> GitHub
      </a></div>
    </div>
  )
}
