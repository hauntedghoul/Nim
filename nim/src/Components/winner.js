// src/Components/Winner.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner } = location.state || { winner: 'Unknown' };

  return (
    <div className="winner">
      <h1>Congratulations!</h1>
      <h2>{winner} wins the game!</h2>
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
};

export default Winner;
