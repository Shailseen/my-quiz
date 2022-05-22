import { QuestionCard } from "../../Components/QuestionCard/QuestionCard";
import { useQuestion } from "../../Contexts/question-context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./QuestionList.module.css";
import { Link, useNavigate } from "react-router-dom";
import { QuestionTracker } from "../../Components/QuestionTracker/QuestionTracker";
import { useState } from "react";
import { useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import classNames from "classnames";
export const QuestionList = () => {
  const { questionIndex, setQuestionIndex, questionData } = useQuestion();
  const navigate = useNavigate();
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (second === 0) {
        setSecond((prev) => 59);
        setMinute((prev) => prev - 1);
      } else {
        setSecond((prev) => prev - 1);
      }
    }, 1000);
    if (second === 0 && minute === 0) {
      clearInterval(interval);
      setTimeout(() => {
        navigate("/answer");
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [second]);
  return (
    <>
      <div className={styles.timer}>
        <div>
          <TimerIcon sx={{ fontSize: "2rem" }} />
        </div>{" "}
        <div>
          {" "}
          0{minute} : {second < 10 && 0}
          {second}
        </div>
      </div>
      <div
        className={classNames(
          minute === 0 && second === 0
            ? styles.times_up_container
            : styles.display_none
        )}
      >
        Time's Up
      </div>
      <div
        className={classNames(
          styles.question_wrapper,
          second === 0 && minute === 0 && styles.display_none
        )}
      >
        <div className={styles.flex}>
          <div>
            Q. {questionIndex + 1}/{questionData && questionData.length}
          </div>
        </div>
        {questionData !== undefined && (
          <QuestionCard questionIndex={questionIndex} />
        )}
        <div className={styles.flex}>
          {questionIndex !== 0 && (
            <ArrowBackIosNewIcon
              className={styles.backward}
              onClick={() => setQuestionIndex((prev) => prev - 1)}
            />
          )}
          <div
            onClick={() => setQuestionIndex((prev) => prev + 1)}
            className={styles.forward}
          >
            {questionData && questionIndex !== questionData.length - 1 && (
              <ArrowForwardIosIcon />
            )}
          </div>
          {questionData && questionIndex === questionData.length - 1 && (
            <Link to="/answer">
              <button className="button-style-none outline-button">
                Submit
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        className={classNames(
          second === 0 && minute === 0 && styles.display_none
        )}
      >
        <QuestionTracker />
      </div>
    </>
  );
};
