import React from "react";
import { useSelector } from "react-redux";

import Question from "./Question";

import { selectQuestions } from "../features/questions/questionsSlice";
import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";

import { answeredQuestions, unansweredQuestions } from "../utils/helpers";

const Home = () => {
  const questions = useSelector(selectQuestions);
  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const unanswered = unansweredQuestions(users, authedUser, questions);
  const answered = answeredQuestions(users, authedUser, questions);

  const unansweredQuestionInfo = unanswered.map((question) => {
    return {
      id: question.id,
      timestamp: question.timestamp,
      author: question.author,
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
    };
  });
  unansweredQuestionInfo.sort((l1, l2) => l2.timestamp - l1.timestamp);

  const answeredQuestionInfo = answered.map((question) => {
    return {
      id: question.id,
      timestamp: question.timestamp,
      author: question.author,
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
    };
  });
  answeredQuestionInfo.sort((l1, l2) => l2.timestamp - l1.timestamp);

  return (
    <div>
      <h3 className="center">Unanswered Questions</h3>
      <ul>
        {unansweredQuestionInfo.map((question) => (
          <li key={question.id}>
            <Question
              author={question.author}
              id={question.id}
              timestamp={question.timestamp}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
            />
          </li>
        ))}
      </ul>
      <h3 className="center">Answered Questions</h3>
      <ul>
        {answeredQuestionInfo.map((question) => (
          <li key={question.id}>
            <Question
              author={question.author}
              id={question.id}
              timestamp={question.timestamp}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
