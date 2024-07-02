import React from 'react'

import Nav from './Navbar/Nav'

const playersetup = () => {
    return (
        <div>
            <Nav />
            <h1>Set up the Game</h1>
            <input type="text" placeholder="Player 1"></input>
            <input type="text" placeholder="Player 2"></input>

            <button src="/easy">Easy</button>
            <button src="/medium">Medium</button>
            <button src="/hard">Hard</button>
        </div>
    )
}

export default playersetup