import React from 'react'
import './Winner.css'

const Winner = () => {
  const handlePlayAgain = () => {
    console.log('Play again clicked.');
  };

  const handleExit = () => {
    console.log('exit clicked.');
  };

  return (
    <div className='winner-container'>
      <div className='winner-banner'>
        <p>Player 1 Won</p>
      </div>
      <div className='button-container'>
        <div className='button' onClick={handlePlayAgain}>
          Play Again
        </div>
        <div className='button' onClick={handleExit}>
          Exit
        </div>
      </div>
    </div>
  )
}

export default Winner