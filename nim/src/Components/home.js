import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      <li>
        <Link to="/setup">Setup</Link>
      </li>
      <h1>NIM</h1>
      <h2>(Killer Roomba + Professor Style)</h2>
    </div>
  )
}

export default home