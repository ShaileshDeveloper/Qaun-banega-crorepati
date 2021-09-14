import {useState,useEffect} from 'react'

export function Quiz({data , setTimeOut,questionNumber,setQuestionNumber}) {

    const [question , setQuestion] = useState(null);
    const [selectedAnswer , setSelectedAnswer] = useState(null);
    const [className , setClassName] = useState("answer");
    console.log(data[0])


    useEffect(() => {
          setQuestion(data[questionNumber-1])
    },[data,questionNumber])

const handleClick =(answer) => {
   setSelectedAnswer(answer)
   setClassName('answer active')
   
   setTimeout(() =>{
       setClassName(answer.correct ? "answer correct" : "answer wrong")
   },2000)
   

   
   setTimeout(() =>{
       if(answer.correct){
           setQuestionNumber(prev => prev+1)
       }else{
           setQuestionNumber(1)
       }
   },4000)

}
  return (
    <>
      <div className="quiz">
        <div className="question">
            {question?.question}
        </div>
        <div className="answers">
          


         {question?.answer.map((a) => (
            <div className={selectedAnswer=== a ? className : "answer" } onClick={() =>handleClick(a)}>{a.text}</div>
         ))}
          
        </div>
      </div>
    </>
  );
}
