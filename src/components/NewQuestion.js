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
    <div className="question">
      <h2>Create New Question</h2>
      <div className="info">
        <div>
          <p>Would you rather..</p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="First Question"
              value={questionOne}
              onChange={questionOneHandler}
            />
            <p>Or</p>
            <input
              type="text"
              placeholder="Second Question"
              value={questionTwo}
              onChange={questionTwoHandler}
            />
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
