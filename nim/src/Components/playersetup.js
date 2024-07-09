import React from 'react'
import { Link } from 'react-router-dom'
import './playersetup.css'

const playersetup = () => {

    const knifeStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Knife.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '20px', 
        height: '300px',
        width: '500px',
      };

    return (
        <div>
            <img className='setup' src='/images/SetupWrapper.png' />
            <br/>
            <Link to="/"><img className='home-image' src='/images/Home.png' /></Link>
            <br/>
            <div className="playerSetup">
                <div style={knifeStyle}>
                    <input className='playerOne' type="text" placeholder="Player 1"></input>
                </div>
                <div style={knifeStyle}>
                    <input className='playerTwo' type="text" placeholder="Player 2"></input>
                </div>
            </div>
            <br/>
            <Link to="/easy"><img className='setup-image' src='/images/Easy.png' /></Link>
            <Link to="/medium"><img className='setup-image' src='/images/Medium.png' /></Link>
            <Link to="/hard"><img className='setup-image' src='/images/Hard.png' /></Link>

        </div>
    )
}

export default playersetup