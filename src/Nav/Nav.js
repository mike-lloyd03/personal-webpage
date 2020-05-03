import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav() {
  return (
    <div>
      <nav>
        <span id='nameLogo'>Michael Lloyd</span>
        <span id='linksContainer'>
          <Link to='/'><i className="ri-account-circle-fill" /> About</Link>
          <Link to='/projects'><i className="ri-hammer-fill" />Projects</Link>
          <Link to='/contact'><i className="ri-at-line" /> Contact</Link>
        </span>
      </nav>
    </div>
  )
}
