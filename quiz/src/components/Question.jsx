import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Button from './Button';
import Option from './Option';
import './Question.css';


const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  // console.log(quizState);
  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    });
    console.log(option);
    console.log(quizState);
  };
  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}.</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options_container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip &&
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          }
          <Button
            text={"Excluir uma opção"}
            action={() => dispatch({type: "REMOVE_OPTION"})}
          />
        </>
      )}
      {!quizState.answerSelected && quizState.help === 'tip' &&
        <p>{currentQuestion.tip}</p>
      }
      {quizState.answerSelected && (
        <Button
          text={"Continuar"}
          id={"continue"}
          action={(e) => dispatch({ type: "CHANGE_QUESTION" })}
        />
      )}
    </div>
  )
}

export default Question