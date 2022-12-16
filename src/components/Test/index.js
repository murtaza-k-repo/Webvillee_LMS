import "./index.css";

import React, { useState } from "react";

import Navbar from "../Utility/Navbar";
import Questions from "./Questions";
import Quiz from "../Quiz/index";
import Results from "../Results/Result";
import quizData from "./QuizData.json";

const Test = ({ userInfo }) => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  };
  return (
    <>
      <div className="app">
        {step === 1 && <Quiz onQuizStart={quizStartHandler} />}
        {step === 2 && (
          <Questions
            data={quizData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            noOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        )}
        {step === 3 && (
          <Results
            userInfo={userInfo}
            results={answers}
            data={quizData.data}
            onAnswersCheck={() => {}}
          />
        )}
      </div>
    </>
  );
};

export default Test;
