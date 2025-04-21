import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/QuizContext';
import { Questions } from '../Helpers/Questions';
function EndScreen() {  
  const { setGameState, score, setScore, username} = useContext(QuizContext);
  return (
    <div className='EndScreen'>
      <h1>{username}, your Score is </h1>
      <h2>{score} / {Questions.length}</h2>
      <button onClick={()=>{setGameState('menu'); setScore(0);}}>Restart Quiz</button>
    </div>

  )
}

export default EndScreen