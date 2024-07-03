import React from 'react'
import Nav from './Navbar/Nav'
import { useState } from 'react';
import './medium.css'

const Medium = () => {

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
                <div className='grid-container'>
                 <div className='grid-item'>1</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container2'>
                 <div className='grid-item'>2</div>
                 <div className='grid-item'>3</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container3'>
                 <div className='grid-item'>4</div>
                 <div className='grid-item'>5</div>
                 <div className='grid-item'>6</div>
                 <div className='grid-item'>7</div>
                 <div className='grid-item'>8</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container4'>
                 <div className='grid-item'>9</div>
                 <div className='grid-item'>10</div>
                 <div className='grid-item'>11</div>
                 <div className='grid-item'>12</div>
                 <div className='grid-item'>13</div>
                 <div className='grid-item'>14</div>
                 <div className='grid-item'>15</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Current Player: {isFirstPlayer ? 'Player 1' : 'Player 2'}</h1>
                <button onClick={nextPlayer}>Next Player</button>

            </div>
        </div>
        
        
    )
}

export default Medium