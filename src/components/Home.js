import React from "react";
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
  const questions = useSelector(selectQuestions);
  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const unanswered = unansweredQuestionsInfo(users, authedUser, questions);
  const answered = answeredQuestionsInfo(users, authedUser, questions);

  return (
    <div>
      <h3 className="center">Unanswered Questions</h3>
      <ul>
        {unanswered.map((question) => (
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
      <h3 className="center">Answered Questions</h3>
      <ul>
        {answered.map((question) => (
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
