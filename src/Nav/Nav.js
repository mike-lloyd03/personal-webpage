import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import './Nav.css'

export default function Nav() {
const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <div>
      <nav>
        <div id='nameLogo'>Michael Lloyd</div>

        <div id='linksContainer'>
          <Button aria-controls="simple-menu" aria-haspopup="true" className="navButton">
            <Link to='/'>
              <i className="ri-account-circle-fill" /> About
            </Link>
          </Button>

          <Button aria-controls="simple-menu" aria-haspopup="true" className="navButton">
            <Link to='/projects' >
              <i className="ri-hammer-fill" /> Projects
            </Link>
          </Button>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navButton">
            <i className="ri-account-circle-fill" /> Contact
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a href='http://www.linkedin.com/in/mikelloyd03' target="_blank" rel='noopener noreferrer'>
                <i className="ri-linkedin-box-fill"></i> LinkedIn
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href='https://github.com/mike-lloyd03' target="_blank" rel='noopener noreferrer'>
                <i className="ri-github-fill"></i> GitHub
              </a>
            </MenuItem>
          </Menu>

           

        </div>

      </nav>
    </div>
  )
}
