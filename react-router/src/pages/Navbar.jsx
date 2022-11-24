import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact-us'>Contact Us</Link></li>
    </ul>
  )
}

export default Navbar