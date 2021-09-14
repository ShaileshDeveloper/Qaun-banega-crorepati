import { Quiz } from "./quiz";
import { questionsData } from "../data.js";
import { useState } from "react";
export function Questions({ questionNumber, setQuestionNumber }) {
  const [timeout, setTimeOut] = useState(false);

  return (
    <>
      <div className="main_container">
        <div className="bottom">
          <Quiz
            data={questionsData}
            setTimeOut={setTimeOut}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
          />
        </div>
      </div>
    </>
  );
}
