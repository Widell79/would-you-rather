import React from "react";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import { selectUsers } from "../features/users/usersSlice";

const SignIn = () => {
  const users = useSelector(selectUsers);

  function mapStateToList(users) {
    return {
      usersIds: Object.keys(users),
      usersValue: Object.values(users),
    };
  }

  const usersList = mapStateToList(users);

  return (
    <div className="container">
      <h3>Welcome to the Would You Rather App!</h3>
      <p>Please sign in!</p>
      <img src={logo} alt="" />
      <h3>Sign In</h3>

      <div>
        <label htmlFor="users"></label>
        <select name="users" id="123" className="form-control">
          <option value="" />
          {usersList.usersValue.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SignIn;
