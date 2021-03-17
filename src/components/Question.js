import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { mapUsersToList } from "../utils/helpers";

import { selectUsers } from "../features/users/usersSlice";
import { formatDate } from "../utils/helpers";

const Question = ({ author, optionOne, optionTwo, id, timestamp }) => {
  //   if (question.id === null) {
  //     return <p>This Question doesn't exist</p>;
  //   }

  const users = useSelector(selectUsers);
  const usersList = mapUsersToList(users);

  const avatar = usersList.usersValue
    .filter((user) => {
      return user.id === author;
    })
    .map((user) => {
      return user.avatarURL;
    });

  const name = usersList.usersValue
    .filter((user) => {
      return user.id === author;
    })
    .map((user) => {
      return user.name;
    });

  return (
    <div className="question">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="info">
        <div>
          <span>{name} asks</span>:
          <ul>
            <li className="question-text">{optionOne}..</li>
          </ul>
          <Link to={`/questions/${id}`}>
            <button>View Poll</button>
          </Link>
          <p>{formatDate(timestamp)}</p>
        </div>
      </div>
    </div>
  );
};

//we're passing an id prop along to the Tweet component
//Because we're doing this, the mapStateToProps function's second argument (ownProps) will be an object that has an id property

export default withRouter(Question);
