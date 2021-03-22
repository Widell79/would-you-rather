import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { addQuestion } from "../features/questions/questionsSlice";

const NewQuestion = () => {
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");

  const authedUser = useSelector(selectAuthedUser);

  const questionOneHandler = (e) => {
    const questionText = e.target.value;
    setQuestionOne(questionText);
  };

  const questionTwoHandler = (e) => {
    const questionText = e.target.value;
    setQuestionTwo(questionText);
  };

  let history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addQuestion({
        author: authedUser,
        optionOneText: questionOne,
        optionTwoText: questionTwo,
      })
    );
    history.push("/");
  };

  return (
    <div>
      <h3 className="center">Create New Question</h3>
      <div className="center-container">
        <div className="info">
          <p>Would you rather..</p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Option One"
              value={questionOne}
              onChange={questionOneHandler}
            />
            <p>Or</p>
            <input
              type="text"
              placeholder="Option Two"
              value={questionTwo}
              onChange={questionTwoHandler}
            />
            <br />
            <button
              className="btn"
              type="submit"
              disabled={questionOne === "" || questionTwo === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
