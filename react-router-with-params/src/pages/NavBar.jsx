import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Aboutus from './Aboutus'
import Home from './Home'
import User from './User'
import Users from './Users'

function NavBar() {
    const {userId} = useParams()
  return (
    <div>
        <ul className='d-flex'>
            <li className='mx'><Link to='/' element={<Home />}>Home</Link></li>
            <li className='mx'><Link to='/users' element={<Users />}>Users</Link></li>
            {/* <li className='mx'><Link to='/user/:' element={<User />}>User</Link></li> */}
            <li className='mx'><Link to='/about-us' element={<Aboutus />}>About Us</Link></li>
        </ul>
    </div>
  )
}

export default NavBar