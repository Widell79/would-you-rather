import React from "react";
import { useSelector } from "react-redux";

import ErrorPage from "./ErrorPage";
import QuestionResult from "./QuestionResult";
import AnswerQuestion from "./AnswerQuestion";
import { avatarURL, usernameToName } from "../utils/helpers";

import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";
import { selectQuestions } from "../features/questions/questionsSlice";
import { useParams } from "react-router";

const QuestionsPage = () => {
  const { id } = useParams();

  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);
  const questions = useSelector(selectQuestions);

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
  const name = usernameToName(users, details[0].author);
  const avatar = avatarURL(users, details[0].author);

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <div>
      {answeredQByUser ? (
        <QuestionResult details={details} avatar={avatar} name={name} />
      ) : (
        <AnswerQuestion details={details} avatar={avatar} name={name} />
      )}
    </div>
  );
};

export default QuestionsPage;
