import React, { useState, useEffect, useMemo } from "react";
import { SurveyQuestions } from "../components/data/survey";

const createQuestions = (questions, onQuestionResponse) => {
  return questions.map((question) => (
    <Question
      key={question.id}
      question={question}
      onRadioClick={onQuestionResponse}
    />
  ));
};

const Questions = ({ onQuestionResponse, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    const timer = setTimeout(function () {
      const isDone = currentQuestion === SurveyQuestions.length;
      if (isDone) {
        onComplete();
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  });

  const questions = useMemo(() => createQuestions(SurveyQuestions, onQuestionResponse), [SurveyQuestions, onQuestionResponse]);

  return <div>{questions[currentQuestion - 1]}</div>;
};

const Question = ({ question, onRadioClick }) => (
  <div id="question-1" className="mx-20">
    <h3 className="text-white">Question {question.id}</h3>
    <div className="py-16 grid grid-cols-2 gap-1 text-left">
      <div className="w-fit">
        <img src={question.subject1} className="w-[450px] h-[500px]" />
      </div>
      <div className="w-fit">
        <img src={question.subject2} className="w-[450px] h-[500px]" />
      </div>
    </div>
    <div>
      <div id={question.id} className="mx-auto w-fit text-2xl text-yellow-400">
        <p>Are these two people same?</p>
        <input
          id={question.id}
          type="radio"
          value="yes"
          name={question.name}
          onClick={(event) => onRadioClick(question.name, event.target.value)}
        />
        <label className="mx-3">Yes</label>
        <input
          id={question.id}
          type="radio"
          value="no"
          name={question.name}
          onClick={(event) => onRadioClick(question.name, event.target.value)}
        />
        <label className="mx-3">No</label>
      </div>
    </div>
  </div>
);

export default Questions;