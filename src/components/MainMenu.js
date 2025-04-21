import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/QuizContext';

function MainMenu() {
  const {setGameState} = useContext(QuizContext);
  return (
    <div className='Menu'>MainMenu

      <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu