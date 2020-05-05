import React from 'react'
import useFade from '../hooks/useFade'

import './NavMenu.css'

export default function NavMenu() {
  const {show} = useFade()
  return (
    <div className={`menu ${show}`} >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
  )
}
