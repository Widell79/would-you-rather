import React from "react";

const QuestionResult = ({ details, avatar, name }) => {
  return (
    <div className="question">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="info">
        <div>
          <span>Asked by {name}</span>
          <ul>
            <li
              className="question-text"
              style={
                details[0].hasVotedOne
                  ? { color: "#75cfb8" }
                  : { color: "black" }
              }
            >
              - {details[0].optionOne.text}
            </li>
            <p className="votes">
              Number of votes: {details[0].optionOneVotes}
            </p>
            <p className="votes">
              Percentage of votes: {details[0].percentVotesOne}%
            </p>
            <li
              className="question-text"
              style={
                details[0].hasVotedTwo
                  ? { color: "#75cfb8" }
                  : { color: "black" }
              }
            >
              - {details[0].optionTwo.text}
            </li>
            <p className="votes">
              Number of votes: {details[0].optionTwoVotes}
            </p>
            <p className="votes">
              Percentage of votes: {details[0].percentVotesTwo}%
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;
