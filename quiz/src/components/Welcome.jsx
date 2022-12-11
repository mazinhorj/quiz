import { useContext } from 'react';
import { QuizContext } from '../context/quiz'; 
import Quiz from '../img/quiz.svg';
import Button from './Button';
import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="welcome">
      <h2>Seja bem-vind@ ao melhor quiz para devs!</h2>
      <p>Clique no botão abaixo para começar.</p>
      <Button
        text={"Iniciar"}
        action={(e) => dispatch({type: "CHANGE_STATE"})}
      />
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome