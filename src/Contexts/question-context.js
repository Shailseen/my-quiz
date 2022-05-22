import { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/reducer";
import axios from "axios";

const QuestionContext = createContext(null);

const useQuestion = () => useContext(QuestionContext);

const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { api: "aa" });
  const [questionData, setQuestionData] = useState([{
    question: "",
    answer: "",
    option: [],
    userAnswer: "",
   }]);
  const [questionIndex, setQuestionIndex] = useState(0);


  const getQuestionList = async (api) => {
    try {
      const response = await axios.get(api);
      const questionsList = response.data.results;
      let temp = [];
      questionsList.map((item) => {
        let obj = {
          question: item.question,
          answer: item.correct_answer,
          option: [item.correct_answer],
          userAnswer: "",
        };
        item.incorrect_answers.map((item) => obj.option.push(item));
        obj.option.sort();
        temp.push(obj);
      });
      setQuestionData(temp);
      console.log(temp);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        getQuestionList,
        state,
        dispatch,
        reducer,
        questionIndex,
        setQuestionIndex,
        questionData,
        setQuestionData,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { useQuestion, QuestionProvider };
