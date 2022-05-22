import classNames from "classnames";
import styles from "./AnswerCard.module.css";
export const AnswerCard = ({ dataList }) => {
  const { question, option, userAnswer, answer } = dataList;
  return (
    <>
      <div className={styles.card_container}>
        <p>{question}</p>
        {option &&
          option.map((item, index) => {
            return (
              <div
                className={classNames(
                  styles.option_container,
                  userAnswer === ""
                    ? styles.no_change
                    : answer === userAnswer && item === userAnswer
                    ? styles.selected
                    : item !== answer && userAnswer === item
                    ? styles.non_selected
                    : styles.no_change
                )}
              >
                {index + 1}. {item}
              </div>
            );
          })}
        {userAnswer !== answer && <p className={styles.answer}>Correct answer: {answer}</p>}
      </div>
    </>
  );
};
