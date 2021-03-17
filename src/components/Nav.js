import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthedUser } from "../features/users/authedUserSlice";
import { setAuthedUser } from "../features/users/authedUserSlice";

import { mapUsersToList } from "../utils/helpers";
import { selectUsers } from "../features/users/usersSlice";

export default function Nav() {
  const authedUser = useSelector(selectAuthedUser);

  const users = useSelector(selectUsers);
  const usersList = mapUsersToList(users);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(null));
  };

  const name = usersList.usersValue
    .filter((user) => {
      return user.id === authedUser;
    })
    .map((user) => {
      return user.name;
    });

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        {authedUser === null ? (
          <li></li>
        ) : (
          <>
            <li className="user">Hello, {name}!</li>{" "}
            <li className="logout" onClick={handleSubmit}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
