import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuestions } from "../features/questions/questionsSlice";

export function Home() {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hi</h2>
    </div>
  );
}

export default Home;
