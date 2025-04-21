import React,{useState,useContext} from 'react'
import { Questions } from '../Helpers/Questions';
import { QuizContext } from '../Helpers/QuizContext';



function Quiz() {

  const { setGameState, score, setScore} = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [chosenOption, setChosenOption] = useState("");
  const endquiz = () =>{
    if (chosenOption === Questions[currQuestion].answer) {
        setScore(score +1);
        }
         setGameState('endscreen');
  }
  
  const nextQuestion = () => {
    if (chosenOption === Questions[currQuestion].answer) {
        setScore(score +1);
    }
    setCurrQuestion(currQuestion+1);

  }
 

  return (
    <div className='Quiz'> <h1>Question {currQuestion +1 }</h1>
    <h2>{Questions[currQuestion].prompt }</h2>
    <button className="option" onClick={()=>{setChosenOption('A');}} >{Questions[currQuestion].optionA }</button>
    <button className="option" onClick={()=>{setChosenOption('B');}} >{Questions[currQuestion].optionB }</button>
    <button className="option" onClick={()=>{setChosenOption('C');}} >{Questions[currQuestion].optionC }</button>
    <button className="option" onClick={()=>{setChosenOption('D');}} >{Questions[currQuestion].optionD }</button>
    { currQuestion === Questions.length-1 ? (
       <button className="next" onClick={endquiz}>Finish Quiz</button>
    ) : (<button className="next" onClick={nextQuestion}>Next Question</button>)}
  
    
    </div>
    
  )
}

export default Quiz