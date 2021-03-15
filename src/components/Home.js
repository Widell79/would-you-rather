import React from "react";
import { useSelector } from "react-redux";

import { selectQuestions } from "../features/questions/questionsSlice";

export function Home() {
  const questions = useSelector(selectQuestions);

  function mapStateToList(questions) {
    return {
      questionsIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      ),
      questionsValue: Object.values(questions),
    };
  }

  const questionList = mapStateToList(questions);

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
