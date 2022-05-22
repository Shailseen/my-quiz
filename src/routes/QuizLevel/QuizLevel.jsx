import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuestion } from "../../Contexts/question-context";
import styles from "./QuizLevel.module.css";

export const QuizLevel = () => {
  const { category } = useParams();
  const { dispatch, setQuestionIndex,state,getQuestionList } = useQuestion();
  const navigate = useNavigate();


  useEffect(() => {
    getQuestionList(state.api);
  },[state.api])

  const clickHandler = (level, api) => {
    dispatch({ type: api });
    setQuestionIndex(0);
    setTimeout(() => {
      navigate(`/${category}/level/${level}/rules`);
    //  navigate(`/${category}/level/${level}`);
    }, 0);
  };
  return (
    <div className={styles.quiz_level_container}>
      <div className={styles.header}>Choose your level</div>
      <div
        onClick={() =>
          clickHandler("easy", `${category.toUpperCase()}_EASY_LEVEL_API`)
        }
        className={styles.choice_container}
      >
        Easy
      </div>

      <div
        onClick={() =>
          clickHandler("medium", `${category.toUpperCase()}_MEDIUM_LEVEL_API`)
        }
        className={styles.choice_container}
      >
        Medium
      </div>

      <div
        onClick={() =>
          clickHandler("hard", `${category.toUpperCase()}_HARD_LEVEL_API`)
        }
        className={styles.choice_container}
      >
        Hard
      </div>
    </div>
  );
};
