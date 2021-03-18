import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { avatarURL, usernameToName } from "../utils/helpers";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";
import { selectQuestions } from "../features/questions/questionsSlice";

const QuestionsPage = (props) => {
  const { id } = props.match.params;

  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);
  const questions = useSelector(selectQuestions);

  const avatar = avatarURL(users, authedUser);
  const name = usernameToName(users, authedUser);

  const answeredQByUser = Object.keys(users[authedUser].answers).includes(id);

  function QuestionInfo(questions, id) {
    return Object.values(questions)
      .filter((question) => question.id === id)
      .map((question) => {
        return {
          id: question.id,
          timestamp: question.timestamp,
          author: question.author,
          optionOne: question.optionOne,
          optionTwo: question.optionTwo,
          hasVoted1: question.optionOne.votes.includes(authedUser),
          hasVoted2: question.optionTwo.votes.includes(authedUser),
        };
      });
  }

  const details = QuestionInfo(questions, id);

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <div className="question">
      {answeredQByUser ? (
        <>
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="info">
            <div>
              <span>{name} asks</span>:
              <ul>
                <li
                  className="question-text"
                  style={
                    details[0].hasVoted1
                      ? { color: "#75cfb8" }
                      : { color: "black" }
                  }
                >
                  1: {details[0].optionOne.text}
                </li>
                <li
                  className="question-text"
                  style={
                    details[0].hasVoted2
                      ? { color: "#75cfb8" }
                      : { color: "black" }
                  }
                >
                  2: {details[0].optionTwo.text}
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Question not Answered</p>
      )}
    </div>
  );
};

export default QuestionsPage;

//Todo:
// If the question is answered, it can render the ViewPollResult component.
// Else, if the question is unanswered, it can render the ViewPollQuestion component.
