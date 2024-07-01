import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/setup">Setup</Link>
            </li>
            <li>
                <Link to="/winner">Winner</Link>
            </li>
            <li>
                <Link to="/easy">Easy</Link>
            </li>
            <li>
                <Link to="/medium">Medium</Link>
            </li>
            <li>
                <Link to="/hard">Hard</Link>
            </li>

        </ul>
    </nav>
  )
}

export default Nav