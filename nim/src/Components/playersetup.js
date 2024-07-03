import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Navbar/Nav'
import './playersetup.css'

const playersetup = () => {
    return (
        <div>
            <h1><img className='setup' src='/images/SetupWrapper.png'/></h1>
                <input className='playerOne' type="text" placeholder="Player 1"></input>
               <input className='playerTwo' type="text" placeholder="Player 2"></input> 
            
            <Nav />

            <Link to="/easy"><img className='setup-image' src='/images/Easy.png' /></Link>
            <Link to="/medium"><img className='setup-image' src='/images/Medium.png' /></Link>
            <Link to="/hard"><img className='setup-image' src='/images/Hard.png' /></Link>
            
        </div>
    )
}

export default playersetup