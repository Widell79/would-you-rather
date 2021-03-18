export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  //return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
  return d.toLocaleDateString() + " | " + time.substr(0, 5) + time.slice(-2);
}

export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  const optionOneTotalVotes = question.optionOne.votes.length;
  const optionTwototalVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneTotalVotes + optionTwototalVotes;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    hasVoted1: optionOne.votes.includes(authedUser),
    hasVoted2: optionTwo.votes.includes(authedUser),
    avatar: avatarURL,
    percentVotes1: ((optionOneTotalVotes / totalVotes) * 100).toFixed(0),
    percentVotes2: ((optionTwototalVotes / totalVotes) * 100).toFixed(0),
  };
}

export function mapUsersToList(users) {
  return {
    usersIds: Object.keys(users),
    usersValue: Object.values(users),
  };
}

export function mapQuestionsToList(questions) {
  return {
    questionsValue: Object.values(questions),
  };
}

export function answeredQuestions(users, authedUser, questions) {
  const answeredQByUserList = Object.keys(users[authedUser].answers);
  return Object.values(questions).filter((question) =>
    answeredQByUserList.includes(question.id)
  );
}

export function unansweredQuestions(users, authedUser, questions) {
  const answeredQByUserList = Object.keys(users[authedUser].answers);
  return Object.values(questions).filter(
    (question) => !answeredQByUserList.includes(question.id)
  );
}
