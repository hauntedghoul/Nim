import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './playersetup.css';

const PlayerSetup = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [namesConfirmed, setNamesConfirmed] = useState(false);

    const handleConfirmNames = () => {
        if (playerOne && playerTwo) {
            setNamesConfirmed(true);
        } else {
            alert('Please enter both player names.');
        }
    };

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
            <img className='setup' src='/images/SetupWrapper.png' alt='Setup Wrapper' />
            <br />
            <Link to="/"><img className='home-image' src='/images/Home.png' alt='Home' /></Link>
            <br />
            <div className="playerSetup">
                <div style={knifeStyle}>
                    <input 
                        className='playerOne' 
                        type="text" 
                        placeholder="Player 1" 
                        value={playerOne}
                        onChange={(e) => setPlayerOne(e.target.value)}
                    />
                </div>
                <div style={knifeStyle}>
                    <input 
                        className='playerTwo' 
                        type="text" 
                        placeholder="Player 2" 
                        value={playerTwo}
                        onChange={(e) => setPlayerTwo(e.target.value)}
                    />
                </div>
            </div>
            <br />
            {!namesConfirmed ? (
                <button className='confirm' onClick={handleConfirmNames}>
            <img className='home-image' src='/images/Confirm.png' alt='Setup Wrapper' />
                    
                </button>
            ) : (
                <div>
                    <Link to="/easy" state={{ playerOne, playerTwo }}>
                        <img className='setup-image' src='/images/Easy.png' alt='Easy' />
                    </Link>
                    <Link to="/medium" state={{ playerOne, playerTwo }}>
                        <img className='setup-image' src='/images/Medium.png' alt='Medium' />
                    </Link>
                    <Link to="/hard" state={{ playerOne, playerTwo }}>
                        <img className='setup-image' src='/images/Hard.png' alt='Hard' />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PlayerSetup;
