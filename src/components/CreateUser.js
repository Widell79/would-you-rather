import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const userNameHandler = (e) => {
    const userNameText = e.target.value;
    setUserName(userNameText);
  };

  const nameHandler = (e) => {
    const nameText = e.target.value;
    setName(nameText);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        userName,
        name,
      })
    );
  };

  return (
    <div>
      <p>Create User</p>
      <div>
        <div className="info">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={userNameHandler}
            />
            <span> </span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameHandler}
            />
            <br />
            <button
              className="btn"
              type="submit"
              disabled={userName === "" || name === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
