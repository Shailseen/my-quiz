import classNames from "classnames";
import React from "react";
import { useQuestion } from "../../Contexts/question-context";
import styles from "./QuestionTracker.module.css";

export const QuestionTracker = () => {
  const { setQuestionIndex, questionData } = useQuestion();

  const questionIndexHandler = (userSelectedIndex) => {
    setQuestionIndex(() => userSelectedIndex);
  };

  return (
    <div className={styles.container}>
      {questionData !== undefined &&
        questionData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => questionIndexHandler(index)}
              className={styles.tracker_container}
            >
              <div className={classNames(styles.question_no_wrapper)}>
                {index + 1}
              </div>
              <div
                className={classNames(
                  item.userAnswer === ""
                    ? styles.non_attempted
                    : styles.attempted
                )}
              ></div>
            </div>
          );
        })}
    </div>
  );
};
