import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const home = () => {
  return (
    <div>
      <div className='title'>
        <h1>NIM</h1>
      <h2>(Killer Roomba + Professor Style)</h2>
      </div>
        <Link to="/setup"><img className='setup-image' src='/images/Setup.png' />
        </Link>
    </div>
  )
}

export default home