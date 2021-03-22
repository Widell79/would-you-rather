import React, { useState } from "react";
import { useSelector } from "react-redux";

import Question from "./Question";

import { selectQuestions } from "../features/questions/questionsSlice";
import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";

import {
  unansweredQuestionsInfo,
  answeredQuestionsInfo,
} from "../utils/helpers";

const Home = () => {
  const [questionList, setQuestionList] = useState("unanswered");

  const questionListHandler = (e) => {
    const list = e.target.value;
    setQuestionList(list);
  };

  const questions = useSelector(selectQuestions);
  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const unanswered = unansweredQuestionsInfo(users, authedUser, questions);
  const answered = answeredQuestionsInfo(users, authedUser, questions);

  return (
    <div className="center">
      <div>
        <button
          className="home-btn"
          type="submit"
          value="unanswered"
          onClick={questionListHandler}
          disabled={questionList === "unanswered"}
        >
          Unanswered Questions
        </button>
        <button
          className="home-btn"
          type="submit"
          value="answered"
          onClick={questionListHandler}
          disabled={questionList === "answered"}
        >
          Answered Questions
        </button>
      </div>

      <ul>
        {questionList === "unanswered"
          ? unanswered.map((question) => (
              <li key={question.id}>
                <Question
                  author={question.author}
                  id={question.id}
                  timestamp={question.timestamp}
                  optionOne={question.optionOne.text}
                  optionTwo={question.optionTwo.text}
                />
              </li>
            ))
          : answered.map((question) => (
              <li key={question.id}>
                <Question
                  author={question.author}
                  id={question.id}
                  timestamp={question.timestamp}
                  optionOne={question.optionOne.text}
                  optionTwo={question.optionTwo.text}
                />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Home;
