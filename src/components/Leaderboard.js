import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../features/users/usersSlice";
import { mapUsersToList } from "../utils/helpers";

const Leaderboard = () => {
  const users = useSelector(selectUsers);
  const usersList = mapUsersToList(users);

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

  leader.sort((l1, l2) => l2.total - l1.total);

  return (
    <div>
      <h3 className="center">Leaderboard</h3>
      <div className="center-container">
        <div className="info">
          <ul>
            {leader.map((lead) => (
              <li key={lead.user}>
                <img
                  src={lead.avatar}
                  alt={`Avatar of ${lead.user}`}
                  className="avatar"
                />
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
