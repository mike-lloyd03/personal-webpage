import React from 'react'
import useFade from '../hooks/useFade'

import './NavMenu.css'

export default function NavMenu() {
  const {show} = useFade()
  return (
    <div className={`menu ${show}`} >
      <a href='http://www.linkedin.com/in/mikelloyd03' target="_blank" rel='noopener noreferrer' className='menuLink'>
        <i className="ri-linkedin-box-fill"></i> LinkedIn
      </a>
      
      <a href='https://github.com/mike-lloyd03' target="_blank" rel='noopener noreferrer' className='menuLink'>
        <i className="ri-github-fill"></i> GitHub
      </a>
    </div>
  )
}
