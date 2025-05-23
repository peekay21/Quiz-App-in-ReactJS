import React, {useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/QuizContext';
function App() {

  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <h1> Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, username, setUsername}}> 
      {gameState==='menu' && <MainMenu/>}
      {gameState==='quiz' && <Quiz/>}
      {gameState==='endscreen' && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
