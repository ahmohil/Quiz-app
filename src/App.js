import logo from './logo.svg';
import './App.css';
import questions from './questions';
import {useState} from 'react';
function App() {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore, setshowScore] = useState(false);

  function handleClick(isCorrect){
    if(isCorrect === true)
    {
      const newScore = score+10;
      setScore(newScore);
    }

    const nextQuestion = questionNumber+1;
  
    if(nextQuestion < questions.length)
    {
      setQuestionNumber(nextQuestion);
    }
    else{
      setshowScore(true);
    }
    
  }

    const handleRetake = ()=> {
      setScore(0);
      setQuestionNumber(0);
      setshowScore(false);
    }

  return (
    <div className="App">
      <header className="App-header">
        <div class = "question-box">
        {showScore ? 
        <div className= "result">
          <p>Your score is {score}</p>
          <button className = "btn" onClick = {handleRetake}>
            Retake Quiz
          </button>
        </div>
        :
        <>
          <div className = 'question-section'>
            <h4>Q# {`${questionNumber+1}/${questions.length}`}</h4>
            <p>{questions[questionNumber].Question}</p>
          </div>
          <div className = 'answer-section'>
            {
            questions[questionNumber].Answers.map((ans)=>{
            return(
              <button className = "btn" onClick={() => handleClick(ans.isCorrect)} >{ans.value}</button>
            )
            })}
          </div>
        </>
        }
        </div>
      </header>
    </div>
  );
}

export default App;
