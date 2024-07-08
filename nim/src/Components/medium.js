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
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container2'>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container3'>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='grid-container4'>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
                <div className='grid-item'><img src="/images/Roomba.png" class="Roomba" alt="Roomba" /></div>
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