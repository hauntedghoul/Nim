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
          <div className="button">Play Again</div>
        </Link>
        <Link to="/">
          <div className="button">Exit</div>
        </Link>
      </div>
    </div>
  );
};

export default Winner;
