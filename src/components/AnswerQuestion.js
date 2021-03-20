import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { save_answer, saveAnswer } from "../features/questions/questionsSlice";

const AnswerQuestion = ({ details, avatar, name }) => {
  const [userVote, setUserVote] = useState("");

  const authedUser = useSelector(selectAuthedUser);
  const questionId = details[0].id;

  const handleVote = (e) => {
    setUserVote(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveAnswer({
        authedUser,
        qid: questionId,
        answer: userVote,
      })
    );
  };

  return (
    <div className="question">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="info">
        <div>
          <span>{name} asks:</span>
          <p className="question-text">Would you rather...</p>
          <ul>
            <li className="question-text">
              <input
                onClick={handleVote}
                type="radio"
                id="optionOne"
                name="question"
                value="optionOne"
              ></input>
              {details[0].optionOne.text}?
            </li>

            <li className="question-text">
              <input
                onClick={handleVote}
                type="radio"
                id="optionTwo"
                name="question"
                value="optionTwo"
              ></input>
              {details[0].optionTwo.text}?
            </li>
          </ul>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
