import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner } = location.state || { winner: 'Unknown' };

  return (
    <div className="winner">
      <div className="winner-banner">
        <img src='/images/Winner.png' className='banner'/>
        <p>{winner} wins the game!</p>
      </div>
      <div className="button-container">
        <img
          className="play-again"
          src="/images/PlayAgain.png"
          alt="Play Again"
          onClick={() => navigate('/setup')}
        />
      </div>
    </div>
  );
};

export default Winner;
