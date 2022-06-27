import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/professors">Professors</Link></li>
            <li><Link to="/courses">Courses</Link></li>
        </ul>
    </div>
  )
}

export default Navbar