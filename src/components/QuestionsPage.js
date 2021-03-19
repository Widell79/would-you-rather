import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { avatarURL, usernameToName } from "../utils/helpers";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";
import { selectQuestions } from "../features/questions/questionsSlice";

const QuestionsPage = (props) => {
  const { id } = props.match.params;

  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);
  const questions = useSelector(selectQuestions);

  const avatar = avatarURL(users, authedUser);
  const name = usernameToName(users, authedUser);

  const answeredQByUser = Object.keys(users[authedUser].answers).includes(id);

  function QuestionInfo(questions, id) {
    return Object.values(questions)
      .filter((question) => question.id === id)
      .map((question) => {
        const optionOneTotalVotes = question.optionOne.votes.length;
        const optionTwototalVotes = question.optionTwo.votes.length;
        const totalVotes = optionOneTotalVotes + optionTwototalVotes;
        return {
          id: question.id,
          timestamp: question.timestamp,
          author: question.author,
          optionOne: question.optionOne,
          optionOneVotes: optionOneTotalVotes,
          optionTwo: question.optionTwo,
          optionTwoVotes: optionTwototalVotes,
          hasVotedOne: question.optionOne.votes.includes(authedUser),
          hasVotedTwo: question.optionTwo.votes.includes(authedUser),
          total: totalVotes,
          percentVotesOne: ((optionOneTotalVotes / totalVotes) * 100).toFixed(
            0
          ),
          percentVotesTwo: ((optionTwototalVotes / totalVotes) * 100).toFixed(
            0
          ),
        };
      });
  }

  const details = QuestionInfo(questions, id);
  console.log(details);

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <div className="question">
      {answeredQByUser ? (
        <>
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
        </>
      ) : (
        <p>Question not Answered</p>
      )}
    </div>
  );
};

export default QuestionsPage;

//Todo:
// If the question is answered, it can render the ViewPollResult component.
// Else, if the question is unanswered, it can render the ViewPollQuestion component.
