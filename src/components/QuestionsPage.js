import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";

const QuestionsPage = (props) => {
  const { id } = props.match.params;

  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const answeredQByUserList = Object.keys(users[authedUser].answers).includes(
    id
  );

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <div className="question">
      {answeredQByUserList ? (
        <p>Question Answered</p>
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
