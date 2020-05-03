import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
  return (
    <div>
      <nav>
        <div id='nameLogo'>Michael Lloyd</div>
        <div id='linksContainer'>
          <Link to='/' className='navLink'><i className="ri-account-circle-fill" /> About</Link>
          <Link to='/projects' className='navLink'><i className="ri-hammer-fill" />Projects</Link>
          <Link to='/contact' className='navLink'><i className="ri-at-line" /> Contact</Link>
        </div>
      </nav>
    </div>
  )
}
