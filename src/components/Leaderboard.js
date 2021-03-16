import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../features/users/usersSlice";

const Leaderboard = (props) => {
  const users = useSelector(selectUsers);

  function mapStateToList(users) {
    return {
      usersIds: Object.keys(users),
      usersValue: Object.values(users),
    };
  }

  const usersList = mapStateToList(users);

  const leader = usersList.usersValue.map((user) => {
    return {
      user: user.name,
      avatar: user.avatarURL,
      answers: Object.keys(user.answers).length,
      questions: Object.keys(user.questions).length,
      total:
        Object.keys(user.answers).length + Object.keys(user.questions).length,
    };
  });

  return (
    <div>
      <h3 className="center">Leaderboard</h3>
      <div className="question">
        <div className="info">
          <ul>
            {leader.map((lead) => (
              <li key={lead.user}>
                <img src={lead.avatar} alt={`Avatar of`} className="avatar" />
                <span>{lead.user}</span>
                <p>Answered Questions: {lead.answers}</p>
                <p>Created Questions: {lead.questions}</p>
                <p>Score: {lead.total}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
