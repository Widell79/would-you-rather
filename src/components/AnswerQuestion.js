import React from "react";

const AnswerQuestion = ({ details, avatar, name }) => {
  return (
    <div className="question">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="info">
        <div>
          <span>Asked by {name}</span>
          <ul>
            <li className="question-text">- {details[0].optionOne.text}</li>

            <li className="question-text">- {details[0].optionTwo.text}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
