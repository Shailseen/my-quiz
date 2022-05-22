import classNames from "classnames";
import React from "react";
import { useQuestion } from "../../Contexts/question-context";
import styles from "./ScoreCard.module.css";
export const ScoreCard = () => {
  const { questionData } = useQuestion();
  const score =
    questionData &&
    questionData.reduce(
      (acc, curr) =>
        curr.userAnswer !== ""
          ? curr.userAnswer === curr.answer
            ? acc + 4
            : acc - 1
          : acc,
      0
    );
  return (
    <div className={styles.score_card_container}>
      <div className={styles.heading}>Your Score</div>
      <iframe
        src="https://giphy.com/embed/tEuZQV7AGrrv035n3c"
        frameBorder="0"
        class="giphy-embed"
      ></iframe>
      <div className={classNames(score === 0 ? styles.score : score > 0 ? styles.green : styles.red )}>{score}</div>
    </div>
  );
};
