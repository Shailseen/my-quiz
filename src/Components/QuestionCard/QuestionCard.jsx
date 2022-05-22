import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { useQuestion } from "../../Contexts/question-context";
import styles from "./QuestionCard.module.css";
export const QuestionCard = ({ questionIndex }) => {
  const { setQuestionData, questionData } = useQuestion();

  const { userAnswer, question, option } = questionData[questionIndex];
  const [tempUserAnswer, setTempUserAnswer] = useState("");

  useEffect(() => {
    setTempUserAnswer("");
  }, [questionIndex]);

  const clickHandler = (userSelectedAnswer) => {
    let temp = questionData;

    temp[questionIndex] = {
      ...temp[questionIndex],
      userAnswer: userSelectedAnswer,
    };

    setTempUserAnswer(userSelectedAnswer);
    setQuestionData(() => temp);
  };

  return (
    <>
      <div className={styles.card_container}>
        <p>{question}</p>
        {option &&
          option.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => clickHandler(item)}
                className={classNames(
                  styles.option_container,
                  tempUserAnswer === item ||
                    (tempUserAnswer === "" && userAnswer === item)
                    ? styles.selected
                    : styles.non_selected
                )}
              >
                {index + 1}. {item}
              </div>
            );
          })}
      </div>
    </>
  );
};
