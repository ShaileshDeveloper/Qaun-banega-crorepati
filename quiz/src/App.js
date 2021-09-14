import "./App.css";
import { Money } from "./components/money.js";
import { Questions } from "./components/questions.js";
import { useState } from "react";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="App">
      <Questions
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
      <Money questionNumber={questionNumber} />
    </div>
  );
}

export default App;
