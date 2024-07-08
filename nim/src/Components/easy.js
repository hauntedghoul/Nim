// src/Components/easy.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './easy.css';
import { Link } from 'react-router-dom'

const Easy = ({ onExit }) => {
  const [heaps, setHeaps] = useState([1, 2, 3]); // initial heap sizes
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  const navigate = useNavigate();

  const nextPlayer = () => {
    setIsFirstPlayer(!isFirstPlayer);
    setCurrentPlayer(isFirstPlayer ? 'Player 2' : 'Player 1');
  };

  const checkWinner = (newHeaps) => {
    if (newHeaps.every(heap => heap === 0)) {
      navigate('/winner', { state: { winner: isFirstPlayer ? 'Player 2' : 'Player 1' } });
    }
  };

  const removeObjects = (heapIndex, count) => {
    const newHeaps = [...heaps];
    newHeaps[heapIndex] -= count;
    setHeaps(newHeaps);
    checkWinner(newHeaps);
    nextPlayer();
  };

  const renderHeap = (heap, index) => (
    <div className="heap" key={index}>
      {/* <h2>Heap {index + 1}: {heap}</h2> */}
      {Array.from({ length: heap }, (_, i) => (
        <img key={i} className='roomba' src="/images/Roomba.png" alt="roomba"/>
      ))}
      <div>
        {Array.from({ length: heap }, (_, i) => (
          <button key={i} onClick={() => removeObjects(index, i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Link to="/"><img className='home-image-gamemode' src='/images/Home.png' /></Link>
      <div className="easy">
        <h1>Easy Level</h1>
        <div className="game-board">
          {heaps.map((heap, index) => renderHeap(heap, index))}
        </div>
        <h1>Current Player: {currentPlayer}</h1>
        <button className="exit-button" onClick={onExit}>Exit</button>
      </div>
    </div>
  );
};

export default Easy;
