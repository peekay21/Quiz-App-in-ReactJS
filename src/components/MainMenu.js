import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/QuizContext';

function MainMenu() {
  const {setGameState, username, setUsername} = useContext(QuizContext);
  return (
    <div className='Menu'>
      <label>Enter your name: </label>
      <input 
      type="text"
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      
       />

      <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu