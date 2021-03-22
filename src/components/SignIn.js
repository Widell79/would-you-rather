import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../images/logo.png";
import { mapUsersToList } from "../utils/helpers";
import { selectUsers } from "../features/users/usersSlice";
import { setAuthedUser } from "../features/users/authedUserSlice";
import CreateUser from "./CreateUser";

const SignIn = () => {
  const [userLogin, setUserLogin] = useState("");

  const handleChange = (e) => {
    setUserLogin(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(userLogin));
  };

  const users = useSelector(selectUsers);
  const usersList = mapUsersToList(users);

  return (
    <div className="container">
      <h3>Welcome to the Would You Rather App!</h3>
      <p>Please sign in or create a new user</p>
      <img src={logo} alt="" />
      <p>Sign In</p>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="users"></label>
        <select name="users" className="form-control">
          <option value="" />
          {usersList.usersValue.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <br />
        <button className="btn" disabled={userLogin === ""}>
          Sign in
        </button>
      </form>
      <CreateUser />
    </div>
  );
};

export default SignIn;
