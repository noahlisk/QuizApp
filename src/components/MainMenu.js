import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';
import '../App.css';

export const MainMenu = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className='Menu'>
            <button onClick={() => {
                setGameState("quiz");
            }}
            >
                Start Quiz</button>
        </div>
    )
}

export default MainMenu;