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
      answers: Object.keys(user.answers).length,
      questions: Object.keys(user.questions).length,
      total:
        Object.keys(user.answers).length + Object.keys(user.questions).length,
    };
  });

  return (
    <div>
      <h3 className="center">Leaderboard</h3>
      <ul>
        {leader.map((lead) => {
          return (
            <li>
              {lead.user}: {lead.total}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
