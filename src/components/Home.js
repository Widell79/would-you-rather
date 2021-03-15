import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectQuestions } from "../features/questions/questionsSlice";

export function Home() {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);

  function mapStateToList(questions) {
    return {
      questionsIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      ),
    };
  }

  const questionList = mapStateToList(questions);
  console.log(questionList);

  return (
    <div>
      <h3 className="center">Questions</h3>
      <ul className="dashboard-list">
        {questionList.questionsIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
