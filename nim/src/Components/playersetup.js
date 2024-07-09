import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Navbar/Nav';
import './playersetup.css';

const PlayerSetup = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');

    return (
        <div>
            <img className='setup' src='/images/SetupWrapper.png' alt='Setup Wrapper' />
            <br />
            <Link to="/"><img className='home-image' src='/images/Home.png' alt='Home' /></Link>
            <br />
            <input 
                className='playerOne' 
                type="text" 
                placeholder="Player 1" 
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}
            />
            <input 
                className='playerTwo' 
                type="text" 
                placeholder="Player 2" 
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}
            />
            <br />
            <Link to={{ pathname: "/easy", state: { playerOne, playerTwo } }}>
                <img className='setup-image' src='/images/Easy.png' alt='Easy' />
            </Link>
            <Link to={{ pathname: "/medium", state: { playerOne, playerTwo } }}>
                <img className='setup-image' src='/images/Medium.png' alt='Medium' />
            </Link>
            <Link to={{ pathname: "/hard", state: { playerOne, playerTwo } }}>
                <img className='setup-image' src='/images/Hard.png' alt='Hard' />
            </Link>
        </div>
    );
}

export default PlayerSetup;
