import { Link } from 'react-router-dom'
import React from 'react'

function NavBar() {
  return (
    <nav>
        <h1>AgroScan Database</h1>
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search Products</Link>
        </div>
    </nav>
  )
}

export default NavBar