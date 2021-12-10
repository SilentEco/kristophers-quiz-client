import { quizQuestions } from "../shared/data/quizQuestions";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import InputName from "../components/addName";
import axios from "axios";
import { UserContext } from "../shared/provider/UserProvider";

export const QuizAPI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState();
  const [score, setScore] = useState(0);
  const [gameActive, setgameActive] = useState(true);
  const [user] = useContext(UserContext);

  const checkAnwser = (anwser) => {
    const isCorrect = anwser === quizQuestions[currentQuestion].correctAnwser;
    setHasAnswered(true);
    setUserAnswer(anwser);
    isCorrect && setScore(score + 1);
  };

  const nextQuestion = () => {
    const isOutOfBoundry = currentQuestion === quizQuestions.length - 1;
    const next = currentQuestion + 1;
    setCurrentQuestion(isOutOfBoundry ? 0 : next);
    setHasAnswered(false);
    isOutOfBoundry && setgameActive(false);
  };
  console.log(user);
  const displayButton = () => {
    return (
      hasAnswered && (
        <NextQuestionButton
          onClick={() => {
            nextQuestion();
          }}
        >
          Nästa fråga
        </NextQuestionButton>
      )
    );
  };

  const resetQuiz = () => {
    setScore(0);
    setHasAnswered(false);
    setgameActive(true);
  };

  const displayQuiz = () => {
    return (
      <>
        <h3>Poäng: {score} </h3>
        <h2>
          Fråga {currentQuestion + 1} av {quizQuestions.length}
        </h2>
        <h1>{quizQuestions[currentQuestion].question}</h1>
        <br />
        {quizQuestions[currentQuestion].questionAlternatives.map(
          (anwser, index) => (
            <AnswerOptionsWrapper>
              <AnswerOptions
                userAnswer={userAnswer}
                hasAnswered={hasAnswered}
                buttonValue={
                  quizQuestions[currentQuestion].questionAlternatives[index]
                }
                correctAnwser={quizQuestions[currentQuestion].correctAnwser}
                isCorrect={
                  anwser === quizQuestions[currentQuestion].correctAnwser
                }
                onClick={() => !hasAnswered && checkAnwser(anwser)}
              >
                {anwser}
              </AnswerOptions>
            </AnswerOptionsWrapper>
          )
        )}
        {displayButton()}
      </>
    );
  };

  const sendScoreWhenQuizEnd = async () => {
    try {
      await axios.put(
        `https://kristophers-quiz-server.herokuapp.com/scores/${user}`,
        {
          points: score,
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    sendScoreWhenQuizEnd();
    console.log("Useffect triggred");
  }, [score]);

  const quizEnd = () => {
    return (
      <>
        <h1>
          Bra jobbat {user}! Din poäng blev: {score}
        </h1>
        <h5>Du kan nu stänga ner webbsidan säkert</h5>
        <h5>Din poäng har sparats</h5>
        {/* <button onClick={() => resetQuiz()}>Restart</button> */}
      </>
    );
  };

  return <QuizWrapper>{gameActive ? displayQuiz() : quizEnd()}</QuizWrapper>;
};

/* styled */

const h3 = styled.p`
  /* grid-column: 1/1;
  grid-row: 1/1;
  justify-self: center;
  align-self: center; */
`;

const h2 = styled.p`
  /* grid-column: 11/11;
  grid-row: 1/1;
  justify-self: center;
  align-self: center; */
`;

const h1 = styled.p`
  /* grid-column: 1/11;
  grid-row: 1/1;
  justify-self: center;
  align-self: center; */
`;

const QuizWrapper = styled.div`
  /* margin: 0 auto;
  border: black 1px solid;
  border-radius: 30px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr); */
`;

const NextQuestionButton = styled.button`
  width: 150px;
  height: 75px;
`;

const AnswerOptions = styled.h1`
  background-color: ${(props) =>
    props.isCorrect && props.hasAnswered ? "green;" : "yellow;"};
  background-color: ${(props) =>
    props.hasAnswered &&
    props.userAnswer === props.buttonValue &&
    props.userAnswer !== props.correctAnwser &&
    "red !important;"};
`;

const AnswerOptionsWrapper = styled.div`
  /* display: flex;
  width: 100%;
  justify-content: center;
  align-self: center;
  flex-direction: column; */
`;
