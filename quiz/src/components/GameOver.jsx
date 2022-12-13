import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';
import WellDone from '../img/welldone.svg';
import Button from './Button';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim do Quiz!</h2>
      <p>Acertou: {((quizState.score / quizState.questions.length)*100).toFixed(1)}%</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={WellDone} alt="Fim do jogo" />
      <Button
        text={"Jogar de novo"}
        action={(e) => dispatch({type: "NEW_GAME"})}
      />
    </div>
  )
}

export default GameOver