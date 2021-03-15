import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthedUser } from "../features/users/authedUserSlice";

export default function Nav() {
  const authedUser = useSelector(selectAuthedUser);

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
            <li>Hello, {authedUser}</li>{" "}
            <li>
              <NavLink to="/logout" activeClassName="active">
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
