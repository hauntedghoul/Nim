import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Navbar/Nav'

const playersetup = () => {
    return (
        <div>
            <Nav />
            <h1>Set up the Game</h1>
            <input type="text" placeholder="Player 1"></input>
            <input type="text" placeholder="Player 2"></input>

            <Link to="/easy"><button src="/easy">Easy</button></Link>
            <Link to="/medium"><button src="/medium">Medium</button></Link>
                <Link to="/hard"><button src="/hard">Hard</button></Link>
            
        </div>
    )
}

export default playersetup