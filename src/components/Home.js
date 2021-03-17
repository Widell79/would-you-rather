import React from "react";
import { useSelector } from "react-redux";

import Question from "./Question";
import { mapQuestionsToList, mapUsersToList } from "../utils/helpers";

import { selectQuestions } from "../features/questions/questionsSlice";
import { selectAuthedUser } from "../features/users/authedUserSlice";
import { selectUsers } from "../features/users/usersSlice";

export function Home() {
  const questions = useSelector(selectQuestions);
  const authedUser = useSelector(selectAuthedUser);
  const users = useSelector(selectUsers);

  const questionList = mapQuestionsToList(questions);
  const usersList = mapUsersToList(users);

  const questionInfo = questionList.questionsValue.map((question) => {
    return {
      id: question.id,
      timestamp: question.timestamp,
      author: question.author,
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
    };
  });
  questionInfo.sort((l1, l2) => l2.timestamp - l1.timestamp);

  const authedUserAnswers = usersList.usersValue
    .filter((user) => {
      return user.name === authedUser;
    })
    .map((u) => {
      return {
        id: Object.keys(u.answers),
      };
    });

  const userQuestionsId = authedUserAnswers.map((id) => {
    return id.id;
  });
  console.log(userQuestionsId);

  const questionsId = questionInfo.map((id) => {
    return id.id;
  });

  return (
    <div>
      <h3 className="center">Unanswered Questions</h3>
      <ul>
        {questionInfo.map((question) => (
          <li key={question.id}>
            <Question
              author={question.author}
              id={question.id}
              timestamp={question.timestamp}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
            />
          </li>
        ))}
      </ul>
      <h3 className="center">Answered Questions</h3>
      <ul></ul>
    </div>
  );
}

export default Home;
