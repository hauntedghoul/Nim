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
      <div style={backgroundStyle} className="winnerbg">
        <h1 className="Congrats">Congratulations!</h1>
        <h2>{winner} wins the game!</h2>
      </div>
      <br></br>
      <div className="professors">
        <div className="kohler"></div>
        <button className='confirm' onClick={() => navigate('/')}><img className='setup' src='/images/PlayAgain.png' alt='Setup Wrapper' /></button>
        <div className="sarah"></div>
      </div>
    </div>
  );
};

export default Winner;
