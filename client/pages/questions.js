import React, { useState, useEffect } from "react";
import { Data } from "../components/data/survey";

const Questions = ({ onQuestionResponse, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const timer = setTimeout(function () {
      const maxQuestion = 4;
      const isDone = currentQuestion === maxQuestion;
      if (isDone) {
        onComplete();
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  });
  const onAnswer = onQuestionResponse;
  const onRadioClick = (event) =>
    onAnswer(Data[currentQuestion].name, event.target.value);
  return (
    <div>
      {/* <button onClick={() => setCurrentQuestion(currentQuestion + 1)} className="text-white">NEXT</button> */}
      <div id="question-1" className="mx-20">
        <h3 className="text-white">Question {Data[currentQuestion].id}</h3>
        <div className="py-16 grid grid-cols-2 gap-1 text-left">
          <div className="w-fit">
            <img
              src={Data[currentQuestion].Subject1}
              width={""}
              height={""}
              className="w-[450px] h-[500px]"
            />
          </div>
          <div className="w-fit">
            <img
              src={Data[currentQuestion].Subject2}
              width={""}
              height={""}
              className="w-[450px] h-[500px]"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto w-fit text-2xl text-yellow-400">
            <p>Are these two people same?</p>
            <button>
            <input
              type="radio"
              value="yes"
              name={Data[currentQuestion].type}
              onClick={onRadioClick}
            />
            </button>
            
            <label className="mx-3">Yes</label>
            <button>
            <input
              type="radio"
              value="no"
              name={Data[currentQuestion].type}
              onClick={onRadioClick}
            />
            </button>
            
            <label className="mx-3">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
