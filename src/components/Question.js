import React from "react";

import { Link, withRouter } from "react-router-dom";

const Question = ({ question }) => {
  //   if (question.id === null) {
  //     return <p>This Question doesn't exist</p>;
  //   }

  return (
    <div className="tweet">
      {/* <img src="" alt={`Avatar of `} className="avatar" /> */}
      <div className="tweet-info">
        <div>
          <span>{question.author}</span>
          <Link to={`/questions/${question.id}`}>
            <button>View Poll</button>
          </Link>
          {/* <div>{formatDate(timestamp)}</div> */}

          {/* <p>{optionOne.text}</p> */}
        </div>
      </div>
    </div>
  );
};

//we're passing an id prop along to the Tweet component
//Because we're doing this, the mapStateToProps function's second argument (ownProps) will be an object that has an id property

export default withRouter(Question);
