import React from "react";
import { useSelector } from "react-redux";

import Question from "./Question";

import { selectQuestions } from "../features/questions/questionsSlice";

export function Home() {
  const questions = useSelector(selectQuestions);

  function mapStateToList(questions) {
    return {
      questionsValue: Object.values(questions),
    };
  }

  const questionList = mapStateToList(questions);

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
