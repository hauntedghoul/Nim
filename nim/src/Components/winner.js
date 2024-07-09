// src/Components/Winner.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner } = location.state || { winner: 'Unknown' };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Winner.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', 
    padding: '20px', 
    height: '200px',
    width: '400px',
  };

  return (
    <div className="winner">
      <div style={backgroundStyle}>
        <h1 className="Congrats">Congratulations!</h1>
        <h2>{winner} wins the game!</h2>
      </div>
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
};

export default Winner;
