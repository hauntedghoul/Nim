import React from 'react'
import { useState } from 'react';

import Nav from './Navbar/Nav'

const easy = () => {

    const [isFirstPlayer, setIsFirstPlayer] = useState(true);

    const nextPlayer = () => {
        setIsFirstPlayer(!isFirstPlayer);
    };

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <h1>Current Player: {isFirstPlayer ? 'Player 1' : 'Player 2'}</h1>
                <button onClick={nextPlayer}>Next Player</button>

            </div>

        </div>
    );
}

export default easy