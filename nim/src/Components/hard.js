import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './hard.css';
import { Link } from 'react-router-dom';

const Hard = ({ onExit }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { playerOne, playerTwo } = location.state || { playerOne: 'Player 1', playerTwo: 'Player 2' }; // Default values if state is undefined
    const [heaps, setHeaps] = useState([1, 3, 5, 7, 9]); // initial heap sizes
    const [isFirstPlayer, setIsFirstPlayer] = useState(true);
    const [currentPlayer, setCurrentPlayer] = useState(playerOne);

    const knifeStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Knife.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: '300px',
        width: '500px',
    };

    useEffect(() => {
        setCurrentPlayer(isFirstPlayer ? playerOne : playerTwo);
    }, [isFirstPlayer, playerOne, playerTwo]);

    const nextPlayer = () => {
        setIsFirstPlayer(!isFirstPlayer);
    };

    const checkWinner = (newHeaps) => {
        if (newHeaps.every(heap => heap === 0)) {
            navigate('/winner', { state: { winner: isFirstPlayer ? playerTwo : playerOne } });
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
            {Array.from({ length: heap }, (_, i) => (
                <img key={i} className='roomba' src="/images/Roomba.png" alt="roomba" />
            ))}
            <div>
                {Array.from({ length: heap }, (_, i) => (
                    <button key={i} className={`button-${i + 1}`} onClick={() => removeObjects(index, i + 1)}>{i + 1}</button>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <div className="Hard">
                <h2>Hard Level</h2>
                <div className="game-board">
                    {heaps.map((heap, index) => renderHeap(heap, index))}
                </div>
                <div className='info'>
                    The buttons on the bottom determines how many roomba's you take from each row.
                    For example if you press the button with the number 3 you will end up taking 3 Roomba's
                </div>
                <div style={knifeStyle} className="knife">
                    <h1 className="CurrentPlayer">Current Player: {currentPlayer}</h1>
                </div>
                <Link to="/"><img className='home-image-gamemode' src='/images/Home.png' alt='Home' /></Link>
            </div>
        </div>
    );
}

export default Hard;
