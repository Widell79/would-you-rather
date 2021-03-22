import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { avatarURL, usernameToName } from "../utils/helpers";

import { selectUsers } from "../features/users/usersSlice";
import { formatDate } from "../utils/helpers";

const Question = ({ author, optionOne, optionTwo, id, timestamp }) => {
  const users = useSelector(selectUsers);

  const avatar = avatarURL(users, author);
  const name = usernameToName(users, author);

  return (
    <div className="center-container">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="info">
        <div>
          <span>{name} asks</span>:
          <ul>
            <li className="question-text">{optionOne}..</li>
          </ul>
          <Link to={`/questions/${id}`}>
            <button className="btn">View Poll</button>
          </Link>
          <p>{formatDate(timestamp)}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Question);
