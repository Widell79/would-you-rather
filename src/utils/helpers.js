export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  //return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
  return d.toLocaleDateString() + " | " + time.substr(0, 5) + time.slice(-2);
}

export function mapUsersToList(users) {
  return {
    usersIds: Object.keys(users),
    usersValue: Object.values(users),
  };
}

export function avatarURL(userList, author) {
  return Object.values(userList)
    .filter((user) => {
      return user.id === author;
    })
    .map((user) => {
      return user.avatarURL;
    });
}

export function usernameToName(userList, author) {
  return Object.values(userList)
    .filter((user) => {
      return user.id === author;
    })
    .map((user) => {
      return user.name;
    });
}

export function mapQuestionsToList(questions) {
  return {
    questionsValue: Object.values(questions),
  };
}

export function unansweredQuestionsInfo(users, authedUser, questions) {
  const answeredQByUserList = Object.keys(users[authedUser].answers);
  return Object.values(questions)
    .filter((question) => !answeredQByUserList.includes(question.id))
    .map((question) => {
      return {
        id: question.id,
        timestamp: question.timestamp,
        author: question.author,
        optionOne: question.optionOne,
        optionTwo: question.optionTwo,
      };
    })
    .sort((l1, l2) => l2.timestamp - l1.timestamp);
}

export function answeredQuestionsInfo(users, authedUser, questions) {
  const answeredQByUserList = Object.keys(users[authedUser].answers);
  return Object.values(questions)
    .filter((question) => answeredQByUserList.includes(question.id))
    .map((question) => {
      return {
        id: question.id,
        timestamp: question.timestamp,
        author: question.author,
        optionOne: question.optionOne,
        optionTwo: question.optionTwo,
        hasVoted1: question.optionOne.votes.includes(authedUser),
        hasVoted2: question.optionTwo.votes.includes(authedUser),
      };
    })
    .sort((l1, l2) => l2.timestamp - l1.timestamp);
}
