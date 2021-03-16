import React from "react";

import Question from "./Question";

const QuestionsPage = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h3 className="center">Question Poll</h3>
      <p>{id}</p>
    </div>
  );
};

export default QuestionsPage;
