import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { avatarURL, usernameToName } from "../utils/helpers";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";

const QuestionsPage = (props) => {
  const { id } = props.match.params;

  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const avatar = avatarURL(users, authedUser);
  const name = usernameToName(users, authedUser);

  const answeredQByUserList = Object.keys(users[authedUser].answers).includes(
    id
  );

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <div className="question">
      {answeredQByUserList ? (
        <>
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="info">
            <div>
              <span>{name} asks</span>:
              <ul>
                <li className="question-text">..</li>
              </ul>
              <button>View Poll</button>
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
