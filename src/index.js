import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { QuizLevel } from "./routes/QuizLevel/QuizLevel";
import { QuestionList } from "./routes/QuestionList/QuestionList";
import { QuestionProvider } from "./Contexts/question-context.js";
import { AnswerPage } from "./routes/AnswerPage/AnswerPage";
import { GamesRulePage } from "./routes/GamesRulePage/GamesRulePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:category/level" element={<QuizLevel />} />
            <Route path="/:category/level/:level/rules" element={<GamesRulePage/>}/>
            <Route path="/:category/level/:level" element={<QuestionList />} />
            <Route
              path="/answer"
              element={<AnswerPage />}
            />
          </Route>
        </Routes>
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
