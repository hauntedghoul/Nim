import React from 'react';
import { Link } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  return (
    <div className="winner-container">
      <div className="winner-banner">
        <p>Player 1 Won</p>
      </div>
      <div className="button-container">
        <Link to="/setup">
          <img className='play-again' src='/images/PlayAgain.png' alt='Play Again' />
        </Link>
      </div>
    </div>
  );
};

export default Winner;
