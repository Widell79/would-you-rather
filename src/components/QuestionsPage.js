import React from "react";

const QuestionsPage = (props) => {
  console.log(props);
  const { id } = props.match.params;
  return (
    <div>
      <h3 className="center">Question Poll</h3>
      <p>{id}</p>
    </div>
  );
};

export default QuestionsPage;

//Todo
// From the home page, when any poll is clicked, we need to redirect the user to the /questions/:question_id route.

// At this route, we can render a component that takes the question_id from the URL and checks if the logged in user has answered that question..
// If the question is answered, it can render the ViewPollResult component.
// Else, if the question is unanswered, it can render the ViewPollQuestion component.
