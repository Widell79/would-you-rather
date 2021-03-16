import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { selectUsers } from "../features/users/usersSlice";

const Question = ({ question }) => {
  //   if (question.id === null) {
  //     return <p>This Question doesn't exist</p>;
  //   }

  const users = useSelector(selectUsers);

  function mapStateToList(users) {
    return {
      usersIds: Object.keys(users),
      usersValue: Object.values(users),
    };
  }

  const usersList = mapStateToList(users);
  const avatar = usersList.usersValue
    .filter((user) => {
      return user.id === question.author;
    })
    .map((user) => {
      return user.avatarURL;
    });

  const name = usersList.usersValue
    .filter((user) => {
      return user.id === question.author;
    })
    .map((user) => {
      return user.name;
    });

  return (
    <div className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name} asks:</span>
          <ul>
            <li>{question.optionOne.text}..</li>
          </ul>
          <Link to={`/questions/${question.id}`}>
            <button>View Poll</button>
          </Link>
          {/* <div>{formatDate(timestamp)}</div> */}
        </div>
      </div>
    </div>
  );
};

//we're passing an id prop along to the Tweet component
//Because we're doing this, the mapStateToProps function's second argument (ownProps) will be an object that has an id property

export default withRouter(Question);
