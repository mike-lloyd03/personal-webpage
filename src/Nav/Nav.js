import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'
import NavMenu from './NavMenu'


export default function Nav() {
const [showMenu, setShowMenu] = useState(false)

const handleMouseEnter = () => {
  setShowMenu(true)
  console.log('enter');
  
}

const handleMouseLeave = () => {
  setShowMenu(false)
  console.log('exit');
  
}

  return (
    <div>
      <nav>
        <div id='nameLogo'>Michael Lloyd</div>

        <div id='linksContainer'>
          <Link to='/' className='navLink'><i className="ri-account-circle-fill" /> About</Link>
          <span className='red' onMouseEnter={handleMouseEnter} >
            <Link to='/projects' className='navLink' onMouseLeave={handleMouseLeave} >
              <i className="ri-hammer-fill" />
              Projects
            </Link>
            <NavMenu />
            {/* {showMenu ? <NavMenu /> : ''} */}
          </span>
          <Link to='/contact' className='navLink'><i className="ri-at-line" /> Contact</Link>
        </div>

      </nav>
    </div>
  )
}
