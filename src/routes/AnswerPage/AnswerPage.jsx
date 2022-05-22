import { AnswerCard } from "../../Components/AnswerCard/AnswerCard";
import { ScoreCard } from "../../Components/ScoreCard/ScoreCard";
import { useQuestion } from "../../Contexts/question-context";
import Confetti from "react-confetti";
import { useState } from "react";
import { useEffect } from "react";

export const AnswerPage = () => {
  const { questionData } = useQuestion();
  const [isConfetii,setIsConfetti] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setIsConfetti(0)
    },10000)
  },[])
  return (
    <div>
      <Confetti opacity={isConfetii} width={window.innerWidth}/>
      <ScoreCard />
      {questionData &&
        questionData.map((obj, index) => {
          return (
            <>
              <AnswerCard key={index} dataList={obj} />
            </>
          );
        })}
    </div>
  );
};
