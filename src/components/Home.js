import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectQuestions } from "../features/questions/questionsSlice";

export function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="center">Questions</h3>

      <ul className="dashboard-list"></ul>
    </div>
  );
}

export default Home;
